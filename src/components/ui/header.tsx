import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface HeaderProps {
  title?: string;
  blog?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, blog = false }) => {
  return (
    <header className="relative md:sticky md:top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="max-w-6xl">
          <div className="flex items-center gap-2">
            <Link href="/" className="inline-flex items-center group">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-green-600">
                Rupee Travel
              </h1>
            </Link>
          </div>
          {title && (
            <>
              <h2
                className={`mt-2 text-sm sm:text-base md:text-lg text-muted-foreground ${
                  blog ? "font-normal" : "font-medium"
                }`}
              >
                {title}
              </h2>
              <nav className="mt-2 flex items-center space-x-1.5 text-xs sm:text-sm">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
                <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-md">
                  {title}
                </span>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
