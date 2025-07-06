package com.example.feedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") // ✅ Allows requests from any frontend (React, etc.)
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackRepository repo;

    // Handle POST /feedback
    @PostMapping
    public Feedback create(@RequestBody Feedback feedback) {
        return repo.save(feedback);
    }

    // Handle GET /feedback
    @GetMapping
    public List<Feedback> getAll() {
        return repo.findAll();
    }
}
