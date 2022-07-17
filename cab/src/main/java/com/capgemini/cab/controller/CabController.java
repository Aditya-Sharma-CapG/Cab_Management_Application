package com.capgemini.cab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.cab.domain.Cab;
import com.capgemini.cab.service.ICabService;

@RestController
@RequestMapping("/cab")
@CrossOrigin
public class CabController {
	
	@Autowired
	private ICabService cabService;

	/*
	 * api to add new cab details
	 * Admin privilege only
	 */
	@PostMapping("/add")
	public String insertCab(@RequestBody Cab cab) {
		cabService.insertCab(cab);
		return "New cab details added";
	}
	
	/*
	 * api to list all the cabs, irrespective of type
	 * admin and customer, both can view
	 */
	@GetMapping("/getAll")
	public List<Cab> getAllCabs() {
		return cabService.getAllCabs();
	}
	
//	@GetMapping("/{carType}")
//	public Cab getCabByType(@PathVariable("carType") String carType) {
//		return cabService.getCabByType(carType);
//	}
	
	/*
	 *  api to show all cabs available
	 *  @param(carType)
	 *  admin and customer, both can view
	*/
	@GetMapping("/{carType}")
	public String getCabCountByType(@PathVariable("carType") String carType) {
		
		int a = cabService.countCabsOfType(carType);
		if (a == 0) {
			return "At the moment, no cabs available of type " + carType;
		} else {
		
			return "There are " + a + " " + carType + " cab(s) available.";
		}
	} 
	
	/*
	 * update a cab detail(s) by providing ID
	 * @param(cabId)
	 * Admin prilivige only
	 */
	@PutMapping("{id}")
	public ResponseEntity<Cab> updateCab(@PathVariable("id") int id, @RequestBody Cab cab) {
		
		return new ResponseEntity<Cab>(cabService.updateCab(cab, id), HttpStatus.OK);
	}
	
	/*
	 *  delete a cab details by providing its ID
	 *  @param(cabId)
	 *  Admin privilige only
	 */
	@DeleteMapping("/{id}")
	public String deleteCabById(@PathVariable("id") int cabId) {
		cabService.deleteCabById(cabId);
		
		return "Cab deleted successfuly";
	}
}
