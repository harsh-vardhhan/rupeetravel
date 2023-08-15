import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = ({ title, blog=false }) => {
  return (
    <>
      <Link href="/">
        <Text fontSize="5xl" as="b">
          Rupee Travel
        </Text>
      </Link>
      {blog ? (
        <Text
          as="h1"
          fontSize={{ base: '24px', md: '40px', lg: '75px' }}
          style={{
            marginTop: "20px",
            fontWeight: 700,
          }}
        >
          {title}
        </Text>
      ) : (
        <Text
          as="h1"
          fontSize="xl"
          style={{
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          {title}
        </Text>
      )}
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Header;
