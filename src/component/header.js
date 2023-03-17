import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const Header = ({ title }) => {
    return (
        <>
            <Link href="/">
                <Heading as='h1' size='2xl'>Rupee Travel</Heading>
            </Link>
            <Text fontSize='xl' style={{ marginTop: '20px' }}>{title}</Text>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link href="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    )
}

export default Header;