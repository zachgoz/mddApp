var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');

exports.reqs = function(req, res){
    Equipment.find({"_User":48243})
             .populate("_Equipment")
             .populate("_Product")
             .exec(function (err, equip){
             		console.log(equip);
                	res.render('mydevices', 
    				{ 
    					title: 'My Devices',
    					data: equip
					});
              });
};
