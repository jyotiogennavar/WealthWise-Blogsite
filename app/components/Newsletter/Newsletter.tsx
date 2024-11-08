import React from "react";
import clsx from "clsx";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={clsx(styles.newsletter)}>
      <p>
        Get the latest news, tips, and advice on personal finance delivered
        straight to your inbox.
      </p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe to Newsletter</button>
      </form>
      <span>By subscribing you agree with our Privacy Policy</span>
    </div>
  );
}


export default Newsletter;
