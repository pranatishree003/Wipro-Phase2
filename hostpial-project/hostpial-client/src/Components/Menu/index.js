import { Link } from 'react-router-dom';
import './Menu.css'; // Import CSS

const Menu = () => {
  return (
    <nav className='navbar'>
      <h3 className='nav-title'>Welcome to Menu</h3>
      <div className='nav-links'>
        <Link to='/show-doctor' className='nav-link'>
          Show Doctor
        </Link>
        <Link to='/insert-doctor' className='nav-link'>
          Insert Doctor
        </Link>
        <Link to='/show-patient' className='nav-link'>
          Show Patient
        </Link>
        <Link to='/insert-patient' className='nav-link'>
          Insert Patient
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
