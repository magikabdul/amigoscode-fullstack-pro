package cloud.cholewa.amigoscode.fullstack.pro.student.application;

import cloud.cholewa.amigoscode.fullstack.pro.student.application.port.StudentUseCase;
import cloud.cholewa.amigoscode.fullstack.pro.student.db.StudentRepository;
import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements StudentUseCase {

    private final StudentRepository studentRepository;

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }
}
