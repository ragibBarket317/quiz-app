import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import cup from '../../images/GoldCup2.svg'
import './Result.css'

const Result = ({ name, score }) => {
    const history = useHistory()
    useEffect(() => {
        if (!name) {
            history.push('/')
        }
    }, [name, history])
    const handleBack = () => {
        history.push('/')
    }
    return (
        <div className="result">
            <img style={{ width: 100 }} src={cup} alt="" />
            <h1 className="title">{name} score is {score}</h1>
            <Button onClick={handleBack} variant="contained" color="primary" size="large">Go Back To Home</Button>
        </div>
    );
};

export default Result;