package com.testyantra.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;

import com.testyantra.stockmanagement.dto.UserDTO;
import com.testyantra.stockmanagement.entities.User;

@Repository
public class UserDAOImpl implements UserDAO {
	@PersistenceContext
	private EntityManager manager;

	@Override
	@Transactional
	public User addUser(User user) {
		manager.persist(user);
		return user;
	}

	@Override
	@Transactional
	public User removeUser(int userId) {
		User user = manager.find(User.class, userId);
		if (user != null) {
			manager.remove(user);
			return user;
		} else {
			return null;
		}
	}

	@Override
	@Transactional
	public User updateUser(User user) {
		User user1 = manager.find(User.class, user.getUserId());
		if (user1 != null) {
			BeanUtils.copyProperties(user, user1);
			return user1;
		} else {
			return null;
		}
	}

	@Override
	public List<User> getUser(String userName) {
		TypedQuery<User> query = manager.createQuery("FROM User U WHERE U.userName = :value",
				User.class);
		query.setParameter("value", userName);
		List<User> userList = query.getResultList();
		List<User> list = null;
		if (!userList.isEmpty()) {
			return userList;
		} else {
			return list;
		}

	}

	@Override
	public User authenticateUser(UserDTO dto) {
		TypedQuery<User> query = manager.createQuery("FROM User U WHERE U.email= :mail AND U.password= :pwd",
				User.class);
		query.setParameter("mail", dto.getEmail());
		query.setParameter("pwd", dto.getPassword());
		User user = query.getSingleResult();
		if (user != null) {
			return user;
		} else {
			return null;
		}

	}

}
