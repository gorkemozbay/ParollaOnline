import BubbleChain from "../components/BubbleChain";
import Timer from "../components/Timer";


function MainGameLayout() {

 

    return (
        <>
        <BubbleChain></BubbleChain>
        {/*  Opponent Bubble  */}
        {/*  Bubble  */}
        <Timer 
            initialSeconds={20}
        ></Timer>
        {/*  Questions  */}
        {/*  Answer  */}
        </>
    )
}

export default MainGameLayout; 
