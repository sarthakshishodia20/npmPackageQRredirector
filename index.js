const QRCode = require("qrcode");
const chalk = require("chalk");
const fs = require("fs");

/**
 * Generates a QR code for the given URL.
 * @param {string} url - The website URL.
 * @param {string} [filename] - (Optional) The filename to save the QR code as an image.
 */
function generateQR(url, filename) {
    if (!url) {
        console.log(chalk.red("Error: Please provide a valid URL."));
        return;
    }

    // Generate QR Code and display in terminal
    QRCode.toString(url, { type: "terminal" }, (err, qr) => {
        if (err) {
            console.log(chalk.red("Error generating QR code."));
        } else {
            console.log(chalk.green("Scan this QR code to visit: " + url));
            console.log(qr);
        }
    });

    // Generate QR Code and save as image (if filename provided)
    if (filename) {
        QRCode.toFile(filename, url, (err) => {
            if (err) {
                console.log(chalk.red("Error saving QR code as an image."));
            } else {
                console.log(chalk.blue(`QR code saved as ${filename}`));
            }
        });
    }
}
module.exports = generateQR;
