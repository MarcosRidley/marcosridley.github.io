import { Modal } from 'react-bootstrap';
import './contactModal.css';

export default function MyVerticallyCenteredModal(props: any) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Contatos</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
					}}
				>
					<p className="modal-paragraph">
						Você consegue me encontrar com facilidade no{' '}
						<a href="https://www.linkedin.com/in/marcosridley/">Linkedin</a> e
						consegue ver o que estou desenvolvendo no meu{' '}
						<a href="https://github.com/marcosridley">Github</a>.
					</p>
					<p className="modal-paragraph">
						Está recrutando? Meu CV está disponível para download{' '}
						<a href="./cv.pdf" download="Currículo Marcos Ridley.pdf">
							aqui
						</a>
					</p>
					<p className="modal-paragraph">
						Entre em contato comigo via e-mail{' '}
						<a href="mailto:marcosridley@hotmail.com">clicando aqui</a>.
					</p>
				</div>
			</Modal.Body>
		</Modal>
	);
}
