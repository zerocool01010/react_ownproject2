import FlexHeader from './flexHeader';
import FlexNavigator from './flexNav';
import FlexNews from './flexNews';

const generalPage = () => {

    return <div className="containerFlex">
                <FlexHeader/>
                <FlexNavigator/>
                <FlexNews/>
            </div>;
}

export default generalPage;