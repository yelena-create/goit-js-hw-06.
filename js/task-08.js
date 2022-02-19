const refs = {
    formRef: document.querySelector('.login-form'),
    emailRef: document.querySelectorAll('.login-form input'),
    ButtonSubmitRef:document.querySelector('.login-form>button'),
}; 
refs.formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    if (refs.emailRef[0].value === "" || refs.emailRef[1].value === "") {
        alert('Внимание! Все поля формы должны быть заполнены!');
    } else { 
        const formData = new FormData(event.currentTarget);
    console.log(FormData);
    formData.forEach((value, name) => {
        console.log({value, name});
    });
        refs.formRef.reset();
    }
    
}










