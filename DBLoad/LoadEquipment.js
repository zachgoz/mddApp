var db = connect("localhost:27017/ITLDP");

db.equipment.drop();

db.equipment.save({
    _id: NumberInt(5509),
    _User: NumberInt(48243),
    _Product: NumberInt(69),
    StatusDescription: "Online",
    SerialNumber: "XR99960703",
    Room: "Building Y Floor 1 Room 997",
    InstallDate: new ISODate("2008-02-28T00:00:00Z"),
    NextPMDate: new ISODate("2014-06-02T00:00:00Z"),
    NextPMDescription: "Magnet Quench Recovery"
});
db.equipment.save({
    _id: NumberInt(17337),
    _User: NumberInt(48243),
    _Product: NumberInt(8),
    StatusDescription: "Online",
    SerialNumber: "MR31151668",
    Room: "Building H Floor 2 Room 872",
    InstallDate: new ISODate("2007-05-14T00:00:00Z"),
    NextPMDate: new ISODate("2014-01-31T00:00:00Z"),
    NextPMDescription: "Magnet Quench Recovery"
});
db.equipment.save({
    _id: NumberInt(31338),
    _User: NumberInt(48364),
    _Product: NumberInt(23),
    StatusDescription: "Online",
    SerialNumber: "CT33864504",
    Room: "Building B Floor 1 Room 907",
    InstallDate: new ISODate("2007-10-16T00:00:00Z"),
    NextPMDate: new ISODate("2014-03-02T00:00:00Z"),
    NextPMDescription: "Intensifier Replacement"
});
db.equipment.save({
    _id: NumberInt(95179),
    _User: NumberInt(48243),
    _Product: NumberInt(13),
    StatusDescription: "Online",
    SerialNumber: "NK32611426",
    Room: "Building 8552 Floor 4 Room 2206",
    InstallDate: new ISODate("2007-03-18T00:00:00Z"),
    NextPMDate: new ISODate("2014-02-10T00:00:00Z"),
    NextPMDescription: "Magnet Quench Recovery"
});
db.equipment.save({
    _id: NumberInt(111925),
    _User: NumberInt(48243),
    _Product: NumberInt(1),
    StatusDescription: "Online",
    SerialNumber: "XR28255672",
    Room: "Building 8235 Floor 11 Room 2525",
    InstallDate: new ISODate("2009-02-22T00:00:00Z"),
    NextPMDate: new ISODate("2014-01-17T00:00:00Z"),
    NextPMDescription: "Intensifier Replacement"
});
db.equipment.save({
    _id: NumberInt(116297),
    _User: NumberInt(48243),
    _Product: NumberInt(48),
    StatusDescription: "Online",
    SerialNumber: "US2097768",
    Room: "Building 8871 Floor 20 Room 5786",
    InstallDate: new ISODate("2010-02-04T00:00:00Z"),
    NextPMDate: new ISODate("2014-04-21T00:00:00Z"),
    NextPMDescription: "Tube Replacement"
});
db.equipment.save({
    _id: NumberInt(127389),
    _User: NumberInt(48243),
    _Product: NumberInt(3),
    StatusDescription: "Online",
    SerialNumber: "XR60354853",
    Room: "Building 1394 Floor 16 Room 6146",
    InstallDate: new ISODate("2009-08-24T00:00:00Z"),
    NextPMDate: new ISODate("2014-01-21T00:00:00Z"),
    NextPMDescription: "Magnet Quench Recovery"
});
db.equipment.save({
    _id: NumberInt(135851),
    _User: NumberInt(48243),
    _Product: NumberInt(7),
    StatusDescription: "Online",
    SerialNumber: "MR87593782",
    Room: "Building 5278 Floor 18 Room 308",
    InstallDate: new ISODate("2010-06-05T00:00:00Z"),
    NextPMDate: new ISODate("2014-01-29T00:00:00Z"),
    NextPMDescription: "Tube Replacement"
});
db.equipment.save({
    _id: NumberInt(165896),
    _User: NumberInt(48243),
    _Product: NumberInt(69),
    StatusDescription: "Online",
    SerialNumber: "XR67101643",
    Room: "Building 9807 Floor 22 Room 3398",
    InstallDate: new ISODate("2011-10-01T00:00:00Z"),
    NextPMDate: new ISODate("2014-06-02T00:00:00Z"),
    NextPMDescription: "Tube Replacement"
});