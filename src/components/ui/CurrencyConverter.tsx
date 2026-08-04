import { CurrencyConverterClient, type CurrencyConverterClientProps } from './CurrencyConverterClient';

export type CurrencyConverterProps = CurrencyConverterClientProps;

const CurrencyConverter: React.FC<CurrencyConverterProps> = (props) => {
  return <CurrencyConverterClient {...props} />;
};

export default CurrencyConverter;
