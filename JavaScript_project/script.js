import { Devise } from './objDevise.js';
import { localStorageOrder } from "./localStorage.js";
import { LogUpObj, dataSignIn, error, openAnimation } from "./avoris.js";


console.log(LogUpObj);
console.log(dataSignIn);

const main = document.createElement('main');
main.classList = 'main';
openAnimation(main);

const logo = document.createElement('img');
logo.src = 'img/logo.png';
main.append(logo);
logo.classList = 'logo';

const wrapTema = document.createElement('div');
wrapTema.classList = 'wrapTema';
main.append(wrapTema);

const labelTemaWhite = document.createElement('label');
labelTemaWhite.textContent = 'White Topic';
wrapTema.append(labelTemaWhite);

labelTemaWhite.classList = 'labelTema';
labelTemaWhite.style.display = 'none';

const labelTemaBlack = document.createElement('label');
labelTemaBlack.textContent = 'Black Topic';
labelTemaBlack.classList = 'labelTema';
wrapTema.append(labelTemaBlack);

wrapTema.append(labelTemaBlack);

const ReplaceBackgroundBlack = function() {
    document.body.style.background = 'url(img/background-black.png)';
}

const ReplaceBackgroundWhite = function() {
    document.body.style.background = 'url(img/background.png)';
}

labelTemaWhite.addEventListener('click', () => {
    labelTemaWhite.style.display = 'none';
    labelTemaBlack.style.display = 'flex';
    ReplaceBackgroundWhite();
});

labelTemaBlack.addEventListener('click', () => {
    labelTemaBlack.style.display = 'none';
    labelTemaWhite.style.display = 'flex';
    ReplaceBackgroundBlack();
});


function addDevise(obj) {
    const wrapDevise = document.createElement('div');
    wrapDevise.classList = 'wrapDevise';
    main.append(wrapDevise);
    
    const titleDev = document.createElement('h1')
    titleDev.textContent = 'Выберите девайс:';
    titleDev.classList = 'titleDev';
    wrapDevise.append(titleDev);
    
    const deviseCont = document.createElement('div');
    deviseCont.classList = 'deviseCont';
    wrapDevise.append(deviseCont);
    
    for (const key in obj) {
        const imgDev = document.createElement('img');
        imgDev.src = `img/${key}.png`;
        deviseCont.append(imgDev);
        imgDev.classList = 'imgDev';
        imgDev.setAttribute('data-devise', key);
        document.body.append(main);

        imgDev.addEventListener('click', clickDevise);

        function clickDevise(){
            const titleFirm = document.createElement('h1')
            titleFirm.textContent = 'Выберите производителя:';
            titleFirm.classList = 'titleFirm';

            main.append(titleFirm);
            wrapDevise.style.display = 'none';
            
            const sectionFirm = document.createElement('section');
            sectionFirm.classList = 'sectionFirm';
            openAnimation(sectionFirm);
            
            main.append(sectionFirm);

            const modCont = document.createElement('div');
            modCont.classList = 'modCont';
            sectionFirm.append(modCont);

            const butBackDEv = document.createElement('img');
            butBackDEv.src = 'img/backBut.png';
            butBackDEv.classList = 'butBack';
            sectionFirm.append(butBackDEv);
            butBackDEv.addEventListener('click', () =>{
                sectionFirm.style.display = 'none';
                titleFirm.style.display = 'none';
                addDevise(obj);
            });

            
            for (const keyDev in obj[key]) {
                const imgDevFirm = document.createElement('img');
                imgDevFirm.classList = 'imgDevFirm';
                imgDevFirm.setAttribute('data-firma', keyDev);
                modCont.append(imgDevFirm);
                imgDevFirm.src = `img/model/${keyDev}.png`


                imgDevFirm.addEventListener('click', clickFirm) 
                
                function clickFirm(){
                    const titleMod = document.createElement('h1')
                    titleMod.textContent = 'Выберите модель:';
                    titleMod.classList = 'titleMod';

                    titleFirm.style.display = 'none';
                    sectionFirm.style.display = 'none';
                    
                    main.append(titleMod);
                    
                    const sectionModel = document.createElement('section');
                    sectionModel.classList = 'sectionModel';
                    openAnimation(sectionModel);

                    main.append(sectionModel);    

                    const butBackDEv = document.createElement('img');
                    butBackDEv.src = 'img/backBut.png';
                    butBackDEv.classList = 'butBack';
                    sectionModel.append(butBackDEv);
                    butBackDEv.addEventListener('click', () =>{
                        sectionModel.style.display = 'none';
                        titleMod.style.display = 'none';
                        clickDevise();
                    });


                    for (const keyMod in obj[key][keyDev]) {
                        const wrapTextModel = document.createElement('div');
                        wrapTextModel.classList = 'wrapTextModel';
                        
                        const textModel = document.createElement('div');
                        textModel.classList = 'textModel';
                        textModel.setAttribute('data-model', obj[key][keyDev][keyMod]);
                        
                        textModel.append(obj[key][keyDev][keyMod]);
                        
                        wrapTextModel.append(textModel);
                        sectionModel.append(wrapTextModel);
                        
                        wrapTextModel.addEventListener('click', () =>{
                            titleMod.style.display = 'none';
                            sectionModel.style.display = 'none';
                            const personDev = {
                                nameDev:imgDev.dataset.devise,
                                nameFirm:imgDevFirm.dataset.firma,
                                nameModel:textModel.dataset.model,
                            }
                            resultDev(personDev);
                        })
                   }
                }
            }
        }
    }
}

addDevise(Devise);

function resultDev(objRes){
    const resultForm = document.createElement('form');
    resultForm.classList = 'resultForm';
    openAnimation(resultForm);
    const resultText = document.createElement('h1');
    main.append(resultForm);
    
    resultText.classList = 'resultText';
    resultForm.append(resultText);
    
    resultText.textContent = `${objRes.nameDev} - "${objRes.nameFirm} ${objRes.nameModel}"`;
    
    const inpName = document.createElement('input');
    inpName.classList = 'inpForm';
    inpName.placeholder = 'Введите ФИО';
    inpName.value = dataSignIn.namePers;
    resultForm.append(inpName);

    const inpPhone = document.createElement('input');
    inpPhone.classList.add('inpForm', 'rez');
    inpPhone.placeholder = 'Введите номер телефона';
    inpPhone.type = 'tel';
    inpPhone.value = dataSignIn.phonePers;
    resultForm.append(inpPhone);

    const inpEmail = document.createElement('input');
    inpEmail.type = 'email';
    inpEmail.classList = 'inpForm';
    inpEmail.placeholder = 'Введите Email';
    inpEmail.value = dataSignIn.emailPers;
    resultForm.append(inpEmail);
    
    const inpDate = document.createElement('input');
    inpDate.classList = 'inpForm';
    inpDate.type = 'date';
    inpDate.textContent = 'Введите дату'
    resultForm.append(inpDate);
    
    const inpSity = document.createElement('input');
    inpSity.classList = 'inpForm';
    inpSity.type = 'text';
    inpSity.placeholder = 'Введите город';
    resultForm.append(inpSity);

    const inpFault = document.createElement('textarea');
    inpFault.classList = 'inpFault';
    inpFault.placeholder = 'Опишите неисправность';
    resultForm.append(inpFault);

    const butSubm = document.createElement('input');
    butSubm.type = 'button';
    butSubm.value = 'Отправить';
    resultForm.append(butSubm);
    butSubm.classList = 'butSubm';
    
    const butBackDEv = document.createElement('img');
    butBackDEv.src = 'img/backBut.png';
    butBackDEv.classList = 'butBack';
    resultForm.append(butBackDEv);
    butBackDEv.addEventListener('click', () =>{
        resultForm.style.display = 'none';
        addDevise(Devise);
    });
    
    butSubm.addEventListener('click', () =>{
        if(inpName.value === '' ){
            error(inpName);
        } else if(inpPhone.value === ''){
            error(inpPhone);
        }else if(inpEmail.value === ''){
            error(inpEmail);
        }else if(inpSity.value === ''){
            error(inpSity);
        } else{
            objRes.namePerson = inpName.value;
            objRes.phonePerson = inpPhone.value;
            objRes.emailPerson = inpEmail.value;
            objRes.sityPerson = inpSity.value;
            objRes.datePerson = inpDate.value;
            objRes.faultPerson = inpFault.value;

            localStorageOrder.pushPerson(objRes);

            resultForm.style.display = 'none';

            const wrapOrdAccepted = document.createElement('div');
            wrapOrdAccepted.classList = 'wrapOrdAccepted';
            openAnimation(wrapOrdAccepted);


            const textOrdAccepted = document.createElement('div');
            textOrdAccepted.classList ='textOrdAccepted';
            textOrdAccepted.textContent = 'Заказ принят';

            const textOrdSpec = document.createElement('div');
            textOrdSpec.classList ='textOrdSpec';
            textOrdSpec.textContent = 'наш специалист с вами свяжется';

            const btnOrdAccepted = document.createElement('div');
            btnOrdAccepted.classList ='btnOrdAccepted';
            btnOrdAccepted.textContent = 'Окей';

            wrapOrdAccepted.append(textOrdAccepted);
            wrapOrdAccepted.append(textOrdSpec);
            wrapOrdAccepted.append(btnOrdAccepted);
            main.append(wrapOrdAccepted);
            
            btnOrdAccepted.addEventListener('click', () =>{
                addDevise(Devise);
                wrapOrdAccepted.style.display = 'none';
            })
        }
    });

}
