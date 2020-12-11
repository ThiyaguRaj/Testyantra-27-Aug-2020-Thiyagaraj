package com.testyantra.stockmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testyantra.stockmanagement.dao.InvestorDAO;
import com.testyantra.stockmanagement.dao.UserDAO;
import com.testyantra.stockmanagement.dto.UserDTO;
import com.testyantra.stockmanagement.entities.User;
import com.testyantra.stockmanagement.exceptions.StockException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO dao;
	
	@Autowired
	private InvestorDAO investordao;

	@Override
	public User addUser(User user) {
		User user1 = dao.addUser(user);
		if(user.getRole().equals("Investor")) {
			investordao.addInvestor(user);
		}
		if (user1 != null) {
			return user1;
		} else {
			throw new StockException("Failed to add user");
		}
	}

	@Override
	public User removeUser(int userId) {
		User user1 = dao.removeUser(userId);
		if (user1 != null) {
			return user1;
		} else {
			throw new StockException("Failed to remove user");
		}
	}

	@Override
	public User updateUser(User user) {
		User user1 = dao.updateUser(user);
		if (user1 != null) {
			return user1;
		} else {
			throw new StockException("Failed to update user");
		}
	}

	@Override
	public List<User> getUser(String userName) {
		List<User> user1 = dao.getUser(userName);
		if (!user1.isEmpty()) {
			return user1;
		} else {
			throw new StockException("user not found");
		}
	}

	@Override
	public User authenticateUser(UserDTO dto) {
		User user = dao.authenticateUser(dto);
		if (user != null) {
			return user;
		} else {
			return null;
		}
	}

}
