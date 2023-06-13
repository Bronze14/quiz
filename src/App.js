import React from "react"
import Question from "./Components/Question"
import Split from "react-split"

export default function App(){
    const [data, setData] = React.useState(null);
    const [selectedAnswers, setSelectedAnswers] = React.useState([]);
    const [result, setResult] = React.useState('');
    const [allAnswersChecked, setAllAnswersChecked] = React.useState(false);
    const [checked, setChecked] = React.useState(false)
    const [start,setStart] = React.useState(false)
    
    function createNewNote(){
      setStart(true)
    }
    React.useEffect(() => {
        
        
        fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
            .then(res => res.json())
            .then(data =>setData(data))
    }, [])
    
    function handleSelection(answer, que) {
      setSelectedAnswers(prevState => [
        ...prevState.filter(item => item[1] !== que),
        [answer, que]
      ])
      
    }
    
    function checkAnswers() {
      let correctAnswers = 0;
      
      selectedAnswers.forEach((selectedAnswer) => {
        data.results.forEach((question) => {
          if (decodeHtml(question.correct_answer) === decodeHtml(selectedAnswer[0])) {
            correctAnswers += 1;
          }
        });
      });
      
      setResult(`${correctAnswers}/${data.results.length}`);
      setAllAnswersChecked(true);
      setChecked(true);
    }
    
    function handlePlayAgain() {
      setData(null)
      setSelectedAnswers([]);
      setResult("");
      setAllAnswersChecked(false);
      setChecked(false);
      fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    function decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }

    return (
      <main>
      {start
        ?
        <Split 
        sizes={[3000, 700]} 
        direction="horizontal" 
        className="split">
          {data !== null ?
          <div>
            {data && data.results.map(prevState => (
              <Question 
                  
                  que={decodeHtml(prevState.question)}
                  answer1={decodeHtml(prevState.correct_answer)}
                  answer2={decodeHtml(prevState.incorrect_answers[0])}
                  answer3={decodeHtml(prevState.incorrect_answers[1])}
                  answer4={decodeHtml(prevState.incorrect_answers[2])}
                  correct={decodeHtml(prevState.correct_answer)}
                  onAnswerSelected={handleSelection}
                  timeForGreen = {allAnswersChecked}
                  checked = {checked}
              />
            ))}
            <div className="results">
            {checked &&<h3 className="scoreBtn">You scored {result} correct answers</h3>}
            {checked ? (
              <button className="newCheckButton" onClick={handlePlayAgain}>Play Again?</button>
            ) : (
              <button className="checkButton" onClick={checkAnswers}>Check answers</button>
            )}
            </div>
          </div>
          : <div className="loader"></div>} 
          </Split>
          :
          <div className="no-notes">
            <h1 className="startBtn">Quizzical</h1>
            
            <button 
                className="first-note" 
                onClick={createNewNote}
            >
                Start quiz
            </button>
          </div>
      }
      </main>

    )
}
