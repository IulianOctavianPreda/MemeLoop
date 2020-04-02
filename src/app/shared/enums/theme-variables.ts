export enum ThemeNames {
    Light = "light",
    Dark = "dark",
    Autumn = "autumn",
    Night = "night",
    Neon = "neon"
}

export class ThemeVariables {
    static get light() {
        return {
            primary: "#3880ff",
            secondary: "#3dc2ff",
            tertiary: "#5260ff",
            success: "#2dd36f",
            warning: "#ffc409",
            danger: "#eb445a",
            dark: "#222428",
            medium: "#92949c",
            light: "#f4f5f8"
        };
    }

    static get dark() {
        return {
            primary: "#428cff",
            secondary: "#50c8ff",
            tertiary: "#6a64ff",
            success: "#2fdf75",
            warning: "#ffd534",
            danger: "#ff4961",
            dark: "#f4f5f8",
            medium: "#989aa2",
            light: "#222428"
        };
    }

    static get autumn() {
        return {
            primary: "#F78154",
            secondary: "#4D9078",
            tertiary: "#B4436C",
            light: "#FDE8DF",
            medium: "#FCD0A2",
            dark: "#B89876"
        };
    }

    static get night() {
        return {
            primary: "#8CBA80",
            secondary: "#FCFF6C",
            tertiary: "#FE5F55",
            medium: "#BCC2C7",
            dark: "#F7F7FF",
            light: "#495867"
        };
    }

    static get neon() {
        return {
            primary: "#39BFBD",
            secondary: "#4CE0B3",
            tertiary: "#FF5E79",
            light: "#F4EDF2",
            medium: "#B682A5",
            dark: "#34162A"
        };
    }
}
