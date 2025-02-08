import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextandImage`.
 */
export type TextandImageProps = SliceComponentProps<Content.TextandImageSlice>;

/**
 * Component for "TextandImage" Slices.
 */
const TextandImage: FC<TextandImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for textand_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TextandImage;
