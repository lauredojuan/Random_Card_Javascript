function myFunction() {

        let value =[1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ,"K", "Q" , "J", "A"];
        let suit =[ "&#9824" , "&#9827", "&#9829", "&#9830"];
        
        let valRand = Math.floor(Math.random() * value.length);
        let suitRand = Math.floor(Math.random() * suit.length);

        if (suitRand > 1 ){
            document.getElementById("val").style.color = "#e84118";
            document.getElementById("s1").style.color = "#e84118";
            document.getElementById("s2").style.color = "#e84118";
        }
        else {
            document.getElementById("val").style.color = "#000000";
            document.getElementById("s1").style.color = "#000000";
            document.getElementById("s2").style.color = "#000000"; 
        }     

        // document.getElementById("cArd").style.transform = "rotateY(360deg)"

        document.getElementById("val").innerHTML = value[valRand];
        document.getElementById("s1").innerHTML = suit[suitRand];
        document.getElementById("s2").innerHTML = suit[suitRand];

  }

