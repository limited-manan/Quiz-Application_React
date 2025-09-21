import './Quiz.css';
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from '../../components/Questions/Questions';
const Quiz = ({ name, score, questions, setScore, setQuestions }) => {

    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    const handleSuffle = (optionss) =>
        optionss.sort(() => Math.random() - 0.5);

    useEffect(() => {
        if (questions && questions.length > 0 && questions[currQues]) {
            const shuffled = handleSuffle([
                ...questions[currQues].incorrect_answers,
                questions[currQues].correct_answer,
            ]);
            // console.log(questions);
            setOptions(shuffled);
        }
    }, [questions, currQues]);


    return (
        <div className='quiz'>
            <span className="subtitle">Welcome! {name}</span>
            {
                questions ? (
                    <>
                        <div className="quizInfo">
                            <span>{questions[currQues].category}</span>
                            <span>Score : {score}</span>
                        </div>


                        <Questions
                            currQues={currQues}
                            setCurrQues={setCurrQues}
                            questions={questions}
                            options={options}
                            correct={questions[currQues]?.correct_answer}
                            score={score}
                            setScore={setScore}
                        />
                    </>
                ) : (
                    <CircularProgress style={{ margin: 100 }} color="inherit" size={150} thickness={1} />
                )
            }
        </div>
    )
}

export default Quiz;