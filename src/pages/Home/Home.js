import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Categories from '../../Data/Categories';
import poster from '../../images/poster1.svg'
import './Home.css'

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [error, setError] = useState(false)

    const history = useHistory()

    const handleChange = () => {
        if (!category || !difficulty || !name) {
            setError(true)
            return;
        }
        else {
            setError(false)
            fetchQuestions(category, difficulty)
            history.push('/quiz');
        }
    }
    return (
        <div className="content">
            <div className="settings">
                <h3 style={{ fontSize: 26 }}>Quiz Settings</h3>
                <div className="setting_select">
                    {error && <ErrorMessage>Please fill up the form</ErrorMessage>}
                    <TextField
                        sx={{ width: '75%' }}
                        style={{ margin: 15, textAlign: "left" }}
                        label="Your Name"
                        variant="outlined"
                        onChange={e => setName(e.target.value)}
                        value={name} />
                    <TextField
                        sx={{ width: '75%' }}
                        style={{ margin: 15, textAlign: "left" }}
                        label="Select Catagory"
                        select variant="outlined"
                        onChange={e => setCategory(e.target.value)}
                        value={category}>
                        {
                            Categories.map(cat => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        sx={{ width: '75%' }}
                        style={{ margin: 15, textAlign: "left" }}
                        label="Select Difficulty"
                        select
                        variant="outlined"
                        onChange={e => setDifficulty(e.target.value)}
                        value={difficulty}>
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button onClick={handleChange} sx={{ width: '75%' }} variant="contained" color="primary" size="large">Start Quiz</Button>
                </div>
            </div>
            <img src={poster} className="poster" />
        </div>
    );
};

export default Home;