
import Services from '../../Services/Services';
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
        </div>
    );
};

export default Home;