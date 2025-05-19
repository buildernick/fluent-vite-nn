import * as React from "react";
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar } from "@fluentui/react-components";

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
  componentKey: "7d91afc25ca1aa3e9205558f273d64e9e3df71ff",
  mapper(figma: FigmaAvatarProps) {
    // Extract basic properties
    const size = figma.Size?.toLowerCase() ?? "32";
    const layout = figma.Layout ?? "Image";
    const color = figma.Color?.toLowerCase() ?? "neutral";

    // Handle text content for initials
    const text = figma.Text;

    // Check for presence and activity ring
    const showPresence = figma.Presence ?? false;
    const showActivityRing = figma["Activity ring"] ?? false;

    // Get the Image
    const imageUrl = figma.$findOneByName("Subtract");

    return (
      <Avatar
        size={size}
        layout={layout}
        color={color}
        // presence={showPresence}
        activityRing={showActivityRing}
        activeAppearance={showPresence ? "active" : "ring"}
        initials={text}
        badge={showPresence}
        name={text}
        shape="circular"
        // image={imageUrl}
      >
        {/* Render main content based on layout */}
        {/* {layout === "Initials" && text && <AvatarText>{text}</AvatarText>} */}

        {/* Render presence badge if enabled */}
        {/* {showPresence && <PresenceBadge />} */}

        {/* Render activity ring if enabled */}
        {/* {showActivityRing && <ActivityRing />} */}
      </Avatar>
    );
  },
});
