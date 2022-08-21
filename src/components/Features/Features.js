import React from 'react'
import './Features.css'
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import phoneFeatures from '../../assets/phone-features.png';


const Features = () => {
    return (
        <section id='features'>
            <div className='container features' data-aos = 'fade-down'>
                <div className='title'>
                <BsFillBookmarkStarFill color='orangered' size={30}/>
                    <h2> Core Features</h2>
                    <p>FirstX app helps ethjtriohtidfdgntn erherjtej
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd </p>
                </div>

                <div className = 'feature-content'>
                <div className = 'feature-left' data-aos = 'fade-right'>
                <img src= {phoneFeatures} alt='phone' /> </div>
                <div className = 'feature-right'>
                    <h3> YOUR INBUILT</h3>
                    <p>FirstX app helps ethjtriohtidfdgntn erherjtej
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd </p>

                    <h3> DON'T FORGET YOUR BASE</h3>
                    <p>FirstX app helps ethjtriohtidfdgntn erherjtej
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd </p>

                    <h3> LINK UP</h3>
                    <p>FirstX app helps ethjtriohtidfdgntn erherjtej
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd </p>

                    <h3> CHARGE UP</h3>
                    <p>FirstX app helps ethjtriohtidfdgntn erherjtej
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd </p>
                
                </div>

                </div>
            
            </div>
            
        </section>
    )
}

export default Features
