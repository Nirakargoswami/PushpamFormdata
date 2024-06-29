import React, {useState} from "react"
import TemplateForm from "./TemplateForm"
import  TemplateViewer from "./TemplateViewer"
const TemplateEditor = () => {
  const [templateFile, setTemplateFile] = useState(null);
    const [userData, setUserData] = useState({});

    const handleFormSubmit = (file, formData) => {
        setTemplateFile(file);
        setUserData(formData);
    };
  
  
  
  return (<>
    <TemplateForm onSubmit={handleFormSubmit} />
    <TemplateViewer templateFile={templateFile} userData={userData} />


  </>)
}


export default TemplateEditor;