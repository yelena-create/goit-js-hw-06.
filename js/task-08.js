const refs = {
    formRef: document.querySelector('.login-form'),
    emailRef: document.querySelectorAll('.login-form input'),
    ButtonSubmitRef:document.querySelector('.login-form>button'),
}; 
// console.log(refs.formRef);          //форма
// console.log(refs.emailRef);
// console.log(refs.emailRef[0]);      //емейл
// console.log(refs.emailRef[1]);      // пароль
// console.log(refs.ButtonSubmitRef);  //кнопка

refs.formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    if (refs.emailRef[0].value === "" || refs.emailRef[1].value === "") {
        alert('Внимание! Все поля формы должны быть заполнены!');
    } else { 
        const formData = new FormData(event.currentTarget);
    console.log(FormData);
    formData.forEach((value, name) => {
        console.log('value=', value, 'name=', name    );
    });
        refs.formRef.reset();
    }
    
}
function reset() { 
    refs.emailRef.value = '';
}









