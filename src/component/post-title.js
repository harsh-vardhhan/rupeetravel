import { Heading } from "@chakra-ui/react";

const PostTitle = ({ children }) => {
  return (
    <Heading
      h1
      fontSize={{ base: "24px", md: "40px", lg: "75px" }}
      style={{ marginTop: "20px" }}
    >
      {children}
    </Heading>
  );
};

export default PostTitle;
