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
		todos.add(new Todo(++idCounter, "sid", "Learn Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "sid", "Learn CI/CD", new Date(), false));
	}

	public List<Todo> findAll(){
		return todos;
	}
}
