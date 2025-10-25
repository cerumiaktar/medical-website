
import Services from '../Services/Services';
import BestDoctors from '../BestDoctors/BestDoctors';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import HealthTips from '../HealthTips/HealthTips';
import Featureds from '../Featureds/Featureds';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Featureds></Featureds>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <BestDoctors></BestDoctors>
            <Reviews></Reviews>
            <HealthTips></HealthTips>
            <Faq></Faq>
        </div>
    );
};

export default Home;