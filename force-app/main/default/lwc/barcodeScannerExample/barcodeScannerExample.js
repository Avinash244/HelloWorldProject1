import { LightningElement } from 'lwc';
import { getBarcodeScanner } from 'lightning/mobileCapabilities';

export default class BarcodeScannerExample extends LightningElement {
    sessionScanner;
    scannedBarcodes = '';

    connectedCallback() {
        this.sessionScanner = getBarcodeScanner();
    }

    beginScanning() {
        // Reset scannedBarcode to empty string before starting new scanning session
        this.scannedBarcodes = '';

        // Make sure BarcodeScanner is available before trying to use it
        if (this.sessionScanner != null && this.sessionScanner.isAvailable()) {
            const scanningOptions = {
                barcodeTypes: [this.sessionScanner.barcodeTypes.QR]
            };
            this.sessionScanner
                .beginCapture(scanningOptions)
                .then((scannedBarcode) =>
                    this.processScannedBarcode(scannedBarcode)
                )
                .catch((error) => {
                    console.error(error);
                    this.sessionScanner.endCapture();
                })
                .finally(() => this.continueScanning());
        }
    }

    continueScanning() {
        // BarcodeScanner.isAvailable() returns false after endCapture() is called on it
        if (this.sessionScanner.isAvailable()) {
            this.sessionScanner
                .resumeCapture()
                .then((scannedBarcode) =>
                    this.processScannedBarcode(scannedBarcode)
                )
                .catch((error) => {
                    console.error(error);
                    this.sessionScanner.endCapture();
                })
                .finally(() => this.continueScanning());
        }
    }

    processScannedBarcode(barcode) {
        // Do something with the barcode scan value:
        // - look up a record
        // - create or update a record
        // - parse data and put values into a form
        // - and so on; this is YOUR code
        console.log(JSON.stringify(barcode));
        this.scannedBarcodes += barcode.value + '\n';
    }
}