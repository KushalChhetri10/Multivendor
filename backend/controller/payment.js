const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const paymentRouter = express.Router();

paymentRouter.get(
  "/stripeapikey",
  catchAsyncErrors((req, res, next) => {
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_Key });
  })
);

module.exports = paymentRouter;
