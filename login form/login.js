const email = document.querySelector('.email');
const password = document.querySelector('.password')
const submitBtn = document.querySelector('.submit-btn')


fetch('../data-file/data.json')
    .then(res => res.json())
    .then((data) => {
        let stordEmail = data.users.email
        let stordPassword = data.users.password
        console.log(stordEmail)
        console.log(stordPassword)
        submitBtn.addEventListener('click', () => {
            if (email.value == stordEmail && password.value == stordPassword) {
                window.open('../edit page/index.html')
            }
        })
    })



