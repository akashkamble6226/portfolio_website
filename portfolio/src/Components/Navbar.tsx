import cssClasses from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';


const Navbar = () => {

    return (
        <>
            <div className={cssClasses.header}>
                {/* Logo */}
                <div className={cssClasses.logo}  >
                    Akash
                </div>

                {/* NavBar */}
                <nav>
                    <ul className={cssClasses.nav_links}>

                        <li><NavLink className={({ isActive }) => isActive ? cssClasses.active : undefined
                        }

                            to='/'>Home</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? cssClasses.active : undefined
                        } to='/experience'>Experience</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? cssClasses.active : undefined
                        } to='/work'>Work</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? cssClasses.active : undefined
                        } to='/services'>Services</NavLink></li>



                        <div className={cssClasses.bottom}>

                        </div>
                    </ul>
                </nav>

                {/* Contact */}
                <div className={cssClasses.mycontact}>

                    <span className={cssClasses.contact}>
                        +91 8605719895
                    </span>


                    <span className={cssClasses.phoneIcon}>
                        <FontAwesomeIcon icon={faPhone} size="1x" className={cssClasses.icon} />
                    </span>
                    <div>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;