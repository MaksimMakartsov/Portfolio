    import { localStoragePersonData } from "./localStorage.js";

    const mainAvtoris = document.createElement('div');
    mainAvtoris.classList = 'mainAvtoris';
    document.body.append(mainAvtoris);
    
    const wrapText = document.createElement('div');
    wrapText.classList = 'wrapText';
    mainAvtoris.append(wrapText);

const LogUpObj = {
    
    }

let dataSignIn = [];

function error(input){
    input.classList.add('err');
    setTimeout(()=>{
        input.classList.remove('err');
    }, 1000)
} 

function openAnimation(a){
    a.classList.add('anim');
}
        
function createRegistration(){
    const textImg = document.createElement('img');
    textImg.classList = 'textImg';
    textImg.src = 'img/logo.png'
    wrapText.append(textImg);
    
    const titleText = document.createElement('div');
    titleText.classList = 'titleText';
    titleText.textContent = 'Добро Пожаловать'
    wrapText.append(titleText);
    
    const textAvtoris = document.createElement('div');
    textAvtoris.classList = 'textAvtoris';
    textAvtoris.textContent = 'пройдите авторизацию'
    wrapText.append(textAvtoris);

    const wrapAvtorisation = document.createElement('div');
    wrapAvtorisation.classList = 'wrapAvtorisation';
    mainAvtoris.append(wrapAvtorisation);


    const signUp = document.createElement('div');
    signUp.textContent = 'Sign Up';
    signUp.classList = 'signUp';
    wrapAvtorisation.append(signUp);
    
    signUp.addEventListener('click', clickSignUp);

    const signIn = document.createElement('div');
    signIn.textContent = 'Sign In';
    signIn.classList = 'signIn';
    wrapAvtorisation.append(signIn);

    signIn.addEventListener('click', clickSingIn);

    function clickSignUp(){
        wrapAvtorisation.style.display = 'none';
        titleText.style.display = 'none';
        textAvtoris.style.display = 'none';
    
        textImg.addEventListener('click', () =>{
            createRegistration();
            formUp.style.display = 'none';
            textImg.style.display = 'none';
        })
    
        const formUp = document.createElement('form');
        formUp.classList = 'formAvtoris';
        openAnimation(formUp);
        mainAvtoris.append(formUp);
    
        const titleUp = document.createElement('div');
        titleUp.classList = 'titleForm';
        titleUp.textContent = 'Регистрация';
        formUp.append(titleUp);

        const inpNamePers = document.createElement('input');
        formUp.append(inpNamePers);
        inpNamePers.classList = 'inpUp';
        inpNamePers.placeholder = 'Введите ФИО';
    
        const inpPhonePers = document.createElement('input');
        formUp.append(inpPhonePers);
        inpPhonePers.classList.add('inpUp', 'rez');
        inpPhonePers.type = 'number';
        inpPhonePers.placeholder = 'Введите номер телефона';

        const inpEmailPers = document.createElement('input');
        formUp.append(inpEmailPers);
        inpEmailPers.classList = 'inpUp';
        inpEmailPers.placeholder = 'Введите Email';

        const inpLogin = document.createElement('input');
        formUp.append(inpLogin);
        inpLogin.classList = 'inpUp';
        inpLogin.placeholder = 'Придумайте логин';
    
        const inpPass = document.createElement('input');
        inpPass.type = 'password';
        formUp.append(inpPass);
        inpPass.classList = 'inpUp';
        inpPass.placeholder = 'Придумайте пароль';
    
        const inpRepeatPass = document.createElement('input');
        inpRepeatPass.type = 'password';
        formUp.append(inpRepeatPass);
        inpRepeatPass.classList = 'inpUp';
        inpRepeatPass.placeholder = 'Повторите пароль';
    
        const butReg = document.createElement('div');
        butReg.classList = 'butAvtoris';
        butReg.textContent = 'Зарегистрироваться'
        formUp.append(butReg);
    
        butReg.addEventListener('click', () =>{
            LogUpObj.login = inpLogin.value;
            LogUpObj.password = inpPass.value;
            LogUpObj.namePers = inpNamePers.value;
            LogUpObj.phonePers = inpPhonePers.value;
            LogUpObj.emailPers = inpEmailPers.value;
           if(inpNamePers.value === ''){
                error(inpNamePers);
           } else if(inpPhonePers.value === ''){
                error(inpPhonePers);
           } else if(inpEmailPers.value === ''){
                error(inpEmailPers);
           } else if(inpLogin.value === ''){
                error(inpLogin);
            } else if(inpLogin.value.length < 8){
                error(inpLogin);
            }else if(inpPass.value === ''){
                error(inpPass);
            } else if(inpPass.value.length < 8){
                error(inpPass);
            }else if(inpPass.value === inpRepeatPass.value){
                LogUpObj.login = inpLogin.value;
                LogUpObj.password = inpPass.value;
                formUp.style.display = 'none';
                clickSingIn()
                localStoragePersonData.pushPersonData(LogUpObj);
            } else{
                console.log('пароли не совпадают');
            }
        })
    }

    function clickSingIn(){

        textImg.addEventListener('click', () =>{
            createRegistration();
            formIn.style.display = 'none';
            textImg.style.display = 'none';

        })

        wrapAvtorisation.style.display = 'none';
        titleText.style.display = 'none';
        textAvtoris.style.display = 'none';
    
        const formIn = document.createElement('form');
        formIn.classList = 'formAvtoris';
        openAnimation(formIn);
        mainAvtoris.append(formIn);
    
        const titleIp = document.createElement('div');
        titleIp.classList = 'titleForm';
        titleIp.textContent = 'Вход';
        formIn.append(titleIp);
    
        const inpLoginIn = document.createElement('input');
        inpLoginIn.classList = 'inpUp';
        inpLoginIn.placeholder = 'Введите логин';
        formIn.append(inpLoginIn);
    
        const inpPassIn = document.createElement('input');
        inpPassIn.type = 'password';
        formIn.append(inpPassIn);
        inpPassIn.classList = 'inpUp';
        inpPassIn.placeholder = 'Введите пароль';

        const butSignIn = document.createElement('div');
        butSignIn.classList = 'butAvtoris';
        butSignIn.textContent = 'Войти';
        formIn.append(butSignIn);

        butSignIn.addEventListener('click', () =>{
            
            const arrSignIn = localStoragePersonData.getPersonData();
            dataSignIn = arrSignIn.find(persData => persData['login'] === inpLoginIn.value);

            if(inpLoginIn.value === ''){
                error(inpLoginIn);
            } else if(inpPassIn.value === ''){
                error(inpPassIn);
            } else if(dataSignIn){
                if(dataSignIn['password'] === inpPassIn.value){
                    if(dataSignIn['login'] === 'adminMaxMobil'){
                        window.location.href = 'admin.html';
                    }else{
                        console.log('Вход разрешен');
                        const script = document.createElement('script');
                        script.src = 'script.js';
                        script.type = 'module';
                        document.body.append(script);
                        mainAvtoris.style.display = 'none';
                    }
                } else{
                    error(inpPassIn);
                }
            } else {
                error(inpLoginIn);
            }         
        })
    }

}

createRegistration();

export {
    LogUpObj,
    dataSignIn,
    error,
    openAnimation,
}