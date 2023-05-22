import { evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
import remarkFrontmatter from "remark-frontmatter";
import Component1 from "../components/Component1";
import { truncate } from "fs";

const stringMDX = `---
Component1:
 name: Mdx Rocks
---

<Component1 name={props.Component1.name} />
`;

export default function EvaluateTest() {
  const remarkPlugins = [remarkFrontmatter];

  const { default: Render } = evaluateSync(stringMDX, {
    ...runtime,
    useMDXComponents,
    useDynamicImport: true,
    remarkPlugins,
    Fragment: "div",
    development: false,
  });

  const pageProps = { Component1: { name: "Mdx Rocks" } };
  return (
    <>
      {/* <h1>Something about MDX:</h1> */}
      {Render({ components: { Component1 }, ...pageProps })}
    </>
  );
}
