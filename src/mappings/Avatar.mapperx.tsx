import * as React from "react";
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar } from "@fluentui/react-components";
import * as Icons from "@fluentui/react-icons";

// ❖ Avatar
interface FigmaAvatarProps extends BaseFigmaProps {
  "Activity ring"?: boolean;
  Presence?: boolean;
  Text?: string;
  Layout?: "Image" | "Icon" | "Initials";
  Size?:
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "48"
    | "56"
    | "64"
    | "72"
    | "96"
    | "120";
  Color?: "Neutral" | "Brand" | "Colored";
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Avatar",
  componentKey: "c8f3d8ea3b489a45f19cc482b076648922d4440a",
  mapper(figma: FigmaAvatarProps) {
    // Extract core props with defaults
    const size = figma.Size ?? "32";
    const layout = figma.Layout ?? "Image";
    const color = figma.Color ?? "Neutral";
    const iconName = "<Icons." + figma.$children[0]?.name.replace(/\s+/g,'') + "20Filled />";

    // Handle text content for initials
    const text = figma.Text;

  return (
    <Avatar
      size={size}
      layout={layout}
      // if Layout is Icon, then make icon={figma.$children[0]}
      icon={iconName}
      image={figma.$findOneByName("Subtract")}
      >
      </Avatar>
    );
  },
});
