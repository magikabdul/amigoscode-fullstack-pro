package cloud.cholewa.amigoscode.fullstack.pro.student.web;

import cloud.cholewa.amigoscode.fullstack.pro.student.application.port.StudentUseCase;
import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
