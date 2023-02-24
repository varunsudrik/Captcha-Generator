document.addEventListener("DOMContentLoaded", function () {
  gen();
});

var cap_data = {};
//window.onload = gen();
var gen = () => {
  cap_data.captcha = num() + char();
  document.getElementById("output_value").innerText = cap_data.captcha;
};

var num = () => {
  let num_res = Math.floor(Math.random() * 9);

  return num_res;
};

var char = () => {
  var char = "";

  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++) {
    char += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
  }
  return char;
};

var compare = () => {
  var input_txt = document.getElementById("txt-box").value;
  let result_txt = document.getElementById("result_txt").value;

  if (input_txt == cap_data.captcha) {
    console.log("matched");
  } else {
    console.log("not matched");
    result_txt = "NOt Match";
  }
};
