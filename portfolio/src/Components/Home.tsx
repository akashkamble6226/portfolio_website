
import cssClasses from './Home.module.css';
import Navbar from './Navbar';
import Resume from '../Resume/Akash_Kamble_8605719895.pdf';

import portaitImg1 from '../Images/DSC05140_RR.jpg'
import portaitImg2 from '../Images/DSC05136_RR 1.jpg'
import portaitImg3 from '../Images/DSC05140_RR-removebg.png'
const Home = () => {

    return (
        <>
            <div className={cssClasses.nav_bar_background}>
                <Navbar />
            </div>

            {/* general info  */}
            <div className={cssClasses.generalInfo}>

                <div className={cssClasses.info}>
                    <h1 className={cssClasses.generalInfo_title}>Hey There, I'm Akash</h1>

                    <p className={cssClasses.generalInfo_desc}>I create your digital presence from design to production ready product.</p>

                    <div className={cssClasses.exp}>
                        <div className={cssClasses.exp_years}>
                            1.5+
                        </div>

                        <div className={cssClasses.text}>
                            <span className={cssClasses.exp_text1}>
                                Years
                            </span>
                            <span className={cssClasses.exp_text2}>
                                Experience
                            </span>
                        </div>


                    </div>


                    <a href={Resume} download>
                        <button className={cssClasses.cvbtn}>Download CV</button>

                    </a>
                </div>




                <div className={cssClasses.pic}>
                
                    <img src={portaitImg1} alt="Akash" className={cssClasses.myImg}/>

                </div>

            </div>

        </>


    );
}

export default Home;