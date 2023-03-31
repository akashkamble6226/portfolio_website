import Navbar from './Navbar';
import cssClasses from './Work.module.css';


const Work = () => {

    return (
        <>
        <div className={cssClasses.nav_bar_background}>
            <Navbar/>
        </div>
        
            <div className={cssClasses.work}>
                <div className={cssClasses.title}>
                    <h1  className={cssClasses.work_heading}>
                        My Latest Works
                    </h1>

                    <p className={cssClasses.work_desc}>
                        Perfect way to create your digital presense
                    </p>
                </div>

                <div className={cssClasses.work_types}>

                    <div className={cssClasses.app_design}>

                        <h5 className={cssClasses.work_name1} >App Design</h5>
                        <p className={cssClasses.work_desc1}>Food Delivery App</p>

                    </div>

                    <div className={cssClasses.web_design}>

                        <h5 className={cssClasses.work_name2} >App Design</h5>
                        <p className={cssClasses.work_desc2}>Food Delivery App</p>

                    </div>

                    <div className={cssClasses.app_dev}>

                        <h5 className={cssClasses.work_name3} >App Design</h5>
                        <p className={cssClasses.work_desc3}>Food Delivery App</p>

                    </div>

                    <div className={cssClasses.web_dev}>

                        <h5 className={cssClasses.work_name4} >App Design</h5>
                        <p className={cssClasses.work_desc4}>Food Delivery App</p>

                    </div>



                </div>
            </div>

        </>
    );
}

export default Work;