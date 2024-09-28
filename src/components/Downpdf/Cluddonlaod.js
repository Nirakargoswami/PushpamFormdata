import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import Button from 'react-bootstrap/Button';

import Template from "../../Assets/Beige.pdf";
import GujaratiFont from "../../Assets/shrutib.ttf"; // Path to your Gujarati font

const Downloadpdf = ({ userData, Cropeiagmefile, CropeiagmefileSignatur, ApplicaitonnonType }) => {
    const [PDF, setPdf] = useState(null);

    const generateUniqueUserID = () => {
        const random4DigitNumber = () => Math.floor(Math.random() * 9000) + 1000;
        const last4Letters = userData["First Name"].slice(-4).toLowerCase();
        let id = `${last4Letters}${random4DigitNumber()}`;
        return id;
    }

    // Fetch image from URL and return it as a Blob
    const fetchImageAsBlob = async (imageUrl) => {
        const response = await fetch(imageUrl);
        return await response.blob();
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
            console.log("ok")
            // Embed the custom Gujarati font
            const gujaratiFontBytes = await fetch(GujaratiFont).then(res => res.arrayBuffer());
            const gujaratiFont = await pdfDoc.embedFont(gujaratiFontBytes);

            let Y = 655;

            // Fetch images as Blob objects
            const imageBlob = await fetchImageAsBlob(Cropeiagmefile);
            const imageSignatureBlob = await fetchImageAsBlob(CropeiagmefileSignatur);

            // Embed the images (based on Blob type, as the format might be JPEG or PNG)
            const image = await pdfDoc.embedPng(await imageBlob.arrayBuffer());
            const imageSignature = await pdfDoc.embedPng(await imageSignatureBlob.arrayBuffer());

            const currentDate = new Date().toISOString().split('T')[0];
            firstPage.drawText(`MAHALAXMI  VIVIDHALAXI  VIKAS  ORGANIZATION `, { x: 20, y: 820, size: 17, font: gujaratiFont, color: rgb(0, 0, 0) });

            firstPage.drawText(`Application No : ${generateUniqueUserID()} `, { x: 10, y: 775, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
            firstPage.drawText(`Application Date : ${currentDate} `, { x: 10, y: 750, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
            firstPage.drawText(`Application Type : ${ApplicaitonnonType} `, { x: 10, y: 735, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });

            // Draw images on the PDF
            firstPage.drawImage(image, {
                x: 450,
                y: 710,
                width: 100,
                height: 100,
            });

            firstPage.drawImage(imageSignature, {
                x: 450,
                y: 680,
                width: 100,
                height: 20,
            });

            firstPage.drawLine({
                start: { x: 10, y: 670 },
                end: { x: 550, y: 670 },
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
                firstPage.drawText("-", { x: 300, y: Y, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
                firstPage.drawText(value, { x: 350, y: Y, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
            });

            const declarationText1 = "I solemnly declare :- that the details given above are correct to the best of my knowledge";
            const declarationText2 = "and if any details are found to be incorrect, it will be at the discretion of the institution.";
            const declarationText3 = "I have read and understood all the rules in the advertisement and filled this application form.";

            firstPage.drawText(declarationText1, { x: 60, y: 100, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
            firstPage.drawText(declarationText2, { x: 60, y: 90, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });
            firstPage.drawText(declarationText3, { x: 60, y: 80, size: fontSize, font: gujaratiFont, color: rgb(0, 0, 0) });

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
            <Button className="btn-primary" onClick={downloadTemplate}>Download Form</Button>
        </div>
    );
};

export default Downloadpdf;
