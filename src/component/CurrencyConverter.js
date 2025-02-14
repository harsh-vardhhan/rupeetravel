import { useState, useMemo } from "react";
import {
    Text,
    Heading,
    NumberInput,
    NumberInputField,
    Stack,
    Card,
    Tag,
} from "@chakra-ui/react";

const CurrencyConverter = ({ region, amount, currencyPair, exchange, rate, base, quote, quoteSymbol }) => {
    const parse = (val) => val.replace(/[^\d.-]/g, '');
    const [value, setValue] = useState(amount);

    const formatCurrency = useMemo(() => (value, currency) => {
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
    }, [region]);

    const convertedPrice = useMemo(() => formatCurrency(value * rate, quote), [value, rate, quote, formatCurrency]);

    return (
        <>
            <Heading fontSize="lg" mt="20px">
                {currencyPair} currency converter with {exchange} rate:
            </Heading>
            <Card p="20px" mt="10px">
                <Stack direction="row">
                    <Text mt="7px" fontWeight="700">
                        {base}
                    </Text>
                    <NumberInput
                        onChange={(valueString) => setValue(parse(valueString))}
                        value={value}
                        max={1_000_000_000}
                    >
                        <NumberInputField onBlur={() => setValue(Number(value) || 0)} />
                    </NumberInput>
                </Stack>

                <Stack direction="row" mt="20px">
                    <Text fontWeight="700">{quote}</Text>
                    <Text>{convertedPrice}</Text>
                </Stack>

                <Stack direction="row" mt="20px">
                    <Text fontWeight="700">{exchange} Rate</Text>
                    <Tag colorScheme="teal">
                        {quoteSymbol} {rate}
                    </Tag>
                </Stack>
            </Card>
        </>
    );
};

export default CurrencyConverter;
