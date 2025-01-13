
import Services from '../../Services/Services';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <HeaderBottom></HeaderBottom>
            <Services></Services>
        </div>
    );
};

export default Home;