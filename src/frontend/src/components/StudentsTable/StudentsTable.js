import React, {useEffect, useState} from "react";
import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {StudentTableRow} from "./StudentTableRow";
import STUDENT_SERVICE from "../../service/student-service";
import {Loader} from "../index";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
    },

    title: {
        margin: theme.spacing(2),
        textTransform: "uppercase"
    },

    body: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    },
}))

function StudentsTable() {
    const classes = useStyles();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        STUDENT_SERVICE.getAllStudents()
            .then(res => setStudents(res))
    }, [])

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>Students</Typography>

            <Box className={classes.body}>
                <Loader/>
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
                </TableContainer>
            </Box>
        </Box>
    )
}

export default StudentsTable;