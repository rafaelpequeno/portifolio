import Image from 'next/image';
import './projects.css';
import tfcCover from '../../assets/tfc-cover.png';
import recipeAppCover from '../../assets/recipeApp.png';

export default function Projects() {
  return (
    <main id='projects-section' className='projects-content'>
      <h2>Principais projetos</h2>
      <section className='projects'>
        <div className='project-card'>
          <h4>TFC</h4>
          <div className='tec-logos'>
            <img
              src='https://skillicons.dev/icons?i=ts'
              alt='TypeScript logo'
            />
            <img
              src='https://skillicons.dev/icons?i=express'
              alt='Express logo'
            />
            <img
              src='https://skillicons.dev/icons?i=sequelize'
              alt='Sequelize logo'
            />
            <img
              src='https://skillicons.dev/icons?i=docker'
              alt='Docker logo'
            />
          </div>
          {/* <Image
            src={tfcCover}
            alt='TFC project cover'
            width={250}
            height={150}
            className='cover-image'
          /> */}
          <p className='project-description'>
            TFC é uma API Rest que provê informações dos jogos e a tabela de um
            campeonato de futebol. Os usuários podem também logar para finalizar
            uma partida em progresso ou iniciar uma nova.
          </p>
          <div className='project-btn'>
            <a
              href='https://github.com/rafaelpequeno/tfc'
              className='repo-deploy-button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Repositório
            </a>
          </div>
        </div>
        <div className='project-card'>
          <h4>Recipes App</h4>
          <div className='tec-logos'>
            <img
              src='https://skillicons.dev/icons?i=js'
              alt='JavaScript logo'
            />
            <img src='https://skillicons.dev/icons?i=css' alt='Css logo' />
            <img src='https://skillicons.dev/icons?i=react' alt='React logo' />
            <img
              src='https://skillicons.dev/icons?i=docker'
              alt='Docker logo'
            />
          </div>
          {/* <Image
            src={recipeAppCover}
            alt='TFC project cover'
            width={100}
            height={200}
            className='cover-image'
          /> */}
          <p className='project-description'>
            Recipes App é uma aplicação front-end que disponibiliza diversas
            receitas de pratos e drinks, onde o usuário pode conferir seus
            datalhes, salvar como favorito e marcar como concluído.
          </p>
          <p className='project-obs'>
              Obs: Caso tente visualizar em um desktop/notebook aperte a tecla
              F12 no teclado e selecione o ícone de dispositivo móvel de seu
              navegador.
            </p>
          <div className='project-btn'>
            <a
              href='https://github.com/rafaelpequeno/recipes-app'
              target='_blank'
              rel='noopener noreferrer'
              className='repo-deploy-button'
            >
              Repositório
            </a>
            <a
              href='http://rafaelpequeno-recipe-app.surge.sh/'
              target='_blank'
              rel='noopener noreferrer'
              className='repo-deploy-button'
            >
              Deploy
            </a>
          </div>
        </div>
        <div className='project-card'>
          <h4>Angular Newspaper</h4>
          <div className='tec-logos'>
            <img
              src='https://skillicons.dev/icons?i=ts'
              alt='TypeScript logo'
            />
            <img src='https://skillicons.dev/icons?i=css' alt='Css logo' />
            <img
              src='https://skillicons.dev/icons?i=angular'
              alt='Angular logo'
            />
            <img
              src='https://skillicons.dev/icons?i=vercel'
              alt='Versel logo'
            />
          </div>
          {/* <Image
            src={recipeAppCover}
            alt='TFC project cover'
            width={100}
            height={200}
            className='cover-image'
            data-content='Testando'
          /> */}
          <p className='project-description'>
            Angular Newspaper é uma aplicação front-end na qual lista as
            noticias mais recentes sobre determinado assunto no qual o usuário
            pode pesquisar.
          </p>
          <div className='project-btn'>
            <a
              href='https://github.com/rafaelpequeno/angular-newspaper'
              target='_blank'
              rel='noopener noreferrer'
              className='repo-deploy-button'
            >
              Repositório
            </a>
            <a
              href='https://angular-newspaper.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='repo-deploy-button'
            >
              Deploy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
