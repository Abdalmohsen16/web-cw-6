// let planet;

// (function travel(x = "زمردة") {
//   console.log("أود السفر إلى كوكب " + x);
// })(planet);


(function travel(x = 'زمردة') 
{
  console.log(
    `اود السفر الى كوكب ${x}`
  )
}) ('المشترى')

let planet = prompt('ادخل اسم الكوكب')

travel(planet)