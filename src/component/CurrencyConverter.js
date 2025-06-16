"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "../components/ui/server/card";
import { Badge } from "../components/ui/server/badge";
import { Input } from "../components/ui/server/input";

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
  const [value, setValue] = useState(amount);

  const parse = (event) => event.target.value.replace(/[^\d.-]/g, "");

  const formatCurrency = useMemo(
    () => (value, currency) => {
      const locales = {
        IDR: "id-ID",
        INR: "en-IN",
      };
      return new Intl.NumberFormat(locales[currency] || region, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    },
    [region],
  );

  // Calculate the converted value
  const convertedValue = value * rate;

  const convertedPrice = useMemo(() => {
    const formatted = formatCurrency(convertedValue, quote);
    return formatted;
  }, [convertedValue, quote, formatCurrency]);

  return (
    <>
      <h2 className="text-lg font-semibold mt-5">
        {currencyPair} currency converter with {exchange} rate:
      </h2>
      <Card className="mt-3">
        <CardContent className="pt-6 space-y-5">
          <div className="flex items-center gap-4">
            <span className="font-bold">{base}</span>
            <Input
              type="number"
              value={value}
              onChange={(event) => setValue(parse(event))}
              className="max-w-[200px]"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold">{quote}</span>
            <span>{convertedPrice}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold">{exchange} Rate</span>
            <Badge variant="secondary" className="bg-teal-200 text-teal-900">
              {quoteSymbol} {rate}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CurrencyConverter;
