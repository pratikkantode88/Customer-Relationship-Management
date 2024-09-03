package com.application.service;

import java.util.List;

import com.application.entity.Customer;

public interface CustomerService {

	Customer save(Customer customer);
	List<Customer> getCustomers();
	Customer getCustomerById(Integer id);
	String updateCustomer(Customer customer);
	String updateFirstName(Integer id,String firstName);
	String updateLastName(Integer id,String lastName);
	String updateEmail(Integer id,String email);
	String updateMobile(Integer id,String mobile);
	String updateAge(Integer id,Integer age);
	String deleteCustomer(Integer id);
	String saveAllCustomers(List<Customer> customers);
	List<Customer> getByFirstname(String firstName);
	List<Customer> getByLastname(String lastName);
	List<Customer> getByLessthanAge(Integer age);
	List<Customer> getByGreaterthanAge(Integer age);
	List<Customer> getByAge(Integer age);
	List<Customer> getByEmail(String email);
	List<Customer> getByMobile(String number);
	List<String> getAllCustomersFirstName();
}
