package com.example.feedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackRepository repository;

    @PostMapping
    public Feedback submit(@RequestBody Feedback feedback) {
        return repository.save(feedback);
    }

    @GetMapping
    public List<Feedback> getAll() {
        return repository.findAll();
    }
}
