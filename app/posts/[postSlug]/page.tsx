import React from "react";
import clsx from "clsx";
import styles from "./blogPage.module.css";
import BlogHero from "../../components/BlogHero/BlogHero";
import BlogContent from "../../components/BlogContent/BlogContent";
import Aside from "../../components/Aside";
import Tag from "app/components/Tags/Tags";
import BlogAuthor from "app/components/BlogAuthor";

function BlogPage() {
  return (
    <div className={clsx(styles.wrapper)}>
      <BlogHero
        title="Financial Goals: How to Set and Achieve Them in Any Stage of Life"
        description="From short-term savings to long-term investments, find out how to set realistic financial goals and build a plan to achieve them."
        publishedOn="2023-10-01"
        imageUrl="/image/homepage_banner.png"
      />

      <div className={clsx(styles.blogContentGrid)}>
        <BlogContent />
        <Aside />
      </div>

      <div className={clsx(styles.darkGreyBorder)}></div>

      <div className={clsx(styles.blogFooter)}>
        <BlogAuthor 
          authorName="Emily Adams" 
          designation="Financial Analyst" 
          authorProfilePic="/image/author.jpg" 
        />
        <Tag tag="Investment" />
      </div>
    </div>
  );
}

export default BlogPage;
