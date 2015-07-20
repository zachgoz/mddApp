
/*
 * GET home page.
 */

exports.hello = function(req, res){

// Lets create an array and load it with User Data
  var myArray = [];
  myArray.push({
 		  customerid: "48243",
  		customer: "Bellevue Regional Hospital",
  		firstname: "Harvard",
      lastname: "Anderson",
      phone: "(688) 408-5919"});
  myArray.push({
      customerid: "48364",
      customer: "Bridgeport Dental Practice",
      firstname: "Yale",
      lastname: "Henderson",
      phone: "(634) 838-6666"});
  myArray.push({
      customerid: "83791",
      customer: "Johnson and Johnson",
      firstname: "Julie",
      lastname: "Adams",
      phone: "(406) 388-9878"});
 
 // Lets put data into the Session object	
  req.session.title = "User Listing";
  m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  d = new Date();
  curr_day = d.getDate();
  curr_month = d.getMonth();
  curr_year = d.getFullYear();
  req.session.reportdate =  curr_day + "-" + m_names[curr_month] + "-" + curr_year;                 

  res.render('helloworld', 
  			{ tabletitle: req.session.title, 
          reportdate: req.session.reportdate,
  			  header1: 'Customer ID',
  			  header2: 'Customer Name',
  			  header3: 'First Name',
          header4: 'Last Name',
          header5: 'Phone',
  			  users:  myArray})
};
