"use client";

import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import { useTheme } from "../theme/ThemeProvider";
import styles from "./AvatarDemo.module.css";

/**
 * Avatar Demo page component that displays an Avatar and an image
 */
const AvatarDemo: React.FC = () => {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";

  return (
    <div
      className={`${styles.container} ${isDark ? styles.darkContainer : ""}`}
    >
      <div className={styles.avatarWrapper}>
        <Avatar size="40" layout="Image" color="neutral" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d849d8d95cc1eb6c99e8f22099bb15f966127b1"
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default AvatarDemo;
