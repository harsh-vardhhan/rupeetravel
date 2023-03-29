import {
    ListItem,
    ListIcon,
} from '@chakra-ui/react'

const ListView = ({features}) => {
    return features.map((feature) => (
        <ListItem as='h2' key={feature.item}>
            <ListIcon as={feature.icon} color={feature.color} />
            {feature.title}
        </ListItem>
    ))
}

export default ListView