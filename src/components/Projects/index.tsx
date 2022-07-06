import './index.css';
import Project from './Project';
import jsRestaurant from './imgs/MFB.jpg';
import jsCalculator from './imgs/myJSCalculator.jpg';
import pokedex from './imgs/pokedex.jpg';
import myFirstLanding from './imgs/RTLandingPage.jpg';
import todoList from './imgs/todo.jpg';
import jogoDaVelha from './imgs/TTT.jpg';
import appClima from './imgs/weatherApp.jpg';
import onlineStore from './imgs/onlineStore.jpg';

const projects = [
	{
		name: 'Minha primeira Landing Page',
		image: myFirstLanding,
		description: 'Landing page básica HTML e CSS',
		link: 'https://marcosridley.github.io/MyLandingPage/',
		repositoryLink: 'https://github.com/MarcosRidley/MyLandingPage',
	},
	{
		name: 'Minha calculadora Javascript',
		image: jsCalculator,
		description: 'Calculadora 2 displays feita com HTML, CSS e Javascript',
		link: 'https://marcosridley.github.io/MyJsCalculator/',
		repositoryLink: 'https://github.com/MarcosRidley/MyJsCalculator',
	},
	{
		name: 'Jogo da velha em Javascript',
		image: jogoDaVelha,
		description: 'Jogo da velha em Javascript',
		link: 'https://marcosridley.github.io/JogoDaVelha/',
		repositoryLink: 'https://github.com/MarcosRidley/JogoDaVelha',
	},
	{
		name: 'Página de restaurante 100% Javascript',
		image: jsRestaurant,
		description:
			'Página de restaurante com todo conteúdo gerado via Javascript',
		link: 'https://marcosridley.github.io/myRestaurantPage/',
		repositoryLink: 'https://github.com/MarcosRidley/myRestaurantPage',
	},
	{
		name: 'Minha to-do list orientada a objeto',
		image: todoList,
		description:
			'To-do list com sistema de categorias utilizando conceitos básicos de programação orientada a objeto',
		link: 'https://marcosridley.github.io/toDoList/',
		repositoryLink: 'https://github.com/MarcosRidley/toDoList',
	},
	{
		name: 'Meu pokedex competitivo',
		image: pokedex,
		description: 'Pokedex competitivo com modal de informação competitiva',
		link: 'https://marcosridley.github.io/private-pokedex/',
		repositoryLink: 'https://github.com/MarcosRidley/private-pokedex',
	},
	{
		name: 'Meu aplicativo de clima',
		image: appClima,
		description: 'Aplicativo de previsão do tempo',
		link: 'https://nicolashubner.github.io/WeatherApp/',
		repositoryLink: 'https://github.com/NicolasHubner/WeatherApp',
	},
	{
		name: 'Minha loja online',
		image: onlineStore,
		description: 'Loja online React',
		link: 'https://my-online-store-4ltrmd3d1-marcosridley.vercel.app/',
		repositoryLink: 'https://github.com/MarcosRidley/my-online-store',
	},
];

export default function Projects() {
	return (
		<section id="projects">
			<h3 id="projects-heading">Projetos</h3>
			<div className="projects-container">
				{projects.map((proj) => {
					const { name, image, description, link, repositoryLink } = proj;
					return (
						<Project
							name={name}
							image={image}
							description={description}
							link={link}
							repositoryLink={repositoryLink}
							key={name}
						/>
					);
				})}
			</div>
		</section>
	);
}
