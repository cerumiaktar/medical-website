
import Services from '../Services/Services';
import Review from '../Review/Review';
import BestDoctors from '../BestDoctors/BestDoctors';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';

import HealthTips from '../HealthTips/HealthTips';
import Featureds from '../Featureds/Featureds';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Featureds></Featureds>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <BestDoctors></BestDoctors>
            <Review></Review>
            <HealthTips></HealthTips>
        </div>
    );
};

export default Home;