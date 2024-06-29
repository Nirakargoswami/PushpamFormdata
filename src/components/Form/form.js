import React, { useState } from 'react';
import {Creatuser} from "../Firebse/firebse"
import { useLocation } from "react-router-dom";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        age: '',
        gender: '',
        income: '',
        // photo: null,
        // signature: null,
    });
    const [error, setError] = useState('');
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const data = searchParams.get("data");
  
    console.log(data); 
    console.log(data)
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;

        setFormData({
            ...formData,
            [name]: files[0],
        });
    };
    const Check = () => {
        for (const key in formData) {
            if (formData[key] === '') {
                setError(`Please fill in ${key}`);
                return;
            }
        }
        return true
        // Submit logic or send data to serve
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (Check()) {
            Creatuser(formData)
            console.log(formData)
        }
    }
    console.log(formData);
    return (
        <div style={{marginTop:"100px"}}>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => handleChange(e)} required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <br />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                <br />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                <br />
                <label htmlFor="gender">Gender:</label>
                <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
                <br />
                <label htmlFor="income">Income:</label>
                <input type="number" id="income" name="income" value={formData.income} onChange={handleChange} required />
                <br />
                {/* <label htmlFor="photo">Upload Photo:</label>
                <input type="file" id="photo" name="photo" accept="image/*" onChange={handleFileChange} required />
                <br />
                <label htmlFor="signature">Upload Signature (30kb max):</label>
                <input type="file" id="signature" name="signature" accept="image/*" onChange={handleFileChange} required /> */}
                <br />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Form;
