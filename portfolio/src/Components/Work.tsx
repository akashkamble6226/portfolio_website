import Navbar from './Navbar';
import cssClasses from './Work.module.css';
import appDesing1 from '../Images/androiddesign1.png';
import webDesign1 from '../Images/webdesign1.png';
import appDev1 from '../Images/appdev1.png';
import webDev1 from '../Images/webdev1.png';


const Work = () => {

    return (
        <>
            <div className={cssClasses.nav_bar_background}>
                <Navbar />
            </div>

            <div className={cssClasses.work}>
                <div className={cssClasses.title}>
                    <h1 className={cssClasses.work_heading}>
                        My Latest Works
                    </h1>

                    <p className={cssClasses.work_desc}>
                        Perfect way to create your digital presense
                    </p>
                </div>

                <div className={cssClasses.work_types}>


                    <a href='https://www.figma.com/file/F5O1XFKyCT0qTiBPB4I4oz/First_Flutter_App_On_Playstore?node-id=0%3A1&t=YI62hVmWClJk97zO-1
' target='_blank'>
                        <div className={cssClasses.app_design}>

                            <h5 className={cssClasses.work_name1} >App Design</h5>
                            <p className={cssClasses.work_desc1}>Beautiful Quotes App</p>


                            <img src={appDesing1} alt="app-mockup" className={cssClasses.work_img} />


                        </div>
                    </a>

                    <a href='https://www.figma.com/file/EiDOA6CCosnJafU4Fr0ieP/Portfolio_website?node-id=0%3A1&t=YI62hVmWClJk97zO-1
' target='_blank'>
                    <div className={cssClasses.web_design}>

                        <h5 className={cssClasses.work_name2} >Web Design</h5>
                        <p className={cssClasses.work_desc2}>Portfolio Website</p>
                        <img src={webDesign1} alt="app-mockup" className={cssClasses.work_img} />

                    </div>
                    </a>

                    <a href='https://play.google.com/store/apps/details?id=com.newera.beautiful_quotes' target='_blank'>
                    <div className={cssClasses.app_dev}>

                        <h5 className={cssClasses.work_name3} >App Dev</h5>
                        <p className={cssClasses.work_desc3}>Beautiful Quotes App</p>
                        <img src={appDev1} alt="app-mockup" className={cssClasses.work_img} />

                    </div>
                    </a>

                    <a  target='_blank'>
                    <div className={cssClasses.web_dev}>

                        <h5 className={cssClasses.work_name4} >Web Dev</h5>
                        <p className={cssClasses.work_desc4}>Portfolio Website</p>
                        <img src={webDev1} alt="app-mockup" className={cssClasses.work_img} />

                    </div>
                    </a>



                </div>
            </div>

        </>
    );
}

export default Work;