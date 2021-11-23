import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Questions.css'

const Questions = ({
    currentQuestion,
    setCurrentQuestion,
    questions,
    options,
    correct,
    score,
    setScore,
    setQuestions,
    setOptions
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return "select"
        } else if (selected === i && selected !== correct) {
            return "wrong"
        } else if (i === correct) {
            return "select"
        }
    }
    const handleCheck = (i) => {
        setSelected(i)
        if (i === correct) setScore(score + 1);
        setError(false);
    }
    const handleNext = () => {
        if (currentQuestion > 8) {
            history.push('/result')
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1)
            setSelected();
        } else {
            setError('Please select an option')
        }
    }
    const handleQuit = () => {
        history.push('/')
    }
    return (
        <div className="question">
            <h1>Question {currentQuestion + 1}</h1>

            <div className="singleQues">
                <h2>{questions[currentQuestion].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>Please select an option</ErrorMessage>}
                    {
                        options &&
                        options.map(i => (
                            <button
                                onClick={() => { handleCheck(i) }}
                                className={`singleOption ${selected && handleSelect(i)}`}
                                key={i}
                                disabled={selected}
                            >{i}</button>
                        ))
                    }
                </div>
                <div className="controls">
                    <Button onClick={handleQuit} variant="contained" color="primary" size="large">Quit</Button>
                    <Button onClick={handleNext} variant="contained" color="secondary" size="large">Next</Button>
                </div>
            </div>
        </div>
    );
};

export default Questions;