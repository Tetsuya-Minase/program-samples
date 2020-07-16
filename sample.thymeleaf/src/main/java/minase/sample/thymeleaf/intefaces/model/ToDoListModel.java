package minase.sample.thymeleaf.intefaces.model;

import lombok.Data;

import java.util.List;

@Data
public class ToDoListModel {
    private List<ToDoModel> todoList;
}
