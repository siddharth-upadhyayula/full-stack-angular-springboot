package com.sidupadhyayula.rest.webservices.restful_web_services.Todo;

import java.util.ArrayList;
import java.util.List;

public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "in28minutes", "Learn to Dance", new Date(), false));
	}

}
