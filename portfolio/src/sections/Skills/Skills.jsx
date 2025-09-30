import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../Common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
            <hr />
            <SkillList src={checkMarkIcon} skill="C (Basic)"/>
            <SkillList src={checkMarkIcon} skill="C++ (Basic)"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="SQL"/>
            <hr />
            <SkillList src={checkMarkIcon} skill="Computer Networking"/>
            <SkillList src={checkMarkIcon} skill="DBMS"/>
            <SkillList src={checkMarkIcon} skill="OOP"/>
            <SkillList src={checkMarkIcon} skill="OS"/>
        </div>
        
    </section>
  )
}

export default Skills
