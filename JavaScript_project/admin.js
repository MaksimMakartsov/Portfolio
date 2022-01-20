import { localStorageOrder } from "./localStorage.js";

document.body.classList = 'bodyAdmin';

const adminOrderArray = localStorageOrder.getPerson();

console.log(adminOrderArray)

let i = 1;

function createOrder(arrayOrder){
    for (const keyArr in arrayOrder) {
        
        const wrapOrderAdmin = document.createElement('div');
        wrapOrderAdmin.setAttribute('class','wrapOrderAdmin');
        document.body.append(wrapOrderAdmin);

        const idOrder = document.createElement('div');
        idOrder.textContent = `Заказ №${i}`;
        idOrder.classList = 'idOrder';
        i++;
        wrapOrderAdmin.append(idOrder);
        
        const nameDev = document.createElement('div');
        nameDev.textContent = `Девайс: ${arrayOrder[keyArr]['nameDev']} ${arrayOrder[keyArr]['nameFirm']} ${arrayOrder[keyArr]['nameModel']}`;
        nameDev.classList = 'textOrder';
        wrapOrderAdmin.append(nameDev);

        const namePers = document.createElement('div');
        namePers.textContent = `Заказчик: ${arrayOrder[keyArr]['namePerson']}`;
        namePers.classList = 'textOrder';
        wrapOrderAdmin.append(namePers);

        const phonePers = document.createElement('div');
        phonePers.textContent = `Номер телефона: ${arrayOrder[keyArr]['phonePerson']}`;
        phonePers.classList = 'textOrder';
        wrapOrderAdmin.append(phonePers);

        const emailPers = document.createElement('div');
        emailPers.textContent = `Email: ${arrayOrder[keyArr]['emailPerson']}`;
        emailPers.classList = 'textOrder';
        wrapOrderAdmin.append(emailPers);

        const sityPers = document.createElement('div');
        sityPers.textContent = `Город: ${arrayOrder[keyArr]['sityPerson']}`;
        sityPers.classList = 'textOrder';
        wrapOrderAdmin.append(sityPers);

        const datePers = document.createElement('div');
        datePers.textContent = `Желаемая дата: ${arrayOrder[keyArr]['datePerson']}`;
        datePers.classList = 'textOrder';
        wrapOrderAdmin.append(datePers);

        const faultPers = document.createElement('div');
        faultPers.textContent = `Описание неисправности: ${arrayOrder[keyArr]['faultPerson']}`;
        faultPers.classList = 'textOrder';
        wrapOrderAdmin.append(faultPers);

        const wrapButOrd = document.createElement('div');
        wrapButOrd.classList = 'wrapButOrd';
        wrapOrderAdmin.append(wrapButOrd);


        
    }
}

createOrder(adminOrderArray);
