Overview

This repository contains a Full Stack To-Do Application built using Spring Boot for the backend and Angular for the frontend. The project follows a modular structure, adhering to best practices in full-stack web application development. It features user authentication, task management, and a responsive UI.

📂 Directory Structure

1️⃣ Backend (backend/todo-springboot/)

The backend is developed using Spring Boot, exposing RESTful web services for managing to-do items. It also includes Basic Authentication with Spring Security.

🔹 Backend Components
	•	Spring Boot application that serves RESTful APIs.
	•	Spring Security for authentication and authorization.
	•	Hardcoded in-memory data service for managing to-do tasks.

📁 Key Files & Folders:
	•	src/main/java/com/sidupadhyayula/rest/webservices/restful_web_services/
	•	RestfulWebServicesApplication.java - The main entry point of the Spring Boot application.
	•	Todo/
	•	Todo.java - Entity class representing a To-Do task.
	•	TodoHardcodedService.java - Service that provides static, in-memory to-do data.
	•	TodoResource.java - REST Controller handling CRUD operations for to-do items.
	•	basic/auth/
	•	AuthenticationBean.java - Represents authentication status.
	•	BasicAuthenticationController.java - Handles authentication requests.
	•	SpringSecurityConfigurationBasicAuth.java - Configures Spring Security with Basic Authentication.
	•	src/main/resources/application.properties - Contains configuration settings.
	•	pom.xml - Defines dependencies for the Spring Boot project.
	•	.mvn/wrapper/maven-wrapper.properties - Used for Maven build automation.

2️⃣ Frontend (frontend/todo/)

The frontend is built using Angular and provides a user-friendly UI for task management.

🔹 Frontend Components
	•	Angular modules & components for UI and routing.
	•	Authentication service for login/logout.
	•	HTTP interceptors for API communication.
	•	Route guards for protecting pages.

📁 Key Files & Folders:
	•	src/app/
	•	app.module.ts - Root Angular module.
	•	app-routing.module.ts - Defines routes for navigation.
	•	Core UI Components:
	•	menu/ - Navigation menu.
	•	footer/ - Footer section.
	•	error/ - Error handling page.
	•	Feature Components:
	•	login/ - User authentication page.
	•	logout/ - Logout functionality.
	•	list-todos/ - Displays list of to-do tasks.
	•	todo/ - Handles individual to-do management.
	•	manager/ - Placeholder for additional management features.
	•	Services (service/)
	•	basic-authentication.service.ts - Handles authentication.
	•	route-guard.service.ts - Prevents unauthorized access.
	•	todo-data.service.ts - Handles to-do API calls.
	•	Interceptors (http/)
	•	http-intercepter-basic-auth.service.ts - Attaches authentication headers.
	•	Configuration Files:
	•	angular.json, package.json - Angular project configurations.
	•	tsconfig.json - TypeScript configuration.
	•	.gitignore - Excludes unnecessary files.
	•	README.md - Project documentation.

✅ Features

🌐 Backend (Spring Boot)

✔ REST API for to-do tasks
✔ Spring Security-based authentication
✔ Hardcoded in-memory data service
✔ Modular structure with controllers, services, and models

🎨 Frontend (Angular)

✔ Login & logout functionality
✔ To-Do list with CRUD operations
✔ Route protection with Angular Route Guards
✔ API integration with Spring Boot

🛠️ Setup Instructions

1. Backend Setup
```
cd backend/todo-springboot
mvn spring-boot:run
```
•	Runs the Spring Boot backend on http://localhost:8080.

2. Frontend Setup
```
cd frontend/todo
npm install
ng serve
```

•	Runs the Angular app on http://localhost:4200.

📌 Conclusion

This repository is a well-structured full-stack project showcasing Spring Boot and Angular integration. It is useful for developers looking to learn REST API development, Angular frontend development, and authentication handling.

Happy Coding! 🚀
