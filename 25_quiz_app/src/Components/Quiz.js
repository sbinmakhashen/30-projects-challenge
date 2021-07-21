import React, { useState } from "react"
import Questions from '../questionsData'
const Quiz = () => {
    const [counter, setCounter] = useState(0)
    const [correctAns, setCorrectAns] = useState(false)
    const [showScroe, setShowScore] = useState(0)
    function handleClick(isCorrect) {
        setCounter(counter + 1)
        if(counter + 2 > Questions.length){setCorrectAns(true)}
        if(isCorrect){setShowScore(showScroe + 1)}
    }

    function resetQuiz() {
        setCounter(0)
        setCorrectAns(false)
        setShowScore(0)
    }

    return (
        <div className='container'>
        {correctAns ? 
        <>
           <h1>You have scored {showScroes} out of {Questions.length}</h1> 
           <button onClick={resetQuiz} className="btn">Retake quiz</button>
        </>
        :
        <>    
        <header>
        <div className="quiz-container">
        <div className="quiz-counter">Question {counter + 1}/<span>{Questions.length}</span></div>
        <div className="quiz-question">{Questions[counter].questionText}</div>
        </div>
        </header>
        <main id='answers'>
        {Questions[counter].answers.map(ques => <button  className='answer' onClick={() => handleClick(ques.isCorrect)} >{ques.answerText}</button>)}
        </main>
        </>
        }
        </div>
    )

}

export default Quiz