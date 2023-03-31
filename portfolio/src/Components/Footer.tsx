import cssClasses from './Footer.module.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons/faAddressBook';
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

    return (
        <>


            <div className={cssClasses.footer}>

                <div className={cssClasses.title} >
                    <h1 className={cssClasses.heading}>
                        Let’s create something
                        cool together.
                    </h1>
                </div>

                <div className={cssClasses.details}>
                    {/* address */}
                    <div className={cssClasses.address}>
                        <span className={cssClasses.address_circle} >
                            <FontAwesomeIcon icon={faAddressBook} size="2x" className={cssClasses.address_icon} />
                        </span>

                        
                            <h5 className={cssClasses.address_title}>
                                Address
                            </h5>

                            <p className={cssClasses.address_desc}>
                               Baramati
                            </p>
                        
                    </div>


                    {/* email */}

                    <div className={cssClasses.address}>
                        <span className={cssClasses.address_circle} >
                            <FontAwesomeIcon icon={faIdCard} size="2x" className={cssClasses.address_icon} />
                        </span>

                        <h5 className={cssClasses.address_title}>
                            Email
                        </h5>

                        <p className={cssClasses.address_desc}>
                        Official.akashk@gmail.com
                        </p>
                    </div>



                    {/* phone */}

                    <div className={cssClasses.address}>
                        <span className={cssClasses.address_circle} >
                            <FontAwesomeIcon icon={faPhone} size="2x" className={cssClasses.address_icon} />
                        </span>

                        <h5 className={cssClasses.address_title}>
                        Phone
                        </h5>

                        <p className={cssClasses.address_desc}>
                        +91 8605719895
                        </p>
                    </div>


                </div>


                <div className={cssClasses.footer_info}>

                    <span className={cssClasses.mine_photo}>
                    <FontAwesomeIcon icon={faUser} size="2x" className={cssClasses.footer_img} />
                    </span>

                    <h5 className={cssClasses.mine_name}>
                        Akash Kamble
                    </h5>

                    <div className={cssClasses.mine_socila_media}>

                        <span className={cssClasses.twitter} >
                        <FontAwesomeIcon icon={faUser} size="2x" className={cssClasses.footer_img} />
                        </span>

                        <span className={cssClasses.linkedin} >
                        <FontAwesomeIcon icon={faUser} size="2x" className={cssClasses.footer_img} />
                        </span>

                        <span className={cssClasses.instagram} >
                        <FontAwesomeIcon icon={faUser} size="2x" className={cssClasses.footer_img} />
                        </span>

                        <span className={cssClasses.opensea} >
                        <FontAwesomeIcon icon={faUser} size="2x" className={cssClasses.footer_img} />
                        </span>

                    </div>



                </div>

            </div>

            
        </>

    )
}

export default Footer;