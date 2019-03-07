module.exports = function makeExchange(currency) {
    const object = {};

    if(currency > 0 && currency < 10000)
    {
        if(currency >= 50) 
        {
            object.H = Math.floor(currency / 50); 
            currency -= object.H * 50; 
        }
 
        if(currency >= 25) 
        {
          object.Q = Math.floor(currency / 25);
          currency -= object.Q * 25;
        }
 
        if(currency >= 10) 
        {
          object.D = Math.floor(currency / 10); 
          currency -= object.D * 10; 
        }
 
        if(currency >= 5) 
        {
          object.N = Math.floor(currency / 5);
          currency -= object.N * 5;
        }
 
        if(currency >= 1) 
        {
          object.P = currency; 
        }
    }
    else if(currency > 10000)
        object.error = "You are rich, my friend! We don't have so much coins for exchange";
 
    return object; 
}

