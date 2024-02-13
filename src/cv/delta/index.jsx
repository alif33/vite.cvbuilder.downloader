import { useSelector } from "react-redux"
import Styles from "./styles"
import FontSizes from "../fonts-sizes"
import { concat } from "../../helpers/classes"

export default function Delta({heading, experience, education, skills, summary}) {
  const size = "lg"
  const styles = Styles(size)
  const fontSize = FontSizes(size)
  const themeColor = false


  const h3 = size==="sm"? "text-[6px] font-medium": "text-xs font-semibold"
  const h5 = size==="sm"? "text-[5px]": "text-sh5"

  return (
    <div className={styles.body}>
      {/* HEAD */}
      <div className={`${styles.head} ${themeColor? themeColor: "bg-yellow-400"}`}>
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
            {summary && <h2 className={h5} dangerouslySetInnerHTML={{__html: summary}}></h2>}
        </div>
        {/* EXPERIENCE */}
        <div>
            <h1 className={h3}>Experience</h1>
            {experience.map((job, index)=><div key={index}>
              <h2 className="text-sh5 font-bold">{job.jobTitle}, </h2>
              <span className={h5}>{job.employer}, {job.jobCity}, {job.jobCountry}</span>
              {job?.description && <h2 className={h5} dangerouslySetInnerHTML={{__html: job?.description}}></h2>}
            </div>)}
        </div>
        {/* SKILSS */}
        <div>
          <h1 className={h3}>Skills</h1>
          {skills && <h2 className={h5} dangerouslySetInnerHTML={{__html: skills}}></h2>}
        </div>
        {/* EDUCATION */}
        <div>
            <h1 className={h3}>Education</h1>
            {education.map((edu, index)=><div key={index}>
              <h2 className={h5}><span className="font-bold">{edu.institutionName}</span> - {edu.institutionLocation}</h2>
              {edu?.description && <h2 className={h5} dangerouslySetInnerHTML={{__html: edu?.description}}></h2>}
            </div>)}
        </div>
      </div>
    </div>
  )
}
