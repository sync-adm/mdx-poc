import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Component1 from "../components/Component1";

const stringMDX = `---
Component1:
 name: Mdx Rocks
---

<Component1 name={frontmatter.Component1.name} />
`;

const components = {
  Component1,
};

interface MDXRemoteTestProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

export default function MDXRemoteTest({ mdxSource }: MDXRemoteTestProps) {
  return (
    <>
      {/* <h1>Something about MDX:</h1> */}
      <MDXRemote {...mdxSource} components={components} />
    </>
  );
}

export const getStaticProps = async () => {
  const mdxSource = await serialize(stringMDX, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: "mdx",
    },
  });

  return { props: { mdxSource: mdxSource } };
};
