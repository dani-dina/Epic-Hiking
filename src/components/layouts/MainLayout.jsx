import Navbar from '../widgets/Navbar';
import Footer from '../widgets/Footer';
const MainLayout = ({children})=>{
    return(
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
export default MainLayout;