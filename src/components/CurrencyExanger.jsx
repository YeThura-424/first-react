import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyExanger = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("mmk");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(Math.floor(amount * currencyInfo[to]));
  };

  return (
    <div className="currency-exchange-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="from-section">
          <InputBox
            label="From"
            amount={amount}
            selectedCurrency={from}
            currencyOption={currencyOptions}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>
        <div className="swap-button-container">
          <button className="swap-button" onClick={swap}>
            Swap
          </button>
        </div>
        <div className="to-section">
          <InputBox
            label="To"
            amount={convertedAmount}
            selectedCurrency={to}
            currencyOption={currencyOptions}
            onCurrencyChange={(currency) => setFrom(currency)}
            amountDisabled
          />
        </div>
        <button type="submit" className="submit-button">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
};

export default CurrencyExanger;
