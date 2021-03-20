package cloud.cholewa.amigoscode.fullstack.pro.student.application;

import cloud.cholewa.amigoscode.fullstack.pro.common.ObjectNotFoundException;
import cloud.cholewa.amigoscode.fullstack.pro.common.jpa.BaseEntity;
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

    @Override
    public Student addStudent(CreateStudentCommand createStudentCommand) {
        Student student = toStudent(createStudentCommand);
        return studentRepository.save(student);
    }

    @Override
    public void removeStudent(Long id) {
        studentRepository.findById(id)
                .map(student -> {
                    Long studentId = student.getId();
                    studentRepository.deleteById(studentId);
                    return studentId;
                })
                .orElseThrow(() -> new ObjectNotFoundException("Student with id: " + id + " not found"));
    }

    private Student toStudent(CreateStudentCommand createStudentCommand) {
        return new Student(
                createStudentCommand.getFirstName(),
                createStudentCommand.getLastName(),
                createStudentCommand.getEmail(),
                createStudentCommand.getGender()
        );
    }
}
