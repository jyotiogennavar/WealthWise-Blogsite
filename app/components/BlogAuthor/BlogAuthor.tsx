import React from "react";
import clsx from "clsx";
import styles from "./author.module.css";
import Image from "next/image";

function BlogAuthor() {
  return (
    <div className={clsx(styles.container)}>
      <h4>About the Author</h4>
      <div className={clsx(styles.flexContainer)}>
        <Image
          src="/image/author.png"
          alt="Author"
          width={30}
          height={30}
          className={clsx(styles.authorImage)}
        />
        <div>
          <h5>Jane Doe</h5>
          <p>Personal Finance Expert</p>
        </div>
      </div>
    </div>
  );
}

export default BlogAuthor;
