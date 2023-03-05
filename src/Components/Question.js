import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  const id = nanoid();
  const [answers, setAnswers] = React.useState([]);
  const [shuffledAnswers, setShuffledAnswers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);

  
  React.useEffect(() => {
    setAnswers(prevAnswers => [props.answer1, props.answer2, props.answer3, props.answer4]);
  }, [props.answer1, props.answer2, props.answer3, props.answer4]);
  React.useEffect(() => {
    setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
  }, [answers]);

  console.log(answers)
  React.useEffect(() => {
    if (selected !== null) {
      setIsCorrect(shuffledAnswers[selected] === props.correct);
    }
  }, [selected, shuffledAnswers, props.correct]);

  function handleClick(answer, index) {
    if (!props.checked ) {
      setSelected(index);
      props.onAnswerSelected(answer,props.que);
      
    }
  }
  
  return (
    <div className="mainComp" key={id}>
      <h6 className="questionButton">{decodeURIComponent(props.que)}</h6>

      <div>
        {shuffledAnswers.map((answer, index) => (
          <button
          className="answerButton"
          key={`${id}-${index}`}
          style={{  
            backgroundColor: props.timeForGreen === true && shuffledAnswers[index] === props.correct ? "#94D7A2" :  
              index === selected && isCorrect === false && props.checked ? "#FFB5B5" : 
              index === selected ? "#D6DBF5" : "white",
            border: index === selected ? "1px solid #D6DBF5" : "1px solid #4D5B9E"
          }}
          onClick={() => handleClick(answer,index)}
        >
          {decodeURIComponent(answer)}

        </button>
        ))}
      </div>
    </div>

  );
}