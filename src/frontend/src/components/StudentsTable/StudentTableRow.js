import React, {useState} from "react";
import {Avatar, Button, ButtonGroup, makeStyles, TableCell, TableRow} from "@material-ui/core";
import {deepPurple} from "@material-ui/core/colors";
import DeleteStudent from "../DeleteStudent/DeleteStudent";

const useStyles = makeStyles((theme) => ({
    row: {},

    avatar: {
        fontSize: 12,
        width: theme.spacing(3),
        height: theme.spacing(3),
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
}))

export function StudentTableRow({student: {id, firstName, lastName, gender, email}, setStudents}) {
    const classes = useStyles();
    const [showDelete, setShowDelete] = useState(false);

    const getAvatarName = () => {
        return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    }

    return (
        <TableRow className={classes.row}>
            <TableCell><Avatar className={classes.avatar}>{getAvatarName()}</Avatar></TableCell>
            <TableCell>{firstName}</TableCell>
            <TableCell>{lastName}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
                <ButtonGroup size={"small"}>
                    <Button variant={"outlined"} color={"primary"}>Edit</Button>
                    <Button variant={"outlined"} color={"secondary"} onClick={() => setShowDelete(true)}>Delete</Button>
                </ButtonGroup>
            </TableCell>
            <DeleteStudent
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                id={id}
                firstName={firstName}
                lastName={lastName}
                setStudents={setStudents}
            />
        </TableRow>
    )
}