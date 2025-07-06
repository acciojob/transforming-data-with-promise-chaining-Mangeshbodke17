//your JS code here. If required.
let btn = document.querySelector("#btn");
let ip = document.querySelector("#ip");
let output = document.getElementById("output");

function abc(delay, a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Input:", a);
      output.innerText = "Input: " + a;

      let b = a * 2;
      setTimeout(() => {
        console.log("Step 1 (a*2):", b);
        output.innerText = "Step 1: " + b;

        let c = b - 3;
        setTimeout(() => {
          console.log("Step 2 (b-3):", c);
          output.innerText = "Step 2: " + c;

          let d = c / 2;
          setTimeout(() => {
            console.log("Step 3 (c/2):", d);
            output.innerText = "Step 3: " + d;

            let e = d + 10;
            setTimeout(() => {
              console.log("Final Result (d+10):", e);
              output.innerText = "Final Result: " + e;

              resolve("Process Complete");
            }, 1000);

          }, 1000);
        }, 1000);
      }, 1000);
    }, delay);
  });
}

btn.addEventListener("click", function () {
  let input = Number(ip.value);
  abc(1000, input)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});
