import Image from 'next/image';
import profilePicture from '../../assets/profile.jpeg';
import whatsAppLogo from '../../assets/whatsapp.png';
import './about.css';

export default function About() {
  return (
    <main id='about-section' className='about-content'>
      <section className='profile-pic'>
        <Image
          src={profilePicture}
          alt='Profile picture'
          width={300}
          height={400}
          className='image'
        />
      </section>
      <section className='description'>
        <p id='age'>26 anos.</p>
        <p>Formado em desenvolvimento full-stack pela Trybe 01/23 - 02/24</p>
        <p>Durante minha formação pude desenvolver projetos: </p>
        <ul>
          <li>front-end com JavaScript, HTML, CSS e React;</li>
          <li>back-end com Node.js, TypeScript, Express;</li>
          <li>back-end com Java, Spring;</li>
        </ul>
        <p>Busco minha primeira oportunidade como desenvolvedor.</p>
        <div className='btn-container'>
          <a href='/RafaelSilvaPequeno-cv.pdf' download className='cv-button'>Baixar CV</a>
          <a href='#projects-section' className='projects-button'>
            Projetos
          </a>
        </div>
      </section>
      <section className='contact'>
        <h3>Entre em contato</h3>
        <div className='contact-logos'>
          <a
            href='https://www.linkedin.com/in/rafael-pequeno/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://skillicons.dev/icons?i=linkedin'
              alt='LinkedIn logo'
            />
          </a>
          <a
            href='https://github.com/rafaelpequeno'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://skillicons.dev/icons?i=github'
              alt='Github logo'
            />
          </a>
          <a href='http://api.whatsapp.com/send?phone=5519991908683' target='_blank' rel='noopener noreferrer'>
            <Image src={whatsAppLogo} alt='WhatsApp logo' width={65} height={65}/>
          </a>
        </div>
      </section>
    </main>
  );
}
