package minase.sample.thymeleaf.intefaces.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ToDoStatus {
    TODO("todo"),
    IN_PROGRESS("inProgress"),
    END("end");

    private final String status;
}
