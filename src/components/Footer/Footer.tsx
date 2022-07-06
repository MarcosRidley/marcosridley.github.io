import './footer.css';
import linkeddinLogo from './imgs/linkedin.svg';
import githubLogo from './imgs/github.svg';

export default function Footer() {
  return (
		<footer className="footer">
			<a
				href="https://github.com/MarcosRidley/"
				target="_blank"
				rel="noreferrer"
			>
        <img src={ githubLogo } alt="github logo" />
			</a>
			<p>Marcos Ridley</p>
			<a
				href="https://www.linkedin.com/in/marcosridley/"
				target="_blank"
				rel="noreferrer"
			>
				<img src={linkeddinLogo} alt="linkedin Logo" />
			</a>
		</footer>
	);
}