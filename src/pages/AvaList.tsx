"use client";

import * as React from "react";
import { Avatar } from "@fluentui/react-components";
import { useTheme } from "../theme/ThemeProvider";
import styles from "./AvaList.module.css";

const AvaList: React.FC = () => {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";

  return (
    <div
      className={`${styles.listContainer} ${isDark ? styles.darkContainer : ""}`}
    >
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <img
            src="/search-icon.svg"
            alt="Search"
            className={styles.searchIcon}
          />
          <div className={styles.searchText}>Search</div>
        </div>
      </div>

      <div className={styles.listCell}>
        <div className={styles.avatarTextContainer}>
          <div className={styles.avatarWrapper}>
            <Avatar
              size="40"
              layout="Image"
              color="neutral"
              activeAppearance="ring"
              initials="NE"
              name="NE"
              shape="circular"
              className={styles.avatar}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b7a9b4e2e4de4acb8ca62a526e285e31/1f27cc14fa7edb597d76de04874577ce6661e26e?placeholderIfAbsent=true"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.primaryText}>Colin replied</div>
            <div className={styles.secondaryText}>Does anyone know whe...</div>
            <div className={styles.tertiaryText}>Community</div>
          </div>
        </div>
        <div className={styles.timestamp}>12:51 PM</div>
      </div>

      <div className={`${styles.listCell} ${styles.highlightedCell}`}>
        <div className={styles.avatarTextContainer}>
          <div className={styles.avatarWrapper}>
            <Avatar
              size="40"
              layout="Image"
              color="neutral"
              activeAppearance="active"
              initials="SP"
              name="SP"
              shape="circular"
              badge
              className={styles.avatar}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.primaryText}>Daisy reacted</div>
            <div className={styles.secondaryText}>
              I love how this turned o...
            </div>
            <div className={styles.tertiaryText}>Event Planning</div>
          </div>
        </div>
        <div className={styles.timestamp}>11:24 PM</div>
      </div>

      <div className={styles.listCell}>
        <div className={styles.avatarTextContainer}>
          <div className={styles.avatarWrapper}>
            <Avatar
              size="40"
              layout="Image"
              color="neutral"
              activeAppearance="active"
              initials="TD"
              name="TD"
              shape="circular"
              badge
              className={styles.avatar}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.primaryText}>Henry reacted</div>
            <div className={styles.secondaryText}>
              I love how this turned o...
            </div>
            <div className={styles.tertiaryText}>Event Planning</div>
          </div>
        </div>
        <div className={styles.timestamp}>Yesterday</div>
      </div>

      <div className={styles.listCell}>
        <div className={styles.avatarTextContainer}>
          <div className={styles.avatarWrapper}>
            <Avatar
              size="40"
              layout="Image"
              color="neutral"
              activeAppearance="active"
              initials="WH"
              name="WH"
              shape="circular"
              badge
              className={styles.avatar}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.primaryText}>Mona mentioned you</div>
            <div className={styles.secondaryText}>Kat Larsson the docum...</div>
            <div className={styles.tertiaryText}>Contoso Team</div>
          </div>
        </div>
        <div className={styles.timestamp}>Yesterday</div>
      </div>
    </div>
  );
};

export default AvaList;
