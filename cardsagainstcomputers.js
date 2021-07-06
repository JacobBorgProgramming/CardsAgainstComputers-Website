function play1(){
    document.getElementById("output").innerHTML = "I will play card " +Math.floor(Math.random() * 7+1);;
    }

function play2(){
    document.getElementById("output").innerHTML = "I will play cards " +Math.floor(Math.random() * 7+1) +", and "+Math.floor(Math.random() * 6+1);
    }

function play3(){
    document.getElementById("output").innerHTML = "I will play cards " +Math.floor(Math.random() * 7+1) +", "+Math.floor(Math.random() * 6+1)+" and "+Math.floor(Math.random() * 5+1);
    }

function judge(){
    var players = document.getElementById("playernumberinput").value;
    document.getElementById("output").innerHTML = "I pick " +Math.floor(Math.random() * players+1);;
    }


document.getElementById("playernumberinput").value =
  localStorage["numberofplayers"] || ""; // 


function save1(){
  document.getElementById("playernumber").innerHTML = document.getElementById("playernumberinput").value;
  localStorage.setItem("numberofplayers", document.getElementById("playernumberinput").value);
}

function load(){
    document.getElementById("playernumberinput").value = localStorage["numberofplayers"];
    document.getElementById("playernumber").innerHTML = localStorage["numberofplayers"];
}

setInterval(function() {

    localStorage["numberofplayers"] = document.getElementById("playernumberinput").value; // 
    localStorage["numberofplayers"] = document.getElementById("playernumber").innerHTML; // 

  }, 1000);