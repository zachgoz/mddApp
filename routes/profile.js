/**
 * Created by cwilliams on 7/21/15.
 */
var async = require('async');
var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');

exports.profile = function(req, res){
    var good = 0;
    var attention = 0;
    var bad = 0;
    async.parallel([
            function(callback){
                Equipment.find({"Service" : "Good"})
                    .exec(function (err, equipment){
                        if (!err){
                            equipment.forEach(function(myequip){
                                good++;
                            });
                        }else {
                            return callback(err);
                        }
                        console.log(good);
                        callback();
                    });
            },
            function(callback){
                Equipment.find({"Service" : "Soon"})
                    .exec(function (err, equipment){
                        if (!err){
                            equipment.forEach(function(myequip){
                                attention++;
                            });
                        }else {
                            return callback(err);
                        }
                        console.log(attention);
                        callback();
                    });
            },
            function(callback){
                Equipment.find({"Service" : "Past"})
                    .exec(function (err, equipment){
                        if (!err){
                            equipment.forEach(function(myequip){
                                bad++;
                            });
                        }else {
                            return callback(err);
                        }
                        console.log(bad);
                        callback();
                    });
            }], function(err){
                res.render('profile', {
                    title: 'Doctor Name',
                    good: good,
                    attention: attention,
                    bad: bad
                });
            }
    );

};
