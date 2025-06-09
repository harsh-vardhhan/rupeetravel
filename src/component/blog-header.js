import Link from 'next/link'
import {
    Text,
} from '@chakra-ui/react'

const Header = () => {
    return (
        <Text fontSize={{ base: "2xl", md: "2xl", lg: "7xl" }} as='b'>
            <Link href="/" className="hover:underline">
                Rupee Travel
            </Link>
        </Text>
    )
}

export default Header
