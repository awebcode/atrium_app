import React from "react";
import styles from "./home.module.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import Link from "next/link";
import Image from "next/image";

const RightSide = () => {
  return (
    <div className={styles.containerx}>
      <div className={styles.content}>
        <h3 className={styles.heading1}>DEVELOPER</h3>
        <h1 className={styles.heading}>BRIAN SMITH</h1>
        <p className={styles.mutedText}>
          DEVELOPER E-mail: info@example.com Minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
          error sit. Voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Aliquam
          bibendum lacus quis nulla dignissim faucibus.
        </p>
        <div className={styles.socialButtons}>
          {/* Add your social buttons here */}
          {/* For example: */}
          <Link href="#" className={styles.socialButton}>
            <Facebook />
          </Link>
          <Link href="#" className={styles.socialButton}>
            <Twitter />
          </Link>
          <Link href="#" className={styles.socialButton}>
            <Instagram />
          </Link>
          <Link href="#" className={styles.socialButton}>
            <LinkedIn />
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/man2.png"
          alt="Image"
          className={styles.image}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default RightSide;
