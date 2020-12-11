package com.testyantra.stockmanagement.service;

import java.util.List;

import com.testyantra.stockmanagement.entities.Investor;
import com.testyantra.stockmanagement.entities.StockMovement;
import com.testyantra.stockmanagement.entities.User;

public interface InvestorService {
		public Investor updateInvestor(Investor investor);
		public List<Investor> getAllInvestors();
		public StockMovement getMovement(StockMovement move);
		public Investor getInvestor(User user);
}
