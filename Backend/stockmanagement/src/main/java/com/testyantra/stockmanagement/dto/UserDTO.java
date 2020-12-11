package com.testyantra.stockmanagement.dto;

import lombok.Data;

@Data
public class UserDTO {

	private int userId;

	private String userName;

	private Long phone;

	private String password;

	private String email;

	private String address;

	private String role;
	
	private String status;
}
