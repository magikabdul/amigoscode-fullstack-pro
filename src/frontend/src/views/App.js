import React, {Fragment, useEffect, useState} from "react";
import {CssBaseline} from "@material-ui/core";

import STUDENT_SERVICE from "../service/student-service";
import {MainLayout} from "../layouts";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        STUDENT_SERVICE.getAllStudents()
            .then(data => setStudents(data));
    }, [])

    const drawStudents = students.map(student => {
        return <p key={student.uuid}>{student.firstName}</p>
    })

    return (
        <Fragment>
            <CssBaseline/>
            <MainLayout/>
        </Fragment>
    )
}

export default App;