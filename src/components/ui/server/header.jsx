import Link from "next/link";

const Header = ({ title, blog = false }) => {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="max-w-6xl">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Rupee Travel
            </h1>
          </Link>
          <h2
            className={`mt-4 text-sm md:text-base lg:text-lg ${
              blog ? "font-normal" : "font-medium"
            }`}
          >
            {title}
          </h2>
          <nav className="mt-3 flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{title}</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
