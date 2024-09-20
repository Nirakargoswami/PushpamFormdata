
import React, { useState } from 'react';

import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import Profile from "./Profile"
import "react-image-crop/dist/ReactCrop.css";

const TemplateViewer = ({ templateFile, userData }) => {

    const [PDF, setPdf] = useState(null)
    const [Cropeiagmefile, setCropeimgefile,] = useState(null)

    const downloadTemplate = async () => {

        if (!templateFile) return;
        const existingPdfBytes = await templateFile.arrayBuffer();

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const fontSize = 12;
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        let Y = 700;

        Object.keys(userData).forEach(key1 => {
            const X = 60
            console.log(`Key of the first object: ${key1}`);
            const title = `${key1}`
            firstPage.drawText(title, { x: X, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });
            Object.entries(userData[key1]).forEach(([key2, value]) => {
                Y -= 20;
                console.log(`Key: ${key2}, Value: ${value}`);
                const X = 60;
                console.log(Y)
                const keyText = `${key2} `
                const xKey = X;
                const constan = ":"
                firstPage.drawText(keyText, { x: xKey, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });
                firstPage.drawText(constan, { x: 170, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });
                firstPage.drawText(value, { x: 200, y: Y, size: fontSize, font: helveticaFont, color: rgb(0, 0, 0) });

                // y -= 20
            });
            Y -= 50
        });
        //   const imgBytes = await fetch(Cropeiagmefile).then((res) => res.arrayBuffer());
 
 
      const image = await pdfDoc.embedPng(Cropeiagmefile);
        // Adjust the position as needed
        const xPosition = 345; // X coordinate of the image
        const yPosition = 530; // Y coordinate of the image

        // Adjust the size as needed
        const width = 150; // Width of the image
        const height = 200; // Height of the image

        // Add the image to the PDF at the specified position and size
        firstPage.drawImage(image, {
            x: xPosition,
            y: yPosition,
            width: width,
            height: height,
        });
        console.log("fasdfafa")
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        console.log(url)
        setPdf(`${url}#toolbar=0`)
        const a = document.createElement('a');
        a.href = url;
        a.download = 'populated_template.pdf';
        a.click();
        URL.revokeObjectURL(url);
    };


    //     width: 328px;
    //height: 464px;

    return (
        <div>
            <h2>Preview Template:</h2>
            <Profile setCropeimgefile={setCropeimgefile} />
            <div>
                <iframe controls={false} src={PDF} width={328} height={464} />
            </div>
            <button onClick={downloadTemplate}>Download as PDF</button>
        </div>
    );
};

export default TemplateViewer;

