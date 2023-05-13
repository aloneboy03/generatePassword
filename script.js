function genPassword(){
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let passwordLength = 12;
    let password = '';

    for(let i = 0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    document.getElementById('password').value = password;
}

const copyPassword = () => {
    navigator.clipboard.writeText(document.getElementById('password').value);
    const demo = document.getElementById('demo');
    demo.innerText = 'Copied!';
    demo.style.opacity = 1;
}