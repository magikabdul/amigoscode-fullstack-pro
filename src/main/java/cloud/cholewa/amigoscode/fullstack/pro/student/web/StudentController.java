package cloud.cholewa.amigoscode.fullstack.pro.student.web;

import cloud.cholewa.amigoscode.fullstack.pro.common.web.CreatedURI;
import cloud.cholewa.amigoscode.fullstack.pro.student.application.port.StudentUseCase;
import cloud.cholewa.amigoscode.fullstack.pro.student.application.port.StudentUseCase.CreateStudentCommand;
import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Gender;
import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Student;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/students")
public class StudentController {

    private final StudentUseCase studentService;

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok(studentService.findAll());
    }

    @PostMapping
    public ResponseEntity<Void> addStudent(@Valid @RequestBody RestCreateStudent createStudent) {
        Student student = studentService.addStudent(createStudent.toCreateStudentCommand());
        return ResponseEntity.created(createStudentURI(student)).build();
    }

    @Data
    private static class RestCreateStudent {
        @NotEmpty(message = "First Name cannot be empty")
        private String firstName;

        @NotBlank(message = "Last Name cannot be empty")
        private String lastName;

        @NotNull
        private Gender gender;

        @Email(message = "Invalid email")
        @NotEmpty
        private String email;

        private CreateStudentCommand toCreateStudentCommand() {
            return new CreateStudentCommand(firstName, lastName, gender, email);
        }
    }

    private URI createStudentURI(Student student) {
        return new CreatedURI("/" + student.getId().toString()).uri();
    }
}
