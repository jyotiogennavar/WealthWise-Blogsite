import React from "react";
import clsx from "clsx";

import styles from "./Grid.module.css";
import BlogCard from "../BlogCard/BlogCard";

function BlogCardGrid() {
  return (
    <div className={clsx(styles.wrapper)}>
      <h2>Latest Posts</h2>
      <div className={clsx(styles.grid)}>
        <BlogCard
          imageUrl="/image/image_1.png"
          tag="Personal Finance"
          title="Building a Strong Financial Foundation: Essential Steps for Beginners"
          description="Learn how to take control of your money with simple strategies to save, invest, and manage debt effectively."
        />
        <BlogCard
          imageUrl="/image/image_2.png"
          tag="Budgeting"
          title="Mastering the Art of Budgeting: How to Track and Cut Expenses"
          description="Discover practical tips to create a budget that works for you, and make smarter financial decisions without feeling restricted."
        />
        <BlogCard
          imageUrl="/image/image_3.png"
          tag="Investing"
          title="Investing 101: A Beginner’s Guide to Growing Your Wealth"
          description="Unpack the basics of investing and explore low-risk strategies to start building your financial portfolio today."
        />

        <BlogCard
          imageUrl="/image/image_1.png"
          tag="Personal Finance"
          title="Building a Strong Financial Foundation: Essential Steps for Beginners"
          description="Learn how to take control of your money with simple strategies to save, invest, and manage debt effectively."
        />
        <BlogCard
          imageUrl="/image/image_2.png"
          tag="Budgeting"
          title="Mastering the Art of Budgeting: How to Track and Cut Expenses"
          description="Discover practical tips to create a budget that works for you, and make smarter financial decisions without feeling restricted."
        />
        <BlogCard
          imageUrl="/image/image_3.png"
          tag="Investing"
          title="Investing 101: A Beginner’s Guide to Growing Your Wealth"
          description="Unpack the basics of investing and explore low-risk strategies to start building your financial portfolio today."
        />
      </div>
    </div>
  );
}

export default BlogCardGrid;
