import axios from "axios";

const CUSTOMER_API_BASE_URL="http://localhost:8080/msms"

class CustomerService {
    
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL+"/"+"get/customer");
    }
    deleteCustomerById(id){
       
        return axios.delete(CUSTOMER_API_BASE_URL+"/"+"delete/customer/"+id);
    }
    getCustomerById(id){
        return axios.get(CUSTOMER_API_BASE_URL+"/customerlogin/"+id);
    } 
    updateCustomer(customer,id){
        return axios.put(CUSTOMER_API_BASE_URL+"/"+id,customer);
    }
}
export default new CustomerService();