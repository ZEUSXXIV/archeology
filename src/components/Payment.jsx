

import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import axios from "axios";
import { Button } from "antd";

function Payment(
    // {price}
    ) {

        const price = 100

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        console.log("result1===>>>>>>>")
        const result = await axios.post("http://localhost:5000/payment/orders",{name:"naveen", price:price*100});
        console.log("result2===>>>>>>>", result)
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        else{
            console.log("result3===>>>>>>>", result)
        }

        const { amount, order_id, currency } = result.data;

        const options = {
            key: "rzp_test_iccSMQd9SsOyWW", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                console.log("response==>>", response)

                const result = await axios.post("http://localhost:5000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Frutika",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <p>Buy React now!</p> */}
                <Button className="App-link" variant="outlined" onClick={displayRazorpay}>
                    Pay ₹{price}
                </Button>
        </div>
    );
}

export default Payment;