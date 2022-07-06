import Technology from './Technology';
import bootstrapImage from './imgs/bootstrap.svg';
import cssImage from './imgs/css3.svg';
import gitImage from './imgs/git.svg';
import githubImage from './imgs/github.svg';
import htmlImage from './imgs/html5.svg';
import javascriptImage from './imgs/javascript.svg';
import typescriptImage from './imgs/typescript.svg';
import jestImage from './imgs/jest.svg';
import muiImage from './imgs/mui.svg';
import reactImage from './imgs/react.svg';
import reduxImage from './imgs/redux.svg';
import rtlImage from './imgs/RTL.png';
import odinLogo from './imgs/odin.svg';
import trybeLogo from './imgs/trybe.png';
import aluraLogo from './imgs/alura.svg';
import fccLogo from './imgs/freecodecamp.svg';


import './TechStack.css';

export default function TechStack() {


  const imageArray:string[] = [
    htmlImage,
    cssImage,
    javascriptImage,
    typescriptImage,
    reactImage,
    reduxImage,
    jestImage,
    rtlImage,
    bootstrapImage,
    muiImage,
    gitImage,
    githubImage,
  ]

  const nameArray: string[] = [
		'HTML',
		'Css',
		'Javascript',
    'Typescript',
		'React',
		'Redux',
		'Jest',
    'RTL',
		'Bootstrap',
		'MaterialUi',
		'Git',
		'Github',
	];

  const linkArray: string[] = [
    'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'https://www.typescriptlang.org/',
    'https://reactjs.org/',
    'https://redux.js.org/',
    'https://jestjs.io/',
    'https://testing-library.com/docs/react-testing-library/intro/',
    'https://react-bootstrap.github.io/',
    'https://mui.com/',
    'https://git-scm.com/',
    'https://github.com/',
  ]

  const schools: string[] = [
    'Trybe',
    'TheOdinProject',
    'FreeCodeCamp',
    'Alura',
  ]

  const schoolLinks: string[] = [
		'https://www.betrybe.com/',
		'https://www.theodinproject.com/',
		'https://www.freecodecamp.org/',
		'https://www.alura.com.br/',
	];

  const schoolImages: string[] = [
    trybeLogo,
    odinLogo,
    fccLogo,
    aluraLogo,
  ]

  return (
		<div className="tech-stack-container">
			<section id="tech-stack">
				<h2>Habilidades e tecnologias</h2>
				<img
					id="most-used"
					src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarcosRidley&theme=great-gatsby&bg_color=000312&border_color=000312&hide_title=true&layout=compact"
					alt="Linguagens mais utilizadas por Marcos"
				></img>
				<div className="technologies">
					{nameArray.map((name, index) => (
						<Technology
							name={name}
							image={imageArray[index]}
							link={linkArray[index]}
							key={name}
						/>
					))}
				</div>
				<h4>Formações</h4>
				<div className="technologies">
					{schools.map((name, index) => (
						<Technology
							name={name}
							image={schoolImages[index]}
							link={schoolLinks[index]}
							key={name}
						/>
					))}
				</div>
			</section>
			<div className="ocean">
				<div className="wave"></div>
			</div>
		</div>
	);
}