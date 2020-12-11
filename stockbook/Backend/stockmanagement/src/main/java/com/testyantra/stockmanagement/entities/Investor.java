package com.testyantra.stockmanagement.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
public class Investor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "investor_id")
	private int investorId;

	@Column(name = "buy_amount")
	private double buyAmount;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	@NotNull
	@Column(name = "sell_amount")
	private double sellAmount;

	@OneToMany(mappedBy = "investor", fetch = FetchType.EAGER)
	@JsonIgnore
	private List<StockMovement> movement;

}
