function createButton() {
  let text = document.getElementById("btnText").value;
  let width = document.getElementById("btnWidth").value;
  let height = document.getElementById("btnHeight").value;
  let bg = document.getElementById("bgColor").value;
  let color = document.getElementById("textColor").value;
  let radius = document.getElementById("borderRadius").value;

  let newBtn = document.createElement("button");
  newBtn.textContent = text || "Custom Button";
  newBtn.style.width = width ? width + "px" : "120px";
  newBtn.style.height = height ? height + "px" : "40px";
  newBtn.style.backgroundColor = bg;
  newBtn.style.color = color;
  newBtn.style.border = "none";
  newBtn.style.borderRadius = radius ? radius + "px" : "5px";
  newBtn.style.cursor = "pointer";
  newBtn.style.marginTop = "10px";

  let output = document.getElementById("output");
  output.innerHTML = "";
  output.appendChild(newBtn);
}
