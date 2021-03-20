package cloud.cholewa.amigoscode.fullstack.pro.student.application.port;

import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Gender;
import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Student;
import lombok.Value;

import java.util.List;

public interface StudentUseCase {

    List<Student> findAll();

    Student addStudent(CreateStudentCommand createStudentCommand);

    void removeStudent(Long id);

    @Value
    class CreateStudentCommand {
        String firstName;
        String lastName;
        Gender gender;
        String email;
    }
}
