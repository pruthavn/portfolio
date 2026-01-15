import styles from './HeroStyles.module.css'
import herImg from '../../assets/her-img.jpg'
import githubIcon from '../../assets/github-dark.svg'
import linkedinIcon from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} 
        src={herImg} 
        alt="profile picture of Prutha Nawghare" />
        </div>
        <div className={styles.info}>
            <h1>Prutha 
            <br />
            Nawghare
            </h1>
            <h2>Fullstack Developer</h2>
            <span>
                <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github Icon"/>
                </a>
                <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn Icon"/>
                </a>
            </span>
            <p className={styles.description}>
              Full-Stack Developer with Passion
            </p >
            <a href={CV} target='_blank'>
                <button className='hover' >
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
