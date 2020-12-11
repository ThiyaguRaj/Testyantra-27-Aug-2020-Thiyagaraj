package com.testyantra.stockmanagement.dao;

import java.util.List;

import com.testyantra.stockmanagement.dto.UserDTO;
import com.testyantra.stockmanagement.entities.User;

public interface UserDAO {
	public User addUser(User user);

	public User removeUser(int userId);

	public User updateUser(User user);

	public List<User> getUser(String userName);

	public User authenticateUser(UserDTO dto);
}
