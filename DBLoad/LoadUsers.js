var db = connect("localhost:27017/ITLDP");

db.users.drop();

db.users.save({
    _id: NumberInt(48243),
    RoleName: "Customer",
    UserName: "Anderson123",
    Password: "Harvard123",
    FirstName: "Harvard",
    LastName: "Anderson",
    Street: "9550 Malcolm X Boulevard",
    City: "Bellevue",
    Province: "WA",
    PostalCode: "98006",
    Email: "banderson@bellevue.com",
    Phone: "(688) 408-5919",
    CustomerName: "Bellevue Regional Hospital",
    CustomerType: "Hospital",
    ContractType: "Critical Care",
    CountryName: "United States",
    RegionName: "Northwest",
    Position: "Nurse"
});

db.users.save({
    _id: NumberInt(48364),
    RoleName: "Customer",
    UserName: "Henderson123",
    Password: "Yale123",
    FirstName: "Yale",
    LastName: "Henderson",
    Street: "3195 Parkside Court",
    City: "Bellevue",
    Province: "WA",
    PostalCode: "98006",
    Email: "yhenderson@bridgeport.com",
    Phone: "(634) 838-6666",
    CustomerName: "Bridgeport Dental Practice",
    CustomerType: "Dentist Office",
    ContractType: "Critical Care",
    CountryName: "United States",
    RegionName: "Northwest",
    Position: "Head Nurse"
});

db.users.save({
    _id: NumberInt(83791),
    RoleName: "Onsite Engineer",
    UserName: "Adams123",
    Password: "Julie123",
    FirstName: "Julie",
    LastName: "Adams",
    City: "Bellevue",
    Province: "WA",
    PostalCode: "98006",
    Email: "JAdams@jnj.com",
    Phone: "(406) 388-9878",
    CountryName: "United States",
    RegionName: "Northwest",
    Position: "Senior Engineer"
});

db.users.save({
    _id: NumberInt(84714),
    RoleName: "Onsite Engineer",
    UserName: "Ward123",
    Password: "Max123",
    FirstName: "Max",
    LastName: "Ward",
    City: "Bellevue",
    Province: "WA",
    PostalCode: "98006",
    Email: "mward@jnj.com",
    Phone: "(525) 939-7576",
    CountryName: "United States",
    RegionName: "Northwest",
    Position: "Senior Engineer"
});

db.users.save({
    _id: NumberInt(84843),
    RoleName: "Remote Engineer",
    UserName: "Bryant123",
    Password: "Sally123",
    FirstName: "Sally",
    LastName: "Bryant",
    City: "Bellevue",
    Province: "WA",
    PostalCode: "98006",
    Email: "sbryant@jnj.com",
    Phone: "(605) 606-9728",
    CountryName: "United States",
    RegionName: "Northwest",
    Position: "Junior Engineer"
});