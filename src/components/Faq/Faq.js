import React, {useState} from 'react'
import './Faq.css'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'




const Faq = () => {

    const[showAnswer, setShowAnswer] = useState(false);
    const[showAnswer1, setShowAnswer1] = useState(false);
    const[showAnswer2, setShowAnswer2] = useState(false);

    const handleAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    const handleAnswer1 = () => {
        setShowAnswer1(!showAnswer1);
    }

    const handleAnswer2 = () => {
        setShowAnswer2(!showAnswer2);
    }

    return (
        <section id = 'faq'>
            <div id= 'cotainer faq'>
                <div className='title'>
                <MdOutlineLibraryBooks color='orangered' size={30}/>
                    <h2> Faq</h2>
                    <p>FirstX app faq ethjtriohtidfdgntn erherjtej
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd
                        gkhmht gjnrt grjngr gnr gnjrg gbnrjj jgnjgnj
                        nfdibnieheti fjrr saifi ekcmc djdcn cnbnfdvd </p>
                 </div>

                
                  <div className = 'container question'>
                     <div className = 'question-title'>
                         <h4> Where can i learn ReactJS</h4>
            
                            <button className = 'question-icon' onClick={handleAnswer}> 
                             {showAnswer ? ( <AiOutlineMinus color = 'red'/> ):
                             ( <AiOutlinePlus color='#1f93ff'/>)}</button>
                     </div>

                    <div className = 'question-answer'>

                         {showAnswer && <p className = 'smallanswer'>
                          Yes, you can learn ReactJS at coachEmmyB.com</p>}
                
                     </div>
                     
                     

                  </div>


                   <div className = 'container question'>
                     <div className = 'question-title'>
                         <h4> Where can i learn UI/UX</h4>
            
                            <button className = 'question-icon' onClick={handleAnswer1}> 
                             {showAnswer1 ? ( <AiOutlineMinus color = 'red'/> ):
                             ( <AiOutlinePlus color='#1f93ff'/>)}</button>
                     </div>

                    <div className = 'question-answer'>

                         {showAnswer1 && <p className = 'smallanswer'>
                          Yes, you can learn UI/UX at coachEmmyB.com</p>}
                
                     </div>
                     
                     

                  </div>


                   <div className = 'container question'>
                     <div className = 'question-title'>
                         <h4> Where can i learn NextJS</h4>
            
                            <button className = 'question-icon' onClick={handleAnswer2}> 
                             {showAnswer2 ? ( <AiOutlineMinus color = 'red'/> ):
                             ( <AiOutlinePlus color='#1f93ff'/>)}</button>
                     </div>

                    <div className = 'question-answer'>

                         {showAnswer2 && <p className = 'smallanswer'>
                          Yes, you can learn NextJS at coachEmmyB.com</p>}
                
                     </div>
                     
                     

                  </div>
        </div>
             

              
            
        </section>
    )
}

export default Faq
