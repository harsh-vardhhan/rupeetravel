import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = ({ title, blog = false }) => {
  return (
    <>
      <Link href="/">
        <Text fontSize={{ base: "2xl", md: "2xl", lg: "7xl" }} as="b">
          Rupee Travel
        </Text>
      </Link>
      {blog ? (
        <Text as="h1" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          {title}
        </Text>
      ) : (
        <Text as="h1" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
