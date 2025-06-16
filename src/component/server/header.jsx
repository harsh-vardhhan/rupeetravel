import Link from "next/link";

const Header = ({ title, blog = false }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl">
        <Link href="/">
          <h1 className="text-2xl md:text-2xl lg:text-7xl font-bold">
            Rupee Travel
          </h1>
        </Link>
        <h2 className="text-sm md:text-base lg:text-lg mt-2">{title}</h2>
        <nav className="mt-2">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-500">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Header;
