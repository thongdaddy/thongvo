const request = require('request');

let url = 'https://api.clickfunnels.com/contacts.json?email=erikdavis@cfyc.com.vn&auth_token=QLiTvjid7-ZRvy-axozN';

request({
  url:url,
  json:true
  },(error,response,body)=>{
    
  for( i = 0;i<10;i++){
    var obj = body.data[i];
    console.log(JSON.stringify(obj.id) + obj.attributes.name);
    }
  });
  
