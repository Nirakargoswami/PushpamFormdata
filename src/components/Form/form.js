import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Fomdfata } from "../../Constant/constan";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { load } from '@cashfreepayments/cashfree-js';
import { Creatuser, searchUserByPhoneNumber } from "../Firebse/firebse";
import Downloadpdf from "../Downpdf/Downpdf";

const Maindata = {
    1: "Sanatary pad kit",
    2: "Motar revainding and light fetting",
    3: "Beauty Parlor Kit",
    4: "Youva Svrojgar Yojna"
};

function Forms() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const [payment, setPayment] = useState(false);
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [pay, setPay] = useState(false);
    const [no, setNo] = useState();
    const location = useLocation();
    const [orderId, setOrderId] = useState("cb7ece84e50a");

    const searchParams = new URLSearchParams(location.search);
    const data = searchParams.get("data");

    let cashfree;

    const initializeSDK = async function () {
        cashfree = await load({ mode: "production" });
    };
    initializeSDK();

    useEffect(() => {
        if (data && Fomdfata) {
            setFormData(Fomdfata.reduce((acc, item) => {
                acc[item.inputName] = '';
                return acc;
            }, {}));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const checkForm = () => {
        for (const key in formData) {
            if (formData[key] === '') {
                setError(`Please fill in ${key}`);
                return false;
            }
        }
        setError('');
        return true;
    };

    const handleClickPay = async (e) => {
        e.preventDefault();
        try {
            let sessionId = await getSessionId();

            let checkoutOptions = {
                paymentSessionId: sessionId,
                redirectTarget: "_modal",
            };

            cashfree.checkout(checkoutOptions).then((result) => {
                if (result.error) {
                    console.log("User has closed the popup or there is some payment error, Check for Payment Status");
                    console.log(result.error);
                }
                if (result.redirect) {
                    console.log("Payment will be redirected");
                }
                if (result.paymentDetails) {
                    console.log("Payment has been completed, Check for Payment Status");
                    console.log(result.paymentDetails.paymentMessage);
                    verifyPayment(orderId);
                }
            });

        } catch (error) {
            console.log(error);
        }
    };

    function generateRandomId() {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const randomId = String(randomNumber).padStart(6, '0');
        return randomId;
    }

    const handleSubmit = (datas) => {
        if (true) {
            let user = {
                key: Maindata[data],
                userdata: formData,
                payment: datas.payment_amount,
                payment_status: datas.payment_status,
            };
            console.log(user);
            Creatuser(user);

            setTimeout(() => {
                alert("Your form has been Submitted");
                setPayment(!payment);
                setNo("");
                setPay(false);
            }, 4000);
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files[0] && files[0].size <= 1000 * 1024) {
            if (name === "profile") {
                setImage1(files[0]);
            } else {
                setImage2(files[0]);
            }
        } else {
            setError(`File ${files[0].name} exceeds the 30KB size limit.`);
        }
    };

    const getSessionId = async () => {
        try {
            const ID = generateRandomId();
            console.log(ID);

            let res = await axios.post("https://us-central1-pushpam-25b50.cloudfunctions.net/api/payment", {
                orderId: ID,
                customer_phone: `${no}`
            });

            if (res.data && res.data.payment_session_id) {
                console.log(res.data);
                setOrderId(res.data.order_id);
                return res.data.payment_session_id;
            }

        } catch (error) {
            console.log(error);
        }
    };

    const verifyPayment = async (orderId) => {
        console.log(`Verifying payment for orderId: ${orderId}`);
        try {
            let res = await axios.post("https://us-central1-pushpam-25b50.cloudfunctions.net/api/verify", {
                orderId: orderId.replace(/^["'`]+|["'`]+$/g, "")
            });

            if (res && res.data) {
                console.log("res", res.data);
                const datanew = res.data[0];
                console.log(datanew);

                alert("Payment verified");
                handleSubmit(datanew);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const PhoneNo = (e) => {
        setNo(e.target.value);
    };

    const checkFormData = () => {
        console.log(error);
        if (checkForm()) {
            setPay(true);
        }
    };

    const renderFormInput = (item) => {
        const { inputType, inputName, options } = item;
        switch (inputType) {
            case "select":
                return (
                    <Form.Group className="mb-3" key={inputName}>
                        <Form.Label>{inputName}</Form.Label>
                        <Form.Select name={inputName} value={formData[inputName]} onChange={handleChange}>
                            <option value="">Choose...</option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                );
            default:
                return (
                    <Form.Group className="mb-3" key={inputName}>
                        <Form.Label>{inputName}</Form.Label>
                        <Form.Control
                            type={inputType}
                            name={inputName}
                            value={formData[inputName] || ''}
                            onChange={handleChange}
                            placeholder={`Enter ${inputName}`}
                        />
                    </Form.Group>
                );
        }
    };

    return (
        <div className='Inputs'>
            {!payment && !pay &&
                <Form style={{ width: "83%" }}>
                    {Fomdfata.map((item) => (
                        renderFormInput(item)
                    ))}
                    {!pay &&
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload profile</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="profile"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload Signature</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="signature"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={() => checkFormData()}>
                                Submit
                            </Button>
                        </>
                    }
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </Form>
            }
            {
                payment && !pay &&
                <Downloadpdf userData={formData} Cropeiagmefile={image1} />
            }
            {pay &&
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                        value={no}
                        onChange={PhoneNo}
                        placeholder={`Enter Phone Number`}
                    />
                    <Button style={{ marginTop: "20px" }} variant="primary" onClick={(e) => handleClickPay(e)}>
                        Pay
                    </Button>
                </div>
            }
        </div>
    );
}

export default Forms
