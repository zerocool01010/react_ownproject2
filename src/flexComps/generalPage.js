
const generalPage = () => {

    return <div className="container">
                <div className="header">
                    <div className='logo'>Logo</div>
                    <div className='banner'>Banner</div>
                </div>
                <nav>
                    <div className="items">
                        <div className="el1">Item1</div>
                        <div className="el2">Item3</div>
                        <div className="el3">Item3</div>
                        <div className="el4">Item4</div>
                    </div>
                </nav>
                <div className="allnews">
                    <div className="imp-news">
                        <div className="centralnews">Noticia central
                                <p>Light Yagami encuentra la Death Note en una mañana invernal del año 2004. El joven ahora posee la facultad de decidir por la vida de casi todos los seres humanos en la Tierra, y con ello puede eliminar a los criminales del mundo, con el objetivo de construir un mundo ideal, donde unicamente los que él considere beatos y virtuosos puedan vivir</p>
                        </div>
                        <div className="secondary-news">
                            <div className="secnews1">Noticia secundaria1</div>
                            <div className="secnews2">Noticia secundaria2</div>
                            <div className="secnews3">Noticia secundaria3</div>
                        </div>
                    </div>
                    <div className="othernews">Otras noticias</div>
                </div>
    </div>;
}

export default generalPage;