/* import HeaderCard from './cards/headerCard'; */
/* import '../css/style.css'; */
import './header.css';
import HeaderCard from './cards/headerCard';

const header = () => {
    
    return <HeaderCard>
    <div className='logo'>Logo</div>
    <div className='banner'>Banner</div>
    </HeaderCard>
    ;
}

export default header;