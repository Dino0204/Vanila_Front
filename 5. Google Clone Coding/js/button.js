function paintSrt() {
    //입력
    let name = document.getElementById("srtInputN").value;
    let url = document.getElementById("srtInputU").value;
  
    //div
    let divClass = document.querySelector(".SrtAligin2");
    let divId = document.createElement("div");
    
    //p
    let p = document.createElement("p");
    p.innerText = name;
    p.id = "srtText";
    
    //value 
    let input = createInputButton(name[0], url); 
    
    //부모에 자식 종속
    divId.id = "Btnsrt";
    divClass.append(divId);
    divId.append(input);
    divId.append(p);
    
    localStorage.setItem('name'+Date.now(), name);  
    localStorage.setItem('url' +Date.now(), url);    
  
    //input 생성 함수 
    function createInputButton(value, url) {
      let input = document.createElement("input");
      input.id = "shortcutBtn";
      input.type = "button";
      input.value = value;
      
      input.addEventListener("click", () => {
        window.location.href = url; 
      });
      
      return input;
    }
  }
  