
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/shared/Header/Navbar';
import Footer from '../Pages/shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='font-googlePlay'>
            <div className='sticky z-10 top-0'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <div className=''>
            <Footer></Footer>
            </div>
            <Toaster />
        </div>
    );
};

export default MainLayout;