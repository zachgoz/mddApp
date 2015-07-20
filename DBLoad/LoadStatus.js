var db = connect("localhost:27017/ITLDP");

db.status.drop();

db.status.save({
    _id: NumberInt(1),
    StatusDescription: "Completed"
});
db.status.save({
    _id: NumberInt(2),
    StatusDescription: "Waiting For Parts"
});
db.status.save({
    _id: NumberInt(3),
    StatusDescription: "Return Next Day"
});
db.status.save({
    _id: NumberInt(4),
    StatusDescription: "Waiting For Customer Approval"
});
db.status.save({
    _id: NumberInt(5),
    StatusDescription: "Assigned, Waiting to be Accepted"
});
db.status.save({
    _id: NumberInt(6),
    StatusDescription: "On-site"
});
db.status.save({
    _id: NumberInt(7),
    StatusDescription: "Remote Tech"
});
db.status.save({
    _id: NumberInt(8),
    StatusDescription: "Accepted"
});
db.status.save({
    _id: NumberInt(9),
    StatusDescription: "Approved By Customer"
});
db.status.save({
    _id: NumberInt(10),
    StatusDescription: "Submitted By Customer"
});