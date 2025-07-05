function validateForm(e) {
    const name =document.getElementById('name').value.trim()
    const email =document.getElementById('email').value.trim()
    const password =document.getElementById('password').value.trim()

    if (name === '' || email === '' || password === '') {
        alert('input the fields required');
        return false;
        
    }
    if (!email.include('@') || !email.include('.') ) {
        alert('invalid email address')
        return false;
    }
    if (password.length < 8) {
        alert('password to long')
        return false;
    }

    return true;

}