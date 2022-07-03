
let suitNames = ["Spade", "Club", "Heart", "Diamond"];

for(let x =0; x< suitNames.length; x++){
  
    if (suitNames.indexOf('Spade')===0){
        for(let i =1;i<=13;i++){
            console.log(i+" "+suitNames[0]);
    
        }
      suitNames[0]=+1;
    }
    else if (suitNames.indexOf('Club')===1){
        for(let i =1;i<=13;i++){
            console.log(i+" "+suitNames[1]);
    
        }
      suitNames[1]=+1;
    }
    else if (suitNames.indexOf('Heart')===2){
        for(let i =1;i<=13;i++){
            console.log(i+" "+suitNames[2]);
    
        }
      suitNames[2]=+1;
    }
    else if (suitNames.indexOf('Diamond')===3){
        for(let i =1;i<=13;i++){
            console.log(i+" "+suitNames[3]);
    
        }
      suitNames[3]=+1;
    }
  
        
    }
