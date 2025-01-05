import { useMDXComponent } from "next-contentlayer/hooks";
import mdxComponents from "./mdx-components";

type MDXContentProps = {
  code: string;
};

const MDXContent = ({ code }: MDXContentProps) => {
  const Content = useMDXComponent(code);
  return (
    <div className="mdx-content text-zinc-500 dark:text-zinc-400">
      <Content components={mdxComponents} />
    </div>
  );
};

export default MDXContent;
