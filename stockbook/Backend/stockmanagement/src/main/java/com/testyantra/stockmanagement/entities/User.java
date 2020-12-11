package com.testyantra.stockmanagement.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	@NotNull
	@Column(name = "username", unique = true)
	private String userName;

	@NotNull
	@Column(name = "phone", unique = true)
	private Long phone;

	@NotNull
	private String password;

	@NotNull
	@Column(name = "email", unique = true)
	private String email;

	@NotNull
	private String address;

	@NotNull
	private String role;
	
	private String status;
}
