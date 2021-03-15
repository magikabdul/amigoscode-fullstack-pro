import React, {Fragment, useState, useEffect} from "react";
import {Button, CssBaseline} from "@material-ui/core";

import STUDENT_SERVICE from "../service/student-service";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        STUDENT_SERVICE.getAllStudents()
            .then(data => setStudents(data));
    }, [])

    return (
        <Fragment>
            <CssBaseline/>
            <Button variant={"contained"} color={"primary"}>{students.length}</Button>
        </Fragment>
    )
}

export default App;