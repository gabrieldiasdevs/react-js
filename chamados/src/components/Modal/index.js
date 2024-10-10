import { FiX } from 'react-icons/fi'

import './modal.css'

export default function Modal(){
  return(
    <div className='modal' >
      <div className='container' >
        <button className='close' >
          <FiX size={25} color='#fff' />
          Fechar
        </button>

        <main>
          <h2>Detalhes do chamado</h2>

          <div className='row' >
            <span>
              Cliente: <i>Mercado</i>
            </span>
          </div>

          <div className='row' >
            <span>
              Assunto: <i>Suporte</i>
            </span>
            <span>
              Cadastrado em: <i>22/08/2024</i>
            </span>
          </div>

          <div className='row' >
            <span>
              Status: <i>Aberto</i>
            </span>
          </div>

          <>
            <h3>Complemento</h3>
            <p>
              Aqui vai todo o complemento do chamado
            </p>
          </>

        </main>
      </div>
    </div>
  )
}