exports.presentform = function(req, res){
  res.render('sample', { title: 'Sample Form' });
};
exports.echodata = function(req, res){
  res.render('sample-echodata', { title: 'Sample echo',
    					             work: req.body.work,
    					             position: req.body.position,
  });

};