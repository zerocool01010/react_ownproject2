import FlexHeader from './flexHeader';
import FlexNavigator from './flexNav';
import FlexNews from './flexNews';

const generalPage = () => {

    return <div className="container">
                <FlexHeader/>
                <FlexNavigator/>
                <FlexNews/>
            </div>;
}

export default generalPage;