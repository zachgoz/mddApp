var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');
var ServiceOrder = mongoose.model('ServiceOrder');

exports.deets = function(req, res){
    ServiceOrder.find({"_id":411339})
             .populate("_Equipment")
             .populate("_Product")
             .exec(function (err, equip){
             		console.log(equip);
                	res.render('request-detail', 
    				{ 
    					title: 'Details',
    					data: equip,
                        ServiceDetails: equip.ServiceDetails
					});
              });
};
