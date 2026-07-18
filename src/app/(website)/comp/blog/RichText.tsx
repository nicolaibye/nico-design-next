// components/RichText.tsx
import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import Image from "next/image";
import { ImageGallery } from "./ImageGallery";

type ImageGalleryBlock = {
  images: Array<{
    imageUrl: string;
    imageAlt?: string;
  }>;
};

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<ImageGalleryBlock>;

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
