import './title.css';
export default function Title() {
  const tecnologies = ['js','html','css','angular','docker','express','figma','git','github','idea','java','jest','linux','mysql','nextjs','nodejs','prisma','py','react','spring','sequelize','ts','vercel','vite','vscode']

  return (
    <section className='title-component'>
      <h1>Rafael Pequeno</h1>
      <h2>Desenvolvedor full-stack</h2>
      <div className='icon-container'>
        <div className='icons'>
        {tecnologies.map((icon) => (
          <img key={icon} src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
          ))}
          </div>
          <div className='icons'>
        {tecnologies.map((icon) => (
          <img key={icon} src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
          ))}
          </div>
      </div>
      <a className='about-button' href='#about-section'>Sobre</a>
    </section>
  );
}