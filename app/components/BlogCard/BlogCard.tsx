import React from "react";
import clsx from "clsx";
import Image from "next/image";

import styles from "./BlogCard.module.css";

function BlogCard() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.blogCardImgContainer)}>
        <Image
          src="/image/blogCard_card.png"
          alt="Blog Card"
          layout="fill"
          objectFit="cover"
        />

        <div className={clsx(styles.blogCardTextContainer)}>
          <span className={clsx(styles.blogTag)}>Featured</span>
          <h3 className={clsx(styles.blogCardTitle)}>
            Financial Goals: How to Set and Achieve Them in Any Stage of Life
          </h3>
          <p>
            From short-term savings to long-term investments, find out how to
            set realistic financial goals and build a plan to achieve them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
