document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form").addEventListener("submit",(event)=>{
      event.preventDefault();
      console.log(event);


    const {target:{from,to,amount}}=event; 
        
    let headers = new Headers();
headers.append("apikey", "prcDTQe76KAnwFvuV2IZU8H1NZUvanQI");

var requestOptions = {
  method: 'GET',
  headers,
};

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        .then((response)=>response.json()) .then((data)=>{
            const {date,info:{rate}, query:{from,to, amount},result}= data;
            document.getElementById("para").textContent=` The rate for 1${from} in ${to} is ${rate}. The converted value for ${from} to ${to} for amount of ${amount} on date ${date} is ${result.toFixed(2)}`

        }).catch((error)=>console.log(error.message))

          
    })
})





  
        
