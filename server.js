const express = require('express');
const fs = require('fs');
const cors = require('cors');
const queryString = require('query-string');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/', (request,response) =>{

  const body = request.body;
  const email = request.body.email;
  var returnString = '&email=' + request.body.email + '&firstname=' + request.body.firstName + '&lastname=' + request.body.lastName;
  var rankingCount = 1;

  for(let i = 0; i < body.outputArray.length; i++){
    if(body.outputArray[i].id === 1){
      body.outputArray[i].id = 23;
    } else if(body.outputArray[i].id === 2){
      body.outputArray[i].id = 48;
    } else if(body.outputArray[i].id === 3){
      body.outputArray[i].id = 28;
    } else if(body.outputArray[i].id === 4){
      body.outputArray[i].id = 104;
    } else if(body.outputArray[i].id === 5){
      body.outputArray[i].id = 106;
    } else if(body.outputArray[i].id === 6){
      body.outputArray[i].id = 59;
    } else if(body.outputArray[i].id === 7){
      body.outputArray[i].id = 116;
    } else if(body.outputArray[i].id === 8){
      body.outputArray[i].id = 122;
    } else if(body.outputArray[i].id === 10){
      body.outputArray[i].id = 15;
    } else if(body.outputArray[i].id === 11){
      body.outputArray[i].id = 111;
    } else if(body.outputArray[i].id === 12){
      body.outputArray[i].id = 36;
    } else if(body.outputArray[i].id === 13){
      body.outputArray[i].id = 119;
    } else if(body.outputArray[i].id === 14){
      body.outputArray[i].id = 72;
    } else if(body.outputArray[i].id === 15){
      body.outputArray[i].id = 125;
    } else if(body.outputArray[i].id === 16){
      body.outputArray[i].id = 126;
    } else if(body.outputArray[i].id === 17){
      body.outputArray[i].id = 47;
    } else if(body.outputArray[i].id === 18){
      body.outputArray[i].id = 76;
    } else if(body.outputArray[i].id === 19){
      body.outputArray[i].id = 20;
    } else if(body.outputArray[i].id === 20){
      body.outputArray[i].id = 89;
    } else if(body.outputArray[i].id === 21){
      body.outputArray[i].id = 95;
    } else if(body.outputArray[i].id === 22){
      body.outputArray[i].id = 85;
    } else if(body.outputArray[i].id === 23){
      body.outputArray[i].id = 25;
    } else if(body.outputArray[i].id === 24){
      body.outputArray[i].id = 120;
    } else if(body.outputArray[i].id === 25){
      body.outputArray[i].id = 2;
    } else if(body.outputArray[i].id === 26){
      body.outputArray[i].id = 51;
    } else if(body.outputArray[i].id === 27){
      body.outputArray[i].id = 21;
    } else if(body.outputArray[i].id === 28){
      body.outputArray[i].id = 6;
    } else if(body.outputArray[i].id === 29){
      body.outputArray[i].id = 52;
    } else if(body.outputArray[i].id === 30){
      body.outputArray[i].id = 86;
    } else if(body.outputArray[i].id === 31){
      body.outputArray[i].id = 1;
    } else if(body.outputArray[i].id === 32){
      body.outputArray[i].id = 121;
    } else if(body.outputArray[i].id === 33){
      body.outputArray[i].id = 58;
    } else if(body.outputArray[i].id === 34){
      body.outputArray[i].id = 35;
    } else if(body.outputArray[i].id === 35){
      body.outputArray[i].id = 56;
    } else if(body.outputArray[i].id === 36){
      body.outputArray[i].id = 30;
    } else if(body.outputArray[i].id === 37){
      body.outputArray[i].id = 114;
    } else if(body.outputArray[i].id === 38){
      body.outputArray[i].id = 79;
    } else if(body.outputArray[i].id === 39){
      body.outputArray[i].id = 103;
    } else if(body.outputArray[i].id === 40){
      body.outputArray[i].id = 64;
    } else if(body.outputArray[i].id === 41){
      body.outputArray[i].id = 13;
    } else if(body.outputArray[i].id === 42){
      body.outputArray[i].id = 77;
    } else if(body.outputArray[i].id === 43){
      body.outputArray[i].id = 90;
    } else if(body.outputArray[i].id === 44){
      body.outputArray[i].id = 16;
    } else if(body.outputArray[i].id === 45){
      body.outputArray[i].id = 91;
    } else if(body.outputArray[i].id === 46){
      body.outputArray[i].id = 70;
    } else if(body.outputArray[i].id === 47){
      body.outputArray[i].id = 10;
    } else if(body.outputArray[i].id === 48){
      body.outputArray[i].id = 69;
    } else if(body.outputArray[i].id === 49){
      body.outputArray[i].id = 40;
    } else if(body.outputArray[i].id === 50){
      body.outputArray[i].id = 11;
    } else if(body.outputArray[i].id === 51){
      body.outputArray[i].id = 107;
    } else if(body.outputArray[i].id === 52){
      body.outputArray[i].id = 37;
    } else if(body.outputArray[i].id === 53){
      body.outputArray[i].id = 88;
    } else if(body.outputArray[i].id === 54){
      body.outputArray[i].id = 44;
    } else if(body.outputArray[i].id === 55){
      body.outputArray[i].id = 124;
    } else if(body.outputArray[i].id === 56){
      body.outputArray[i].id = 99;
    } else if(body.outputArray[i].id === 57){
      body.outputArray[i].id = 19;
    } else if(body.outputArray[i].id === 58){
      body.outputArray[i].id = 17;
    } else if(body.outputArray[i].id === 59){
      body.outputArray[i].id = 38;
    } else if(body.outputArray[i].id === 60){
      body.outputArray[i].id = 92;
    } else if(body.outputArray[i].id === 61){
      body.outputArray[i].id = 112;
    } else if(body.outputArray[i].id === 62){
      body.outputArray[i].id = 5;
    } else if(body.outputArray[i].id === 63){
      body.outputArray[i].id = 41;
    } else if(body.outputArray[i].id === 64){
      body.outputArray[i].id = 75;
    }
  }

  for(let i = 0; i < body.outputArray.length; i++){
    if(body.outputArray[i].priority === null){
      returnString = returnString + '&v' + body.outputArray[i].id + '=' + String(rankingCount);
      rankingCount++;
    }
  }

  for(let i = 0; i < body.outputArray.length; i++){
    if(body.outputArray[i].priority === 'High'){
      returnString = returnString + '&v' + body.outputArray[i].id + '=' + String(rankingCount);
    }
  }

  for(let i = 0; i < body.outputArray.length; i++){
    if(body.outputArray[i].priority === 'Mid'){
      returnString = returnString + '&v' + body.outputArray[i].id + '=' + String(rankingCount + 1);
    }
  }

  for(let i = 0; i < body.outputArray.length; i++){
    if(body.outputArray[i].priority === 'Low'){
      returnString = returnString + '&v' + body.outputArray[i].id + '=' + String(rankingCount + 2);
    }
  }



  fs.writeFile('./'+ email +'.txt', returnString, err => {
    if (err){
      console.log(err);
    }
  });

  fs.writeFile('./'+ email +'JSON.txt', JSON.stringify(body), err => {
    if (err){
      console.log(err);
    }
  });

  response.json({status: 'Congratulations! Your response has been recorded.'});
})

app.listen(process.env.PORT || 3000, () =>{
  console.log('app is running');
})
