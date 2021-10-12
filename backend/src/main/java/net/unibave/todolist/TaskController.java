package net.unibave.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private final Tasks tasks;

    @Autowired
    public TaskController(Tasks tasks) {
        this.tasks = tasks;
    }

    @GetMapping(path = "/tasks/pending", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Task> findAllPending() {
        return tasks.findAllByDone(false);
    }

    @GetMapping(path = "/tasks/done", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Task> findAllDone() {
        return tasks.findAllByDone(true);
    }

    @PatchMapping(path = "/tasks/{id}/set-as-done", produces = MediaType.APPLICATION_JSON_VALUE)
    public Task setAsDone(@PathVariable("id") Long id) {
        var task = tasks.findById(id).orElseThrow(IllegalArgumentException::new);
        task.setDone(true);
        return tasks.save(task);
    }

    @PatchMapping(path = "/tasks/{id}/set-as-pending", produces = MediaType.APPLICATION_JSON_VALUE)
    public Task setAsPending(@PathVariable("id") Long id) {
        var task = tasks.findById(id).orElseThrow(IllegalArgumentException::new);
        task.setDone(false);
        return tasks.save(task);
    }

    @PostMapping(path = "/tasks", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Task save(@RequestBody Task task) {
        return tasks.save(task);
    }

}
