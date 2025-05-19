import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ImageCircle20Filled } from "@fluentui/react-icons";

// ❖ Image Circle
interface FigmaImageCircleProps extends BaseFigmaProps {
  Size?: "16" | "20" | "24" | "28" | "32" | "48";
  Theme?: "Regular" | "Filled";
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Image Circle",
  componentKey: "e9f7b93c6ee2eedb41f5191fc8594e16b6dfe3f8",
  mapper(figma: FigmaImageCircleProps) {
    // Extract props with defaults
    const size = figma.Size ?? "32";
    const theme = figma.Theme ?? "Regular";

    // Find image URL from the Figma tree
    const imageNode = figma.$findOne(
      (node) => node.$type === "RECTANGLE" || node.$type === "VECTOR",
    );
    const imageUrl = imageNode?.$imageUrl;

    return (
      <ImageCircle20Filled />
    );
  },
});
