var db = connect("localhost:27017/ITLDP");

db.problemtype.drop();

db.problemtype.save({
    _id: NumberInt(1),
    ProblemTypeDescription: "Poor Image"
});
db.problemtype.save({
    _id: NumberInt(2),
    ProblemTypeDescription: "Power Supply"
});
db.problemtype.save({
    _id: NumberInt(3),
    ProblemTypeDescription: "Connectivity"
});
db.problemtype.save({
    _id: NumberInt(4),
    ProblemTypeDescription: "Overheating"
});
db.problemtype.save({
    _id: NumberInt(5),
    ProblemTypeDescription: "Preventative Maintenance"
});
db.problemtype.save({
    _id: NumberInt(6),
    ProblemTypeDescription: "Noise"
});
db.problemtype.save({
    _id: NumberInt(7),
    ProblemTypeDescription: "Repeat Issue"
});
db.problemtype.save({
    _id: NumberInt(8),
    ProblemTypeDescription: "Other"
});
db.problemtype.save({
    _id: NumberInt(9),
    ProblemTypeDescription: "Forgot Password"
});
db.problemtype.save({
    _id: NumberInt(10),
    ProblemTypeDescription: "Unknown"
});