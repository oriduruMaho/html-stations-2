function displayList() {

    const ul = document.createElement("ul");

    const fruits = ["リンゴ", "イチゴ", "ブドウ"];
  
    fruits.forEach((fruit) => {
      const li = document.createElement("li");
      li.textContent = fruit;
      ul.appendChild(li);
    });
  
    const fruitsDiv = document.getElementById("fruits");
    fruitsDiv.innerHTML = ""; 
    fruitsDiv.appendChild(ul);
  }
