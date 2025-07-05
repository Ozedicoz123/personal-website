function saveName() {
    let name = document.getElementById('nameInput').value.trim();

    if (name === '') {
        alert('please input name');
        return;
    }

    let names  = JSON.parse(localStorage.getItem('savedItem')) || [];

    names.push(name);

    localStorage.setItem('savedItem', JSON.stringify(names));
    alert('name saved succesfully');
    document.getElementById("nameInput").value = "";
}

function showName() {
    
   const output = document.getElementById('output')
      output.innerHTML = '';
   const names = JSON.parse(localStorage.getItem('savedItem')) || [];
    
    if (names.lenght ===0 ) {
       output.innerHTML ='<span> no name found in the storage</span>'
       return;
         
    }
    names.forEach((name, index) => {
        const li = document.createElement("li");
        li.innerText = `${index + 1}. ${name}`;
        output.appendChild(li);
      });
    }

   

function clearName() {
    localStorage.clear()
    document.getElementById('output').innerText = ''
}