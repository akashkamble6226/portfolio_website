import { Outlet } from "react-router";
import Footer from './Footer';

const Root = () => {

    
    return (
        <>


            <Outlet />
            <Footer />


        </>
    );
}

export default Root;