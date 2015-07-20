var db = connect("localhost:27017/ITLDP");

db.priority.drop();

db.priority.save({
    _id: NumberInt(1),
    PriorityDescription: "High"
});
db.priority.save({
    _id: NumberInt(2),
    PriorityDescription: "Medium"
});
db.priority.save({
    _id: NumberInt(3),
    PriorityDescription: "Low"
});