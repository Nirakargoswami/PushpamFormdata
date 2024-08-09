import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Fomdfata } from "../../Constant/constan";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { load } from '@cashfreepayments/cashfree-js'
import { Creatuser, searchUserByPhoneNumber } from "../Firebse/firebse";
import Downloadpdf from "../Downpdf/Downpdf";

const Maindata = {
    1: "sanatry",
    2: "mobilerepair",
};

function Forms() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const [payment, setpayment] = useState(false);
    const [image1, setimage1] = useState();
    const [image2, setImage2] = useState();
    const [pay, setpay] = useState(false);
    const [no, setno] = useState();
    const location = useLocation();
    const [orderId, setOrderId] = useState("cb7ece84e50a");

    const searchParams = new URLSearchParams(location.search);
    const data = searchParams.get("data");

    let cashfree;

    const insitialzeSDK = async function () {
        cashfree = await load({
            mode: "production",
        });
    };
    insitialzeSDK();

    useEffect(() => {
        if (data && Fomdfata[data]) {
            setFormData(Fomdfata[data]);
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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

    const handleClickpay = async (e) => {
        if (true) {
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

                        console.log(result.paymentDetails);
                        console.log("Payment has been completed, Check for Payment Status");
                        console.log(result.paymentDetails.paymentMessage);
                        verifyPayment(orderId)

                    }
                });

            } catch (error) {
                console.log(error);
            }
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
                setpayment(!payment);
                setno("");
                setpay(false);
            }, 4000);
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files[0] && files[0].size <= 1000 * 1024) {
            if (name === "profile") {
                setimage1(files[0]);
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
    
    console.log(orderId.replace(/^["'`]+|["'`]+$/g, ""),orderId)

    const verifyPayment = async (orderId) => {
        console.log(`Verifying payment for orderId: ${orderId}`);

        console.log(orderId.replace(/^["'`]+|["'`]+$/g, ""),orderId)
        try {
            let res = await axios.post("https://us-central1-pushpam-25b50.cloudfunctions.net/api/verify", {
                orderId:orderId.replace(/^["'`]+|["'`]+$/g, "")

            });

            if (res && res.data) {
                console.log("res", res.data);
                const datanew = res.data[0];
                console.log(datanew);

                alert("payment verified");
                 handleSubmit(datanew);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const Phoeno = (e) => {
        setno(e.target.value);
    };
   
    const ChecekFormdat = () => {
        console.log(error)
        if (checkForm()) {
            setpay(true)
        }
    }

    const select = ["gender"];
    const number = ["age", "phoneNumber"]

    const Fomriput = (x) => {
        if ((select.indexOf(x) !== -1)) {
            return (
                <Form.Group className="mb-3" key={x}>
                    <Form.Label>{x}</Form.Label>
                    <Form.Select name={x} value={formData[x]} onChange={handleChange}>
                        <option value="">Choose...</option>
                        <option value="option1">Male</option>
                        <option value="option2">Female</option>
                    </Form.Select>
                </Form.Group>
            )
        } else if ((number.indexOf(x) !== -1)){
            return (<Form.Group className="mb-3" key={x}>
                <Form.Label>{x}</Form.Label>
                <Form.Control
                    type="number"
                    name={x}
                    value={formData[x] || ''}
                    onChange={handleChange}
                    placeholder={`Enter ${x}`}
                />
            </Form.Group>)
        }else{
            return (
                <Form.Group className="mb-3" key={x}>
                <Form.Label>{x}</Form.Label>
                <Form.Control
                    type="text"
                    name={x}
                    value={formData[x] || ''}
                    onChange={handleChange}
                    placeholder={`Enter ${x}`}
                />
            </Form.Group>

            )
        }
    }
    return (
        <div className='Inputs'>
            {!payment && !pay &&
                <Form style={{ width: "83%" }}>
                    {formData && !pay && Object.keys(formData).map((x) => (
                        <>
                              {Fomriput(x)}

                        </>
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
                                    name="signutre"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Form.Group>

                            <Button variant="primary" onClick={() => ChecekFormdat()}>
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
                    <Form.Label>Phoen no </Form.Label>
                    <Form.Control
                        type="number"
                        value={no}
                        onChange={Phoeno}
                        placeholder={`Enter Paying No`}
                    />
                    <Button style={{ marginTop: "20px" }} variant="primary" onClick={(e) => handleClickpay(e)}>
                        Pay
                    </Button>
                </div>
            }
        </div>
    );
}

export default Forms;
