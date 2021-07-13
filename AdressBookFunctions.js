/**
 * Purpose  : Create a address book and perform various operations
 * @author Hrishikesh Ugavekar
 * @Since 13-07-2021
 * @Version 1.0
 */
//POJO class for contact object
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    get firstName(){return this.firstName}
    set firstName(firstName){this.firstName=firstName}

    get lastName(){return this.lastName}
    set lastName(lastName){this.lastName=lastName}

    get address(){return this.address}
    set address(address){this.address=address}

    get city(){return this.city}
    set city(city){this.city=city}

    get state(){return this.state}
    set state(state){this.state=state}

    get zip(){return this.zip}
    set zip(zip){this.zip=zip}

    get phone(){return this.phone}
    set phone(phone){this.phone=phone}

    get email(){return this.email}
    set email(email){this.email=email}

}

//UC1
//This function when called by clicking button will create a contact
function createContect(){
    let contact = new Contact()
    let firstName=document.getElementById("fname").value;
    let lastName=document.getElementById("lname").value;
    let address=document.getElementById("address").value;
    let city=document.getElementById("city").value;
    let state=document.getElementById("state").value;
    let zip=document.getElementById("zip").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;

    contact.firstName=firstName;
    contact.lastName=lastName;
    contact.address=address;
    contact.city=city;
    contact.state=state;
    contact.zip=zip;
    contact.phone=phone;
    contact.email=email;

    alert("Contact Created !!")
}
