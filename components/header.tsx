import Link from "@/components/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
];

const Header = () => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-10 w-full bg-neutral-100 ease-in-out dark:bg-neutral-900",
        "transition-colors",
      )}>
      <header className="max-w-container-center flex items-center py-4">
        <Link href="/">
          <div className="grid grid-cols-[max-content_auto] place-items-center gap-1">
            <div className="w-8 h-8">
              <img src="/assets/mh.png" alt="icon" />
            </div>
            <span className="text-lg font-bold mr-auto lg:text-xl text-black dark:text-white">
              blog
            </span>
          </div>
        </Link>
        <div className="w-max ml-auto">
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
        </div>
      </header>
      <Separator orientation="horizontal" />
    </nav>
  );
};

export default Header;
