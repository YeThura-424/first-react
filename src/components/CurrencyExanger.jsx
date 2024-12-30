import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyExanger = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("mmk");
  const [amount, setAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  return (
    <div className="currency-exchange-wrapper">
      <InputBox
        label="From"
        amount={amount}
        selectedCurrency={from}
        currencyOption={currencyOptions}
        onCurrencyChange={(currency) => setFrom(currency)}
        onAmountChange={(amount) => setAmount(amount)}
      />
    </div>
  );
};

export default CurrencyExanger;
