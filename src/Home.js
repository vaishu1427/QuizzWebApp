import Card from './Card';
import { useState } from 'react';
import Confetti from "react-confetti";




function HomePage() {

    const question = [{
        Question: 'What is the color of pineapple?',
        ans: {
            ans1: 'Yellow',
            ans2: 'Red',
            ans3: 'Brown',
            ans4: 'Orange'
        },
        correctans: 'Yellow'


    },
    {
        Question: 'What is the color of tomato?',
        ans: {
            ans1: 'Yellow',
            ans2: 'Red',
            ans3: 'Brown',
            ans4: 'Orange'
        },
        correctans: 'Red'


    },
    {
        Question: 'What is the color of curry leaves?',
        ans: {
            ans1: 'Yellow',
            ans2: 'Red',
            ans3: 'Green',
            ans4: 'Orange'
        },
        correctans: 'Green'


    },
    {
        Question: 'What is the color of carrot?',
        ans: {
            ans1: 'Yellow',
            ans2: 'Red',
            ans3: 'Brown',
            ans4: 'Orange'
        },
        correctans: 'Orange'


    },
    {
        Question: 'What is the color of beetroot?',
        ans: {
            ans1: 'Yellow',
            ans2: 'Red',
            ans3: 'Brown',
            ans4: 'Violet'
        },
        correctans: 'Violet'


    }];

    const [correctans, setCorrectans] = useState(0);
    const [totalans, setTotalans] = useState(0);
    const [startquizz, setStartquizz] = useState(false)
    const [showresult, setShowresult] = useState(false)
    const [shallwestart, setShallwestart] = useState(false)
    const [divelaboration, setDivelaboration] = useState(true)

    const handleCorrectans = () => {
        setCorrectans(correctans + 1)
        setTotalans(totalans + 1)

    }
    const handleTotalans = () => {
        setTotalans(totalans + 1)
    }

    const handleShowResult = () => {
        setShowresult(true)
        setStartquizz(false)
        setTotalans(0)
        setShallwestart(true)
        setDivelaboration(false)


    }

    const handleStartQuizz = () => {
        setShowresult(false)
        setCorrectans(0)
        setTotalans(0)
        setStartquizz(true)
        setShallwestart(true)
        setDivelaboration(false)


    }

    return (

        <div id='grad1'>

            <h1 id='mainheading'>QUIZZORA</h1>
            {
                divelaboration ? <div id='elaboration'></div> : <div></div>
            }

            {
                shallwestart ? <div id="startanimation" ><br />All the best</div> : <div id="startanimation"><br /><p style={{ textAlign: 'center' }}>Shall we start ?</p></div>
            }

            {
                startquizz ? <div> {question.map((i) => (<Card finalans={i.correctans} correctans={handleCorrectans} totalans={handleTotalans} question={i.Question} ans={i.ans} />))} </div> : <div />
            }
            {
                question.length === totalans ? <div className='center'><button className='button1' onClick={() => handleShowResult()}><b>Show Result</b></button></div> : <div></div>
            }
            {
                showresult ? <div><h4 className='fade-in-text' style={{ color: "white", fontSize: 30, textAlign: 'center' }}>You have answered {correctans}/5 successfully.<Confetti /></h4></div> : <div />
            }
            {
                startquizz ? <div /> : <div className='center'><button className='button1' onClick={() => handleStartQuizz()}><b>Start Quizz</b></button></div>
            }
            <h4>.</h4>

            <footer class="footer-section">
                <div className='content1' style={{ display: "flex", justifyContent: "center" }}>
                    <div >
                        <p>Created by Vaishnavi S</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default HomePage;
