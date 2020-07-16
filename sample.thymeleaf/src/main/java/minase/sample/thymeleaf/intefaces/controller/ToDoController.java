package minase.sample.thymeleaf.intefaces.controller;

import minase.sample.thymeleaf.intefaces.model.ToDoListModel;
import minase.sample.thymeleaf.intefaces.model.ToDoModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller()
@RequestMapping("todo")
public class ToDoController {
    @GetMapping("list")
    public String todoList(Model model) {
        model.addAttribute("todoListModel", new ToDoListModel());
        return "ToDoList";
    }
}
