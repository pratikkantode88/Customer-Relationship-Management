package com.application.dao;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import com.application.entity.Customer;
import com.application.exception.ResourceNotFoundException;

@Repository
public class CustomerDao {

	SessionFactory sf;

	public CustomerDao(SessionFactory sf) {
		super();
		this.sf = sf;
	}
	
	
	public Customer saveCustomer(Customer customer) {
		Session session= this.sf.openSession();
		Transaction tx=session.beginTransaction();
		
		Integer id= (Integer) session.save(customer);
		tx.commit();
		Customer getCustomer=getById(id);
		session.close();
		return getCustomer;
	}
	
	public Customer getById(Integer id) {
		Session session= this.sf.openSession();
		Customer getCustomer=session.get(Customer.class, id);
		if(getCustomer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		session.close();
		return getCustomer;
	}
	
	public List<Customer> getAllCustomers() throws ResourceNotFoundException{
		Session session=null;
		try {
		 session=sf.openSession();
		return session.createQuery("from Customer").list();
		}
		finally {
	        if (session != null) {
	            session.close();
	          }
	        }
	}
	
	public String update(Customer customer) {
		Session session=sf.openSession();
		Transaction tx=session.beginTransaction();
		session.update(customer);
		tx.commit();
		session.close();
		return "Customer Update Successfully!";
	}
	
	public String delete(Integer id) {
		Session session=sf.openSession();
		Transaction tx=session.beginTransaction();
		Customer customer=session.get(Customer.class, id);
		if(customer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		session.delete(customer);
		tx.commit();
		session.close();
		return "Customer Delete Successfully!";
	}
	
	public String saveAll(List<Customer> customers) {
		Session session=sf.openSession();
		Transaction tx=session.beginTransaction();
		
		for (Customer customer : customers) {
			session.save(customer);
		}
		tx.commit();
		session.close();
		return "All Customers Save Successfully!";
	}
	
	public List<Customer> getByFistname(String firstName){
		Session session=sf.openSession();
		String HQL="from Customer c where c.firstName = :name";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("name", firstName);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With First name "+firstName);
		}
		session.close();
		return res;
	}
	
	public List<Customer> getByLastname(String lastName){
		Session session=sf.openSession();
		String HQL="from Customer c where c.lastName = :name";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("name", lastName);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With Last name "+lastName);
		}
		session.close();
		return res;
	}
	
	public List<Customer> getByLessthanAge(Integer age){
		Session session=sf.openSession();
		String HQL="from Customer c where c.age< :age";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("age", age);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With Age is Less than "+age);
		}
		session.close();
		return res;
	}
	
	public List<Customer> getByGreaterthanAge(Integer age){
		Session session=sf.openSession();
		String HQL="from Customer c where c.age> :age";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("age", age);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With Age is greater than "+age);
		}
		session.close();
		return res;
	}
	
	public List<Customer> getByAge(Integer age) {
		Session session=sf.openSession();
		String HQL="from Customer c where c.age = :age";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("age", age);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With Age "+age);
		}
		session.close();
		return res;
	}
	
	public List<Customer> getByEmail(String email) {
		Session session=sf.openSession();
		String HQL="from Customer c where c.email = :email";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("email", email);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With Email "+email);
		}
		session.close();
		return res;
	}
	
	public List<Customer> getByMobile(String number) {
		Session session=sf.openSession();
		String HQL="from Customer c where c.mobileNumber = :number";
		Query<Customer> getList= session.createQuery(HQL,Customer.class);
		getList.setParameter("number", number);
		List<Customer> res=getList.list();
		if(res.isEmpty()) {
			throw new ResourceNotFoundException("Customer Not Found With Mobile Number "+number);
		}
		session.close();
		return res;
	}
	
	public String updateFirstName(Integer id,String firstName) {
		Session session= this.sf.openSession();
		Transaction tx=session.beginTransaction();
		Customer customer=session.get(Customer.class, id);
		if(customer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		customer.setFirstName(firstName);
		tx.commit();
		session.close();
		return "First Name Update Successfully!";
	}
	
	public String updateLastName(Integer id,String lastName) {
		Session session= this.sf.openSession();
		Transaction tx=session.beginTransaction();
		Customer customer=session.get(Customer.class, id);
		if(customer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		customer.setLastName(lastName);
		tx.commit();
		session.close();
		return "Last Name Update Successfully!";
	}
	
	public String updateEmail(Integer id,String email) {
		Session session= this.sf.openSession();
		Transaction tx=session.beginTransaction();
		Customer customer=session.get(Customer.class, id);
		if(customer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		customer.setEmail(email);
		tx.commit();
		session.close();
		return "Email Update Successfully!";
	}
	
	public String updateMobile(Integer id,String mobile) {
		Session session= this.sf.openSession();
		Transaction tx=session.beginTransaction();
		Customer customer=session.get(Customer.class, id);
		if(customer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		customer.setMobileNumber(mobile);
		tx.commit();
		session.close();
		return "Mobile number Update Successfully!";
	}
	
	public String updateAge(Integer id,Integer age) {
		Session session= this.sf.openSession();
		Transaction tx=session.beginTransaction();
		Customer customer=session.get(Customer.class, id);
		if(customer==null) {
			throw new ResourceNotFoundException("Customer Not Found With ID "+id);
		}
		customer.setAge(age);
		tx.commit();
		session.close();
		return "Age Update Successfully!";
	}
	
	public List<String> getAllCustomersFirstName()throws ResourceNotFoundException{
		Session session=null;
		try {
		 session=sf.openSession();
		return session.createQuery("select c.firstName from Customer c").list();
		}finally {
			if (session != null) {
	            session.close();
	          }
		}
		
	}
}




















