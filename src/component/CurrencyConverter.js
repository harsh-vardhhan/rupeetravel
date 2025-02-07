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

const CurrencyConverter = ({ region, amount, currencyPair, exchange, rate, base, quote, baseSymbol, quoteSymbol }) => {

    const format = (val) => baseSymbol + val
    const parse = (val) => val.replace(/^\{`baseSymbol`}/, '')
    const [value, setValue] = useState(amount)
    const convertedPrice = (value * rate).toLocaleString(region, { style: 'currency', currency: quote })

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
                            value={format(value)}
                            max={1000000000}
                        >
                            <NumberInputField />
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
