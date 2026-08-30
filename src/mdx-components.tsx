import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-extrabold text-foreground mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold text-foreground mt-8 mb-3" {...props} />,
  p: (props) => <p className="text-foreground/80 leading-relaxed mb-4" {...props} />,
  a: (props) => <a className="text-brand-blue underline hover:no-underline" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 mb-4 text-foreground/80" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
