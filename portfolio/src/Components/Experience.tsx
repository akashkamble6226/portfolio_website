import cssClasses from './Experience.module.css';
import Navbar from './Navbar';


const Experience = () => {

    return (
        <>
        <div className={cssClasses.nav_bar_background}>
            <Navbar/>
        </div>
           <div className={cssClasses.back_body}  >
            
          
                <div className={cssClasses.text} >
                    <h1 className={cssClasses.experience_title} >My Work Experience</h1>
                </div>



                <div className={cssClasses.experience}>

                    {/* company name */}
                    <div className={cssClasses.tableRow}>

                        <div className={cssClasses.companies}>
                            <span className={cssClasses.company1}>
                                <h5 className={cssClasses.company_title1} >Cereb Media Company</h5>
                                <p className={cssClasses.company_desc1}>July 2020 - Sep 2020</p>
                            </span>

                            <span className={cssClasses.company2}>
                                <h5 className={cssClasses.company_title2}>Accenture Solutions</h5>
                                <p className={cssClasses.company_desc2}>Oct 2021 - Till Date</p>
                            </span>
                        </div>

                        {/* circles */}
                        <div className={cssClasses.circles}>



                            <span className={cssClasses.outerCircle1}>



                                <span className={cssClasses.innerCircle1}>

                                </span>
                            </span>


                            <hr className={cssClasses.verticalLine} />


                            <span className={cssClasses.outerCircle2}>



                                <span className={cssClasses.innerCircle2}>

                                </span>
                            </span>








                        </div>

                        {/* work details */}
                        <div className={cssClasses.details}>

                            <span className={cssClasses.company1Detail}>
                                <h5 className={cssClasses.company_detail_title1}>Web Dev Intern</h5>
                                <p className={cssClasses.company_detail_desc1}>I  was mostly focused on fronted part . Learned lot of fronted skills like how to approach a new design into small modules so that it will create big picture at the end.</p>
                            </span>

                            <span className={cssClasses.company2Detail}>
                                <h5 className={cssClasses.company_detail_title2}>Full Stack Developer</h5>
                                <p className={cssClasses.company_detail_desc2}>I am working as a full stack developer in React. Mainly Focused on building components of website for the client.</p>
                            </span>

                        </div>



                    </div>


                </div>

                </div>
            


        </>
    )




}

export default Experience