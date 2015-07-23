var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');

exports.deets = function(req, res){
    Equipment.find({"SerialNumber": 'XR99960703'})
             .populate("_Equipment")
             .populate("_Product")
             .exec(function (err, equip){
             		//console.log(equip);
                	res.render('request-detail', 
    				{ 
    					title: 'Details',
    					data: equip
					});
              });
};
