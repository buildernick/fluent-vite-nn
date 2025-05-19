// mappings/genericMapper.mapper.tsx
import * as React from "react";
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { AlertBadge20Filled, Circle20Filled } from "@fluentui/react-icons";
import { AlignSpaceBetweenHorizontal20Filled } from "@fluentui/react-icons";
import * as Icons from "@fluentui/react-icons";

figmaMapping({
  genericMapper(figma: BaseFigmaProps) {

    // console.log("Im here");

    // Safely check if properties exist
    if (!('Theme' in figma) || !('Size' in figma) || false) {
      return undefined;
    }

    console.log("step2");
    // console.log(figma);

    const theme = figma.Theme;
    const size = figma.Size;
    console.log("step3");
    const compName = figma.$name.replace(/\s+/g, '');
    console.log("step4");
    // console.log(compName);
    // console.log(theme);
    // console.log(size);

    // Check if theme and size are valid
    const validThemes = ["Regular", "Filled"];
    const validSizes = ["16", "20", "24"];
    
    if (theme && size && validThemes.includes(theme) && validSizes.includes(size)) {
      console.log(compName);
      console.log(theme);
      console.log(size);
      console.log("<" + compName + size + theme + " />")
      return  "<" + compName + size + theme + " />";

    }
    return undefined;
  },
});