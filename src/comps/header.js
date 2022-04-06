/* import HeaderCard from './cards/headerCard'; */
/* import '../css/style.css'; */
import './header.css';
import Card from './cards/headerCard';

const Header = () => {
    
    return <Card>
    <div className='logo'>Logo</div>
    <div className='banner'>Banner</div>
    </Card>
    ;
}

export default Header;