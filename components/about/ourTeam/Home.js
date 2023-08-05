import React from "react";
import styles from "./home.module.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/a.jpg" alt="Image" className={styles.image}  height={100} width={100}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading1}>WELCOME TO OUR</h3>
        <h1 className={styles.heading}>
          CREATIVE AGENCY OF TALENTED DEVELOPERS & DESIGNERS
        </h1>
        <p className={styles.mutedText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate. Velit esse cillum dolore eu
          fugiat nulla pariatur..
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
    </div>
  );
};

export default Home;
