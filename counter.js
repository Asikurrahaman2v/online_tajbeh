//let my_age = 10

//console.log(my_age)
//let dog_age = 7
//let my_dog_age = my_age * dog_age
//console.log(my_dog_age)

//function cal()
//{
//    console.log(42)

//}
//cal()
//let lapscompleted =0
//function lapcomplete()
//{
  // lapscompleted = lapscompleted + 1
   //console.log(lapscompleted) 
//}

//lapcomplete()
//lapcomplete()
//lapcomplete()
let count = 0
let incrimentEl = document.getElementById("count-el")

function incriment()
{
  //console.log("clicked") 
  count += 1
  incrimentEl.innerText = count
  console.log(count) 
}

function reset()
{
  let writeSave = document.getElementById("save")
  writeSave.textContent += count + " - "
  incrimentEl.innerText = 0
  count = 0
}

function error()
{
  let writeError = document.getElementById("error")
  writeError.textContent = "erroeeee"
}