import Styles from "./styles"
import FontSizes from "../fonts-sizes"
import setColor from "../colors"
import { concat } from "../../helpers/classes"

export default function Delta({heading, experience, education, skills, summary}) {
  const size = "lg"
  const styles = Styles(size)
  const fontSize = FontSizes(size)
  const colors = setColor("red") 

  return (
    <div className={concat(styles.body, colors.border)}>
      {/* HEAD */}
      <div className={concat(styles.head, colors.bg)}>
          <h1 className={fontSize.heading}>{heading?.firstName} {heading?.surName}</h1>
      </div>
      {/* CONTACTS */}
      <div className={concat(styles.container, styles.contacts)}>
        <ul className={`flex gap-5 ${fontSize.paragraph}`}>
          <li className="list-none">{heading?.email}</li>
          <li className="list-none">{heading?.phone}</li>
          <li className="list-none">{heading?.email}</li>
        </ul>
      </div>
      <div className={concat(styles.container)}>
        {/* SUMMARY */}
        <div>
            {summary && <h2 className={fontSize.paragraph} dangerouslySetInnerHTML={{__html: summary}}></h2>}
        </div>
        {/* EXPERIENCE */}
        <div>
            <h1 className={fontSize.sectionTitle}>Experience</h1>
            {experience.map((job, index)=><div key={index}>
              <h2 className="text-sh5 font-bold">{job.jobTitle}, </h2>
              <span className={fontSize.paragraph}>{job.employer}, {job.jobCity}, {job.jobCountry}</span>
              {job?.description && <h2 className={fontSize.paragraph} dangerouslySetInnerHTML={{__html: job?.description}}></h2>}
            </div>)}
        </div>
        {/* SKILSS */}
        <div>
          <h1 className={fontSize.sectionTitle}>Skills</h1>
          {skills && <h2 className={fontSize.paragraph} dangerouslySetInnerHTML={{__html: skills}}></h2>}
        </div>
        {/* EDUCATION */}
        <div>
            <h1 className={fontSize.sectionTitle}>Education</h1>
            {education.map((edu, index)=><div key={index}>
              <h2 className={fontSize.paragraph}><span className="font-bold">{edu.institutionName}</span> - {edu.institutionLocation}</h2>
              {edu?.description && <h2 className={fontSize.paragraph} dangerouslySetInnerHTML={{__html: edu?.description}}></h2>}
            </div>)}
        </div>
      </div>
    </div>
  )
}