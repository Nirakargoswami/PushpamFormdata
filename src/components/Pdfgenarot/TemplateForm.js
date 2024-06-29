// // TemplateForm.js
// import React, { useState } from 'react';

// const TemplateForm = ({ onSubmit }) => {
//     const [templateFile, setTemplateFile] = useState(null);
//     const [formData, setFormData] = useState({});

//     const handleFileChange = e => {
//         const file = e.target.files[0];
//         setTemplateFile(file);
//     };

//     const handleChange = e => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (templateFile) {
//             onSubmit(templateFile, formData);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="file" accept=".html,.htm,.jpeg,.jpg" onChange={handleFileChange} />
//             <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//             <input type="text" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} />
//             <input type="text" name="contactInfo" placeholder="Contact Info" onChange={handleChange} />
//             <button type="submit" disabled={!templateFile}>Generate Template</button>
//         </form>
//     );
// };

// export default TemplateForm;
// TemplateForm.js
import React, { useState } from 'react';


const TemplateForm = ({ onSubmit }) => {
    const [templateFile, setTemplateFile] = useState(null);
    const [formData, setFormData] = useState({});
    const Fakedata = {
        Previewsssss : {
           
            
            Name:"NIrakar",
            Birthday: "10/09'/1997",
            Color:"Fair",
            Cplex:"NIrakar",
            avasfwe: "10/09'/1997",
            vsdfer:"Fair",
            vasfwervb:"NIrakar",
            oinavaiefa: "10/09'/1997",
           
        },
        Previe : {
          fatherName : "Fadfafaf",
          MotherName : "dfgasdfa"
           
        },
      
    }
    const handleFileChange = e => {
        const file = e.target.files[0];
        setTemplateFile(file);
    };

    const handleChange = e => {
        setFormData(Fakedata)
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        // });
    };

    const handleSubmit = e => {
        console.log(templateFile)
        e.preventDefault();
        if (templateFile) {
            console.log(templateFile)
            onSubmit(templateFile, Fakedata);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept=".html,.htm,.jpeg,.jpg,.pdf" onChange={handleFileChange} />
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} />
            <input type="text" name="contactInfo" placeholder="Contact Info" onChange={handleChange} />

            <button type="submit" disabled={!templateFile}>Generate Template</button>
        </form>
    );
};

export default TemplateForm;
