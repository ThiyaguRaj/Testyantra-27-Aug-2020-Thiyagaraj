package com.testyantra.stockmanagement.dto;

import java.io.Serializable;
import java.util.List;

import com.testyantra.stockmanagement.entities.StockMovement;
import com.testyantra.stockmanagement.entities.User;

import lombok.Data;

@Data
public class InvestorDTO implements Serializable {

	private int investorId;

	private double buyAmount;

	private User user;

	private double sellAmount;

	private List<StockMovement> movement;

}
