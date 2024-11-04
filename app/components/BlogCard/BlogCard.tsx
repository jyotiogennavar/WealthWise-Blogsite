import React from "react";
import clsx from "clsx";
import Image from "next/image";

import styles from "./BlogCard.module.css";

interface BlogCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
}

function BlogCard({
  imageUrl = "/public/image/blog_card.png",
  tag = "Investing",
  title = "Financial Goals: How to Set and Achieve Them in Any Stage of Life",
  description = "From short-term savings to long-term investments, find out how to set realistic financial goals and build a plan to achieve them.",
}: BlogCardProps) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.blogCardImgContainer)}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={clsx(styles.blogCardTextContainer)}>
        <span className={clsx(styles.blogTag)}>{tag}</span>
        <h3 className={clsx(styles.blogCardTitle)}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
