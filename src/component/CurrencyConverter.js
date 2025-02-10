import { useState } from "react";
import {
    Text,
    Heading,
    NumberInput,
    NumberInputField,
    Stack,
    Card,
    Tag,
} from '@chakra-ui/react';

const CurrencyConverter = ({ region, amount, currencyPair, exchange, rate, base, quote, quoteSymbol }) => {
    const parse = (val) => val.replace(/[^\d.-]/g, '');
    const [value, setValue] = useState(amount)
    const formatCurrency = (value, currency) => {
        const locales = {
            IDR: 'id-ID', // Uses dot as thousand separator
            INR: 'en-IN', // Uses comma as thousand separator
        };
        return new Intl.NumberFormat(locales[currency] || region, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };
    
    const convertedPrice = formatCurrency(value * rate, quote);    

    return (
        <>
            <Heading fontSize={'lg'} style={{ marginTop: '20px' }}>
                {currencyPair} currency converter with {exchange} rate:
            </Heading>
            <Card style={{ padding: '20px', marginTop: '10px' }}>
                <div>
                    <Stack direction="row">
                        <Text style={{ marginTop: '7px', fontWeight: 700 }}>{base}</Text>
                        <NumberInput
                            onChange={(valueString) => setValue(parse(valueString))}
                            value={value} // Directly store the numeric value
                            max={1000000000}
                        >
                            <NumberInputField onBlur={() => setValue(Number(value) || 0)} />
                        </NumberInput>
                    </Stack>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Stack direction="row">
                        <Text style={{ marginTop: '0px', fontWeight: 700 }}>{quote}</Text>
                        <Text>{convertedPrice}</Text>
                    </Stack>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Stack direction="row">
                        <Text style={{ marginTop: '0px', fontWeight: 700 }}>{exchange} Rate</Text>
                        <Tag colorScheme='teal'>{quoteSymbol} {rate}</Tag>
                    </Stack>
                </div>
            </Card>
        </>
    )
}

export default CurrencyConverter
