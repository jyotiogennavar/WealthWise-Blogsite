import React from "react";

import clsx from "clsx";

import styles from "./aside.module.css";

import Newsletter from "../Newsletter";
import SocialIcons from "../SocialIcons";

function Aside() {
  return (
    <div className={clsx(styles.aside)}>
      <div className={clsx(styles.container)}>
        <h4>Table of Contents</h4>
        <ul className={clsx(styles.tableOfContent)}>
          <li>
            <a href="#track-your-spending">Track Your Spending</a>
          </li>
          <li>
            <a href="#create-a-realistic-budget">Create a Realistic Budget</a>
          </li>
          <li>
            <a href="#set-clear-financial-goals">Set Clear Financial Goals</a>
          </li>
        </ul>
      </div>
      
      <div className={clsx(styles.greyBorder)}>

      </div>
      <Newsletter />
      <div className={clsx(styles.greyBorder)}>

      </div>
      <SocialIcons />
    </div>
  );
}

export default Aside;
