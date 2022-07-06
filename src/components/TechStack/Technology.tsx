import './technology.css';

interface TechnologyProps {
  name: string,
  image: string,
  link: string,
}

export default function Technology({name, image, link}:TechnologyProps):JSX.Element {
return (
  <a className="technology-card" href={link}>
    <h5 className="technology-name">{name}</h5>
    <img src={image} alt={`tecnologia ${name}`} className="technology-image" />
  </a>
)
}