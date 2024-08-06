const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const {
    Cashfree
} = require('cashfree-pg');

const port = process.env.PORT || 8000; // default port is 3000

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;


function generateOrderId() {
    const uniqueId = crypto.randomBytes(16).toString('hex');

    const hash = crypto.createHash('sha256');
    hash.update(uniqueId);

    const orderId = hash.digest('hex');

    return orderId.substr(0, 12);
}


app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.post('/payment', async (req, res) => {
    let {
        orderId,
        customer_phone
    } = req.body;
    try {

        // let request = {
        //     "order_amount": 1,
        //     "order_currency": "INR",
        //     "order_id": await generateOrderId(),
        //     "customer_details": {
        //         "customer_id": orderId,
        //          "customer_phone":customer_phone  
        //     },
        // }
        let order_id =  await generateOrderId()
        var request = {
            "order_amount": 1.00,
            "order_currency": "INR",
            "order_id": order_id,
            "customer_details": {
                "customer_id": orderId,
                "customer_phone": customer_phone,
              
            },
            "order_meta": {
                "return_url": `https://srimahalaxmi.org.in/order_id?${order_id}`,
                "payment_methods": "cc,dc,upi"
            }
        };

        Cashfree.PGCreateOrder("2023-08-01", request).then(response => {
            console.log(response.data);
            res.json(response.data);

        }).catch(error => {
            console.error(error.response.data.message);
        })


    } catch (error) {
        console.log(error);
    }


})

app.post('/verify', async (req, res) => {
    try {

        let {
            orderId
        } = req.body;

        Cashfree.PGOrderFetchPayments("2023-08-01", orderId).then((response) => {

            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
        })


    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log('Server is running on port 8000');
})