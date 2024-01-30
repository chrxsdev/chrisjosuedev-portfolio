import { DemoIcon } from './icons/DemoIcon'
import { GithubIcon } from './icons/GithubIcon'
import { TesisIcon } from "./icons/TesisIcon"

export const ProjectCard = ({ title, description, img, stack, github, demo, paper }) => {
  return (
    <div className='card'>
      <img src={`/assets/${img}`} className='card-img-top' alt='title' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        {stack.map(({ logo, technology, color }, index) => (
          <span
            key={index}
            className='badge text-left'
            style={{ backgroundColor: `${color}` }}
          >
            <img
              className='badge-logo'
              src={`/assets/${logo}`}
              alt={technology}
              width={'15px'}
              height={'15px'}
            />
            {technology}
          </span>
        ))}
        <div className='mt-4'>
          {(github && demo) && (
            <>
              <a
                href={github}
                className='btn-contact rounded'
                target='_blank'
                rel='noreferrer'
              >
                <GithubIcon /> Repo
              </a>
              <a href={demo} className='btn-contact rounded' target='_blank' rel='noreferrer'>
                <DemoIcon /> Demo
              </a>
            </>
          )}
          {paper && (
            <a href={paper} className='btn-contact rounded' target='_blank' rel='noreferrer'>
              <TesisIcon /> Leer
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
