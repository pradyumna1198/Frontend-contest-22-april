
let arr = [
    { name: "john", age: "18", profession: "Developer" },
    { name: "jack", age: "20", profession: "Developer" },
    { id: 3, name: "karen", age: "19", profession: "Admin" },
  ];
  




  

  function saveData() {
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;
  
    let newData = {
      name: name,
      profession: profession,
      age: age
    };
  
    arr.push(newData);
  
    printData();
  }


  function filter() {
    let professionSelect = document.getElementById("prof");
    let profession = professionSelect.value;
  
    if (profession === "") {
        printData(arr);
    } else {
      let filteredData = arr.filter(function(data) {
        return data.profession === profession;
      });
  
      printData(filteredData);
    }
  }
  
  function printData() {
    let output = document.getElementById("print");
    let outputHTML = "";
  
    for (let i = 0; i < arr.length; i++) {
      let data = arr[i];
      outputHTML += `<p>Name: ${data.name} | Profession: ${data.profession} | Age: ${data.age}</p>`;
    }
  
    output.innerHTML = outputHTML;
  }