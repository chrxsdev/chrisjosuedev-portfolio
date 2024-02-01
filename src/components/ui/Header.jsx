import { CVIcon } from '../icons/CVIcon'
import { CodeIcon } from '../icons/CodeIcon'
import { EmailIcon } from '../icons/EmailIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'

export const Header = () => {
  return (
    <div className='container main-container' id='home'>
      <div className='row header-container'>
        <div className='col-md-12 header-text'>
          <div>
            <img className='profile rounded-pill' src='/assets/carnet.jpg' alt='personal' />
          </div>
          <div>
            <CodeIcon />
            <span className='sub-title'>
              {' '}
              <code className='code-title'>
                System.out.println(&quot;Hello, world!&quot;)
              </code>{' '}
            </span>
          </div>
          <div>
            <h1 className='title'>Hola, Soy Chris.</h1>
            <p className='title-description'>
              Soy un Ingeniero en Infotecnología, con experiencia en desarrollo{' '}
              <span className='primary-text'> Back-End y Full-Stack.</span> Desde{' '}
              <img src='/assets/flag.svg' alt='flag' /> para el mundo.
            </p>
            <p className='title-description'>
              Me enfoco en crear{' '}
              <span className='secondary-text'>aplicaciones innovadoras.</span>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <a
          className='btn-contact rounded'
          href='https://drive.google.com/drive/folders/1TgyK5TvGtMu37cMAAq0F2itsrgQ5tBMH?usp=sharing'
        >
          {' '}
          <CVIcon /> Descargar CV
        </a>
        <a
          className='btn-contact rounded'
          href='https://www.linkedin.com/in/chrisjosuedev/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedinIcon /> Linkedin
        </a>
        <a
          className='btn-contact rounded'
          href='https://github.com/chrisjosuedev'
          target='_blank'
          rel='noreferrer'
        >
          <GithubIcon /> Github
        </a>
        <a
          className='btn-contact rounded'
          href='mailto:cristhian.martinezlara@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <EmailIcon /> cristhian.martinezlara@gmail.com
        </a>
      </div>
    </div>
  )
}
