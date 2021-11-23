import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Questions from '../../components/Questions/Questions';
import './Quiz.css'

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {
    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    useEffect(() => {
        console.log(questions)

        setOptions(questions && handleShuffle([
            questions[currentQuestion]?.correct_answer,
            ...questions[currentQuestion]?.incorrect_answers
        ]))
    }, [questions, currentQuestion])

    console.log(options)

    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    }
    return (
        <div className="quiz">
            <span className="subtitle">Welcome {name}</span>
            {questions ? (
                <>
                    <div className="quizInfo">
                        <h4>{questions[currentQuestion].category}</h4>
                        <h4>Score: {score}</h4>
                    </div>
                    <Questions
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        questions={questions}
                        options={options}
                        correct={questions[currentQuestion]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                        setOptions={setOptions}
                    >


                    </Questions>
                </>
            ) : (
                <CircularProgress style={{ margin: 100 }} size={100} color="inherit" />
            )

            }
        </div>
    );
};

export default Quiz;