
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

function EndingPanel( {isOpen, handleCloseDialog} ) {


    return (
        <Dialog 
            open={isOpen}
            disableBackdropClick
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>Game Over</DialogTitle>
            <DialogContent>
                <p>Game Over</p>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleCloseDialog}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EndingPanel;

