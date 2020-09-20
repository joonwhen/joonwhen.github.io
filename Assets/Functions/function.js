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

setInterval(Timer_Form, 1000);

function reverse_string(){
  x = document.getElementById("string_to_be_reversed").value;
  var x_str = x.toString();
  //var y = [];
  //for (i = 0; i < x_str.length; i++){
  //  y[x.length - i - 1] = " " + x_str.charAt(i) ;
  //}
  y = x_str.split("").reverse().join("");
  document.getElementById("reverse_display").innerHTML = y;
}

function pig_latin(){
  x = document.getElementById("pig_latin_string").value;
  var x_str = x.toString();
  var y_str = "-" + x_str.charAt(0) + "ay";
  var result = x_str.substring(1) + y_str;
  document.getElementById("pig_latin_display").innerHTML = result;
}

function vowel_counter(){
  var x = document.getElementById("vowel_counter_input").value;
  var a_count = e_count = i_count = o_count = u_count = vowels = 0;
  var x_str = x.split("");
  for(i = 0; i < x_str.length; i++){
    if (x_str[i] == "a" || x_str[i] == "A"){
      a_count+=1;
      vowels+=1;
    }
    else if (x_str[i] == "e" || x_str[i] == "E"){
      e_count+=1;
      vowels+=1;
    }
    else if (x_str[i] == "i" || x_str[i] == "I"){
      i_count+=1;
      vowels+=1;
    }
    else if (x_str[i] == "o" || x_str[i] == "O"){
      o_count+=1;
      vowels+=1;
    }
    else if (x_str[i] == "u" || x_str[i] == "U"){
      u_count+=1;
      vowels+=1;
    }
  }
  document.getElementById("vowel_counter_display").innerHTML =
  "The number of 'a' is: " + a_count + ".<br>" +
  "The number of 'e' is: " + e_count + ".<br>" +
  "The number of 'i' is: " + i_count + ".<br>" +
  "The number of 'o' is: " + o_count + ".<br>" +
  "The number of 'u' is: " + u_count + ".<br>" +
  "The total number of vowels is: " + vowels + ".<br>";
}

function palindrome_checker(){
  x = document.getElementById("palindrome_checker_input").value;
  var x_str = x.toString().replace(/[\W_ ]/g, "").toLowerCase();
  var y_str = x_str.split("").reverse().join("");
  var result = 0;
  for (i = 0; i < x_str.length; i++){
    if (x_str[i] == y_str[i]){
      result = 1;
    } else {
      result = 0;
      break;
    }
  }
  if (result == 0){
    document.getElementById("palindrome_checker_display").innerHTML = "<span style = 'color:#87a5c1'>"+x+"</span>" + " is not a palindrome.";
  }
  else{
    document.getElementById("palindrome_checker_display").innerHTML = "<span style = 'color:#87a5c1'>"+x+"</span>" + " is a palindrome.";
  }
}