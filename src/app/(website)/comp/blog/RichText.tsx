// components/RichText.tsx
import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import { ImageGallery } from "./ImageGallery";

type ImageGalleryBlock = {
  images: Array<{
    imageUrl: string;
    imageAlt?: string;
  }>;
};

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<ImageGalleryBlock>;

// Type '{ [k: string]: unknown; root: { type: string; children: { [k: string]: unknown; type: any; version: number; }[]; direction: "ltr" | "rtl" | null; format: "" | "start" | "left" | "center" | "right" | "end" | "justify"; indent: number; version: number; }; } | null | undefined' is not assignable to type 'SerializedEditorState<SerializedLexicalNode>'.
//   Type 'undefined' is not assignable to type 'SerializedEditorState<SerializedLexicalNode>'.
// RichText.tsx(21, 3): The expected type comes from property 'data' which is declared here on type 'IntrinsicAttributes & { data: SerializedEditorState<SerializedLexicalNode>; }'

export const RichText = ({
  data,
}: {
  data: Parameters<typeof RichTextConverter>[0]["data"];
}) => {
  return (
    <RichTextConverter<NodeTypes>
      data={data}
      converters={({ defaultConverters }) => ({
        ...defaultConverters,
        // override how <p> renders, to add your Tailwind classes
        paragraph: ({ node, nodesToJSX }) => (
          <p className="font-lexend text-lg font-light w-[85%] max-w-wide lg:w-[75%] mx-auto">
            {nodesToJSX({ nodes: node.children })}
          </p>
        ),
        blocks: {
          imageGallery: ({
            node,
          }: {
            node: SerializedBlockNode<ImageGalleryBlock>;
          }) => <ImageGallery images={node.fields.images} />,
        },
      })}
    />
  );
};
