import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './Questions.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Questions = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    score,
    setScore,
}) => {

    const [select, setSelect] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if(select === i && i === correct){
            return "select";
        }else if(select === i && i !== correct){
            return "wrong";
        }else{
            if(i === correct){
                return "select";
            }
        }
    }

    const handleCheck = (i) => {
        setSelect(i);
        if(i === correct) setScore(score + 1);
        setError(false);
    }

    const navigate = useNavigate();

    const handleQuit = () => {
        
    }
    
    const handleNext = () => {
        if(currQues > 8){
            navigate('/result');
        }else if(select){
            setCurrQues(currQues + 1);
            setSelect();
        }else{
            setError("Please select an option first");
        }
    }

    return (
        <div className="questions">
            <h1>Question: {currQues + 1}</h1>

            <div className="singleQuestion">
                <h2>{questions[currQues].question}</h2>

                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options && options.map((i) => (
                            <button
                                onClick={() => handleCheck(i)}
                                className={`singleOption ${select && handleSelect(i)}`}
                                key={i}
                                disabled={select}>{i}
                            </button>
                        ))
                    }
                </div>
                <div className="controls">
                    <Button 
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{width: 185}}
                        herf='/'
                        onClick={() => {handleQuit()}}
                    >
                        Quit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{width: 185}}
                        onClick={() => {handleNext()}}
                    >
                        Next Question
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Questions;