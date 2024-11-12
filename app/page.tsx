import React from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "./homepage.module.css";

import BlogCardGrid from "./components/BlogCardGrid";

function Home() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.bannerImgContainer)}>
        <Image
          src="/image/homepage_banner.png"
          alt="Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        <div className={clsx(styles.bannerTextContainer)}>
          <div className={clsx(styles.textWidth)}>
            <span>Featured</span>
            <h1 className={clsx(styles.bannerText)}>
              Financial Goals: How to Set and Achieve Them in Any Stage of Life
            </h1>
            <p>
              From short-term savings to long-term investments, find out how to
              set realistic financial goals and build a plan to achieve them.
            </p>
          </div>
        </div>
      </div>
      <BlogCardGrid />
    </div>
  );
}

export default Home;
