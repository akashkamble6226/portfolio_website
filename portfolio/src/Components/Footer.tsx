import cssClasses from './Footer.module.css';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { SiOpensea } from 'react-icons/si';
import portaitImg2 from '../Images/DSC05136_RR 1.jpg'


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
                            <FiMapPin size={'3em'} className={cssClasses.address_icon} />
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
                            <HiOutlineMail size={'3em'} className={cssClasses.address_icon} />
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
                            <BsTelephoneFill size={'3em'} className={cssClasses.address_icon} />
                        </span>

                        <h5 className={cssClasses.address_title}>
                            Phone
                        </h5>

                        <p className={cssClasses.address_desc}>
                            +91 8605719895
                        </p>
                    </div>


                </div>

                <hr className={cssClasses.horizontal_line} />
                <div className={cssClasses.footer_info}>

                    {/* <span className={cssClasses.bottom_img_span}>
                        <img src={portaitImg2} alt="Akash" className={cssClasses.bottom_img}/>

                    </span> */}

                    <h5 className={cssClasses.mine_name}>
                        Akash Kamble
                    </h5>

                    <div className={cssClasses.mine_socila_media}>
                        <a href='https://twitter.com/akash6226' target='_blank'>
                            <span className={cssClasses.twitter} >

                                <BsTwitter size={'1.5em'} className={cssClasses.footer_img} />

                            </span>
                        </a>

                        <a href='https://www.linkedin.com/in/akash-kamble-403467152/' target='_blank'>
                        <span className={cssClasses.linkedin} >
                            <BsLinkedin size={'1.5em'} className={cssClasses.footer_img} />
                        </span>
                        </a>


                        <a href='https://www.instagram.com/akashkamble6226/' target='_blank'>
                        <span className={cssClasses.instagram} >
                            <BsInstagram size={'1.5em'} className={cssClasses.footer_img} />
                        </span>
                        </a>

                        <a href='https://opensea.io/collection/metagnet' target='_blank'>
                        <span className={cssClasses.opensea} >
                            <SiOpensea size={'1.5em'} className={cssClasses.footer_img} />
                        </span>

                        </a>

                    </div>



                </div>

            </div>


        </>

    )
}

export default Footer;