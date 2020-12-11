package com.testyantra.stockmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testyantra.stockmanagement.dao.InvestorDAO;
import com.testyantra.stockmanagement.entities.Investor;
import com.testyantra.stockmanagement.entities.StockMovement;
import com.testyantra.stockmanagement.entities.User;
import com.testyantra.stockmanagement.exceptions.StockException;

@Service
public class InvestorServiceImpl implements InvestorService{

	@Autowired
	private InvestorDAO dao;

	@Override
	public Investor updateInvestor(Investor investor) {
		Investor invest = dao.updateInvestor(investor);
		if (invest != null) {
			return invest;
		} else {
			throw new StockException("Investor updation Failed");
		}
	}

	@Override
	public List<Investor> getAllInvestors() {
		List<Investor> invest = dao.getAllInvestors();
		if (!invest.isEmpty()) {
			return invest;
		} else {
			throw new StockException("No investors found");
		}
	}
	
	@Override
	public Investor getInvestor(User user) {
		Investor invest = dao.getInvestor(user);
		if (invest != null) {
			return invest;
		} else {
			throw new StockException("No investor found for the user");
		}
	}

	@Override
	public StockMovement getMovement(StockMovement move) {
		StockMovement movement=dao.getMovement(move);
		if(movement!=null) {
			return movement;
		}else {
			throw new StockException("Stock movement failed");
		}
	}

	
}
