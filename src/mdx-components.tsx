import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="m-0 mb-6 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[40px]"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="m-0 mb-3 mt-10 font-display text-[27px] font-extrabold leading-[1.1] tracking-[-.02em]"
      {...props}
    />
  ),
  p: (props) => <p className="m-0 mb-5 text-[19px] leading-[1.6] text-ink-500 text-pretty" {...props} />,
  a: (props) => (
    <a className="text-link underline transition-colors duration-150 hover:text-magenta" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-5 flex list-disc flex-col gap-2 pl-6 text-[19px] leading-[1.6] text-ink-500" {...props} />
  ),
  em: (props) => <em className="text-slate-400" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
