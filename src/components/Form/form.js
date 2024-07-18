import React, { useEffect, useState } from 'react';
import { Creatuser } from "../Firebse/firebse"
import { useLocation } from "react-router-dom";
import { Fomdfata } from "../../Constant/constan"
function Form() {
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState('');
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const data = searchParams.get("data");

    console.log(data, "data");
    console.log(data, "data")


    useEffect(() => {
        setFormData(Fomdfata[data])
    }, [])



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
        <div style={{ marginTop: "100px" }}>
            <form onSubmit={handleSubmit}>
                {formData && Object.keys(formData).map((X) => {
                    return (
                        <>
                            <label htmlFor="name">{X}:</label>
                            <input type="text" id="name" name={X} value={formData[X]} onChange={(e) => handleChange(e)} required />
                            <br/>
                        </>

                    )
                })

                }

              
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Form;
