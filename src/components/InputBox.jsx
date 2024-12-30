import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  currencyOption = [],
  onCurrencyChange,
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  return (
    <div className="currency-input-box-wrapper">
      <div className="amount-section">
        <label htmlFor=""> {label} </label>
        <input
          type="number"
          value={amount}
          disabled={amountDisabled}
          onChange={() => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="currency-section">
        <p>Currency Type</p>
        <select
          name=""
          id=""
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option value="currency">{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
