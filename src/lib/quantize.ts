function buildRgb(imageData: Uint8ClampedArray) {
    const rgbValues = [];
    for (let i = 0; i < imageData.length; i += 4) {
        const rgb = {
            r: imageData[i],
            g: imageData[i + 1],
            b: imageData[i + 2],
        };
        rgbValues.push(rgb);

    }
    return rgbValues;
};

const findBiggestColorRange = (rgbValues: any[]) => {
    let rMin = Number.MAX_VALUE;
    let gMin = Number.MAX_VALUE;
    let bMin = Number.MAX_VALUE;

    let rMax = Number.MIN_VALUE;
    let gMax = Number.MIN_VALUE;
    let bMax = Number.MIN_VALUE;

    rgbValues.forEach((pixel) => {
        rMin = Math.min(rMin, pixel.r);
        gMin = Math.min(gMin, pixel.g);
        bMin = Math.min(bMin, pixel.b);

        rMax = Math.max(rMax, pixel.r);
        gMax = Math.max(gMax, pixel.g);
        bMax = Math.max(bMax, pixel.b);
    });

    const rRange = rMax - rMin;
    const gRange = gMax - gMin;
    const bRange = bMax - bMin;

    const biggestRange = Math.max(rRange, gRange, bRange);
    if (biggestRange === rRange) {
        return "r";
    } else if (biggestRange === gRange) {
        return "g";
    } else {
        return "b";
    }
};

const rgbToHex = (pixel) => {
    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };

    return (
        "#" +
        componentToHex(pixel.r) +
        componentToHex(pixel.g) +
        componentToHex(pixel.b)
    ).toUpperCase();
};

export function quantization(rgbValues: any[], depth: number) {
    const MAX_DEPTH = 4;
    if (depth === MAX_DEPTH || rgbValues.length === 0) {
        const color = rgbValues.reduce(
            (prev: { r: any; g: any; b: any }, curr: { r: any; g: any; b: any }) => {
                prev.r += curr.r;
                prev.g += curr.g;
                prev.b += curr.b;

                return prev;
            },
            {
                r: 0,
                g: 0,
                b: 0,
            }
        );

        color.r = Math.round(color.r / rgbValues.length);
        color.g = Math.round(color.g / rgbValues.length);
        color.b = Math.round(color.b / rgbValues.length);
        return [color];
    }

    const componentToSortBy = findBiggestColorRange(rgbValues);
    rgbValues.sort((p1: { [x: string]: number }, p2: { [x: string]: number }) => {
        return p1[componentToSortBy] - p2[componentToSortBy];
    });

    const mid = rgbValues.length / 2;
    return [
        ...quantization(rgbValues.slice(0, mid), depth + 1),
        ...quantization(rgbValues.slice(mid + 1), depth + 1),
    ];
}

function setColor(newColors) {
    let gradients = []
    for (let i = 0; i < newColors.length; i++) {
        const hexColor = rgbToHex(newColors[i]);
        gradients.push(hexColor)
    }
    document.documentElement.style.setProperty('--c1', gradients[0] + "90");
    document.documentElement.style.setProperty('--c2', gradients[1] + "90");
    document.documentElement.style.setProperty('--c3', gradients[2] + "90");
    document.documentElement.style.setProperty('--c4', gradients[3] + "90");
    document.documentElement.style.setProperty('--c5', gradients[4] + "90");
    document.documentElement.style.setProperty('--c6', gradients[5] + "90");
    document.documentElement.style.setProperty('--c7', gradients[6] + "90");
    document.documentElement.style.setProperty('--c8', gradients[7] + "90");

}

export function getPalleteColors() {
    const imgFile = document.getElementById("imgfile");
    if (isImage(imgFile) ) {
        imgFile.crossOrigin = "Anonymous";
        const canvas = document.getElementById("canvas");
        var { width, height } = imgFile;

        if (width === 0) {
            width = 1
        }

        if (height === 0) {
            height = 1
        }

        if (isCanvas(canvas)) {
            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            ctx.drawImage(imgFile, 0, 0);
            const imageData = ctx.getImageData(0, 0, width, height);
    
            const rgbValues = buildRgb(imageData.data)
            const quantColors = quantization(rgbValues, 1);
    
            setColor(quantColors)
        }

        
    }

    function isImage(obj: HTMLImageElement | HTMLElement): obj is HTMLImageElement {
        return obj.tagName === 'IMG';
    }

    function isCanvas(obj: HTMLCanvasElement | HTMLElement): obj is HTMLCanvasElement {
        return obj.tagName === 'CANVAS';
    }
    
    



}