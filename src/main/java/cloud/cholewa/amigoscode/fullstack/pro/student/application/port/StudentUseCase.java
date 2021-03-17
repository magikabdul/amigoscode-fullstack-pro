package cloud.cholewa.amigoscode.fullstack.pro.student.application.port;

import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Student;

import java.util.List;

public interface StudentUseCase {

    List<Student> findAll();
}
