export default class DexModes {
    static DEX = "dex";
    static SHINY = "shiny";
    static LUCKY = "lucky";
    static UNOWN = "unown";
    static SHADOW = "shadow";

    static getPageTitle(mode) {
        switch (mode) {
            case DexModes.DEX:
                return "Dex";
            case DexModes.SHINY:
                return "ShinyDex";
            case DexModes.LUCKY:
                return "LuckyDex";
            case DexModes.UNOWN:
                return "UnownDex";
            case DexModes.SHADOW:
                return "ShadowDex";
            default:
                throw new Error("Unknown page mode");
        }
    }
}