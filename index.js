const hour = Number(prompt("Write your hour here:"));

if (hour) {
  const second = 3600;
  let result = second * hour;
  alert(result);
} else {
  alert("Please, write here a number!");
}
