package com.capgemini.cab.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.cab.domain.Cab;
import com.capgemini.cab.exception.CabNotFoundException;
import com.capgemini.cab.repository.ICabRepository;
import com.capgemini.cab.service.ICabService;

@Service
public class CabServiceImpl implements ICabService {
	
	@Autowired
	private ICabRepository cabRepository;
	
	public CabServiceImpl() {
		super();
	}

	public CabServiceImpl(ICabRepository cabRepo) {
		super();
		this.cabRepository = cabRepo;
	}

	@Override
	public Cab insertCab(Cab cab) {
		return cabRepository.save(cab);
	}

	@Override
	public List<Cab> getAllCabs() {
		return cabRepository.findAll();
	}

	@Override
	public void deleteCabById(int cabId) {
		
		cabRepository.findById(cabId);
		cabRepository.deleteById(cabId);
	}

	@Override
	public int countCabsOfType(String carType) {
		
		return cabRepository.getCountByCabType(carType);
	}

	@Override
	public Cab updateCab(Cab cab, int id) {
		
		Cab existingCab = cabRepository.findById(id).orElseThrow(
				() -> new CabNotFoundException("Cab doesn't not exists with id " + id));
		
		existingCab.setCarType(cab.getCarType());
		existingCab.setCarName(cab.getCarName());
		existingCab.setPerKmRate(cab.getPerKmRate());
		
		cabRepository.save(existingCab);
		
		return existingCab;
		
		
	// For update testing, use below code and comment above code
		/* cabRepository.save(cab);
		
		return cab; */
	}

}
