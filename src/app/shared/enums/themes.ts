export class Themes {
    static get lightTheme() {
        return `
        --ion-color-primary: #3880ff;
        --ion-color-primary-rgb: 56, 128, 255;
        --ion-color-primary-contrast: #ffffff;
        --ion-color-primary-contrast-rgb: 255, 255, 255;
        --ion-color-primary-shade: #3171e0;
        --ion-color-primary-tint: #4c8dff;
        /** secondary **/
        --ion-color-secondary: #3dc2ff;
        --ion-color-secondary-rgb: 61, 194, 255;
        --ion-color-secondary-contrast: #ffffff;
        --ion-color-secondary-contrast-rgb: 255, 255, 255;
        --ion-color-secondary-shade: #36abe0;
        --ion-color-secondary-tint: #50c8ff;
        /** tertiary **/
        --ion-color-tertiary: #5260ff;
        --ion-color-tertiary-rgb: 82, 96, 255;
        --ion-color-tertiary-contrast: #ffffff;
        --ion-color-tertiary-contrast-rgb: 255, 255, 255;
        --ion-color-tertiary-shade: #4854e0;
        --ion-color-tertiary-tint: #6370ff;
        /** success **/
        --ion-color-success: #2dd36f;
        --ion-color-success-rgb: 45, 211, 111;
        --ion-color-success-contrast: #ffffff;
        --ion-color-success-contrast-rgb: 255, 255, 255;
        --ion-color-success-shade: #28ba62;
        --ion-color-success-tint: #42d77d;
        /** warning **/
        --ion-color-warning: #ffc409;
        --ion-color-warning-rgb: 255, 196, 9;
        --ion-color-warning-contrast: #000000;
        --ion-color-warning-contrast-rgb: 0, 0, 0;
        --ion-color-warning-shade: #e0ac08;
        --ion-color-warning-tint: #ffca22;
        /** danger **/
        --ion-color-danger: #eb445a;
        --ion-color-danger-rgb: 235, 68, 90;
        --ion-color-danger-contrast: #ffffff;
        --ion-color-danger-contrast-rgb: 255, 255, 255;
        --ion-color-danger-shade: #cf3c4f;
        --ion-color-danger-tint: #ed576b;
        /** dark **/
        --ion-color-dark: #222428;
        --ion-color-dark-rgb: 34, 36, 40;
        --ion-color-dark-contrast: #ffffff;
        --ion-color-dark-contrast-rgb: 255, 255, 255;
        --ion-color-dark-shade: #1e2023;
        --ion-color-dark-tint: #383a3e;
        /** medium **/
        --ion-color-medium: #92949c;
        --ion-color-medium-rgb: 146, 148, 156;
        --ion-color-medium-contrast: #ffffff;
        --ion-color-medium-contrast-rgb: 255, 255, 255;
        --ion-color-medium-shade: #808289;
        --ion-color-medium-tint: #9d9fa6;
        /** light **/
        --ion-color-light: #f4f5f8;
        --ion-color-light-rgb: 244, 245, 248;
        --ion-color-light-contrast: #000000;
        --ion-color-light-contrast-rgb: 0, 0, 0;
        --ion-color-light-shade: #d7d8da;
        --ion-color-light-tint: #f5f6f9;
        `;
    }

    static get darkTheme() {
        return `
        --ion-color-primary: #428cff;
        --ion-color-primary-rgb: 66, 140, 255;
        --ion-color-primary-contrast: #ffffff;
        --ion-color-primary-contrast-rgb: 255, 255, 255;
        --ion-color-primary-shade: #3a7be0;
        --ion-color-primary-tint: #5598ff;

        --ion-color-secondary: #50c8ff;
        --ion-color-secondary-rgb: 80, 200, 255;
        --ion-color-secondary-contrast: #ffffff;
        --ion-color-secondary-contrast-rgb: 255, 255, 255;
        --ion-color-secondary-shade: #46b0e0;
        --ion-color-secondary-tint: #62ceff;

        --ion-color-tertiary: #6a64ff;
        --ion-color-tertiary-rgb: 106, 100, 255;
        --ion-color-tertiary-contrast: #ffffff;
        --ion-color-tertiary-contrast-rgb: 255, 255, 255;
        --ion-color-tertiary-shade: #5d58e0;
        --ion-color-tertiary-tint: #7974ff;

        --ion-color-success: #2fdf75;
        --ion-color-success-rgb: 47, 223, 117;
        --ion-color-success-contrast: #000000;
        --ion-color-success-contrast-rgb: 0, 0, 0;
        --ion-color-success-shade: #29c467;
        --ion-color-success-tint: #44e283;

        --ion-color-warning: #ffd534;
        --ion-color-warning-rgb: 255, 213, 52;
        --ion-color-warning-contrast: #000000;
        --ion-color-warning-contrast-rgb: 0, 0, 0;
        --ion-color-warning-shade: #e0bb2e;
        --ion-color-warning-tint: #ffd948;

        --ion-color-danger: #ff4961;
        --ion-color-danger-rgb: 255, 73, 97;
        --ion-color-danger-contrast: #ffffff;
        --ion-color-danger-contrast-rgb: 255, 255, 255;
        --ion-color-danger-shade: #e04055;
        --ion-color-danger-tint: #ff5b71;

        --ion-color-dark: #f4f5f8;
        --ion-color-dark-rgb: 244, 245, 248;
        --ion-color-dark-contrast: #000000;
        --ion-color-dark-contrast-rgb: 0, 0, 0;
        --ion-color-dark-shade: #d7d8da;
        --ion-color-dark-tint: #f5f6f9;

        --ion-color-medium: #989aa2;
        --ion-color-medium-rgb: 152, 154, 162;
        --ion-color-medium-contrast: #000000;
        --ion-color-medium-contrast-rgb: 0, 0, 0;
        --ion-color-medium-shade: #86888f;
        --ion-color-medium-tint: #a2a4ab;

        --ion-color-light: #222428;
        --ion-color-light-rgb: 34, 36, 40;
        --ion-color-light-contrast: #ffffff;
        --ion-color-light-contrast-rgb: 255, 255, 255;
        --ion-color-light-shade: #1e2023;
        --ion-color-light-tint: #383a3e;

        --ion-background-color: #121212;
        --ion-background-color-rgb: 18, 18, 18;

        --ion-text-color: #ffffff;
        --ion-text-color-rgb: 255, 255, 255;

        --ion-border-color: #222222;

        --ion-color-step-50: #1e1e1e;
        --ion-color-step-100: #2a2a2a;
        --ion-color-step-150: #363636;
        --ion-color-step-200: #414141;
        --ion-color-step-250: #4d4d4d;
        --ion-color-step-300: #595959;
        --ion-color-step-350: #656565;
        --ion-color-step-400: #717171;
        --ion-color-step-450: #7d7d7d;
        --ion-color-step-500: #898989;
        --ion-color-step-550: #949494;
        --ion-color-step-600: #a0a0a0;
        --ion-color-step-650: #acacac;
        --ion-color-step-700: #b8b8b8;
        --ion-color-step-750: #c4c4c4;
        --ion-color-step-800: #d0d0d0;
        --ion-color-step-850: #dbdbdb;
        --ion-color-step-900: #e7e7e7;
        --ion-color-step-950: #f3f3f3;

        --ion-item-background: #1a1b1e;
        `;
    }
}
