import config from "@/lib/siteConfig";
import Link from "@/components/link";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/theme-provider";
import { Separator } from "@/components/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
];

const Header = () => {
  return (
    <ThemeProvider
      // attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <nav
        className={cn(
          "sticky top-0 z-10 w-full bg-neutral-100 ease-in-out dark:bg-neutral-900",
          "transition-colors",
        )}>
        <header className={cn("max-w-container-center flex items-center py-4")}>
          <Link
            href="/"
            className={cn(
              "text-lg font-bold mr-auto lg:text-xl text-black dark:text-white",
            )}>
            {config.title}
          </Link>
          <nav>
            <ul className={cn("flex items-center gap-4 md:gap-6 lg:gap-8")}>
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="lg:text-lg lg:font-medium text-black dark:text-white">
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </header>
        <Separator orientation="horizontal" />
      </nav>
    </ThemeProvider>
  );
};

export default Header;
