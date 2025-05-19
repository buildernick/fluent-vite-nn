import * as React from "react";
import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Button } from "@fluentui/react-components";
import * as Icons from "@fluentui/react-icons";

// ❖ Button
interface FigmaButtonProps extends BaseFigmaProps {
  "Menu button"?: boolean;
  Label?: string;
  Focus?: boolean;
  "24x Filled"?: ChildrenNode; // when "Icon" is true
  "20x Filled"?: ChildrenNode; // when "Icon" is true
  "24x Outline"?: ChildrenNode; // when "Icon" is true
  "20x Outline"?: ChildrenNode; // when "Icon" is true
  Icon?: boolean;
  Style?:
    | "Primary"
    | "Secondary (Default)"
    | "Outline"
    | "Subtle"
    | "Transparent";
  State?: "Rest" | "Hover" | "Pressed" | "Selected" | "Disabled";
  Size?: "Large" | "Medium (Default)" | "Small";
  Layout?: "Icon and label (Default)" | "Icon only";
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Button",
  componentKey: "86e9302528b3ed2b7bef1cf7e3f740f2382ba26d",
  mapper(figma: FigmaButtonProps) {
    // Extract main properties
    const style = figma.Style?.toLowerCase() ?? "secondary";
    const state = figma.State?.toLowerCase() ?? "rest";
    const size = figma.Size?.toLowerCase() ?? "medium";
    const layout = figma.Layout ?? "Icon and label (Default)";
    // Handle icon selection
    // if icon is true, get the icon name from the figma file by getting the first child node of the icon property
    // const iconNode = figma.$children[0];
    const iconName = "<Icons." + figma.$children[0]?.name.replace(/\s+/g,'') + "20Filled />";

    // Determine if it's icon-only mode
    const isIconOnly = layout === "Icon only";

    return (
      <Button
        variant={style}
        state={state}
        size={size}
        disabled={state === "disabled"}
        isIconOnly={isIconOnly}
        iconPosition="before"
        icon={iconName}
        // icon={iconNode}
        // icon={iconName ? Icons[iconName as keyof typeof Icons] : undefined}
      >

        {/* Render label if not icon-only mode */}
        {!isIconOnly && figma.Label && <span>{figma.Label}</span>}

        {/* Render chevron if menu button is enabled */}
        {/* {figma["Menu button"] && (
          <Chevron>{figma.$findOneByName("Chevron")?.$children}</Chevron>
        )} */}
      </Button>
    );
  },
});
