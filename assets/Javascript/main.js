function getDark() {
    const wrapper = document.querySelector("body");
    wrapper.classList.toggle("dark");
  }

  function grundumsatz(){
    let weight = Number(document.querySelector("#weight").value);
    let size = Number(document.querySelector("#size").value);
    let age = Number(document.querySelector("#age").value);
    let male = document.querySelector("#male").checked;
    let female = document.querySelector("#female").checked;
    let output = document.querySelector(".output");
    let grundumsatz;
  
    if (male){
      grundumsatz = 66.5 + (13.7 * weight) + (5 * size) - (6.8* age);
    } else if (female){
      grundumsatz = 655.1 + (9.6 * weight) + (1.8 * size) - (4.7 * age);
    } else {
      grundumsatz = "Geschlecht wählen!";
    }
  
    output.innerHTML = grundumsatz.toFixed(0);
    return grundumsatz.toFixed(0);
  }

  function gesamtumsatz(){
    let inputPal = document.querySelector("#pal").value;
    let output2 = document.querySelector(".output2");
    let grundumsatzValue = grundumsatz();
    let gesamtumsatz;
    gesamtumsatz = inputPal * grundumsatzValue ;
    output2.innerHTML=gesamtumsatz.toFixed(0);
  }