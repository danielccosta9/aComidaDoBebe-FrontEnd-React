import './Sidebar.css';
import logo from '../../assets/logo.jpg'

const Sidebar = ({ SidebarOpen, closeSidebar }) => {
    return (
        <div className={SidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt='logo' />
                    <h1>Family ID</h1>
                </div>
            </div>

            <i
            onClick={() => closeSidebar()}
            className='fa fa-times'
            id='sidebarIcon'
            aria-hidden='true'>
            </i>
            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-minus-square'></i>
                    <a href='#'>Home</a>
                </div>
                
                <h2>PACIENTE</h2>

                <div className='sidebar__link'>
                    <i className='fa fa-archive'></i>
                    <a href='#'>Produtos</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-bars'></i>
                    <a href='#'>Categorias</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-cutlery'></i>
                    <a href='#'>Alimentos</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-user-circle'></i>
                    <a href='#'>Usuários</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-file-text'></i>
                    <a href='#'>Históricos</a>
                </div>
                <div className='sidebar__logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='#'>Sair</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;