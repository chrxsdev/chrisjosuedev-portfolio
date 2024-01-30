export const JobCard = ({ date, job, description }) => {
  return (
    <>
      <p className='date-experience'>{date}</p>
      <h4 className='title-experience primary-text'>{job}</h4>
      <p className='job-description'>{description}</p>
    </>
  )
}
