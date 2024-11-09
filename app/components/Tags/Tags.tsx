import React from "react";
import clsx from "clsx";

import styles from "./tag.module.css";

interface TagProps {
  tag: string;
}

function Tag({
   tag = "Investment"
  }: TagProps): JSX.Element {
  return (
    <div className={clsx(styles.tag)}>
      <span>{tag}</span>
    </div>
  );
}

export default Tag;