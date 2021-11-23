import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}& type=multiple`)
    setQuestions(data.results)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions}></Home>
          </Route>
          <Route exact path="/home">
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions}></Home>
          </Route>
          <Route exact path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              setQuestions={setQuestions}
              score={score}
              setScore={setScore}
            ></Quiz>
          </Route>
          <Route exact path="/result">
            <Result name={name} score={score}></Result>
          </Route>
        </Switch>

      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
