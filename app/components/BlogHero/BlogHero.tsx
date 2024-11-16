import React from "react";
import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";

import styles from "./BlogHero.module.css";

interface BlogHeroProps {
  title: string;
  description: string;
  publishedOn: string;
  imageUrl: string;
}

function BlogHero({
  title = "Financial Goals: How to Set and Achieve Them in Any Stage of Life",
  description = "From short-term savings to long-term investments, find out how to set realistic financial goals and build a plan to achieve them.",
  publishedOn = "2021-06-01",
  imageUrl = "/image/blog_hero.png",
}: BlogHeroProps) {
  const formattedDate = format(new Date(publishedOn), "MMMM dd, yyyy");

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.heroContent)}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <span className={clsx(styles.blogHeroDate)}>Published on {formattedDate}</span>
      <div className={clsx(styles.blogHeroImageContainer)}>
        <Image
          src={imageUrl}
          alt="Blog Hero Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

export default BlogHero;
