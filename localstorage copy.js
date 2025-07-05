function saveName() {
    //to get the input
    let name = document.getElementById('nameInput').value.trim();
    //to give it a condition
    if (name === '') {
        alert('fill in input');
        return;
    }
    // to change the local storage item to array then save in a variable 'names'
    let names = JSON.parse(localStorage.getItem('savedItem')) || [];
    // to push the name to the array of names
    names.push(name);
    //to to change the array to string using stringify and putting it in local storage
    localStorage.setItem('savedItem', JSON.stringify(names));
    alert('name saved succesfully🎉🎉')
    // to make it empty back
    document.getElementById('nameInput').value = ''
}

function showName() {

    const output = document.getElementById('output')
    output.innerHTML = '';
    const names = JSON.parse(localStorage.getItem('savedItem')) || [];

    if (names.length === 0) {
        output.innerHTML = '<span>no name found</span>'
        return;
    }
    names.forEach((name, index) => {
        const li = document .createElement('li');
        li.innerText = `${index +1}. ${name}`
        output.appendChild(li)
        
    });

}

function clearName() {
    localStorage.clear();
    document.getElementById('output').innerText = ''

}

window.onload = showName

