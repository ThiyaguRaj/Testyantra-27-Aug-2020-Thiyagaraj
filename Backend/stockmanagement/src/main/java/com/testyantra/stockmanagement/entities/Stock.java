package com.testyantra.stockmanagement.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "stock_id")
	private int stockId;

	@NotNull
	@Column(name = "stock_amount")
	private double stockAmount;

	@NotNull
	@Column(name = "available_stock")
	private int availabeStock;

	@Column(name = "max_stock")
	private int maxStock;

	@OneToMany(mappedBy = "stock")
	@JsonIgnore
	private List<StockMovement> move;

	@OneToOne
	@JoinColumn(name = "company_id")
	private Company company;

}
