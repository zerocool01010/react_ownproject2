/* import Header from '../comps/header';
import Navbar from '../comps/nav';
import News from '../comps/news';
import Sidebar from '../comps/sidebar'; */
import '../css/style.css';

const App = () => {
    return <div class="container">
        
    <div class="logo">Logo</div>
    <div class="banner">Banner</div>

<nav>
    <div class="el1">Item1</div>
    <div class="el2">Item3</div>
    <div class="el3">Item3</div>
    <div class="el4">Item4</div>
</nav>

    <div class="centralnews">Noticia central
        <p>Light Yagami encuentra la Death Note en una mañana invernal del año 2004. El joven ahora posee la facultad de decidir por la vida de casi todos los seres humanos en la Tierra, y con ello puede eliminar a los criminales del mundo, con el objetivo de construir un mundo ideal, donde unicamente los que él considere beatos y virtuosos puedan vivir.</p>
    </div>
    <div class="secnews1">Noticia secundaria1</div>
    <div class="secnews2">Noticia secundaria2</div>
    <div class="secnews3">Noticia secundaria3</div>
    <div class="othernews">Otras noticias</div>

</div>;
}

export default App;