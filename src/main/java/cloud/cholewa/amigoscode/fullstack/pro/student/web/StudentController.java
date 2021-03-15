package cloud.cholewa.amigoscode.fullstack.pro.student.web;

import cloud.cholewa.amigoscode.fullstack.pro.student.db.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import static cloud.cholewa.amigoscode.fullstack.pro.student.db.Gender.FEMALE;
import static cloud.cholewa.amigoscode.fullstack.pro.student.db.Gender.MALE;

@RestController
@RequiredArgsConstructor
@RequestMapping("/students")
public class StudentController {

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = Arrays.asList(
                new Student("Kris", "Shot", "ksfs@ggsg.com", MALE),
                new Student("Ann", "Doe", "ann.doe@ggsg.com", FEMALE)
        );

        return ResponseEntity.ok(students);
    }
}
