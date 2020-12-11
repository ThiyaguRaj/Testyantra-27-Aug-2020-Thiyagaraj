package com.testyantra.stockmanagement.controllers;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.testyantra.stockmanagement.dto.ResponseDTO;

@RestControllerAdvice
public class StockExceptionHandler {

	@ExceptionHandler
	public ResponseDTO handler(Exception e1) {
		ResponseDTO dto = new ResponseDTO();
		dto.setError(true);
		dto.setData(e1.getMessage());
		return dto;
	}
	
}
