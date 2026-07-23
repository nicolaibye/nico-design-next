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

type RichTextProps = {
  data: Parameters<typeof RichTextConverter>[0]["data"] | null | undefined;
  className?: string;
};

export const RichText = ({ data, className }: RichTextProps) => {
  if (!data) return null;

  return (
    <RichTextConverter<NodeTypes>
      data={data}
      converters={({ defaultConverters }) => ({
        ...defaultConverters,
        paragraph: ({ node, nodesToJSX }) => (
          <p
            className={
              className ??
              "font-lexend font-light w-[85%] max-w-wide lg:w-[75%] mx-auto"
            }
          >
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