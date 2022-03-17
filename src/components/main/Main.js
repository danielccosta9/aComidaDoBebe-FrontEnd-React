import boy from '../../assets/boy.jpg'
import mon from '../../assets/mon.jpg'

import './Main.css'

const Main = () => {
    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={boy} alt='boy'/>
                    <div className='main__greeting'>
                        <h1>Olá, Responsavel</h1>
                        <p>Bem-vindo ao seu painel</p>
                    </div>
                </div>

                {/* <div className='main__cards'>
                    <div className='card'>
                        <i className='fa fa-file-text fa-2x text-lightblue'></i>
                        <div className='card-inner'>
                            <p className='text-primary-p'>Quantidade de Históricos</p>
                            <span className='font-bold text-title'>03</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-cutlery fa-2x'></i>
                        <div className='card-inner'>
                            <p className='text-primary-p'>Alimentos</p>
                            <span className='font-bold text-title'>38</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-archive fa-2x text-yellow'></i>
                        <div className='card-inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>25</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-bars fa-2x text-green'></i>
                        <div className='card-inner'>
                            <p className='text-primary-p'>Categorias</p>
                            <span className='font-bold text-title'>12</span>
                        </div>
                    </div>
                </div> */}

                <div className='charts'>
                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Moments Reports <i className='fa fa-heart'></i> </h1>
                                 <img width="290" src={mon} alt='mon and child'/>
                            </div>
                            
                        </div>
                    </div>

                    <div className='charts__rigth'>
                        <div className='charts__rigth__title'>
                            <div>
                                <h1>Dicas Alimentares</h1>
                                <p>Aqui estão algumas dicas alimentares</p>
                            </div>
                            <i className='fa fa-lemon-o'></i>
                        </div>

                        <div className='charts__right__cards'>
                            <div className='card1'>
                                <h1>Sucos</h1>
                                <span role="img" aria-label="sheep">🍋 🍍 🍊</span>
                            </div>

                            <div className='card2'>
                                <h1>Vegetais</h1>
                                <span role="img" aria-label="sheep">🥦 🥬 🍆</span>
                            </div>

                             <div className='card3'>
                                <h1>Frutas</h1>
                                <span role="img" aria-label="sheep">🍌 🍎 🥑</span>
                            </div>

                            <div className='card4'>
                                <h1>Saladas</h1>
                                <span role="img" aria-label="sheep">🥕 🥔 🍅</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Main;