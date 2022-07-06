import './project.css'

interface ProjectProps {
  name: string,
  image: string,
  description: string,
  link: string,
  repositoryLink: string,
}

export default function Project({name, image, description, link, repositoryLink}:ProjectProps):JSX.Element {
  return (
		<div className="project">
			<h5>{name}</h5>
			<img src={image} alt={`Capa do projeto ${name}`} />
			<p>{description}</p>
			<a href={link} target="_blank" rel="noopener noreferrer">
				Visitar
			</a>
      <a href={ repositoryLink }  target="_blank" rel="noopener noreferrer">
        Repositório
      </a>
		</div>
	);
}