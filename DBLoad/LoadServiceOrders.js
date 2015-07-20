var db = connect("localhost:27017/ITLDP");

db.serviceorders.drop();

db.serviceorders.save({
    _id: NumberInt(411339),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Power Supply",
    PriorityDescription: "High",
    OpenDate: new ISODate("2014-01-05T04:34:00Z"),
    CloseDate: new ISODate("2014-01-06T08:04:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 111,
    ProblemNotes: "Won't Power up.",
    LaborCost: 129.17,
    PartCost: 34,
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(17337),
    _Product: NumberInt(8),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(83791),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2014-01-05T05:55:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(83791),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2014-01-05T06:00:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(83791),
        StatusDescription: "Waiting For Customer Approval",
        Checkin: new ISODate("2014-01-05T07:16:00Z"),
        Checkout: new ISODate("2014-01-05T08:04:00Z"),
        ActionNotes: "Needs new Part. Customer Must approve Part Costs.",
        ActualMinutes: 50
    }, {
        _id: NumberInt(5),
        _User: NumberInt(48243),
        StatusDescription: "Approved By Customer",
        ApprovedDate: new ISODate("2014-01-05T08:14:00Z"),
        ActionNotes: "Approved"
    }, {
        _id: NumberInt(6),
        _User: NumberInt(83791),
        StatusDescription: "Waiting For Parts",
        Checkin: new ISODate("2014-01-05T08:16:00Z"),
        Checkout: new ISODate("2014-01-05T08:22:00Z"),
        ActionNotes: "Ordered New Parts, Return Tomomorrow to Install",
        ActualMinutes: 6
    }, {
        _id: NumberInt(7),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2014-01-06T06:00:00Z")
    }, {
        _id: NumberInt(8),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2014-01-06T06:12:00Z")
    }, {
        _id: NumberInt(9),
        _User: NumberInt(84714),
        StatusDescription: "Completed",
        Checkin: new ISODate("2014-01-06T07:12:00Z"),
        Checkout: new ISODate("2014-01-06T08:04:00Z"),
        ActionNotes: "Overhauled High Availability Monitor, Installed New Parts.",
        ActualMinutes: 68
    }],
    ReplacementParts: [{
        ComponentPrice: 34,
        ComponentDescription: "Circuit Board",
        PartNumber: "UU669805-21",
        Quantity: 1
    }]
});

db.serviceorders.save({
    _id: NumberInt(478680),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(83791),
    ProblemTypeDescription: "Preventative Maintenance",
    PriorityDescription: "Low",
    OpenDate: new ISODate("2014-02-10T14:34:00Z"),
    CloseDate: new ISODate("2014-02-10T15:08:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 62,
    ProblemNotes: "6 Month Preventative Maintenance",
    PMDescription: "Standard 6 Months Review",
    LaborCost: 10.42,
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(17337),
    _Product: NumberInt(8),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(83791),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2014-02-10T14:36:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(83791),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2014-02-10T14:45:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(83791),
        StatusDescription: "Completed",
        Checkin: new ISODate("2014-02-10T014:58:00Z"),
        Checkout: new ISODate("2014-02-10T15:08:00Z"),
        ActionNotes: "Performed Required Maintenance",
        ActualMinutes: 10
    }]
});

db.serviceorders.save({
    _id: NumberInt(547536),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(83791),
    ProblemTypeDescription: "Connectivity",
    PriorityDescription: "Medium",
    OpenDate: new ISODate("2014-02-23T04:34:00Z"),
    CurrentStatus: "Assigned, Waiting to be Accepted",
    TotalEstimatedMinutes: 62,
    ProblemNotes: "Device won't connect to upload images to the Server.",
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(5509),
    _Product: NumberInt(69),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(83791),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2014-02-23T06:43:00Z")
    }]
});

db.serviceorders.save({
    _id: NumberInt(627933),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Preventative Maintenance",
    PriorityDescription: "Low",
    OpenDate: new ISODate("2013-05-22T04:34:00Z"),
    CloseDate: new ISODate("2013-05-22T08:46:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 60,
    ProblemNotes: "Please come for PM",
    PMDescription: "Intensifier Re-alignment",
    LaborCost: 56.25,
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(17337),
    _Product: NumberInt(8),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2013-05-22T06:13:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2013-05-22T06:29:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(84714),
        StatusDescription: "Completed",
        Checkin: new ISODate("2013-05-22T07:52:00Z"),
        Checkout: new ISODate("2013-05-22T08:46:00Z"),
        ActionNotes: "Performed Required Maintenance",
        ActualMinutes: 54
    }]
});

db.serviceorders.save({
    _id: NumberInt(719762),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Poor Image",
    PriorityDescription: "High",
    OpenDate: new ISODate("2013-10-27T23:50:00Z"),
    CloseDate: new ISODate("2013-10-28T05:57:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 120,
    ProblemNotes: "Unable to upload data",
    LaborCost: 94.79,
    PartCost: 111.00,
    CustomerContactInfo: {
        Name: "Harvard Anderson",
        Phone: "(688) 408-5919",
        Email: "banderson@bellevue.com"
    },
    _Equipment: NumberInt(5509),
    _Product: NumberInt(69),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(84843),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2013-10-28T01:02:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(84843),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2013-10-28T01:05:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(84843),
        StatusDescription: "Remote Fix Failed",
        Checkin: new ISODate("2013-10-28T02:14:00Z"),
        Checkout: new ISODate("2013-10-28T03:02:00Z"),
        ActionNotes: "Cnnected via RemoteSite, ran diagnostics, equipment requires new Image Stabalizer",
        ActualMinutes: 48
    }, {
        _id: NumberInt(5),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2013-10-28T03:22:00Z")
    }, {
        _id: NumberInt(6),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2013-10-28T03:30:00Z")
    }, {
        _id: NumberInt(7),
        _User: NumberInt(84714),
        StatusDescription: "Waiting For Customer Approval",
        Checkin: new ISODate("2013-10-28T04:11:00Z"),
        Checkout: new ISODate("2013-10-28T05:22:00Z"),
        ActionNotes: "Needs New Parts, Sent to Customer for Approval.",
        ActualMinutes: 71
    }, {
        _id: NumberInt(8),
        _User: NumberInt(48243),
        StatusDescription: "Approved By Customer",
        ApprovedDate: new ISODate("2013-10-28T05:33:00Z"),
        ActionNotes: "Request Approved"
    }, {
        _id: NumberInt(9),
        _User: NumberInt(84714),
        StatusDescription: "Completed",
        Checkin: new ISODate("2013-10-28T05:37:00Z"),
        Checkout: new ISODate("2013-10-28T05:57:00Z"),
        ActionNotes: "Installed New Parts.",
        ActualMinutes: 20
    }],
    ReplacementParts: [{
        ComponentPrice: 38,
        ComponentDescription: "Control Board",
        PartNumber: "US279796-109",
        Quantity: 1
    }, {
        ComponentPrice: 73,
        ComponentDescription: "Digital Transmit Beamformer",
        PartNumber: "US576195-50",
        Quantity: 1
    }]
});

db.serviceorders.save({
    _id: NumberInt(475749),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Preventative Maintenance",
    PriorityDescription: "Low",
    OpenDate: new ISODate("2013-02-08T11:35:00Z"),
    CloseDate: new ISODate("2013-02-08T13:37:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 60,
    ProblemNotes: "Need PM asap",
    PMDescription: "Intensifier Replacement",
    LaborCost: 50.00,
    PartCost: 160.00,
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(95179),
    _Product: NumberInt(13),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2013-02-08T11:45:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2013-02-08T12:05:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(84714),
        StatusDescription: "Completed",
        Checkin: new ISODate("2013-02-08T12:49:00Z"),
        Checkout: new ISODate("2013-02-08T13:37:00Z"),
        ActionNotes: "Performed Required Maintenance",
        ActualMinutes: 48
    }],
    ReplacementParts: [{
        ComponentPrice: 160,
        ComponentDescription: "Image Path Receiver",
        PartNumber: "US672021-35",
        Quantity: 1
    }]
});

db.serviceorders.save({
    _id: NumberInt(445162),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Preventative Maintenance",
    PriorityDescription: "Low",
    OpenDate: new ISODate("2013-01-23T08:33:00Z"),
    CloseDate: new ISODate("2013-02-08T13:37:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 60,
    ProblemNotes: "Need PM asap",
    PMDescription: "Intensifier Replacement",
    LaborCost: 50.00,
    PartCost: 241.00,
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(116297),
    _Product: NumberInt(48),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2013-01-23T10:36:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2013-02-08T12:05:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(84714),
        StatusDescription: "Completed",
        Checkin: new ISODate("2013-02-08T12:49:00Z"),
        Checkout: new ISODate("2013-02-08T13:37:00Z"),
        ActionNotes: "Performed Required Maintenance",
        ActualMinutes: 48
    }],
    ReplacementParts: [{
        ComponentPrice: 241,
        ComponentDescription: "Scintillator",
        PartNumber: "NK192981-107",
        Quantity: 1
    }]
});

db.serviceorders.save({
    _id: NumberInt(505079),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Preventative Maintenance",
    PriorityDescription: "Low",
    OpenDate: new ISODate("2013-09-24T05:59:00Z"),
    CloseDate: new ISODate("2013-02-24T07:00:00Z"),
    CurrentStatus: "Completed",
    TotalEstimatedMinutes: 30,
    ProblemNotes: "PM needed",
    PMDescription: "Coldhead Replacement",
    LaborCost: 9.38,
    PartCost: 93.00,
    CustomerContactInfo: {
        Name: "Jalisa Evans",
        Phone: "(292) 450-6940",
        Email: "jevans@bellevue.com"
    },
    _Equipment: NumberInt(135851),
    _Product: NumberInt(7),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2013-09-24T05:59:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2013-09-24T06:17:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(84714),
        StatusDescription: "Completed",
        Checkin: new ISODate("2013-02-24T06:51:00Z"),
        Checkout: new ISODate("2013-02-24T07:00:00Z"),
        ActionNotes: "Performed Required Maintenance",
        ActualMinutes: 9
    }],
    ReplacementParts: [{
        ComponentPrice: 93,
        ComponentDescription: "Fiber Optic Cable",
        PartNumber: "US915544-81",
        Quantity: 1
    }]
});

db.serviceorders.save({
    _id: NumberInt(486000),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(84714),
    ProblemTypeDescription: "Poor Image",
    PriorityDescription: "High",
    OpenDate: new ISODate("2014-02-24T00:45:00Z"),
    CurrentStatus: "Waiting For Customer Approval",
    ProblemNotes: "View of image no longer displays",
    PartCost: 186.00,
    CustomerContactInfo: {
        Name: "Carol Turner",
        Phone: "(247) 271-3034",
        Email: "bhernandez@bellevue.com"
    },
    _Equipment: NumberInt(165896),
    _Product: NumberInt(69),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(84714),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2014-02-24T01:07:00Z")
    }, {
        _id: NumberInt(3),
        _User: NumberInt(84714),
        StatusDescription: "Accepted",
        AcceptedDate: new ISODate("2014-02-24T01:18:00Z")
    }, {
        _id: NumberInt(4),
        _User: NumberInt(84714),
        StatusDescription: "Waiting For Customer Approval",
        Checkin: new ISODate("2014-02-24T02:11:00Z"),
        Checkout: new ISODate("2014-02-24T02:42:00Z"),
        ActionNotes: "Needs New Parts, Sent to Customer for Approval. Parts Not on Truck.  Can Return Tomorrow for install.",
        ActualMinutes: 31
    }],
    ReplacementParts: [{
        ComponentPrice: 73,
        ComponentDescription: "Digital Transmit Beamformer",
        PartNumber: "US576195-50",
        Quantity: 1
    }, {
        ComponentPrice: 113,
        ComponentDescription: "Focus Coil",
        PartNumber: "CT855706-81",
        Quantity: 1
    }]
});

db.serviceorders.save({
    _id: NumberInt(689247),
    _CreatedBy: NumberInt(48243),
    _AssignedTo: NumberInt(83791),
    ProblemTypeDescription: "Preventative Maintenance",
    PriorityDescription: "Low",
    PMDescription: "Magnet Quench Recovery",
    ProblemNotes: "PM as scheduled",
    OpenDate: new ISODate("2014-02-24T00:59:00Z"),
    CurrentStatus: "Assigned, Waiting to be Accepted",
    CustomerContactInfo: {
        Name: "Carol Turner",
        Phone: "(247) 271-3034",
        Email: "bhernandez@bellevue.com"
    },
    _Equipment: NumberInt(165896),
    _Product: NumberInt(69),
    ServiceDetails: [{
        _id: NumberInt(1),
        _User: NumberInt(48243),
        StatusDescription: "Submitted By Customer"
    }, {
        _id: NumberInt(2),
        _User: NumberInt(83791),
        StatusDescription: "Assigned, Waiting to be Accepted",
        AssignedDate: new ISODate("2014-02-24T01:35:00Z")
    }]
});