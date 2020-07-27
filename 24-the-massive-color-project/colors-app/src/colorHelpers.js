

import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    /**
     * This will build us a new colors object that contains 
     * 50 set to an empty array
     * 100 set to an empty array
     * and so on...
     */
    for (let level of levels) {
        newPalette.colors[level] = [];
    }

    for (let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb","rgba").replace(")", ",1.0)")
            });
        }
    }
    return newPalette;
}



/**
 * This is just generating an array with three color values
 * we go from 1.4 darkened version, to the regular color, to white.
 * For example: ['#someHexColor], ['#someHexColor], ['white']
 */
function getRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ]
}

/**
 * This will return Chroma dot scale of our range that
 * goes from white to the middle color to a darker version
 * of that color, then we are going to spit out 10 colors and return
 */
function getScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };