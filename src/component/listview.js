import {
    ListItem,
    ListIcon,
    Tooltip,
} from '@chakra-ui/react'

const ListView = ({ features }) => {
    return features.map((feature) => (
        <ListItem key={feature.item}>
            <ListTip
                icon={feature.icon}
                color={feature.color}
            />
            {feature.title}
        </ListItem>
    ))
}

const ListTip = ({icon, color}) => {
    if (color === 'green.500') {
        return(
            <Tooltip label='detail'>
                <ListIcon as={icon} color={color} />
            </Tooltip>
        )
    } else {
        return(
            <Tooltip label='warning'>
                <ListIcon as={icon} color={color} />
            </Tooltip>
        ) 
    }

}

export default ListView