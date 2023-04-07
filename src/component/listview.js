import {
    ListItem,
} from '@chakra-ui/react'

const ListView = ({ features }) => {
    return features.map((feature) => {
        return (
            <ListItem key={feature.item}>
                {feature.title}
            </ListItem>
        )
    })
}

export default ListView