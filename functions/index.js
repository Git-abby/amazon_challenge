const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51Nogj2GkGOi488LSiQ52y8U3h3lGLw3slgnOreuwI"+
    "3gtESgLoQUXPz1VBPcTFL1shNQ7dcnk4RqGL2yYBTuS2qmb00zEePQK91",
);


//  App config
const app = express();

//  Middleware
app.use(cors({origin: true}));
app.use(express.json());

//  API routes
app.get("/", (req, res) => {
  res.status(200).send("Hi dude!", 200);
});
app.get("/abrar", (req, res) => {
  res.status(200).send("Hi Muhmmad!", 200);
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment req received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "CAD",
  });
  console.log(paymentIntent.client_secret);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
