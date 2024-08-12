import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import Template from "../../Assets/Beige.pdf";
import GujaratiFont from "../../Assets/shrutib.ttf"; // Path to your Gujarati font

const Downloadpdf = ({ userData, Cropeiagmefile ,Applicaitonnon,ApplicaitonnonType}) => {
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
        try {
            if (!Template) return;

            // Fetch the PDF template
            const response = await fetch(Template);
            const existingPdfBytes = await response.arrayBuffer();

            // Load the PDF document
            const pdfDoc = await PDFDocument.load(existingPdfBytes);

            // Register fontkit
            pdfDoc.registerFontkit(fontkit);

            const pages = pdfDoc.getPages();
            const firstPage = pages[0];
            const fontSize = 12;

            // Embed the custom Gujarati font
            const gujaratiFontBytes = await fetch(GujaratiFont).then(res => res.arrayBuffer());
            const gujaratiFont = await pdfDoc.embedFont(gujaratiFontBytes);

            let Y = 655;
            const imageArrayBuffer = await readFileAsArrayBuffer(Cropeiagmefile);
            
            // Embed the image based on its type (JPEG or PNG)
            let image;
            if (Cropeiagmefile.type === 'image/jpeg') {
                image = await pdfDoc.embedJpg(imageArrayBuffer);
            } else if (Cropeiagmefile.type === 'image/png') {
                image = await pdfDoc.embedPng(imageArrayBuffer);
            } else {
                throw new Error("Unsupported image format. Please use JPEG or PNG.");
            }
            const currentDate = new Date()
            firstPage.drawText(`MAHALAXMI  VIVIDHALAXI  VIKAS  ORGANIZATION  NON GOVE.ORG.  `, { x: 20, y: 820, size: 17, font: gujaratiFont, color: rgb(0, 0, 0) });

            firstPage.drawText(`Application No : ${Applicaitonnon} `, { x: 10, y: 775, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });

            firstPage.drawText(`Application Date : ${currentDate} `, { x: 10, y: 750, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });

            firstPage.drawText(`Application Type : ${ApplicaitonnonType} `, { x: 10, y: 735, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });

            const xPosition = 450;
            const yPosition = 710;
            const width = 100;
            const height = 100;
            firstPage.drawImage(image, {
                x: xPosition,
                y: yPosition,
                width: width,
                height: height,
            });
            firstPage.drawImage(image, {
                x: 450,
                y: 680,
                width: width,
                height: 20,
            });

            firstPage.drawLine({
                start: { x: 10, y: 670  },
                end: { x: 550, y: 670  },
                thickness: 1,
                color: rgb(0, 0, 0),
            });
            firstPage.drawText("Candidate Information", { x: 10, y: 655, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });


            // Populate the PDF with user data
            Object.entries(userData).forEach(([key2, value]) => {
                Y -= 20;
                const X = 60;
                const keyText = `${key2} `;
                firstPage.drawText(keyText, { x: X, y: Y, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
                firstPage.drawText("-:", { x: 180, y: Y, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
                firstPage.drawText(value, { x: 200, y: Y, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
            });

            // Convert the image file to ArrayBuffer
         

            // Draw the image on the PDF
            

            // Save the modified PDF
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setPdf(`${url}#toolbar=0`);

            // Automatically download the PDF
            const a = document.createElement('a');
            a.href = url;
            a.download = 'MAHALAXMI.pdf';
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    return (
        <div className='maininput'>
            <button onClick={downloadTemplate}>Download Template as PDF</button>
            {PDF && <iframe src={PDF} width="100%" height="500px"></iframe>}
        </div>
    );
};

export default Downloadpdf;
