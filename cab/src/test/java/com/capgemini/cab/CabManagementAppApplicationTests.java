package com.capgemini.cab;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.capgemini.cab.domain.Cab;
import com.capgemini.cab.domain.Customer;
import com.capgemini.cab.repository.ICabRepository;
import com.capgemini.cab.repository.ICustomerRepository;
import com.capgemini.cab.service.ICabService;
import com.capgemini.cab.service.ICustomerService;
import com.capgemini.cab.serviceimpl.CabServiceImpl;
import com.capgemini.cab.serviceimpl.CustomerServiceImpl;

@ExtendWith(MockitoExtension.class)
class CabManagementAppApplicationTests {
	////////////////cab module/////////////////////////

	@Mock
	private ICabRepository cabRepo;
	
	@InjectMocks
	private ICabService cabService = new CabServiceImpl();
	
	@BeforeEach
	void setMockOutput() {
		this.cabService = new CabServiceImpl(this.cabRepo);
	}
	////////////////customer module/////////////////////////
	@Mock
	private ICustomerRepository customerRepo;
	
	@InjectMocks
	private ICustomerService customerService = new CustomerServiceImpl(customerRepo);
	
	@BeforeEach
	void setMockOutput1() {
		this.customerService = new CustomerServiceImpl(this.customerRepo);
	}

	
	//////////////////////  Cab module Testing start ///////////////////////
	
//	@Test
//	@Order(1)
//	void testInsertCab() {
//		Cab cab = new Cab();
//		cab.setCarName("BMW");
//		cab.setCarType("Sedan");
//		cab.setPerKmRate(9.0f);
//		
//		cabService.insertCab(cab);
//		verify(cabRepo).save(cab);
//	}
//	
//	@Test
//	@Order(2)
//	void testGetAllCabs() {
//		cabService.getAllCabs();
//		verify(cabRepo).findAll();
//	}
	
	@Test
	@Order(3)
	void testCountCabsOfType() {
		cabService.countCabsOfType("Sedan");
		verify(cabRepo).getCountByCabType("Sedan");
	}
//	
//	@Test
//	@Order(4)
//	void deleteCabById() {
//		cabService.deleteCabById(1);
//		verify(cabRepo).deleteById(1);
//	}
//	
	@Test
	@Order(5)
	void testUpdateCab() {
		Cab cab = new Cab();
		Cab cab2 = null;

		cab.setCabId(1);
		
		cab.setCarName("Ferrari");
		cab.setCarType("Sedan");
		cab.setPerKmRate(9.9f);
		cabService.updateCab(cab, 1);
		
		verify(cabRepo).save(cab);
	}



////////////////////Cab module Testing end ///////////////////////
////////////////////Customer module Testing started ///////////////////////

//@Test
//@Order(1)
//void saveCustomer() {
//	Customer customer = new Customer();
//	customer.setUsername("akshat");
//	customer.setPassword("Akdfhd");
//	customer.setAddress("kanpur");
//	customer.setMobilenumber("345353433");
//	customer.setEmail("aaa@ff.com");
//
//	
//	
//	customerService.saveCustomer(customer);
//	verify(customerRepo).save(customer);
//}
//@Test
//@Order(2)
//void testviewCustomers() {
//	customerService.viewCustomers();
//	verify(customerRepo).findAll();
//}
//@Test
//@Order(3)
//void testviewCustomer() {
//	customerService.viewCustomer(1);
//	verify(customerRepo).findById((long) 1);
//}

//@Test
//@Order(4)
//void deleteCustomer() {
//	customerService.deleteCustomer(1);
//	verify(customerRepo).findById((long) 1);
//}
//@Test
//@Order(5)
//void testupdateCustomer() {
//	Customer customer = new Customer();
//	Customer customer2 = null;
//
//	customer.setId((long) 6);
//	
//	customer.setUsername("");
//	customer.setPassword("");
//	customer.setAddress("");
//	customer.setMobilenumber("");
//	customer.setEmail("");
//	customerService.updateCustomer(customer, 6);
//	
//	verify(customerRepo).save(customer);
//}


}





