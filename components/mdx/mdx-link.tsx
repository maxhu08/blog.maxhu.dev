import config from "@/lib/siteConfig";
import Link from "@/components/link";

const MarkdownLink = ({
  target,
  href = "",
  ...restProps
}: React.ComponentPropsWithoutRef<"a">) => {
  const isExternalLink = href.startsWith("https");
  const linkTarget =
    isExternalLink && config.blog.openAllExternalLinksInNewTab
      ? "_blank"
      : target;
  return (
    <Link
      showIcon={true}
      href={href}
      target={linkTarget}
      {...restProps}
      className="text-blue-500 hover:text-blue-600 transition duration-[250ms] ease-in-out cursor-pointer"
    />
  );
};

export default MarkdownLink;
