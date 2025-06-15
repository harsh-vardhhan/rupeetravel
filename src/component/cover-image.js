import Link from "next/link";
import Image from "next/image";

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={800}
      height={400}
      className="w-full h-auto rounded-lg shadow-md"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
  return (
    <div style={{ width: "100%" }}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
