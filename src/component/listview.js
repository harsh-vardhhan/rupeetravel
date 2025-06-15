import {
    Text
} from '@chakra-ui/react'

const ListView = ({ features }) => {
    return features.map((feature) => {
        return (
            <Text as='h2' size='xs' key={feature.item}>
                {feature.title}
            </Text>
        )
    })
}

export default ListView;