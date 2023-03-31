import cssClasses from './Services.module.css';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons/faCodePullRequest';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';

const Services = () => {

    return (
        <>
            <div className={cssClasses.nav_bar_background}>
                <Navbar/>
            </div>
            <div className={cssClasses.services_body}>
                <div className={cssClasses.services}>

                    <div className={cssClasses.left} >

                        <h1 className={cssClasses.serv_title}>What do I help?</h1>

                        <p className={cssClasses.desc_p1}>
                            I will help you with finding a solution for your problems.
                            I use and follow SDLC life cycle to construct your product
                            from scratch.
                        </p>

                        <p className={cssClasses.desc_p2}>
                            I will help your business to get ready for the digital presence.
                            I will make sure, you reach your clients in more attractive way.
                        </p>

                        <div className={cssClasses.proj_status} >
                            <span className={cssClasses.completed}>
                                <h1 className={cssClasses.proj_numbers1}>10+</h1>
                                <p className={cssClasses.proj_numbers_title1}>Project Completed</p>
                            </span>

                            <span className={cssClasses.happy}>
                                <h1 className={cssClasses.proj_numbers2}>15+</h1>
                                <p className={cssClasses.proj_numbers_title2}>Happy Clients</p>
                            </span>
                        </div>


                    </div>

                    <div className={cssClasses.right}>

                        {/* web desing */}

                        <div className={cssClasses.web_design} >

                            <div className={cssClasses.circle}>
                                <span>
                                    <FontAwesomeIcon icon={faLaptop} size="2x" className={cssClasses.icon} />
                                </span>
                            </div>

                            <div className={cssClasses.text}>

                                <h5>Website Design</h5>
                                <p>5 Projects</p>

                            </div>

                        </div>

                        {/* app design */}
                        <div className={cssClasses.web_design} >

                            <div className={cssClasses.circle}>
                                <span>
                                    <FontAwesomeIcon icon={faCode} size="2x" className={cssClasses.icon} />
                                </span>
                            </div>

                            <div className={cssClasses.text}>

                                <h5>Mobile App Design</h5>
                                <p>5 Projects</p>

                            </div>

                        </div>

                        {/* web dev */}
                        <div className={cssClasses.web_design} >

                            <div className={cssClasses.circle}>
                                <span>
                                    <FontAwesomeIcon icon={faLaptopCode} size="2x" className={cssClasses.icon} />
                                </span>
                            </div>

                            <div className={cssClasses.text}>

                                <h5>Website Building</h5>
                                <p>5 Projects</p>

                            </div>

                        </div>

                        {/* App dev */}
                        <div className={cssClasses.web_design} >

                            <div className={cssClasses.circle}>
                                <span>
                                    <FontAwesomeIcon icon={faCodePullRequest} size="2x" className={cssClasses.icon} />
                                </span>
                            </div>

                            <div className={cssClasses.text}>

                                <h5>App Building</h5>
                                <p>5 Projects</p>

                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </>
    );

}

export default Services;