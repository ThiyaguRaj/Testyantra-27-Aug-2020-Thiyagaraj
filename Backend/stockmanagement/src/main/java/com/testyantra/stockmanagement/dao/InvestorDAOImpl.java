package com.testyantra.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;

import com.testyantra.stockmanagement.entities.Investor;
import com.testyantra.stockmanagement.entities.StockMovement;
import com.testyantra.stockmanagement.entities.User;

@Repository
public class InvestorDAOImpl implements InvestorDAO {

	@PersistenceContext
	EntityManager manager;

	@Override
	@Transactional
	public Investor updateInvestor(Investor investor) {
		Investor investor1 = manager.find(Investor.class, investor.getInvestorId());
		BeanUtils.copyProperties(investor, investor1);
		return investor1;
	}

	@Override
	public List<Investor> getAllInvestors() {
		return manager.createQuery("FROM Investor", Investor.class).getResultList();
	}

	@Override
	@Transactional
	public Investor addInvestor(User user) {
		Investor invest = new Investor();
		invest.setUser(user);
		manager.persist(invest);
		return invest;
	}

	@Override
	@Transactional
	public StockMovement getMovement(StockMovement move) {
		manager.persist(move);
		return move;
	}

	@Override
	public Investor getInvestor(User user) {
		TypedQuery<Investor> query = manager.createQuery("select I from Investor I where I.user= :userid",Investor.class);
		query.setParameter("userid",user);
		return query.getSingleResult();
		
	}
}
