export default function Alpha({heading, experience, education, skills, summary}) {
  const size="lg"
    console.log(size);
  const body = size==="sm"? "h-[300px] px-2 py-2": "h-screen px-9 py-7"
  const h1 = size==="sm"? "text-[10px] font-medium": "text-xl font-bold"
  const h3 = size==="sm"? "text-[6px] font-medium": "text-xs font-semibold"
  const h5 = size==="sm"? "text-[5px]": "text-sh5"
  const pp = size==="sm"? "py-1": "py-3"

  return (
    <div className={`bg-white shadow-lg ${body}`}>
      <div className="text-center">
          <h1 className={`${h1}`}>{heading?.firstName} {heading?.surName}</h1>
          <h5 className={h5}>{heading?.email}</h5>
          <h5 className={h5}>{heading?.phone}</h5>
          <span className={h5}>{`${heading?.city}, ${heading?.country}`}</span>
      </div>
      <hr />
      <div className={pp}>
          <h1 className={h3}>Summary</h1>
          {summary && <h2 className={h5} dangerouslySetInnerHTML={{__html: summary}}></h2>}
      </div>
      <div>
          <h1 className={h3}>Experience</h1>
          {experience.map((job, index)=><div key={index}>
            <h2 className="text-sh5 font-bold">{job.jobTitle}, </h2>
            <span className={h5}>{job.employer}, {job.jobCity}, {job.jobCountry}</span>
            {job?.description && <h2 className={h5} dangerouslySetInnerHTML={{__html: job?.description}}></h2>}
          </div>)}
      </div>
      <div className={pp}>
        <h1 className={h3}>Skills</h1>
        {skills && <h2 className={h5} dangerouslySetInnerHTML={{__html: skills}}></h2>}
      </div>
      <div className={pp}>
          <h1 className={h3}>Education</h1>
          {education.map((edu, index)=><div key={index}>
            <h2 className={h5}><span className="font-bold">{edu.institutionName}</span> - {edu.institutionLocation}</h2>
            {edu?.description && <h2 className={h5} dangerouslySetInnerHTML={{__html: edu?.description}}></h2>}
          </div>)}
      </div>
    </div>
  )
}

