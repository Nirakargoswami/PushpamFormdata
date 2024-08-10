import React from 'react';
import Button from "react-bootstrap/Button";

import File from "../../Assets/Soumyajit_Behera-BIT_MESRA.pdf"
const DownloadButton = ({pdf}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf; // Path to your PDF file in the public folder
    link.download = 'example.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button style={{marginLeft:"10px"}} onClick={handleDownload} variant="primary" >
 
      Download PDF
      </Button>

  );
};

export default DownloadButton;