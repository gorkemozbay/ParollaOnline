import BubbleChain from "../components/BubbleChain";
import Timer from "../components/Timer";
import QuestionHolder from "../components/QuestionHolder";


function MainGameLayout() {

 

    return (
        <>
            <Timer initialSeconds={20}></Timer>
            <BubbleChain></BubbleChain>
            <QuestionHolder></QuestionHolder>
        {/*  Opponent Bubble  */}
        {/*  Answer  */}
        </>
    )
}

export default MainGameLayout; 
