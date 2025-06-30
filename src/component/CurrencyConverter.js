import { CurrencyConverterClient } from "./CurrencyConverterClient";

const CurrencyConverter = ({
  region,
  amount,
  currencyPair,
  exchange,
  rate,
  base,
  quote,
  quoteSymbol,
}) => {
  return (
    <>
      <h2 className="text-base md:text-lg font-semibold mt-4 md:mt-5">
        {currencyPair} currency converter with {exchange} rate:
      </h2>
      <CurrencyConverterClient
        region={region}
        amount={amount}
        currencyPair={currencyPair}
        exchange={exchange}
        rate={rate}
        base={base}
        quote={quote}
        quoteSymbol={quoteSymbol}
      />
    </>
  );
};

export default CurrencyConverter;
