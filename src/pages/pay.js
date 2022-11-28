import React, { useEffect } from "react";

const Pay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//static.liqpay.ua/libjs/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    console.log("Window - ", window);
    window.LiqPayCheckoutCallback = function () {
      window.LiqPayCheckout.init({
        data: "eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJhbW91bnQiOiIyNzAwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCf0L7QttC10YDRgtCy0YPQstCw0L3QvdGPIiwicHVibGljX2tleSI6ImkzODI1Njg4NDc2OCIsImxhbmd1YWdlIjoicnUifQ==",
        signature: "R/dneGMu1rxBFt/Qr+/XNK7ddos=",
        embedTo: "#liqpay_checkout",
        mode: "embed", // embed || popup,
      })
        .on("liqpay.callback", function (data) {
          console.log(data.status);
          console.log(data);
        })
        .on("liqpay.ready", function (data) {})
        .on("liqpay.close", function (data) {
          // close
        });
    };
    return () => {
      document.body.removeChild(script);
    };
  });
  return <div id="liqpay_checkout"></div>;
};

export default Pay;
