import Header from "../../components/ui/server/header";
import { Tweet } from "react-tweet";

export const dynamic = "force-static";

export const metadata = {
  title: "Rupee Travel | Da Nang Vietnam hotel beach experiences",
  description: "Da Nang Vietnam hotel beach experiences",
  openGraph: {
    title: "Rupee Travel | Da Nang Vietnam hotel beach experiences",
    description: "Da Nang Vietnam hotel beach experiences",
    url: "https://www.rupeetravel.com/da-nang-vietnam-experiences",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Da Nang Vietnam hotel beach experiences | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Da Nang Vietnam hotel beach experiences",
    description: "Da Nang Vietnam hotel beach experiences",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/da-nang-vietnam-experiences",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Header title={"Budget experiences of Da Nang, Vietnam"} />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Tweet id="1730045655782142016" />
            <Tweet id="1728960410685210905" />
            <Tweet id="1729377013121863722" />
            <Tweet id="1737152380578509304" />
            <Tweet id="1732289146855866432" />
            <Tweet id="1729421913003618655" />
            <Tweet id="1730166249802629205" />
            <Tweet id="1733011468139032687" />
            <Tweet id="1729812022026502559" />
          </div>
        </div>
      </main>
    </>
  );
}
