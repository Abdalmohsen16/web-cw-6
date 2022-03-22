// هنا سوف تنشئ دالة calculate 

function calculate() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;


    let BMI = weight/(height*height);

    let status = " "


if (BMI < 18.5)
{status = "تعاني من نقص في الوزن"}

else if (BMI < 25)
{status = "وزنك صحي"}
 
else if (BMI < 30) 
{status = "تعاني من زيادة في الوزن"} 

else 
{status = "تعاني من السمنة المفرطة"}


document.getElementById("result").innerHTML = BMI;
document.getElementsByClassName("comment")[0].innerHTML = status

let x = document.getElementById('weight').value;
let y = document.getElementById('height').value;

if (x == "" || y == "") {
    alert("يرجى ادخال جميع البيانات المطلوبه");
    return false;
  }
}