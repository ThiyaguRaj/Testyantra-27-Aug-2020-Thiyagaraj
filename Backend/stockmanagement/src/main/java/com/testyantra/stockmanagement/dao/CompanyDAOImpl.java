package com.testyantra.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;

import com.testyantra.stockmanagement.entities.Company;
import com.testyantra.stockmanagement.entities.Stock;
import com.testyantra.stockmanagement.entities.User;

@Repository
public class CompanyDAOImpl implements CompanyDAO {
	@PersistenceContext
	EntityManager manager;

	@Override
	@Transactional
	public Company addCompany(Company company) {
		manager.persist(company.getUser());
		manager.persist(company);
		return company;
	}

	@Override
	@Transactional
	public Company removeCompany(int companyId) {
		Company company = manager.find(Company.class, companyId);
		User user=manager.find(User.class, company.getUser().getUserId());
		if (company != null && user!=null) {
			manager.remove(company);
			manager.remove(user);
			return company;
		} else {
			return company;
		}
	}

	@Override
	@Transactional
	public Company updateCompany(Company company) {
		Company company1 = manager.find(Company.class, company.getCompanyId());
		User user=manager.find(User.class, company.getUser().getUserId());
		if(user!=null && company1 != null) {
			BeanUtils.copyProperties(company.getUser(), user);
			BeanUtils.copyProperties(company, company1);
			return company1;	
		} else {
			return null;
		}
	}

	@Override
	public Company getCompanyDetail(User user) {
		TypedQuery<Company> query = manager.createQuery("FROM Company C WHERE C.user=:uname",
				Company.class);
		query.setParameter("uname", user);
		return query.getSingleResult();

	}

	@Override
	public List<Company> getAllCompanyDetails() {
		return manager.createQuery("FROM Company", Company.class).getResultList();
	}

	@Override
	@Transactional
	public Stock addStock(Stock stock) {
		manager.persist(stock);
		return stock;
	}

	@Override
	@Transactional
	public Stock updateStock(Stock stock) {
		Stock stock1 = manager.find(Stock.class, stock.getStockId());
		BeanUtils.copyProperties(stock, stock1);
		return stock1;
	}

	@Override
	public Stock getStock(Company company) {
		TypedQuery<Stock> query=manager.createQuery("from Stock S where S.company= :comp",Stock.class);
		query.setParameter("comp", company);
		return query.getSingleResult();
	}

	@Override
	public Company getCompany(String companyName) {
		TypedQuery<Company> query=manager.createQuery("from Company U where U.companyName= :value",Company.class);
		query.setParameter("value", companyName);
		return query.getSingleResult();
	}
}
