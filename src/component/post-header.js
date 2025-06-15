import Avatar from "./avatar";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

const PostHeader = ({ title, coverImage, author }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >
      <div style={{ maxWidth: 700, width: "100%" }}>
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
