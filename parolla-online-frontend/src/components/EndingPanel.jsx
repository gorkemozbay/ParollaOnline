
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Tabs, Tab, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BubbleState from "../enums/BubbleState";

function EndingPanel( {isOpen, handleCloseDialog, bubbles} ) {

    const [tabValue, setTabValue] = useState(0);
    const [results, setResults] = useState({correct: 0, wrong: 0, pass: 0});

    const navigate = useNavigate();

    const getResults = () => {
        let correct = 0;
        let wrong = 0;
        let pass = 0;
        bubbles?.forEach((bubble) => {
            if (bubble.bubbleState == BubbleState.CORRECT) {
                correct++;
            } else if (bubble.bubbleState == BubbleState.FAIL) {
                wrong++;
            } else if (bubble.bubbleState == BubbleState.BYPASSED) {
                pass++;
            }
        });
        return {correct, wrong, pass};
    }

    useEffect(() => {
        setResults(getResults());
    }, [isOpen])

    return (
        <Dialog 
            open={isOpen}
            disableBackdropClick
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>Game Over</DialogTitle>
            <Tabs 
                value={tabValue} 
                onChange={(e, newValue) => setTabValue(newValue)}
            >
                <Tab label="Results"></Tab>
                <Tab label="Answer Key"></Tab>
            </Tabs>
            {tabValue === 0 &&
                <DialogContent>
                    <Typography> Correct: {results.correct}</Typography>
                    <Typography> Wrong:   {results.wrong}</Typography>
                    <Typography> Pass:    {results.pass}</Typography>
                </DialogContent>
            }
            {tabValue === 1 &&
                <DialogContent>
                    <Typography>Answer Key</Typography>
                </DialogContent>
            }
            <DialogActions>
                <Button
                    onClick={() => { navigate('/') }}
                >
                    Go to Home
                </Button>
                <Button
                    onClick={null} // TODO: implement play again
                >
                    Play Again
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EndingPanel;

