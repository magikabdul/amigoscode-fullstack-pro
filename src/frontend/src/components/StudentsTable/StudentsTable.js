import React from "react";
import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";

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
    }
}))

function StudentsTable() {
    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Typography className={classes.title}>Students</Typography>
            <TableContainer component={Paper}>
                <Table size={"medium"}>
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
                </Table>
            </TableContainer>
            <Box className={classes.body}>table</Box>
        </Box>
    )
}

export default StudentsTable;