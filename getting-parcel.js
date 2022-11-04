/*
Получаем посылку в постамате.
тестовые данные: пользователь имеет - сумма 100р на счете
Код для получения посылки пришел в смс оповещении A001DFX0
Текст из смс… ваша посылка находится в ячейке под номером 4
Постамат имеет вид - [null, null, null, “4 - ваша посылка” , null]
В условии проверьте, если наш код равен коду из смс, то выведем в консоль данные о нашей посылке, 
и спишем со счета 100р в формате “Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”
*/

let postamat = [null, null, null, "4 - ваша посылка" , null];
let parcelCode = "A001DFX0"
let parcelPrice = 100;

class User {
    constructor(name, account, smsCode){
        this.name = name;
        this.account = account;
        this.smsCode = smsCode;
    }

    decreaseAccountSum(sum){
        this.account -= sum;
        return this.account;
    }
}

let myUser = new User("Mary", 100, "A001DFX0");

if (myUser.smsCode === parcelCode){
    if (myUser.account >= parcelPrice){
        console.log(`${myUser.name}, Вы получили посылку из ячейки 4 и ваш счет составляет: ${myUser.decreaseAccountSum(parcelPrice)} p.`)
    }else{
        console.log(`${myUser.name}, для получения посылки недостаточно средств на Вашем счете. Пополните счет и попробуйте еще раз!`)
    }
}else{
    console.log(`${myUser.name}, введен неверный sms-код, получение посылки невозможно. Попробуйте еще раз!`)
}