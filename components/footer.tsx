import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-8 px-2 py-10 lg:py-12",
        "border-t border-borders text-foreground-secondary",
      )}>
      <div className="text-center">
        <p>Built using Next.js, Tailwind CSS and Contentlayer.</p>
      </div>
    </footer>
  );
};

export default Footer;
