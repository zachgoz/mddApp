var db = connect("localhost:27017/ITLDP");

db.products.drop();

db.products.save({
    _id: NumberInt(69),
    ProductName: "Carto 3 System",
    Modality: "Electrophysiology",
    ProductPrice: 165444,
    ProductCost: 97664,
    Components: [{
        ComponentPrice: 8,
        ComponentDescription: "Anti-Alias Filter",
        ComponentPartNumber: "US505565-30"
    }, {
        ComponentPrice: 18,
        ComponentDescription: "Avalanche Photodiodes",
        ComponentPartNumber: "NK575843-47"
    }, {
        ComponentPrice: 28,
        ComponentDescription: "Chemistry System",
        ComponentPartNumber: "NK151210-72"
    }, {
        ComponentPrice: 38,
        ComponentDescription: "Control Board",
        ComponentPartNumber: "US279796-109"
    }, {
        ComponentPrice: 41,
        ComponentDescription: "Cyclotron",
        ComponentPartNumber: "NK344715-112"
    }, {

        ComponentPrice: 49,
        ComponentDescription: "Dedicated Synthesis Unit",
        ComponentPartNumber: "NK739391-25"
    }, {
        ComponentPrice: 55,
        ComponentDescription: "Deflection Coil",
        ComponentPartNumber: "CT833447-48"
    }, {
        ComponentPrice: 73,
        ComponentDescription: "Digital Transmit Beamformer",
        ComponentPartNumber: "US576195-50"
    }, {

        ComponentPrice: 86,
        ComponentDescription: "Electron Programmer",
        ComponentPartNumber: "CT156034-21"
    }, {

        ComponentPrice: 98,
        ComponentDescription: "Filament Supply",
        ComponentPartNumber: "XR429504-100"
    }, {
        ComponentPrice: 113,
        ComponentDescription: "Focus Coil",
        ComponentPartNumber: "CT855706-81"
    }, {
        ComponentPrice: 119,
        ComponentDescription: "Generator Cooling Unit",
        ComponentPartNumber: "XR610542-4"
    }, {
        ComponentPrice: 163,
        ComponentDescription: "Low Noise Amplifier",
        ComponentPartNumber: "US648566-3"
    }, {

        ComponentPrice: 173,
        ComponentDescription: "Optical Coupling",
        ComponentPartNumber: "US468853-45"
    }, {

        ComponentPrice: 242,
        ComponentDescription: "Scintillator",
        ComponentPartNumber: "NK192981-91"
    }]

});

db.products.save({
    _id: NumberInt(8),
    ProductName: "ETHICON Generator G11",
    Modality: "Advanced Energy",
    ProductPrice: 43000,
    ProductCost: 27250,
    Components: [{
        ComponentPrice: 4,
        ComponentDescription: "Amplifier Tube",
        ComponentPartNumber: "CT958842-80"
    }, {
        ComponentPrice: 14,
        ComponentDescription: "Autotransformer",
        ComponentPartNumber: "XR440025-3"
    }, {
        ComponentPrice: 24,
        ComponentDescription: "Capacitors",
        ComponentPartNumber: "XR884771-2"
    }, {
        ComponentPrice: 34,
        ComponentDescription: "Circuit Board",
        ComponentPartNumber: "UU669805-21"
    }, {
        ComponentPrice: 47,
        ComponentDescription: "Dedicated Synthesis Unit",
        ComponentPartNumber: "NK739391-70"
    }, {
        ComponentPrice: 53,
        ComponentDescription: "Deflection Coil",
        ComponentPartNumber: "CT833447-81"
    }, {
        ComponentPrice: 84,
        ComponentDescription: "Electron Gun",
        ComponentPartNumber: "CT466668-18"
    }, {
        ComponentPrice: 94,
        ComponentDescription: "Fiber Optic Cable",
        ComponentPartNumber: "US915544-70"
    }, {
        ComponentPrice: 159,
        ComponentDescription: "Path Receiver",
        ComponentPartNumber: "US672021-98"
    }, {
        ComponentPrice: 169,
        ComponentDescription: "Magnet",
        ComponentPartNumber: "MR683866-77"
    }, {
        ComponentPrice: 239,
        ComponentDescription: "Scanner",
        ComponentPartNumber: "NK367729-70"
    }, {

        ComponentPrice: 279,
        ComponentDescription: "Power Unit",
        ComponentPartNumber: "XR937978-73"
    }]
});

db.products.save({
    _id: NumberInt(13),
    ProductName: "MALIS CMC-III BIPOLAR CUT AND COAGULATION SYSTEM",
    Modality: "Electro-Surgery",
    ProductPrice: 94000,
    ProductCost: 53180,
    Components: [{
        ComponentPrice: 5,
        ComponentDescription: "Amplifier Tube",
        ComponentPartNumber: "CT958842-92"
    }, {
        ComponentPrice: 15,
        ComponentDescription: "Autotransformer",
        ComponentPartNumber: "XR440025-68"
    }, {

        ComponentPrice: 25,
        ComponentDescription: "Capacitors",
        ComponentPartNumber: "XR884771-43"
    }, {

        ComponentPrice: 35,
        ComponentDescription: "Circuit Board",
        ComponentPartNumber: "UU669805-110"
    }, {

        ComponentPrice: 95,
        ComponentDescription: "Fiber Optic Cable",
        ComponentPartNumber: "US915544-52"
    }, {

        ComponentPrice: 117,
        ComponentDescription: "Generator Cooling Unit",
        ComponentPartNumber: "XR610542-103"
    }, {

        ComponentPrice: 160,
        ComponentDescription: "Image Path Receiver",
        ComponentPartNumber: "US672021-35"
    }, {

        ComponentPrice: 170,
        ComponentDescription: "Magnet",
        ComponentPartNumber: "MR683866-80"
    }, {

        ComponentPrice: 240,
        ComponentDescription: "Electro-slicer",
        ComponentPartNumber: "NK367729-8"
    }, {

        ComponentPrice: 280,
        ComponentDescription: "Power Generator",
        ComponentPartNumber: "XR937978-53"
    }]
});

db.products.save({
    _id: NumberInt(1),
    ProductName: "EVOTECH ECR",
    Modality: "Sterilization",
    ProductPrice: 62000,
    ProductCost: 32840,
    Components: [{
        ComponentPrice: 1,
        ComponentDescription: "Amplifier Tube",
        ComponentPartNumber: "CT958842-34"
    }, {

        ComponentPrice: 11,
        ComponentDescription: "Autotransformer",
        ComponentPartNumber: "XR440025-106"
    }, {

        ComponentPrice: 21,
        ComponentDescription: "Capacitors",
        ComponentPartNumber: "XR884771-103"
    }, {

        ComponentPrice: 31,
        ComponentDescription: "Circuit Board",
        ComponentPartNumber: "UU669805-35"
    }, {

        ComponentPrice: 46,
        ComponentDescription: "Dedicated Synthesis Unit",
        ComponentPartNumber: "NK739391-46"
    }, {

        ComponentPrice: 51,
        ComponentDescription: "Deflection Coil",
        ComponentPartNumber: "CT833447-110"
    }, {

        ComponentPrice: 81,
        ComponentDescription: "Electron Gun",
        ComponentPartNumber: "CT466668-94"
    }, {

        ComponentPrice: 91,
        ComponentDescription: "Fiber Optic Cable",
        ComponentPartNumber: "US915544-7"
    }, {

        ComponentPrice: 114,
        ComponentDescription: "Focus Coil",
        ComponentPartNumber: "CT855706-86"
    }, {

        ComponentPrice: 156,
        ComponentDescription: "Pathogen Receiver",
        ComponentPartNumber: "US672021-65"
    }, {

        ComponentPrice: 164,
        ComponentDescription: "Low Noise Amplifier",
        ComponentPartNumber: "US648566-14"
    }, {

        ComponentPrice: 166,
        ComponentDescription: "Magnet",
        ComponentPartNumber: "MR683866-52"
    }, {

        ComponentPrice: 236,
        ComponentDescription: "Scanner",
        ComponentPartNumber: "NK367729-27"
    }, {

        ComponentPrice: 276,
        ComponentDescription: "Power Generator",
        ComponentPartNumber: "XR937978-113"
    }]
});

db.products.save({
    _id: NumberInt(48),
    ProductName: "STERRAD NX System",
    Modality: "Ster",
    ProductPrice: 58933,
    ProductCost: 29006,
    Components: [{
        ComponentPrice: 7,
        ComponentDescription: "Anti-Alias Filter",
        ComponentPartNumber: "US505565-63"
    }, {

        ComponentPrice: 17,
        ComponentDescription: "Avalanche Photodiodes",
        ComponentPartNumber: "NK575843-113"
    }, {

        ComponentPrice: 27,
        ComponentDescription: "Chemistry System",
        ComponentPartNumber: "NK151210-16"
    }, {

        ComponentPrice: 37,
        ComponentDescription: "Control Board",
        ComponentPartNumber: "US279796-83"
    }, {

        ComponentPrice: 48,
        ComponentDescription: "Dedicated Synthesis Unit",
        ComponentPartNumber: "NK739391-104"
    }, {

        ComponentPrice: 54,
        ComponentDescription: "Deflection Coil",
        ComponentPartNumber: "CT833447-103"
    }, {

        ComponentPrice: 72,
        ComponentDescription: "Digital Transmit Beamformer",
        ComponentPartNumber: "US576195-65"
    }, {

        ComponentPrice: 87,
        ComponentDescription: "Electron Programmer",
        ComponentPartNumber: "CT156034-88"
    }, {

        ComponentPrice: 97,
        ComponentDescription: "Filament Supply",
        ComponentPartNumber: "XR429504-61"
    }, {

        ComponentPrice: 112,
        ComponentDescription: "Focus Coil",
        ComponentPartNumber: "CT855706-106"
    }, {

        ComponentPrice: 118,
        ComponentDescription: "Generator Cooling Unit",
        ComponentPartNumber: "XR610542-13"
    }, {

        ComponentPrice: 162,
        ComponentDescription: "Low Noise Amplifier",
        ComponentPartNumber: "US648566-7"
    }, {

        ComponentPrice: 172,
        ComponentDescription: "Optical Coupling",
        ComponentPartNumber: "US468853-69"
    }, {

        ComponentPrice: 241,
        ComponentDescription: "Scintillator",
        ComponentPartNumber: "NK192981-107"
    }]
});

db.products.save({
    _id: NumberInt(3),
    ProductName: "STERRAD 100NX System",
    Modality: "Sterilization",
    ProductPrice: 1100000,
    ProductCost: 72000,
    Components: [{
        ComponentPrice: 2,
        ComponentDescription: "Amplifier Tube",
        ComponentPartNumber: "CT958842-33"
    }, {

        ComponentPrice: 12,
        ComponentDescription: "Autotransformer",
        ComponentPartNumber: "XR440025-20"
    }, {

        ComponentPrice: 22,
        ComponentDescription: "Capacitors",
        ComponentPartNumber: "XR884771-35"
    }, {

        ComponentPrice: 32,
        ComponentDescription: "Circuit Board",
        ComponentPartNumber: "UU669805-106"
    }, {

        ComponentPrice: 50,
        ComponentDescription: "Dedicated Synthesis Unit",
        ComponentPartNumber: "NK739391-55"
    }, {

        ComponentPrice: 82,
        ComponentDescription: "Electron Gun",
        ComponentPartNumber: "CT466668-109"
    }, {

        ComponentPrice: 92,
        ComponentDescription: "Fiber Optic Cable",
        ComponentPartNumber: "US915544-76"
    }, {

        ComponentPrice: 116,
        ComponentDescription: "Generator Cooling Unit",
        ComponentPartNumber: "XR610542-74"
    }, {

        ComponentPrice: 157,
        ComponentDescription: "Image Path Receiver",
        ComponentPartNumber: "US672021-38"
    }, {

        ComponentPrice: 165,
        ComponentDescription: "Low Noise Amplifier",
        ComponentPartNumber: "US648566-91"
    }, {

        ComponentPrice: 167,
        ComponentDescription: "Magnet",
        ComponentPartNumber: "MR683866-15"
    }, {

        ComponentPrice: 237,
        ComponentDescription: "Scanner",
        ComponentPartNumber: "NK367729-8"
    }, {

        ComponentPrice: 277,
        ComponentDescription: "Power Generator",
        ComponentPartNumber: "XR937978-44"
    }]
});

db.products.save({
    _id: NumberInt(7),
    ProductName: "STERRAD 100S System",
    Modality: "Sterilization",
    ProductPrice: 986000,
    ProductCost: 639500,
    Components: [{
        ComponentPrice: 3,
        ComponentDescription: "Amplifier Tube",
        ComponentPartNumber: "CT958842-31"
    }, {

        ComponentPrice: 13,
        ComponentDescription: "Autotransformer",
        ComponentPartNumber: "XR440025-10"
    }, {

        ComponentPrice: 23,
        ComponentDescription: "Capacitors",
        ComponentPartNumber: "XR884771-78"
    }, {

        ComponentPrice: 33,
        ComponentDescription: "Circuit Board",
        ComponentPartNumber: "UU669805-37"
    }, {

        ComponentPrice: 52,
        ComponentDescription: "Deflection Coil",
        ComponentPartNumber: "CT833447-9"
    }, {

        ComponentPrice: 83,
        ComponentDescription: "Electron Gun",
        ComponentPartNumber: "CT466668-83"
    }, {

        ComponentPrice: 93,
        ComponentDescription: "Fiber Optic Cable",
        ComponentPartNumber: "US915544-81"
    }, {

        ComponentPrice: 115,
        ComponentDescription: "Focus Coil",
        ComponentPartNumber: "CT855706-4"
    }, {

        ComponentPrice: 158,
        ComponentDescription: "Image Path Receiver",
        ComponentPartNumber: "US672021-110"
    }, {

        ComponentPrice: 168,
        ComponentDescription: "Magnet",
        ComponentPartNumber: "MR683866-38"
    }, {

        ComponentPrice: 238,
        ComponentDescription: "Scanner",
        ComponentPartNumber: "NK367729-89"
    }, {

        ComponentPrice: 278,
        ComponentDescription: "Power Generator",
        ComponentPartNumber: "XR937978-115"
    }]
});

db.products.save({
    _id: NumberInt(23),
    ProductName: "Automatic Endoscope Reprocessor",
    Modality: "Sterilization",
    ProductPrice: 110340,
    ProductCost: 88272,
    Components: [{
        ComponentPrice: 6,
        ComponentDescription: "Anti-Alias Filter",
        ComponentPartNumber: "US505565-6"
    }, {

        ComponentPrice: 16,
        ComponentDescription: "Avalanche Photodiodes",
        ComponentPartNumber: "NK575843-10"
    }, {

        ComponentPrice: 26,
        ComponentDescription: "Chemistry System",
        ComponentPartNumber: "NK151210-15"
    }, {

        ComponentPrice: 36,
        ComponentDescription: "Control Board",
        ComponentPartNumber: "US279796-86"
    }, {

        ComponentPrice: 71,
        ComponentDescription: "Digital Transmit Beamformer",
        ComponentPartNumber: "US576195-26"
    }, {

        ComponentPrice: 88,
        ComponentDescription: "Electron Programmer",
        ComponentPartNumber: "CT156034-43"
    }, {

        ComponentPrice: 96,
        ComponentDescription: "Filament Supply",
        ComponentPartNumber: "XR429504-52"
    }, {

        ComponentPrice: 111,
        ComponentDescription: "Focus Coil",
        ComponentPartNumber: "CT855706-14"
    }, {

        ComponentPrice: 161,
        ComponentDescription: "Low Noise Amplifier",
        ComponentPartNumber: "US648566-109"
    }, {

        ComponentPrice: 171,
        ComponentDescription: "Optical Coupling",
        ComponentPartNumber: "US468853-113"
    }]
});