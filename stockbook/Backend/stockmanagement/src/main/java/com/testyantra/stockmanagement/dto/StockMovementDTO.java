package com.testyantra.stockmanagement.dto;

import java.io.Serializable;
import java.util.Date;

import com.testyantra.stockmanagement.entities.Investor;
import com.testyantra.stockmanagement.entities.Stock;

import lombok.Data;

@Data
public class StockMovementDTO implements Serializable{

	private int movementId;

	private Date movementDate;

	private Stock stock;

	private Investor investor;
}
