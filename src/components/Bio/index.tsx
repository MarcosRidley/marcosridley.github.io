import './Bio.css';

export default function Bio():JSX.Element {
  return (
    <section id='bio'>
      <h2>Sobre mim</h2>
      <div className="biography"><p>Oi, eu sou o Marcos! Tenho 26 anos e agradeço pela oportunidade de poder te falar um pouco sobre mim.</p>
      <p>Sou de Belo Horizonte, MG, graduado em Ciências Aeronáuticas e piloto civil por formação - transicionando de carreira desde julho/2021, quando redescobri minha paixão pelo desenvolvimento que estava reprimida desde os meus 12 anos, tempos em que fazia Bot pra Tibia e hack pra Grand Chase. Desde então busco aperfeiçoar minha lógica, desenvolver minhas soft skills e adquirir novas ferramentas me aproveitando do conjunto de habilidades único que tenho adquiri ao longo de minha carreira na aviação e meu gosto ímpar por ler manuais e documentação.</p>
      </div>
      <div id="facts">
        <h4>Alguns fatos sobre mim</h4>
        <ul>
          <li>Meu MBTI é ISTP-A</li>
          <li>Meu podcast favorito é o Jovem Nerd</li>
          <li>Sou um piloto certificado de helicópteros</li>
          <li>Sou completa absolutamente apaixonado por Star Wars</li>
          <li>Fui representante de turma em todas as instituições nas quais já estudei</li>
        </ul>
      </div>
      <div id="soft-skills">
        <h5>Possuo treinamento formal em</h5>
        <div>
          <ul>
          <li>Gerenciamento de recursos</li>
          <li>Administração de tempo</li>
          <li>Comunicação assertiva</li>
          <li>Trabalho em equipe</li>
          <li>Gestão de crises</li>
        </ul>
          </div>
      </div>
    </section>
  )
}