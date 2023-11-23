export function getAverageRGB(imgEl: HTMLImageElement) {

    const blockSize = 5; // only visit every 5 pixels
    const rgb = { r: 0, g: 0, b: 0 }; // for non-supporting envs
    const canvas = document.createElement('canvas');
    const context = canvas.getContext && canvas.getContext('2d');

    if (!context) {
        return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ');';
    }

    const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    context.drawImage(imgEl, 0, 0);

    let data, count = 0, i = -4;

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        console.log(e);
        return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ');';
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    if ((rgb.r + rgb.g + rgb.b) > 500)
        return 'rgb(' + (rgb.r - 100) + ', ' + (rgb.g - 100) + ', ' + (rgb.b - 100) + ');';

    if ((rgb.r + rgb.g + rgb.b) > 450)
        return 'rgb(' + (rgb.r - 50) + ', ' + (rgb.g - 50) + ', ' + (rgb.b - 50) + ');';

    return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ');';
}
