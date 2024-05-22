const calculate = (operation) => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result;

  if (num1 === "" || num2 === "") {
    alert("Please enter both numbers.");
    return;
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : (alert("Cannot devide by zero."), null)),
  };

  result = operations[operation](num1, num2);

  if (result !== null) {
    document.getElementById("result").value = result;
  }

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
};
document.querySelector(".container").style.cssText = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
gap:10px;
background-color: rgb(161 161 170);
`;

document.querySelector(".inp").style.cssText = `
margin-bottom: 10px;
`;

document.querySelector(".btn").style.cssText = `
display: flex;
gap: 10px;
`;

document.querySelectorAll("input").forEach((input) => {
  input.style.cssText = `
    margin: 30px;
    padding: 15px;
    width: 150px;
    text-align: center;
    border:1px solid black;
    border-radius: 10px;
    
`;
});

document.querySelectorAll("button").forEach((button) => {
  button.style.cssText = `
    padding: 10px 75px;
    cursor: pointer;
    color:white;
    background-color:rgb(71 85 105);
    border: 2px solid white;
    border-radius:5px
    
`;
});
