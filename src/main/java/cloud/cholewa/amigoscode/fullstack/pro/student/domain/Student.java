package cloud.cholewa.amigoscode.fullstack.pro.student.domain;

import cloud.cholewa.amigoscode.fullstack.pro.common.jpa.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.Email;

@Entity
@Table(name = "students")
@NoArgsConstructor
@Getter
@Setter
public class Student extends BaseEntity {

    private String firstName;

    private String lastName;

    @Email
    private String email;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    public Student(String firstName, String lastName, String email, Gender gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }
}
