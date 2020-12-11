package com.testyantra.stockmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.testyantra.stockmanagement.dao.CompanyDAO;
import com.testyantra.stockmanagement.entities.Company;
import com.testyantra.stockmanagement.entities.Stock;
import com.testyantra.stockmanagement.entities.User;
import com.testyantra.stockmanagement.exceptions.StockException;

@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	private CompanyDAO dao;

	@Override
	public Company addCompany(Company company) {
		Company comp = dao.addCompany(company);
		if (comp != null) {
			return comp;
		} else {
			throw new StockException("Unable to add company");
		}
	}

	@Override
	public Company removeCompany(int companyId) {
		Company comp = dao.removeCompany(companyId);
		if (comp != null) {
			return comp;
		} else {
			throw new StockException("Unable to remove this Company");
		}
	}

	@Override
	public Company updateCompany(Company company) {
		Company comp = dao.updateCompany(company);
		if (comp != null) {
			return comp;
		} else {
			throw new StockException("Unable to Update ....................................");
		}
	}

	@Override
	public Company getCompanyDetail(User user) {
		Company comp = dao.getCompanyDetail(user);
		if (comp!=null) {
			return comp;
		} else {
			throw new StockException("No company found");
		}
	}

	@Override
	public List<Company> getAllCompanyDetails() {
		List<Company> comp = dao.getAllCompanyDetails();
		if (!comp.isEmpty()) {
			return comp;
		} else {
			throw new StockException("There are no companies to show");
		}
	}

	@Override
	public Stock addStock(Stock stock) {
		Stock stock1 = dao.addStock(stock);
		if (stock1 != null) {
			return stock1;
		} else {
			throw new StockException("Unable to add new Stock");
		}
	}

	@Override
	public Stock updateStock(Stock stock) {
		Stock stock1 = dao.updateStock(stock);
		if (stock1 != null) {
			return stock1;
		} else {
			throw new StockException("Unable to update stock");
		}
	}

	@Override
	public Stock getStock(Company company) {
		Stock stock=dao.getStock(company);
		if (stock != null) {
			return stock;
		} else {
			throw new StockException("No stock found for that Company");
		}
	}

	@Override
	public Company getCompany(String companyName) {
		Company company=dao.getCompany(companyName);
		if (company != null) {
			return company;
		} else {
			throw new StockException("No Company found");
		}
	}
}
