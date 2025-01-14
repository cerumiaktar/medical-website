
import Services from '../../Services/Services';
import Review from '../BestDoctor/Review/Review';
import BestDoctors from '../BestDoctors/BestDoctors';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <HeaderBottom></HeaderBottom>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <BestDoctors></BestDoctors>
            <Review></Review>
        </div>
    );
};

export default Home;