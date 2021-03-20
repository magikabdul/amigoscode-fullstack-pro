import React from "react";
import {Form, Formik, Field} from 'formik'
import {TextField} from "formik-material-ui";
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    LinearProgress,
    makeStyles,
    MenuItem,
    Typography
} from "@material-ui/core";

import CancelIcon from '@material-ui/icons/Cancel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {blue} from "@material-ui/core/colors";
import STUDENT_SERVICE from "../../service/student-service";

const useStyles = makeStyles((theme) => ({
    root: {},

    box: {
        width: 400,
    },

    header: {
        margin: theme.spacing(2),
        display: "flex",
        alignItems: "center",
    },

    title: {
        flexGrow: 1,
    },

    form: {
        margin: "20px auto",
        width: "90%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    field: {
        marginTop: 20,
    },

    button: {
        margin: "16px 0",
        backgroundColor: blue[500],
        color: theme.palette.getContrastText(blue[500]),

        '&:hover': {
            backgroundColor: blue[800],
        }
    }
}));

function CreateNewStudent({showForm, setShowForm}) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Drawer anchor={"right"} open={showForm}>
                <Box className={classes.box}>
                    <Box className={classes.header}>
                        <Typography className={classes.title}>Create a new Student</Typography>
                        <IconButton onClick={() => setShowForm(false)} size={"small"}>
                            <CancelIcon/>
                        </IconButton>
                    </Box>

                    <Divider/>

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            gender: '',
                        }}

                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.mail = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}

                        onSubmit={(values, {setSubmitting}) => {
                            STUDENT_SERVICE.addStudent(values)
                                .then(() => {
                                    setSubmitting(false);
                                    setShowForm(false);
                                })
                                .catch((e) => console.log("error:" + e))
                        }}
                    >
                        {({isSubmitting, submitForm, errors}) => (<Form className={classes.form} noValidate>
                                <Field
                                    className={classes.field}
                                    component={TextField}
                                    name={"firstName"}
                                    label={'First Name'}
                                    variant={"outlined"}
                                    size={"small"}
                                    required
                                    fullWidth
                                />

                                <Field
                                    className={classes.field}
                                    component={TextField}
                                    name={"lastName"}
                                    label={'Last Name'}
                                    variant={"outlined"}
                                    size={"small"}
                                    required
                                    fullWidth
                                />

                                <Field
                                    className={classes.field}
                                    component={TextField}
                                    name={"gender"}
                                    label={"Gender"}
                                    variant={"outlined"}
                                    size={"small"}
                                    select
                                >
                                    <MenuItem value={"MALE"}>Male</MenuItem>
                                    <MenuItem value={"FEMALE"}>Female</MenuItem>
                                </Field>

                                <Field
                                    className={classes.field}
                                    component={TextField}
                                    name={"email"}
                                    label={'Email'}
                                    variant={"outlined"}
                                    size={"small"}
                                    required
                                    fullWidth
                                />

                                <Button
                                    className={classes.button}
                                    type={"submit"}
                                    variant={"contained"}
                                    endIcon={<ArrowForwardIosIcon/>}
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Create
                                </Button>
                                {isSubmitting && <LinearProgress/>}
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Drawer>
        </Box>
    )
}

export default CreateNewStudent;