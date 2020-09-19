function Tuck_In(array1, array2, test){
  var x = [];

  x[0] = array1[0];
  for (i = 0; i < array2.length ; i++){
    x[i+1] = array2[i];
  }
  x[array2.length+1] = array1[1];

  var s = "";
  for(let elements of x){
    if(elements == x[x.length -1]){
      s = s + elements + ".";
    }
    else{
      s = s + elements + ", ";
    }
  }

  document.getElementById("tuckin"+test).innerHTML = s;
  var s = "";
}

function Timer_Form(){
  var name = document.getElementById("name_of_event").value;
  var date_time = document.getElementById("chosen_date_and_time").value;

  var date_to_countdown_to = new Date(date_time).getTime();
  var now = new Date().getTime();

  var time_apart = date_to_countdown_to - now;
  var days = Math.floor(time_apart / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time_apart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time_apart % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time_apart % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = "Countdown To " +name+ ": " +days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}

function Vector_Calc(arr1, arr2, testcase){
  var arr3 = arr1 * arr2;
  var x = arr3.reduce();
  alert(x);
}
