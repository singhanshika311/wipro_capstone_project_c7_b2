# Online Shop Application

#### Problem Statement
 <p> This project is an attempt to provide the advantages of online shopping to customers of a real shop. It helps buying the products in the shop anywhere through internet. Thus the customer will get the service of online shopping and home delivery from his favorite shop. This system can be implemented to any shop in the locality or to multinational branded shops having retail outlet chains. If shops are providing an online portal where their customers can enjoy easy shopping from anywhere, the shops won’t be losing any more customers to the trending online shops such as flipcart or amazon. <p>
 
   ---------

#### A full-stack Online Shop web application using Spring Boot and Angular 8. 
This is a Single Page Appliaction with client-side rendering. It includes [backend](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/tree/master/BACKEND) and [frontend](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/tree/master/FRONTEND) two seperate projects on different branches.
E-Commerce application developed for performing Admin and Customer user role operations with respective user interfaces. Application is implemented in two parts:
1. RESTfull web services: API's build using spring boot are used for handling all the back end operations 
2. Front End: User interfaces designed and developed using Angular utilising web services for handling appropriate user actions.I also use [angular material](https://material.angular.io/) UI component library for creating frontend component like navbar, buttons
The frontend client makes API calls to the backend server when it is running.

  ---------

#### Features available based on the user role
* Admin
  * Adding products
  * Adding catagories
  * Updating products
  * Deleting products
  * Manage Orders
  * View user
  * Can send email
  * Can upload bulk data in csv format
* Customer
  * Registering into System
  * Login into Website
  * Add product in wishlist
  * Adding product to Cart
  * Updating/ Deleting the Product in cart as well as in wishlist
  * Placing the order

* Technologies: 
  * Angular8 (https://material.angular.io/)
  * Typescript
  * Spring Boot
  * Hibernate with JPA 
  * MySQL
  
  ---------
 
 #### Application screenshots
 
* <b><u>Login</u></b> 
    ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/login.jpeg)
* <b>Register</b> 
    ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/register.jpeg)
    
    <h3>USER FUNCTIONALITY</h3>
    
 * Customer
    * <b>Home</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/user_dashboard.jpeg)
        <br>
    * <b>User profile</b>
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/user_profile.jpeg)
        <br>
    * <b>Customer cart functionality</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/user_cart_functionality.jpeg)
        <br>
    * <b>Customer Wishlist functionality</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/user_wishlist_functionality.jpeg)
        <br>
    * <b>User order history</b>
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/user_order_history.jpeg)
        
        
    <h3>ADMIN FUNCTIONALITY</h3>
       
* Admin 
    * <b>Home</b>
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/admin%20dashboard.jpeg)
        <br>
    * <b>Add new catagory</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/admin%20add%20catatogies.jpeg)
        <br>
    * <b>Add new produc</b>t 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/admin%20add%20products.jpeg)
        <br>
    * <b>Bulk implementation</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/admin%20bulk.jpeg)
        <br>
    * <b>Email functionality</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/admin%20email.jpeg)
        <br>
    * <b>View user</b> 
        ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/admin%20can%20view%20user.jpeg)
---------

 #### Eureka Server for Microservice
 Eureka Server is service discovery for your microservices, where all client applications can register by themselves and other microservices look up the Eureka Server to get independent microservices to get the job complete.
Eureka Server is also known as Discovery Server and it contains all the information about client microservices running on which IP address and port.
To achieve this you need to create a Eureka Server application and add the below dependency in POM.xml.
<h6>
<dependency>
<groupId>org.springframework.cloud</groupId>
<artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency></h6>

 * spring.application.name is a unique name for your application.
 * server.port in which your application will be bound and wewill use default port 8761 for eureka server.
 * eureka.client.fetch-registry doesn't register itself in eureka server.
 * eureka.client.register-with-eureka is determines if service register itself as a client in eureka server.

 * <b>EUREKA SERVER</b>
     ![Image of screenshot](https://github.com/singhanshika311/wipro_capstone_project_c7_b2/blob/master/PROJECT%20IMAGES/eureka%20server.jpeg)
      <br>
 ---------

## How to  Run

Start the backend server before the frontend client.  

**Backend**

  1. Install [MYSQL](https://www.mysql.org/download/) 
  2. Configure datasource in `application.yml`.
  3. `cd backend`.
  4. Run `mvn install`.
  5. Run `mvn spring-boot:run`.
  6. Spring Boot will import mock data into database by executing `import.sql` automatically.
  7. The backend server is running on [localhost:8080]().

**Frontend**
  1. Install [Node.js and npm](https://www.npmjs.com/get-npm)
  2. `cd frontend`.
  3. Run `npm install`.
  4. Run `ng serve`
  5. The frontend client is running on [localhost:4200]().
