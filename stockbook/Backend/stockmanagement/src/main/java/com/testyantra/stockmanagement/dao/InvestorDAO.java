package com.testyantra.stockmanagement.dao;

import java.util.List;

import com.testyantra.stockmanagement.entities.Investor;
import com.testyantra.stockmanagement.entities.StockMovement;
import com.testyantra.stockmanagement.entities.User;

public interface InvestorDAO {

	public Investor updateInvestor(Investor investor);

	public List<Investor> getAllInvestors();
	
	public Investor addInvestor(User user);
	
	public StockMovement getMovement(StockMovement move);
	
	public Investor getInvestor(User user);
}
