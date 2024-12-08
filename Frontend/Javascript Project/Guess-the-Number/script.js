var count = 10

function guess() {

    var a = document.getElementById("one")
    var a1 = Number(a.value)

    var b = Math.floor((Math.random() * 10) + 1)

    var output = document.getElementById("two")
    
    var scores = document.getElementById("three")
    //console.log("score text content",typeof(scores))

   
   
    
    if (a1 == b) {

        console.log("Entered Number :", a1)
        console.log("Random Number : ",b)

        var c = "You are Right !"
        output.textContent=c
        
        //count++ 
        //incrementing the score for right answer is not required
        
        
        alert("YOU WON !!!")

        
        
        
    }
    else { 
        console.log("Entered Number :", a1)
        console.log("Random Number : ", b)
        
        var d = "You are Wrong !"
        output.textContent=d
        
        count--
        
        scores.textContent="Score :"+count
       
        
    }

    
 }

