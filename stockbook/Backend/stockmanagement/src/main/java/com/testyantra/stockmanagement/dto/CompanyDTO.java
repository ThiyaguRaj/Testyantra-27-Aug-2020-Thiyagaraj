package com.testyantra.stockmanagement.dto;

import java.io.Serializable;

import com.testyantra.stockmanagement.entities.User;

import lombok.Data;

@Data
public class CompanyDTO implements Serializable {

	private int companyId;

	private String companyName;

	private Long companyPhone;

	private String companyAddress;

	private User user;
	
	private String status;

}
