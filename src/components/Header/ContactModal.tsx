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
						<a
							href="https://www.linkedin.com/in/marcosridley/"
							target="_blank"
							rel="noreferrer"
						>
							Linkedin
						</a>{' '}
						e consegue ver o que estou desenvolvendo no meu{' '}
						<a
							href="https://github.com/marcosridley"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						.
					</p>
					<p className="modal-paragraph">
						Está recrutando? Meu CV está disponível para download{' '}
						<a
							href="https://drive.google.com/file/d/1m345lAVDtCZujzFXX8leoL9ZuNtUzGeX/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
						>
							aqui
						</a>
					</p>
					<p className="modal-paragraph">
						Entre em contato comigo via e-mail{' '}
						<a
							href="mailto:marcosridley@hotmail.com"
							target="_blank"
							rel="noreferrer"
						>
							clicando aqui
						</a>
						.
					</p>
				</div>
			</Modal.Body>
		</Modal>
	);
}
