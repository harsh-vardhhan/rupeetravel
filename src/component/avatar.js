import Image from 'next/image';
import {
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'

const Avatar = ({ name, picture }) => {
    return (
        <Wrap style={{ marginTop: '20px', marginBottom: '20px' }}>
            <WrapItem>
                <Image
                    height={48}
                    width={48}
                    style={{ borderRadius: '24px' }}
                    alt={name}
                    src={picture}
                />
            </WrapItem>
            <WrapItem>
                <Text style={{ marginTop: '12px' }} as='b' fontSize='md'>{name}</Text>
            </WrapItem>
        </Wrap>
    )
}

export default Avatar
