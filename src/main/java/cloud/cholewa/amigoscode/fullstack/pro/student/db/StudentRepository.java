package cloud.cholewa.amigoscode.fullstack.pro.student.db;

import cloud.cholewa.amigoscode.fullstack.pro.student.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
