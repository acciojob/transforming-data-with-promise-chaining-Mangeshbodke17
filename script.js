let btn = document.querySelector("#btn");
let ip = document.querySelector("#ip");
let output = document.querySelector("#output");

function abc(delay, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      output.innerText = "Result: " + value;
      let a = value * 2;

      setTimeout(() => {
        output.innerText = "Result: " + a;
        let b = a - 3;

        setTimeout(() => {
          output.innerText = "Result: " + b;
          let c = b / 2;

          setTimeout(() => {
            output.innerText = "Result: " + c;
            let d = c + 10;

            setTimeout(() => {
              output.innerText = "Final Result: " + d;
              resolve(d);
            }, 1000);

          }, 1000);

        }, 1000);

      }, 2000);

    }, delay);
  });
}

btn.addEventListener("click", function () {
  let input = Number(ip.value);
  abc(2000, input)
    .then((result) => {
      console.log("Final Answer:", result);
    })
    .catch((err) => {
      output.innerText = "Error: " + err;
    });
});
