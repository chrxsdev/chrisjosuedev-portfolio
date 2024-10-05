export const JobCard = ({ date, job, description }) => {
  return (
    <>
      <p className='date-experience'>{date}</p>
      <h4 className='title-experience primary-text'>{job}</h4>
      <div className='job-description'>
        <ul>
          {description.map((des, i) => (
            <li key={i}>{des}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
