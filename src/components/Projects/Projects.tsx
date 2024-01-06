import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faReact, faPython, faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styles from './Projects.module.css'

export default function ProjectsPage() {
    return (
        <div className={`${styles.section}`}>
            <h1 className={styles.header}>projects.</h1>
        </div>
    )

}