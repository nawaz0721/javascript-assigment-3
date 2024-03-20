var qualification =  ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"]

document.write( "1) " + qualification[0] +"<br>");
document.write( "2) " + qualification[1] +"<br>");
document.write( "3) " + qualification[2] +"<br>");
document.write( "4) " + qualification[3] +"<br>");
document.write( "5) " + qualification[4] +"<br>");
document.write( "6) " + qualification[5] +"<br>");
document.write( "7) " + qualification[6] +"<br>");
document.write( "8) " + qualification[7] +"<br>");

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")


document.write("Top movies <br>");
document.write(" <br>");

var movies = []

movies.push(" 1) Avenger: Age of Ultron ");
movies.push(" 2) Spectre ");
movies.push(" 3) Jurassic World ");
movies.push(" 4) Inside Out ");

document.write(movies + "<br>");

document.write("Length of the array:" + movies.length);

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

document.write("Favorite Cars <br>");
document.write(" <br>");


var Cars = ["Audi" , "Volvo" , "Ford" , "Lamborghini"]

document.write("First index of the Array: " + Cars.indexOf("Audi") + "<br>");
document.write("Car at first index of the Array: " + Cars[0] + "<br>");
document.write("Last index of the Array: " + Cars.indexOf("Lamborghini") + "<br>");
document.write("Car at last index of the Array: " + Cars[3] + "<br>");

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

var StudentName = ["Ahmed" , "Shujaat" , "Ibad"];
var StudentScore = ['320' , '230' , '480'];

var Percentage_0 =  ((StudentScore[0]*100)/500);
var Percentage_1 =  ((StudentScore[1]*100)/500);
var Percentage_2 =  ((StudentScore[2]*100)/500);


document.write("Score of " + StudentName[0] + " is " + StudentScore[0] + " Percentage: " + Percentage_0 + "% <br>");
document.write("Score of " + StudentName[1] + " is " + StudentScore[1] + " Percentage: " + Percentage_1 + "% <br>");
document.write("Score of " + StudentName[2] + " is " + StudentScore[2] + " Percentage: " + Percentage_2 + "% <br>");


document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

// var ColorName = ['blue' , 'red'];

// var Color = prompt("which color wants to add in array");

// ColorName.unshift(Color);
// document.write(ColorName);

// var Color = prompt("which color wants to add in array");

// ColorName.push(Color);
// document.write(ColorName);

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

var cities = [ "Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
document.write(cities);
document.write("<br>");
var copy = cities.slice(2, 4);
document.write(copy);
