class LocalStorageOrder{
    constructor(){
        this.key = 'Заказы';
    }

    getPerson(){
        const personLocalStorage = localStorage.getItem(this.key);
        if(personLocalStorage !== null){
            return JSON.parse(personLocalStorage);
        }
        return [];
    }

    pushPerson(obj){
        let person = this.getPerson();
        person.push(obj);
        localStorage.setItem(this.key, JSON.stringify(person));
    }
}

const localStorageOrder = new LocalStorageOrder();





class LocalStoragePersonData{
    constructor(){
        this.key = 'PersonData';
    }

    getPersonData(){
        const personLocalStorageData = localStorage.getItem(this.key);
        if(personLocalStorageData !== null){
            return JSON.parse(personLocalStorageData);
        }
        return [];
    }

    pushPersonData(obj){
        let personData = this.getPersonData();
        personData.push(obj);
        localStorage.setItem(this.key, JSON.stringify(personData));
    }
}

const localStoragePersonData = new LocalStoragePersonData();


export{
    localStorageOrder,
    localStoragePersonData,
}