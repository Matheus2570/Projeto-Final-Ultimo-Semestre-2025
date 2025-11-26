import { useState, useEffect } from 'react'; // Importa hooks do React
import "./botaoMudaTema.css"; // Importa CSS para estilizar o botão

// Função que alterna entre temas claro e escuro
const MudarTema = () => {
  // Pega o tema salvo no localStorage ou define como 'light' se não existir
  const temaSalvo = localStorage.getItem('tema') || 'light';
  
  // Cria um estado para armazenar o tema atual
  const [tema, setTema] = useState(temaSalvo);

  // Hook que atualiza o tema no localStorage e no documento toda vez que o tema muda
  useEffect(() => {
    localStorage.setItem('tema', tema);
    document.documentElement.setAttribute('data-theme', tema);
  }, [tema]);
  
  // Função que alterna entre os temas 'light' e 'dark'
  const alternarTema = () => {
    setTema(prevTema => (prevTema === 'light' ? 'dark' : 'light'));
  };

  // Retorna o botão que alterna o tema
  return (
    <div>
      <button className="botao-tema" onClick={alternarTema}>
        {tema === 'light' ? <i className='bx bxs-moon'></i> : <i className='bx bxs-sun'></i>}
      </button>
    </div>
  );
};

// Exporta a função como componente padrão
export default MudarTema;