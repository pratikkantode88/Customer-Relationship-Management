package com.application.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.application.dao.CustomerDao;
import com.application.entity.Customer;
import com.application.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{

	private CustomerDao customerDao;
	
	
	public CustomerServiceImpl(CustomerDao customerDao) {
		super();
		this.customerDao = customerDao;
	}


	@Override
	public Customer save(Customer customer) {
		return customerDao.saveCustomer(customer);
	}


	@Override
	public List<Customer> getCustomers() {
		return customerDao.getAllCustomers();
	}


	@Override
	public Customer getCustomerById(Integer id) {
		return customerDao.getById(id);
	}


	@Override
	public String updateCustomer(Customer customer) {
		return customerDao.update(customer);
	}


	@Override
	public String deleteCustomer(Integer id) {
		return customerDao.delete(id);
	}


	@Override
	public String saveAllCustomers(List<Customer> customers) {
		return customerDao.saveAll(customers);
	}


	@Override
	public List<Customer> getByFirstname(String firstName) {
		return customerDao.getByFistname(firstName);
	}
	
	@Override
	public List<Customer> getByLastname(String lastName) {
		return customerDao.getByLastname(lastName);
	}


	@Override
	public List<Customer> getByLessthanAge(Integer age) {
		return customerDao.getByLessthanAge(age);
	}
	
	@Override
	public List<Customer> getByGreaterthanAge(Integer age) {
		return customerDao.getByGreaterthanAge(age);
	}
	
	@Override
	public List<Customer> getByAge(Integer age) {
		return customerDao.getByAge(age);
	}
	
	@Override
	public List<Customer> getByEmail(String email) {
		return customerDao.getByEmail(email);
	}

	@Override
	public List<Customer> getByMobile(String number) {
		return customerDao.getByMobile(number);
	}


	@Override
	public String updateFirstName(Integer id, String firstName) {
		return customerDao.updateFirstName(id, firstName);
	}


	@Override
	public String updateLastName(Integer id, String lastName) {
		return customerDao.updateLastName(id, lastName);
	}
	
	@Override
	public String updateEmail(Integer id, String email) {
		return customerDao.updateEmail(id, email);
	}
	
	@Override
	public String updateMobile(Integer id, String mobile) {
		return customerDao.updateMobile(id, mobile);
	}
	
	@Override
	public String updateAge(Integer id, Integer age) {
		return customerDao.updateAge(id, age);
	}
	
	@Override
	public List<String> getAllCustomersFirstName() {
		return customerDao.getAllCustomersFirstName();
	}
}
