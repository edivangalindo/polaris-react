// implements: https://www.w3.org/WAI/ER/WD-AERT/#color-contrast
export function isLight({ red, green, blue }) {
    const contrast = (red * 299 + green * 587 + blue * 114) / 1000;
    return contrast > 125;
}
export function isDark(color) {
    return !isLight(color);
}