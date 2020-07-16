package minase.sample.thymeleaf.intefaces.model;

import lombok.Data;
import minase.sample.thymeleaf.intefaces.constant.ToDoStatus;

@Data
public class ToDoModel {
    private String todo;
    private ToDoStatus status;
}
