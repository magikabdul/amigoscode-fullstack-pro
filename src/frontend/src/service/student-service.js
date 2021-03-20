const STUDENT_SERVICE = (function () {

    const checkStatus = (response) => {
        if (response.ok) {
            return response;
        }

        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
    }

    const getAllStudents = () => {
        return fetch("students")
            .then(checkStatus)
            .then(response => response.json());
    }

    const addStudent = (values) => {
        return fetch("students" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
    }

    return {
        getAllStudents,
        addStudent,
    }
})();

export default STUDENT_SERVICE;