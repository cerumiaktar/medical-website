
import Services from '../../Services/Services';
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
        </div>
    );
};

export default Home;