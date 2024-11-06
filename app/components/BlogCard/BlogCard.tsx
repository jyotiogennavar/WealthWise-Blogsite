"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./BlogCard.module.css";
interface BlogCardProps {
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
}

function BlogCard({
  imageUrl = "/image/blog_card.png",
  tag = "Investing",
  title = "Financial Goals: How to Set and Achieve Them in Any Stage of Life",
  description = "From short-term savings to long-term investments, find out how to set realistic financial goals and build a plan to achieve them.",
}: BlogCardProps) {
  return (
    <div className={clsx(styles.wrapper)}>
      <motion.div
        className={clsx(styles.blogCardImgContainer)}
        whileHover={{ scale: 1.03 }} // Slight zoom effect
        transition={{ duration: 0.3 }} // Smooth transition
      >
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </motion.div>
      <div className={clsx(styles.blogCardTextContainer)}>
        <span className={clsx(styles.blogTag)}>{tag}</span>
        <h3 className={clsx(styles.blogCardTitle)}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
