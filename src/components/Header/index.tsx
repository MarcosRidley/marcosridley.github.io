import { Container, Nav, Navbar } from 'react-bootstrap';
import './index.css';

export default function Header() {
	return (
		<div>
			<Navbar bg="light" expand="lg" fixed="top">
				<Container>
					<Navbar.Brand href="#home">Marcos Ridley</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#bio">Sobre mim</Nav.Link>
							<Nav.Link href="#tech-stack">Tecnologias e treinamento</Nav.Link>
							<Nav.Link href="#project">Projetos</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="header">
				<div className="inner-header flex">
					<h1 className="tracking-in-expand" id="home">
						Marcos Ridley
					</h1>
					<h2 className="tracking-in-contract-bck">Front-end developer</h2>
				</div>
				<div>
					<svg
						className="waves"
						viewBox="0 24 150 28"
						preserveAspectRatio="none"
						shapeRendering="auto"
					>
						<defs>
							<path
								id="gentle-wave"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
							/>
						</defs>
						<g className="parallax">
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="0"
								fill="rgba(255,255,255,0.7"
							/>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="3"
								fill="rgba(255,255,255,0.5)"
							/>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="5"
								fill="rgba(255,255,255,0.3)"
							/>
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
						</g>
					</svg>
				</div>
			</div>
			<div className="content flex">
				<div className="arrow bounce">
					<a className="fa fa-arrow-down fa-2x" href="#bio">
						&#129095;
					</a>
				</div>
			</div>
		</div>
	);
}

//Gentle waves animation by GoodKatz
