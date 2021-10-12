package net.unibave.todolist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Tasks extends JpaRepository<Task, Long> {

    List<Task> findAllByDone(@Param("done")boolean done);

}
