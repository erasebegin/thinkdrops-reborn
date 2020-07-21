import React, { Component } from "react";
import Link from "gatsby-link";
import { BsFillEnvelopeFill, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import styles from "./navigation.module.css";

export default class navigation extends Component {
  state = {
    isOpen: false,
    isOver: false,
  };

  openTray = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };

  render() {
    return (
      <div className={styles.navigation}>
        <Link to="/" className={styles.homeButton}>
          Home
        </Link>

        <div className={styles.contactContainer}>
          <div className={styles.contactButton} onClick={() => this.openTray()}>
            {<BsFillEnvelopeFill />}
            <span className={styles.contactWord}>Contact</span>
          </div>
          <div
            className={
              this.state.isOpen ? styles.contactTrayOpen : styles.contactTray
            }
          >
            <a
              href="https://www.github.com/erasebegin"
              className={styles.contactLink}
            >
              <FaGithubAlt />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-haupt/"
              className={styles.contactLink}
            >
              <AiFillLinkedin />
            </a>
            <a
              href="mailto:chris@thinkdrops.art"
              className={styles.contactLink}
            >
              <BsFillEnvelopeOpenFill />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
