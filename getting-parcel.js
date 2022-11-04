/*
Получаем посылку в постамате.
тестовые данные: пользователь имеет - сумма 100р на счете
Код для получения посылки пришел в смс оповещении A001DFX0
Текст из смс… ваша посылка находится в ячейке под номером 4
Постамат имеет вид - [null, null, null, “4 - ваша посылка” , null]
В условии проверьте, если наш код равен коду из смс, то выведем в консоль данные о нашей посылке, 
и спишем со счета 100р в формате “Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”
*/

let postamatArray = [
    {box:1, sms:"B001DFX0", price:200},
    {box:2, sms:"B001DFX1", price:250},
    {box:3, sms:"B001DFX2", price:150},
    {box:4, sms:"A001DFX0", price:100},
    {box:5, sms:"A002DFX0", price:300}
]

class User {
    constructor(name, account, smsCode, boxNumber){
        this.name = name;
        this.account = account;
        this.smsCode = smsCode;
        this.boxNumber = boxNumber;
    }

    decreaseAccountSum(sum){
        this.account -= sum;
        return this.account;
    }
}

let myUser = new User("Mary", 100, "A001DFX0", 4);
let boxFound = false;
for (let postomat of postamatArray){
    if (postomat.box == myUser.boxNumber){
        boxFound = true;
        if (myUser.smsCode === postomat.sms){
            if (myUser.account >= postomat.price){
                console.log(`${myUser.name}, Вы получили посылку из ячейки 4 и ваш счет составляет: ${myUser.decreaseAccountSum(postomat.price)} p.`)
            }else{
                console.log(`${myUser.name}, для получения посылки недостаточно средств на Вашем счете. Пополните счет и попробуйте еще раз!`)
            }
        }else{
            console.log(`${myUser.name}, введен неверный sms-код, получение посылки невозможно. Попробуйте еще раз!`)
        }
    }
}

if (boxFound == false){
    console.log(`${myUser.name}, в этом постамате нет ячейки с номером ${myUser.boxNumber}. Проверьте адрес из уведомления!`)
}
