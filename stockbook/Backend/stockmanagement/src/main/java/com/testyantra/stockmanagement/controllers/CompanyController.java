package com.testyantra.stockmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testyantra.stockmanagement.dto.ResponseDTO;
import com.testyantra.stockmanagement.entities.Company;
import com.testyantra.stockmanagement.entities.Stock;
import com.testyantra.stockmanagement.entities.User;
import com.testyantra.stockmanagement.service.CompanyService;

@RestController
@RequestMapping("/companies")
@CrossOrigin(origins = "*")
public class CompanyController {
	@Autowired
	private CompanyService service;

	@PostMapping
	public ResponseDTO addCompany(@RequestBody Company company) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.addCompany(company));
		return response;
	}

	@DeleteMapping(path = "/{companyId}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO removeCompany(@PathVariable int companyId) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.removeCompany(companyId));
		return response;
	}

	@PutMapping
	public ResponseDTO updateCompany(@RequestBody Company company) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateCompany(company));
		return response;
	}

	@PostMapping("/company")
	public ResponseDTO getCompany(@RequestBody User user) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getCompanyDetail(user));
		return response;
	}
	
	@GetMapping("/company")
	public ResponseDTO getCompany(String companyName) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getCompany(companyName));
		return response;
	}

	@GetMapping
	public ResponseDTO getAllCompanies() {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getAllCompanyDetails());
		return response;
	}

	@PostMapping("/stock")
	public ResponseDTO addStock(@RequestBody Stock stock) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.addStock(stock));
		return response;
	}
	
	@PutMapping("/stock")
	public ResponseDTO updateStock(@RequestBody Stock stock) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateStock(stock));
		return response;
	}
	
	@PostMapping("/stocks")
	public ResponseDTO getStock(@RequestBody Company company) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getStock(company));
		return response;
	} 

}
