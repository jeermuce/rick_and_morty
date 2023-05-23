import style from "./About.module.css";
import { Link } from "react-router-dom";
import React from "react";
import logoWithName from "../../assets/logo_syrin_name.png";
export default function About() {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <section className={style.logoContainer}>
          <img
            className={style.logoWithName}
            src={logoWithName}
            alt="logo_with_name"
          />
        </section>
        <section className={style.textContainer}>
          <h2>My name is Ernesto, </h2>
          <p>
            I'm a aspiring software engineer, currently learning Web Development
            Full Stack at soyHenry, and enrolled in a Software Engineering
            degree at the Universidad Autónoma de Chihuahua.
          </p>
          <p>
            This website is a project assigned as a way to integrate all the
            knowledge we've acquired during the course. In the Front End stage
            of the bootcamp, I used React, Redux, and CSS modules to access an
            API available at https://rickandmortyapi.com/ and display
            information about the characters of the show Rick and Morty. I will
            soon be constructing a Back End to this project as I advance in the
            course.
          </p>
          <p>I hope you enjoy it!</p>
          <a
            className={style.sourceButton}
            href="https://github.com/jeermuce/rick_and_morty"
          >
            <img
              src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github"
              alt="GitHub Badge"
            />
          </a>
        </section>

        <p></p>
      </div>
    </div>
  );
}
