import React from "react";

import clsx from "clsx";
import Image from "next/image";

import styles from "./socialIcons.module.css";

function SocialIcons() {
  return (
    <div className={clsx(styles.wrapper)}>
      <h4>Share this article</h4>
      <div className={clsx(styles.iconContainer)}>
        <a href="https://www.facebook.com">
        <Image src="/image/facebook-logo.svg" alt="Facebook" width={30} height={30} />
      </a>
      <a href="https://www.twitter.com">
        <Image src="/image/twitter-logo.svg" alt="Twitter" width={30} height={30} />
      </a>
      <a href="https://www.linkedin.com">
        <Image src="/image/linkedin-logo.svg" alt="LinkedIn" width={30} height={30} />
      </a>
      <a href="https://www.linkedin.com">
        <Image src="/image/whatsapp-logo.svg" alt="Whatsapp" width={30} height={30} />
      </a>
      </div>
      
    </div>
  );
}

export default SocialIcons;