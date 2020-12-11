package com.testyantra.stockmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.testyantra.stockmanagement.dto.ResponseDTO;
import com.testyantra.stockmanagement.dto.UserDTO;
import com.testyantra.stockmanagement.entities.User;
import com.testyantra.stockmanagement.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService service;

	@PostMapping
	public ResponseDTO register(@RequestBody User user) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.addUser(user));
		return response;
	}

	@PostMapping("/login")
	public ResponseDTO login(@RequestBody UserDTO dto) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.authenticateUser(dto));
		return response;
	}

	@DeleteMapping("/{userId}")
	public ResponseDTO removeUser(@PathVariable int userId) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.removeUser(userId));
		return response;
	}

	@PutMapping
	public ResponseDTO updateUser(@RequestBody User user) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateUser(user));
		return response;
	}

	@GetMapping
	public ResponseDTO getUser(String userName) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getUser(userName));
		return response;
	}
}
