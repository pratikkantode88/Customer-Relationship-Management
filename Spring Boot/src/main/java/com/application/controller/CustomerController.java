package com.application.controller;

import java.util.List;
import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.entity.Customer;
import com.application.service.CustomerService;

@RestController
@CrossOrigin
@RequestMapping("/customer")
@PreAuthorize("hasRole('admin')")
public class CustomerController {

	private CustomerService customerService;
	
	
	public CustomerController(CustomerService customerService) {
		super();
		this.customerService = customerService;
	}

    @PostMapping("/save")
	public Customer saveCustomer(@RequestBody Customer customer) {
		return customerService.save(customer);
	}
    
    @GetMapping
    public List<Customer> getAll(){
    	return customerService.getCustomers();
    }
    
    @GetMapping("/getById/{id}")
    public Customer getCustomerById(@PathVariable Integer id) {
    	return customerService.getCustomerById(id);
    }
    
    @PutMapping("/update")
    public String updateCustomer(@RequestBody Customer customer) {
    	return customerService.updateCustomer(customer);
    }
    
    @DeleteMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable Integer id) {
    	return customerService.deleteCustomer(id);
    }
    
    @PostMapping("/saveAll")
    public String saveAllCustomers(@RequestBody List<Customer> customers) {
    	return customerService.saveAllCustomers(customers);
    }
    
    @GetMapping("/getByFirstName/{firstName}")
    public List<Customer> getByFirstName(@PathVariable String firstName){
    	return customerService.getByFirstname(firstName);
    }
    
    @GetMapping("/getByLastName/{lastName}")
    public List<Customer> getByLastName(@PathVariable String lastName){
    	return customerService.getByLastname(lastName);
    }
    
    @GetMapping("/getByLessthanAge/{age}")
    public List<Customer> getByLessthanAge(@PathVariable Integer age){
    	return customerService.getByLessthanAge(age);
    }
    
    @GetMapping("/getByGreaterthanAge/{age}")
    public List<Customer> getByGreaterthanAge(@PathVariable Integer age){
    	return customerService.getByGreaterthanAge(age);
    }
    
    @GetMapping("/getByAge/{age}")
    public List<Customer> getByAge(@PathVariable Integer age){
    	return customerService.getByAge(age);
    }
    
    @GetMapping("/getByEmail/{email}")
    public List<Customer> getByEmail(@PathVariable String email){
    	return customerService.getByEmail(email);
    }
    
    @GetMapping("/getByMobile/{number}")
    public List<Customer> getByMobile(@PathVariable String number){
    	return customerService.getByMobile(number);
    }
    
    @PutMapping("/updateFirstName/{id}")
    public String updateFirstName(@PathVariable Integer id,@RequestBody Map<String, String> req){
    	String firstName=req.get("firstName");
    	return customerService.updateFirstName(id,firstName);
    }
    
    @PutMapping("/updateLastName/{id}")
    public String updateLastName(@PathVariable Integer id,@RequestBody Map<String, String> req){
    	String lastName=req.get("lastName");
    	return customerService.updateLastName(id,lastName);
    }
    
    @PutMapping("/updateEmail/{id}")
    public String updateEmail(@PathVariable Integer id,@RequestBody Map<String, String> req){
    	String email=req.get("email");
    	return customerService.updateEmail(id,email);
    }
    
    @PutMapping("/updateMobile/{id}")
    public String updateMobile(@PathVariable Integer id,@RequestBody Map<String, String> req){
    	String mobile=req.get("mobile");
    	return customerService.updateMobile(id,mobile);
    }
    
    @PutMapping("/updateAge/{id}")
    public String updateAge(@PathVariable Integer id,@RequestBody Map<String, Integer> req){
    	Integer age=req.get("age");
    	return customerService.updateAge(id,age);
    }
    
    @GetMapping("/getAllCustomersFirstName")
    public List<String> getAllCustomersFirstName(){
    	return customerService.getAllCustomersFirstName();
    }
}
