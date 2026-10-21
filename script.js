function calculateVolume() {
    const radiusInput = parseFloat(document.getElementById('radius').value);
    const heightInput = parseFloat(document.getElementById('height').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(radiusInput) || isNaN(heightInput)) {
        resultDiv.innerHTML = "";
        return;
    }

    let r = radiusInput;
    let h = heightInput;

    if (unit === 'mm') {
        r = r / 10;
        h = h / 10;
    }

    const volume = Math.PI * Math.pow(r, 2) * h;
    const roundedVolume = Math.round(volume * 100) / 100;

    resultDiv.innerHTML = `Volume = ${roundedVolume} cm<sup>3</sup>`;
}