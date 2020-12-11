package com.testyantra.stockmanagement.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "company_id")
	private int companyId;

	@NotNull
	@Column(name = "company_name")
	private String companyName;

	@NotNull
	@Column(name = "company_phone")
	private Long companyPhone;

	@NotNull
	@Column(name = "company_address")
	private String companyAddress;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	private String status;

}
