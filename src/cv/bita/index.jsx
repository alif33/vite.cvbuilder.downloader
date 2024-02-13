import Styles from "./styles"
import FontSizes from "../fonts-sizes"
import Colors from "../colors"
import { concat } from "../../helpers/classes"

export default function Bita({heading, experience, education, skills, summary}) {
  const size = "lg"
  const styles = Styles(size)  
  const fontSizes = FontSizes(size)
  const colors = Colors("primary")

  return (
    <div className={`bg-white shadow-lg ${styles.body}`}>
      <hr className={concat(styles.hrTop, colors.border)}/>
      {/* HEAD */}
      <div className="text-center">
          <h1 className={fontSizes.heading}>{heading?.firstName} {heading?.surName}</h1>
          <span className={fontSizes.paragraph}>{`${heading?.city}, ${heading?.postalCode}, ${heading?.country}`} | {heading?.email} | {heading?.phone}</span>
      </div>
      {/* SUMMARY */}
      <div className={styles.section}>
          <h1 className={fontSizes.sectionTitle}>Summary</h1>
          <hr className={concat(styles.hr, colors.border)}/>
          {summary && <h2 className={concat(fontSizes.paragraph, styles.sectionBody)} dangerouslySetInnerHTML={{__html: summary}}></h2>}
      </div>
      {/* EMPERIENCE */}
      <div className="">
          <h1 className={fontSizes.sectionTitle}>Experience</h1>
          <hr className={concat(styles.hr, colors.border)}/>
          {experience.map((job, index)=><div className={styles.sectionBody} key={index}>
            <h2 className={fontSizes.title}>{job.jobTitle}, </h2>
            <span className={fontSizes.paragraph}>{job.employer}, {job.jobCity}, {job.jobCountry}</span>
            {job?.description && <h2 className={fontSizes.paragraph} dangerouslySetInnerHTML={{__html: job?.description}}></h2>}
          </div>)}
      </div>
      {/* SKILLS */}
      <div className={styles.section}>
        <h1 className={fontSizes.sectionTitle}>Skills</h1>
        <hr className={concat(styles.hr, colors.border)}/>
        <div className={styles.sectionBody}>
          {skills && <h2 className={fontSizes.paragraph} dangerouslySetInnerHTML={{__html: skills}}></h2>}
        </div>
      </div>
      {/* EDUCATION */}
      <div className={styles.section}>
        <h1 className={fontSizes.sectionTitle}>Education</h1>
        <hr className={concat(styles.hr, colors.border)}/>
        {education.map((edu, index)=><div className={styles.sectionBody} key={index}>
          <h2 className={fontSizes.paragraph}><span className="font-bold">{edu.institutionName}</span> - {edu.institutionLocation}</h2>
          {edu?.description && <h2 className={fontSizes.paragraph} dangerouslySetInnerHTML={{__html: edu?.description}}></h2>}
        </div>)}
      </div>
    </div>
  )
}
