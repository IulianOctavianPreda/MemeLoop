import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import * as Color from "color";

import { ThemeVariables } from "../enums/theme-variables";
import { Themes } from "../enums/themes";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    constructor(@Inject(DOCUMENT) private document: Document, private storage: Storage) {
        // this.setStoredTheme();
    }

    public setStoredTheme() {
        this.storedTheme.then((theme) => {
            this.setGlobalCSS(theme);
        });
    }

    public setTheme(themeName: string) {
        if (themeName === "light") {
            this.setLightTheme();
            // } else if (themeName === "dark") {
            //     this.setDarkTheme();
        } else if (!!ThemeVariables[themeName]) {
            this.setCustomTheme(ThemeVariables[themeName]);
        }
    }

    public setLightTheme() {
        this.setGlobalCSS(Themes.lightTheme);
        this.storage.set("theme", Themes.lightTheme);
    }

    public setDarkTheme() {
        this.setGlobalCSS(Themes.darkTheme);
        this.storage.set("theme", Themes.darkTheme);
    }

    public setCustomTheme(theme) {
        const cssText = this.CSSTextGenerator(theme);
        this.setGlobalCSS(cssText);
        this.storage.set("theme", cssText);
    }

    // // Define a single CSS variable
    // setVariable(name, value) {
    //     this.document.documentElement.style.setProperty(name, value);
    // }

    private setGlobalCSS(css: string) {
        this.document.documentElement.style.cssText = css;
    }

    get storedTheme() {
        return this.storage.get("theme");
    }

    CSSTextGenerator(colors) {
        colors = { ...ThemeVariables.light, ...colors };

        const {
            primary,
            secondary,
            tertiary,
            success,
            warning,
            danger,
            dark,
            medium,
            light
        } = colors;

        const shadeRatio = 0.1;
        const tintRatio = 0.1;

        return `
  --ion-color-base: ${light};
  --ion-color-contrast: ${dark};
  --ion-background-color: ${light};
  --ion-text-color: ${dark};
  --ion-toolbar-background-color: ${this.contrast(light, 0.1)};
  --ion-toolbar-text-color: ${this.contrast(dark)};
  --ion-item-background-color: ${this.contrast(light, 0.3)};
  --ion-item-text-color: ${this.contrast(dark)};
  --ion-color-primary: ${primary};
  --ion-color-primary-rgb: 56,128,255;
  --ion-color-primary-contrast: ${this.contrast(primary)};
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade:  ${Color(primary).darken(shadeRatio)};
  --ion-color-primary-tint:  ${Color(primary).lighten(tintRatio)};
  --ion-color-secondary: ${secondary};
  --ion-color-secondary-rgb: 12,209,232;
  --ion-color-secondary-contrast: ${this.contrast(secondary)};
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade:  ${Color(secondary).darken(shadeRatio)};
  --ion-color-secondary-tint: ${Color(secondary).lighten(tintRatio)};
  --ion-color-tertiary:  ${tertiary};
  --ion-color-tertiary-rgb: 112,68,255;
  --ion-color-tertiary-contrast: ${this.contrast(tertiary)};
  --ion-color-tertiary-contrast-rgb: 255,255,255;
  --ion-color-tertiary-shade: ${Color(tertiary).darken(shadeRatio)};
  --ion-color-tertiary-tint:  ${Color(tertiary).lighten(tintRatio)};
  --ion-color-success: ${success};
  --ion-color-success-rgb: 16,220,96;
  --ion-color-success-contrast: ${this.contrast(success)};
  --ion-color-success-contrast-rgb: 255,255,255;
  --ion-color-success-shade: ${Color(success).darken(shadeRatio)};
  --ion-color-success-tint: ${Color(success).lighten(tintRatio)};
  --ion-color-warning: ${warning};
  --ion-color-warning-rgb: 255,206,0;
  --ion-color-warning-contrast: ${this.contrast(warning)};
  --ion-color-warning-contrast-rgb: 255,255,255;
  --ion-color-warning-shade: ${Color(warning).darken(shadeRatio)};
  --ion-color-warning-tint: ${Color(warning).lighten(tintRatio)};
  --ion-color-danger: ${danger};
  --ion-color-danger-rgb: 245,61,61;
  --ion-color-danger-contrast: ${this.contrast(danger)};
  --ion-color-danger-contrast-rgb: 255,255,255;
  --ion-color-danger-shade: ${Color(danger).darken(shadeRatio)};
  --ion-color-danger-tint: ${Color(danger).lighten(tintRatio)};
  --ion-color-dark: ${dark};
  --ion-color-dark-rgb: 34,34,34;
  --ion-color-dark-contrast: ${this.contrast(dark)};
  --ion-color-dark-contrast-rgb: 255,255,255;
  --ion-color-dark-shade: ${Color(dark).darken(shadeRatio)};
  --ion-color-dark-tint: ${Color(dark).lighten(tintRatio)};
  --ion-color-medium: ${medium};
  --ion-color-medium-rgb: 152,154,162;
  --ion-color-medium-contrast: ${this.contrast(medium)};
  --ion-color-medium-contrast-rgb: 255,255,255;
  --ion-color-medium-shade: ${Color(medium).darken(shadeRatio)};
  --ion-color-medium-tint: ${Color(medium).lighten(tintRatio)};
  --ion-color-light: ${light};
  --ion-color-light-rgb: 244,244,244;
  --ion-color-light-contrast: ${this.contrast(light)};
  --ion-color-light-contrast-rgb: 0,0,0;
  --ion-color-light-shade: ${Color(light).darken(shadeRatio)};
  --ion-color-light-tint: ${Color(light).lighten(tintRatio)};`;
    }

    contrast(color, ratio = 0.8) {
        color = Color(color);
        return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
    }
}
