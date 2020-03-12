const cors = require("cors");
let HTTP_PORT = process.env.PORT || 5000
const http   = require('http');
const fs = require('fs');

const stripe = require("stripe")("");
const uuid = require("uuid/v4");

const express = require("express");
const emailer = require('./emailer');

const app = express();

app.use(express.json());
app.use(cors());

var server = http.Server(app);
server.listen(HTTP_PORT, function() {
    console.log('server running');
  });

app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.get("/test", (req, res) => {
    res.send("its working");
});

app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);

    let status;
    let charge;
    try {
        const { campaign, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        charge = await stripe.charges.create(
            {
                amount: campaign.donation * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Donated to ${campaign.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = "success";
        emailer.sendEmail(charge.receipt_email, charge.description, charge.receipt_url);
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    if(status == "success"){
        res.json({status, charge });
    }else{
        res.json({status });
    }
});

