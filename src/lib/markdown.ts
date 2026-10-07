import { remark } from "remark";
import html from "remark-html";
import { defaultHandlers } from "mdast-util-to-hast";
import { defaultSchema } from "hast-util-sanitize";

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    img: [...(defaultSchema.attributes?.img ?? []), "loading"],
  },
};

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, {
      sanitize: schema,
      handlers: {
        image(state, node) {
          const element = defaultHandlers.image(state, node);
          element.properties.loading = "lazy";
          return element;
        },
      },
    })
    .process(markdown);
  return result.toString();
}
