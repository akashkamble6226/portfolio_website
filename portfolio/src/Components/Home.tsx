
import cssClasses from './Home.module.css';
import Navbar from './Navbar';

const Home = () => {

    return (
        <>
            <div className={cssClasses.nav_bar_background}>
            <Navbar/>
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

                    <button className={cssClasses.cvbtn}>Download CV</button>
                </div>




                {/* <div className={cssClasses.pic}>
                <h1>Hey There, I'm Akash</h1>


                </div> */}

            </div>

        </>


    );
}

export default Home;