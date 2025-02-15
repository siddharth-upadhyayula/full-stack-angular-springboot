package com.sidupadhyayula.rest.webservices.restful_web_services.Todo;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "sid", "Learn Spring", new Date(), false));
		todos.add(new Todo(++idCounter, "sid", "Learn Angular", new Date(), true));
		todos.add(new Todo(++idCounter, "sid", "Learn CI/CD", new Date(), true));
	}

	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return todo;
	}

	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
