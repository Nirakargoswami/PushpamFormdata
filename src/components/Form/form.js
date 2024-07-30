import React, { useEffect, useState } from 'react';
// import { Creatuser } from "../Firebase/firebase";
import { useLocation } from "react-router-dom";
import { Fomdfata } from "../../Constant/constan";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'
import { Creatuser, searchUserByPhoneNumber } from "../Firebse/firebse";
import Downloadpdf from "../Downpdf/Downpdf"
const Maindata = {
    1: "sanatry",
    2: "mobilerepair",

}


function Forms() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const [payment, setpayment] = useState(false);
    const [image1, setimage1] = useState()
    const [image2, setImage2] = useState()

    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const data = searchParams.get("data");

    useEffect(() => {
        // searchUserByPhoneNumber("08320170723")

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
    if(checkForm()){
        e.preventDefault()
        try {
    
          let sessionId = await getSessionId()
          let checkoutOptions = {
            paymentSessionId : sessionId,
            redirectTarget:"_modal",
          }
    
          cashfree.checkout(checkoutOptions).then((res) => {
            console.log("payment initialized",res)
    
            verifyPayment(orderId)
          })
          
    
        } catch (error) {
          console.log(error)
        }
    
    }
      
    }
    const handleSubmit = (datas) => {
       

        
        
        if (true ) {


            let user = {
                key: Maindata[data],
                userdata: formData,
                payment : datas.payment_amount,
                payment_status:datas.payment_status,





            }
            console.log(user);
            Creatuser(user)
            
            setTimeout(() => {
                 alert("Your form hae been Submited")
                setpayment(!payment)
            },4000)
            

        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files[0] && files[0].size <= 1000 * 1024) {
            if (name == "profile") {
                setimage1(files[0])
            } else {
                setImage2(files[0])
            }
        } else {
            setError(`File ${files[0].name} exceeds the 30KB size limit.`);
        }
    };
    let cashfree;

    let insitialzeSDK = async function () {
  
      cashfree = await load({
        mode: "sandbox",
      })
    }
  
    insitialzeSDK()
  
    const [orderId, setOrderId] = useState("")
  
  
  
    const getSessionId = async () => {
      try {
        let res = await axios.get("http://localhost:8000/payment")
        
        if(res.data && res.data.payment_session_id){
  
          console.log(res.data)
          setOrderId(res.data.order_id)
          return res.data.payment_session_id
        }
  
  
      } catch (error) {
        console.log(error)
      }
    }
  
    const verifyPayment = async () => {
      try {
        
        let res = await axios.post("http://localhost:8000/verify", {
          orderId: orderId
        })
  
        if(res && res.data){
            console.log("res",res.data)
            const datanew = res.data[0]
            console.log(datanew)
            
          alert("payment verified")
           handleSubmit(datanew)
        }
  
      } catch (error) {
        console.log(error)
      }
    }
  
    
  
  
  
    const select = ["age"]


    return (
        <div className='Inputs'>
            {!payment ? <Form style={{ width: "50%" }}>
                {formData && Object.keys(formData).map((x) => (
                    <>

                        {(select.indexOf(x) !== -1) ?
                            <Form.Group className="mb-3" key={x}>
                                <Form.Label>{x}</Form.Label>
                                <Form.Select name={x} value={formData[x]} onChange={handleChange}>
                                    <option value="">Choose...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    {/* Add more options as needed */}
                                </Form.Select>
                            </Form.Group>
                            :

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




                        }


                    </>


                ))}
                <Form.Group className="mb-3" >
                    <Form.Label>Upload profile</Form.Label>
                    <Form.Control
                        type="file"
                        name="profile"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Upload Signature</Form.Label>
                    <Form.Control
                        type="file"
                        name="signutre"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={(e) =>handleClickpay(e)}>
                    Submit and Pay
                </Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form>
                :
                <Downloadpdf userData={formData} Cropeiagmefile={image1} />
            }
        </div>
    );
}

export default Forms;
