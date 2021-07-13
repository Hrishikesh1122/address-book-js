/**
 * Purpose  : Create a address book and perform various operations
 * @author Hrishikesh Ugavekar
 * @Since 13-07-2021
 * @Version 1.0
 */
//POJO class for contact object
let addressBook =[];
class Contact{
   
    get firstName(){return this._firstName}
    set firstName(value){
        let re = new RegExp('[A-Z]+[a-z]{2,}')
        let match = re.test(value)
        if(match){this._firstName=value;}
        else{alert("Invalid first name , enter again")
        throw new Error("Invalid first name")
        }
    }
        
    get lastName(){return this._lastName}
    set lastName(value){
        let re = new RegExp('[A-Z]+[a-z]{2,}')
        let match = re.test(value)
        if(match){this._lasttName=value;}
        else{alert("Invalid last name , enter again")
        throw new Error("Invalid last name")}
}

    get address(){return this._address}
    set address(value){this._address=value}

    get city(){return this._city}
    set city(value){
        let re = new RegExp('[A-Z]+[a-z]{2,}')
        let match = re.test(value)
        if(match){this._city=value;}
        else{alert("Invalid city name , enter again")
        throw new Error("Invalid city name")}
    }

    get state(){return this._state}
    set state(value){
        let re = new RegExp('[A-Z]+[a-z]{2,}')
        let match = re.test(value)
        if(match){this._state=value;}
        else{alert("Invalid state name , enter again")
        throw new Error("Invalid state name")}
    }

    get zip(){return this._zip}
    set zip(value){
        let re = new RegExp('[0-9]{6,6}')
        let match = re.test(value)
        if(match){this._zip=value;}
        else{alert("Invalid zip , enter again")
        throw new Error("Invalid zip")}
    }

    get phone(){return this._phone}
    set phone(value){
        let re = new RegExp('[1-9][0-9][1-9]{10}')
        let match = re.test(value)
        if(match){this._phone=value;}
        else{alert("Invalid phone number , enter again")
        throw new Error("Invalid phone number")}
    }

    get email(){return this._email}
    set email(value){
        let re = new RegExp('[a-z0-9.+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}')
        let match = re.test(value)
        if(match){this._email=value;}
        else{alert("Invalid email; , enter again")
        throw new Error("Invalid email id")}
    }

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
    addressBook.push(contact)
    console.log(addressBook)
    alert("Contact Created !!")
}
