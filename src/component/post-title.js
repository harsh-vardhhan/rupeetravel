import { Heading } from "@chakra-ui/react";

const PostTitle = ({ children }) => {
  return (
    <Heading h1 size="4xl" style={{ marginTop: "20px" }}>
      {children}
    </Heading>
  );
};

export default PostTitle;
