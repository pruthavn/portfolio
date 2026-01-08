import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../Common/ProjectCard'
import todoImg from '../../assets/todo-img.jpg'
import docsImg from '../../assets/docs-img.jpg'
import twoGoodImg from '../../assets/two-good.jpeg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={twoGoodImg} link='https://github.com/pruthavn/two-good-co.git'
            h3="Two-Good-Co"
            p="Awwwards Replica"
            />
            <ProjectCard src={todoImg} link='https://github.com/pruthavn/Todo-App.git'
            h3="ToDo App"
            p="Task Manager WebApp"
            />
            <ProjectCard src={docsImg} link='https://github.com/pruthavn/Weather-App.git'
            h3="Weather App"
            p="Real-Time Weather at a Glance"
            />
        </div>
    </section>
  )
}

export default Projects
