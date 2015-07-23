var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');

exports.deets = function(req, res){
    var serial = req.params.serial;
    Equipment.find({"SerialNumber": serial})
             .populate("_Equipment")
             .populate("_Product")
             .exec(function (err, equip){
             		//console.log(equip);
                	res.render('device-detail', 
    				{ 
    					title: 'Details',
    					data: equip
					});
              });
};
