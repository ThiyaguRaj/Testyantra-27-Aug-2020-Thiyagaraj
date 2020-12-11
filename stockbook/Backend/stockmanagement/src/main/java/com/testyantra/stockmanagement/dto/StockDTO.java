package com.testyantra.stockmanagement.dto;

import java.io.Serializable;
import java.util.List;

import com.testyantra.stockmanagement.entities.Company;
import com.testyantra.stockmanagement.entities.StockMovement;

import lombok.Data;

@Data
public class StockDTO implements Serializable {

	private int stockId;

	private double stockAmount;

	private int availabeStock;

	private int maxStock;

	private List<StockMovement> move;

	private Company company;

}
