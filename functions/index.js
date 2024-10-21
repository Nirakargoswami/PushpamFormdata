const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const { Cashfree } = require('cashfree-pg');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Cashfree credentials from environment variables
Cashfree.XClientId = functions.config().cashfree.client_id;
Cashfree.XClientSecret = functions.config().cashfree.client_secret;
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
});

app.post('/payment', async (req, res) => {
    let { orderId, customer_phone } = req.body;
    try {
        let order_id = await generateOrderId();
        var request = {
            "order_amount": 250.00,
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
            res.status(500).send(error.response.data.message);
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

app.post('/verify', async (req, res) => {
    try {
        let { orderId } = req.body;
          console.log(orderId)
        Cashfree.PGOrderFetchPayments("2023-08-01", orderId).then((response) => {
            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
            res.status(500).send(error.response.data.message);
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

exports.api = functions.https.onRequest(app);
