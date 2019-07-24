const https = require('https');


const options = {
  hostname: 'api.clickfunnels.com',
  port: 443,
  path: '/contacts.json?email=erikdavis@cfyc.com.vn&auth_token=QLiTvjid7-ZRvy-axozN',
  method: 'GET'


};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);


  res.on('data' , (d) => {
    var leadjson =$d[0];
    var leadobj = JSON.parse(leadjson);

       console.log(leadobj.$data.$id);
       
     
    
  
    // var  arr = new arr(Lead);

    //   var Lead = new Object; 

    // Lead.getLead = function (id,name,email){

    //         this.id = id;
    //         this.name = name;
    //         this.email = email;
    // //     }
    // var json = JSON.stringify(arr);
    // console.log(json);
    // // console.log(typeof json);
    // var backtoJS  =  JSON.parse(json);
    // console.log(backtoJS);
    // console.log(backtoJS.id);
      
    // const string = JSON.stringify(arr);
    // // console.log(string);
    // getLead = JSON.parse(string);
    // console.log();


//       var arr = {};
//     // JSON.parse(d);
//    arr =  process.stdout.write(d);
 
   
    // process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();