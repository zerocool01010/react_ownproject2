/* import Header from '../comps/header';
import Navbar from '../comps/nav';
import News from '../comps/news';
import Sidebar from '../comps/sidebar'; */
import '../css/style.css';
import Header from '../comps/header';
import Nav from '../comps/nav';
import NewsSection from '../comps/news';
import Sidebar from '../comps/sidebar';

/* import Headercard from '../comps/cards/headerCard'; */

const App = () => {
return <div className='container'>
        <Header></Header>
        <Nav/>
        <NewsSection/>
        <Sidebar/>
</div>;
}

export default App;