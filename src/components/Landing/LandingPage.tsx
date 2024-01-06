import React from "react";
import styles from './LandingPage.module.css'
import ExperiencePage from "../Experience/Experience";
import AboutPage from "../About/About";
import Contact from "../Contact/Contact";
import ProjectsPage from "../Projects/Projects";

export default function LandingPage() {
    return (
        <main className={`${styles.main} ${styles.backgroundTextured}`}>
            <div className={`${styles.content} `} id="about">
                <AboutPage />
            </div>
            <div className={`${styles.content} `} id="experience">
                <ExperiencePage />
            </div>
            <div className={`${styles.content} `} id="projects">
                <ProjectsPage />
            </div>
        </main >)
}