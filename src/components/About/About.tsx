import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faReact, faPython, faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styles from './About.module.css'

export default function AboutPage() {

    return (
        <div className={`${styles.section}`}>
            <h1 className={styles.header}>about.</h1>
            <p>
                Welcome! I'm Jack Keene, a full-stack software engineer at <a className={styles.link} href="https://snowplow.io/" target="_blank">Snowplow.io</a>. Specializing in Python, React, and TypeScript,
                I enjoy developing efficient solutions for complex challenges.
            </p>
            <p>
                My time at Snowplow.io has equipped me with expertise in creating robust data applications,
                combining the power of Python for backend functionality with the versatility of React and TypeScript for seamless user interfaces across a number of products.
            </p>
            <p>
                I'm passionate about continual learning and staying updated with the latest tech advancements, ensuring I deliver innovative solutions that make a real difference.
            </p>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faReact as IconProp} />
                <FontAwesomeIcon icon={faPython as IconProp} />
                <FontAwesomeIcon icon={faJs as IconProp} />
                <FontAwesomeIcon icon={faHtml5 as IconProp} />
                <FontAwesomeIcon icon={faCss3 as IconProp} />
            </div>
        </div>
    )

}