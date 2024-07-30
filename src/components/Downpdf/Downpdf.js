import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import Template from "../../Assets/Beige.pdf";

const Downloadpdf = ({ userData, Cropeiagmefile }) => {
    const [PDF, setPdf] = useState(null);

    const readFileAsArrayBuffer = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    const downloadTemplate = async () => {
        if (!Template) return;

        // Fetch the PDF template as a blob and convert it to an ArrayBuffer
        const response = await fetch(Template);
        const existingPdfBytes = await response.arrayBuffer();

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const fontSize = 12;
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        let Y = 700;

        Object.entries(userData).forEach(([key2, value]) => {
            Y -= 20;
            console.log(`Key: ${key2}, Value: ${value}`);
            const X = 60;
            const keyText = `${key2} `;
            firstPage.drawText(keyText, { x: X, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });
            firstPage.drawText(":", { x: 170, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });
            firstPage.drawText(value, { x: 200, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });
        });

        // Convert the image file to ArrayBuffer
        const imageArrayBuffer = await readFileAsArrayBuffer(Cropeiagmefile);
        const image = await pdfDoc.embedJpg(imageArrayBuffer);

        const xPosition = 345;
        const yPosition = 530;
        const width = 150;
        const height = 200;

        firstPage.drawImage(image, {
            x: xPosition,
            y: yPosition,
            width: width,
            height: height,
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdf(`${url}#toolbar=0`);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'populated_template.pdf';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <button onClick={downloadTemplate}>Download Template as PDF</button>
            {PDF && <iframe src={PDF} width="100%" height="500px"></iframe>}
        </>
    );
};

export default Downloadpdf;
