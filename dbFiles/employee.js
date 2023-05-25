class Employee {
    constructor(Lastname, Firstname, Title, Titleofcourtesy, Birthdate, Hiredate, Address,
        City, Region, Postalcode, Country, Phone, MgrID) {

        this.Lastname = Lastname;
        this.Firstname = Firstname;
        this.Title = Title;
        this.Titleofcourtesy = Titleofcourtesy;
        this.Birthdate = Birthdate;
        this.Hiredate = Hiredate;
        this.Address = Address;
        this.City = City;
        this.Region = Region;
        this.Postalcode = Postalcode;
        this.Country = Country;
        this.Phone = Phone;
        this.MgrID = MgrID;
    }

}


module.exports = Employee