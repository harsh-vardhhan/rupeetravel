import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = ({ title, blog = false }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl">
        <Link href="/">
          <Text fontSize={{ base: "2xl", md: "2xl", lg: "7xl" }} as="b">
            Rupee Travel
          </Text>
        </Link>
        {blog ? (
          <Text
            as="h1"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            className="mt-2"
          >
            {title}
          </Text>
        ) : (
          <Text
            as="h1"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            className="mt-2"
          >
            {title}
          </Text>
        )}
        <Breadcrumb className="mt-2">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Header;
