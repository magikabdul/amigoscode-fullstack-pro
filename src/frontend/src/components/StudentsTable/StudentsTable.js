import React, {useEffect, useState} from "react";
import {
    Box, Button,
    makeStyles,
    Paper, Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert"
import {StudentTableRow} from "./StudentTableRow";
import STUDENT_SERVICE from "../../service/student-service";
import {CreateNewStudent, Loader} from "../index";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {blue} from "@material-ui/core/colors";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant={"filled"} {...props}/>
}

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },

    title: {
        margin: theme.spacing(2),
        textTransform: "uppercase"
    },

    button: {
        margin: theme.spacing(2),
        backgroundColor: blue[500],
        color: theme.palette.getContrastText(blue[500]),

        '&:hover': {
            backgroundColor: blue[800],
        }
    },

    body: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    },
}))

function StudentsTable() {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [students, setStudents] = useState([]);
    const [serverError, setServerError] = useState(false);
    const [serverErrorMessage, setServerErrorMessage] = useState('');

    useEffect(() => {
        setIsLoading(true);
        STUDENT_SERVICE.getAllStudents()
            .then(res => {
                setStudents(res)
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false)
                setServerError(true)
                setServerErrorMessage(e.toString().slice(7))
            })
    }, [])

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>Students</Typography>
            <Button className={classes.button} variant={"contained"} startIcon={<AddCircleIcon/>}
                    onClick={() => setShowForm(true)}>Add new student</Button>

            <Box className={classes.body}>
                {isLoading ? <Loader/> :
                    <TableContainer component={Paper}>
                        <Table size={"small"}>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map(student => <StudentTableRow key={student.uuid} student={student}/>)}
                            </TableBody>
                        </Table>
                    </TableContainer>}
            </Box>

            <CreateNewStudent showForm={showForm} setShowForm={setShowForm} setStudents={setStudents}/>

            <Snackbar
                open={serverError}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                autoHideDuration={6000}
                onClose={() => {
                    setServerError(false)

                }}
            >
                <Alert severity={"error"}>{serverErrorMessage}</Alert>
            </Snackbar>
        </Box>
    )
}

export default StudentsTable;