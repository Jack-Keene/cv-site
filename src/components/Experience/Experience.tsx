import React from "react";
import styles from './Experience.module.css'
export default function ExperiencePage() {
    return (
        <div className={`${styles.section}`} >
            <h1 className={styles.header}>experience.</h1>
            <Experience />
        </div>
    )
}

function Experience() {
    return (
        <div className={styles.job}>
            <div className={styles.timeline}>2022 - Present</div>
            <div className={styles.card}>
                <h3>Snowplow.io - Software Engineer</h3>
                <p className={styles.jobDescription}>
                    Delivered high quality production code to Snowplow trackers, data apps and accelerators.
                    Development of Snowplow's Python Tracker, introducing new features and refining the public API.
                    Producing RFCs, conducting thorough code reviews, and elevating documentation quality across multiple products.
                </p>
            </div>

        </div>
    )
}
