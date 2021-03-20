import React, {useState} from "react";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@material-ui/core";
import STUDENT_SERVICE from "../../service/student-service";

function DeleteStudent({setShowDelete, showDelete, id, firstName, lastName, setStudents}) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Dialog
            open={showDelete}
            onClose={() => setShowDelete(false)}
        >
            <DialogTitle>Do you want to delete student?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {firstName + ' ' + lastName}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {isLoading && <CircularProgress size={20}/>}
                <Button onClick={() => setShowDelete(false)}>disagree</Button>
                <Button
                    onClick={() => {
                        setIsLoading(true)
                        STUDENT_SERVICE.removeStudent(id).then(() => {
                                STUDENT_SERVICE.getAllStudents()
                                    .then(r => {
                                        setStudents(r)
                                        setShowDelete(false)
                                        setIsLoading(false)
                                    })
                            }
                        )
                    }}
                >
                    agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteStudent