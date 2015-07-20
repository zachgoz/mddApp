var db = connect("localhost:27017/ITLDP");

db.pmtype.drop();

db.pmtype.save({
    _id: NumberInt(1),
    PMDescription: "Tube Replacement"
});
db.pmtype.save({
    _id: NumberInt(2),
    PMDescription: "Coldhead Replacement"
});
db.pmtype.save({
    _id: NumberInt(3),
    PMDescription: "Magnet Quench Recovery"
});
db.pmtype.save({
    _id: NumberInt(4),
    PMDescription: "Intensifier Replacement"
});
db.pmtype.save({
    _id: NumberInt(5),
    PMDescription: "Standard 6 Months Review"
});