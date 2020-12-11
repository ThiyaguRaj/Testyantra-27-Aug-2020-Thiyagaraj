package com.testyantra.stockmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testyantra.stockmanagement.dto.ResponseDTO;
import com.testyantra.stockmanagement.entities.Investor;
import com.testyantra.stockmanagement.entities.StockMovement;
import com.testyantra.stockmanagement.entities.User;
import com.testyantra.stockmanagement.service.InvestorService;

@RestController
@RequestMapping("/investor")
@CrossOrigin(origins = "*")
public class InvestorController {

	@Autowired
	private InvestorService service;

	@PutMapping
	public ResponseDTO updateInvestor(@RequestBody Investor investor) {
		ResponseDTO resp = new ResponseDTO();
		resp.setData(service.updateInvestor(investor));
		return resp;
	}

	@GetMapping
	public ResponseDTO getAllInvestors() {
		ResponseDTO resp = new ResponseDTO();
		resp.setData(service.getAllInvestors());
		return resp;
	}
	
	@PostMapping("/invest")
	public ResponseDTO getInvestor(@RequestBody User user) {
		ResponseDTO resp = new ResponseDTO();
		resp.setData(service.getInvestor(user));
		return resp;
	}

	@PostMapping
	public ResponseDTO getMovement(@RequestBody StockMovement move) {
		ResponseDTO resp = new ResponseDTO();
		resp.setData(service.getMovement(move));
		return resp;
	}
}
