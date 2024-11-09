import React from "react";
import clsx from "clsx";
import styles from "./author.module.css";
import Image, { StaticImageData } from "next/image";

interface BlogAuthorProps {
  authorName: string;
  designation: string;
  authorProfilePic: string | StaticImageData;
}

const BlogAuthor: React.FC<BlogAuthorProps> = ({ authorName, designation, authorProfilePic }) => {
  return (
    <div className={clsx(styles.container)}>
      <h4>About the Author</h4>
      <div className={clsx(styles.flexContainer)}>
        <Image
          src={authorProfilePic}
          alt={authorName}
          width={60}
          height={60}
          className={clsx(styles.authorImage)}
        />
        <div>
          <h5>{authorName}</h5>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
