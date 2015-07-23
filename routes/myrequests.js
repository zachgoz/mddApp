var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');
var ServiceOrder = mongoose.model('ServiceOrder');

exports.requests = function(req, res){
    ServiceOrder.find({"_CreatedBy":48243})
             .populate("_Equipment")
             .populate("_Product")
             .exec(function (err, equip){
             		//console.log(equip);
                	res.render('myrequests', 
    				{ 
    					title: 'My Requests',
    					data: equip
					});
              });
};
