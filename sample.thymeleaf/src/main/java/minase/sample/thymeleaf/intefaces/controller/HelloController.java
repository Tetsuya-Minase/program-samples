package minase.sample.thymeleaf.intefaces.controller;

import minase.sample.thymeleaf.intefaces.model.GreetingModel;
import minase.sample.thymeleaf.intefaces.model.HelloModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller()
@RequestMapping("hello")
public class HelloController {
    @GetMapping()
    public String hello(Model model){
        model.addAttribute("helloModel", new HelloModel());
        return "Hello";
    }

    @PostMapping("/register")
    public String registerHello(@ModelAttribute final HelloModel body, Model model) {
        final var greetingModel = new GreetingModel();
        greetingModel.setName(body.getName());
        switch (body.getLanguage()) {
            case "ja":
                greetingModel.setGreeting("こんにちは！");
                break;
            case "en":
                greetingModel.setGreeting("Hello!");
                break;
            default:
                break;
        }
        model.addAttribute("greetingModel", greetingModel);
        return "Greeting";
    }
}
