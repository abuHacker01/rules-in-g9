////////////// birinchi dars


// GitHub

/// progromist bo'lmaganlar ma'lumotini fleshkada tarqatadi progromistlar GitHub orqali

/// ma'lumot ulashishda ishlaydigan nomlar

//// master.....................=> proectdagi eng katta branch (proectni o'zi) .
//// breach.....................=> yani bir kichik qisim .
//// pull.......................=> ma'lumotni boshqaga berish .
//// push.......................=> o'z ma'lumotini masterga qo'shish

/// push to GitHub :


//// repositoryga ulash

///// 1 - git init
///// 2 - git remote add origin URL


//// birinchi urunishda xatolik ko'rsatadi u xolda quidagi ko'dlarni yozamiz :

///// 1. git config -global user.email "your@gmail.com"
///// 2. git config --global user.name "mukhtorov"


//// kiritish/yangilash

///// 1. git add .
///// 2. git commit -m "bittalig qo'shtirnoq qoysaxam bo'lardi lekin bazida xato bradi"
///// 3. git push origin master


////////////// ikkinchi dars

// varable

/// varablelarning 3 turi bo'ladi :
//// 1. VAR

///// u oldindan beri bor bo'lgan.
///// va u hoisting bo'ladi .
///// uni qyta elon qilib bo'ladi .


//// 2. LET

///// U ES6 da qo'shilgan .
///// uni qyta elon qilib bo'lmaydi .
///// u hoisting bo'lmaydi .


//// 3. CONST

///// U ES6 da qo'shilgan .
///// uni qyta elon qilib bo'lmaydi .
///// u hoisting bo'lmaydi .
///// uni elon qilganddan kegin o'zgartirib bo'lmaydi .

// Data typs :

/// Data type..............=> malumot turlari ;
/// 8 ta data type bor.....=> 2 ga bolinadi ==> primitive vs non-primitive ;

/// primetive : malum bir informatsiyalarni o'zida saqlaydi .
/// non-primetive : bir


//// primitive :

///// number...............=> bu son ;
///// string...............=> "" , '' , `` , ichidagi hamma narsa string xissoblanadi ;
///// boolean..............=> true, false ;
///// null.................=> e'lon qilingan , va qiymatini  ;
///// undefined............=> o'zgaruvchi e'lon qilingan ammo qiymat berilmagan ;
///// bigInt...............=> on olti xonaligdan katta bo'lgan sonlar ;
///// sybol................=> xech qacho takrorlanmas ID yaratib beradi ;

////// null vs undefined :

/////// null-bu ob'ekt yo'qligining aniq qiymati, undefined esa noaniqlikni ;
/////// null == undefined     // true
/////// null === undefined    // false
/////// isNaN(undefined)      // true
/////// isNaN(null)           // false

//// non-primitive :

///// object...............=> array, function;

////////////// uchinchi dars

// Type Convirsion

/// Type Convirsion-bu ma'lum data turidagi ma'lumotni boshqa data turiga o'zgartirish\

/// BOOLEAN ==> STRING

// first

// let valeu = true;     // yangi o'zgaruvchhi ochildi ;
// console.log(typeof valeu); // bu yerda boolean chiqadi ;
// valeu = String(valeu);  // shu yerda stringga o'zgaryapti ;
// console.log(typeof valeu);  // string-deb chiqadi ;


// STRIN ==> NUMBER

// let str = "123";
// console.log(typeof str);    // string ;
// str = Number(str);          // shu yerda Numberga o'tdi ;
// console.log(typeof str);    // Number chiqadi ;

/// agar string ustida (+)-dan tashqari barcha arifmetik amal bajarsaxam Numberga o'tadi

// console.log("2" / "2");          |
// console.log("2" * "2");          |____ bu xolatlarda
// console.log("2" - "2");          |

/// agar stringni oldiga (+) qo'yib qo'ysaxam Numberga o'tadi ;

/// agar hariflarni ustida arifmetik amal bajarsak NaN chiqadi ;

// Basic operators , maths :

/// 1. +.......................=> qo'shuv
/// 2. -.......................=> ayruv
/// 3. *.......................=> ko'paytiruv
/// 4. /.......................=> bo'luv
/// 5. %.......................=> foizlig bo'luv
/// 6. **......................=> kvadrat

// Comparations

// &&..........................=> (--va--) belgisi :

/// bu belgi bir tomonidaxam false bo'lsa (false) qaytaradi ;
/// faqat ikkala tomonida true bo'lsa kegin (true) qaytaradi ;


// ||..........................=> (--yoki--) belgisi :

/// bu belgi bir tomonidaxam true bo'lsa (true) qaytaradi ;
/// faqat ikkala tomonida false bo'lsa kegin (false) qaytaradi ;

// ==..........................=> teng yoki yo'qligini aytadi .

/// misol uchun :

//// console.log("1" == 1);      // true

// ===.........................=> qat'iy tenglig :
/// uni oddiy tenglikdan farqi

// \n..........................=> terminalda bitta "Enter" tashlab beradi ;

/// yani console.log("abc\ndef");
/// consoleda abc
//            def bo'lib chiqadi ;

// \t..........................=> orasidan 5-ta probel tashlab beradi ;

/// console.log("dasdasd\tsdasd");

/// consoleda :  (--dasdasd     sdasd--) ;

////////////// to'rtinchi dars

// if else

/// Syntax of if else :

// if (condition) {
//
// } else {
//
// }

//// bu yerda birinchi bo'lib (--if--) keywordi
//// kegin oddiy (--qavs--)lar . Ularni ichida (-shart-)
///// qavs ichida (--True--) yoki (--False--)ni ifodalaydigan barcha qiymatlar bo'lishi mumkun ;
//// songra (--jingalak qavs--) .
///// uni ichida shart to'g'ri chiqib qolsa nima qaytarishi yoziladi .
//// kegin (--else--) keywordi yoziladi . Unga shart yozilmaydi ;
//// va yana (--jingalak qavs--)


/// else nega kerak

//// else qachonki if va else iflarni birontasiga to'gri kelmasa elsedagi javob chiqadi;

/// if elseda (--else if--) degan tushunchaxam bor :
//// else if bizga ifga to'g'ri kelmaganda yana bir boshqa variant bo'lib turadi ;
//// elsedan farqi : unga shart bersa bo'ladi ;

/// agar if else miz bitt line gasig'adigan bo'lsa jingalak qavsda yozishimiz mumkun

// turnery

/// turneryning xam vazifsi bir xil ;
//// ularning farqi turneryni





////////////////////// raqamlarni xarifga o'tkazish

// let num = Math.round(Math.random() * 1000);
// console.log(num);
// let yuzlig = parseInt(num / 100);
// num = num % 100;
// let onlig = parseInt(num / 10);
// num = num % 10;
// let birlig = num;
// a = "", b = "", d = "";
// switch (yuzlig) {
//     case 1:
//         a = "bir yuz";
//         break;
//     case 2:
//         a = "ikki yuz";
//         break;
//     case 3:
//         a = "uch yuz";
//         break;
//     case 4:
//         a = "to'r yuz";
//         break;
//     case 5:
//         a = "bech yuz";
//         break;
//     case 6:
//         a = "olti yuz";
//         break;
//     case 7:
//         a = "yetti yuz";
//         break;
//     case 8:
//         a = "sakkiz yuz";
//         break;
//     case 9:
//         a = "to'qqiz yuz";
//         break;
// }
// switch (onlig) {
//     case 1:
//         b = "o'n";
//         break;
//     case 2:
//         b = "yigirma";
//         break;
//     case 3:
//         b = "o'ttiz";
//         break;
//     case 4:
//         b = "qiriq";
//         break;
//     case 5:
//         b = "ellig";
//         break;
//     case 6:
//         b = "oltmush";
//         break;
//     case 7:
//         b = "yetmush";
//         break;
//     case 8:
//         b = "sakson";
//         break;
//     case 9:
//         b = "to'qson";
//         break;
// }
// switch (birlig) {
//     case 1:
//         c = "bir";
//         break;
//     case 2:
//         c = "ikki";
//         break;
//     case 3:
//         c = "uch";
//         break;
//     case 4:
//         c = "to'rt";
//         break;
//     case 5:
//         c = "bech";
//         break;
//     case 6:
//         c = "olti";
//         break;
//     case 7:
//         c = "yetti";
//         break;
//     case 8:
//         c = "sakkiz";
//         break;
//     case 9:
//         c = "to'qqiz";
//         break;
// }
// console.log(a, b, c);

////////////////////// tup sonlar

// let c = 1;
// for (let num = 2; num <= 100; num++) {
//     for (let i = 1; i <= num; i++) if (num % i === 0) c++;
//     if (c == 2) console.log(num);
//     c = 0;
// }

////////////////////// nima qaytarishi :


// let browser = "edge";
// switch (browser) {
//     case "edge":
//         console.log("You've got the edge");
//         break;
//     case "yandex":
//     case "Chrome":
//     case "Safari":
//     case "Opera":
//     case "Firefox":
//         console.log("Okey we support these browsers too");
//         break;
//     default:
//         console.log("we hope that this page looks ok!");
//         break;
// }

////////////////////// karra jadval


// for (let i = 2; i <= 9; i++) {
//     console.log(`\n${i}-karraliglar\n`);
//     for (let j = 2; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

/////////////////////// oltinchi dars


// Function declaration :

/// Function bu javascriptdagi dastur kod bloci ;

/// Dinamic function :

//// functionlar hoisting bo'ladi .
//// chunki javascript engine yurganda birinchi bo'lib function keyvordlarini o'qib oladi ;

/// call :

//// call - bu Functionimizni chaqirish ;
//// call - agar Functionimizni chaqirmasak u ishlamaydi ;

/// let/const o'z hususiyatini yo'qotishi :

//// agar globalda bitta let orqali o'zgaruvchi ochib va functionni ichidaxam
///// globaldagi bilan name-si bir xil verable ochsak xato ko'rsatmaydi ;

////// va functionni chaqirsag functionni ichidagi verable chiqadi ;

/// return :

//// returnni yonida nima turgan bo'lsa osha functionni qiymati bo'ladi ;
//// return function-ni eng oxirida yoziladi va undan kegin yozilgan xar qanday kod ishlamaydi ;


/// sytax of function :

// function functionname(parametrs) {
//     console.log("xar xil amallar");
// }

/// default parametr :

//// qachonki functionni argumentida qiymat berilmasa default parametr yordam beradi ;

//// misol uchun :

//                              shular defaul parametrlar
//                                 /                 |
//                                /                  |
//                               /                   |
//                              /                    |
// function fullname(name = "eshmAt", surname = "toshmatov") {
//     name.toLowerCase();
//     surname.toLowerCase();
//     return console.log(surname + " " + name);
// }
// fullname();

// return-lig VS return-siz

/// returni bor functionlar :
//// return-lig functionlar ma'lum bir qiymatni o'zini qaytarish kerak bo'sa shunda yoziladi ;

/// returni yo'q function-lar
//// returni yo'q function-lar esa xoxlagan qiymatlarini qaytarishi mumkun

/// clean code :

//// clean code- bu codni boshqalar tushunadigan darajada yozish ;

// funtion expression :

/// sytax of function expression :

// verable                                        amallar
//  |                                               /
//  |  functionname                parametrs       /
//  |        |         keyword        /           /
//  |        |            |          /           /
//  |        |            |         /           /
// let functionname = function (parametrs) {"amallar"};

// declaration VS exprassin

/// ularning farqi hoistingida

//// declaration hoisting bo'ladi ;
//// expression esa hoisting bo'lmaydi :
///// chunki uni boshda verable bor ;

// arrow function :

///syntax of arrow function :

// verable                                 amallar
//  |                                         /
//  |  functionname                keyword   /
//  |        |        parametrs      /      /
//  |        |            |         /      /
//  |        |            |        /      /
// let functionname = (parametrs) => {"amallar"};


// let num1 = 1;
// let num2 = 1;
// let num3 = -1;
// let res = 0;
// if (num1 < 0) res++;
// if (num2 < 0) res++;
// if (num3 < 0) res++;
// console.log(res);

// to binry :

/// let num = 3;
/// console.log(num.toString(2));

// chanje while

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }
// let i = 0
// while (i < 3) {
// i++
//     console.log(`number ${i}!`);
// }

// 18+

// function chackAge(age) {
//     if (age > 18) {
//         return console.log(true);
//     } else {
//         return console.log('Did parents allow you?');

//     }
// }
// chackAge(19);

// ? and ||

// function chackAge(age) {
//     if (age || 18) {
//         return console.log(true);
//     }else{

//        return console.log('Did parents allow you?');
//     }
// }

// chackAge(19)

// a ><= b

// function kk(a, b) {

//     if (a < b) {
//         return console.log(a);
//     }
//     else {
//         return console.log(b);
//         }
// }
// kk(1, -3);

// karra-karra

// function x(a, b) {
//     return console.log(a ** b);
// }
// x(3, 3);

// to errow

// let ask = (question, yes, no) => {
//     if (question) yes();
//     else no();
// };

// ask(
//     "Do you agree?",
//     function (yes) { console.log("You agreed."); },
//     function (no) { console.log("You canceled the execution."); }
// );


















// mandarinni axlatga tashlash

/// let user = {};
/// user.name = "John";
/// user.surname = "Smith";
/// user.name = "Pate"
/// delete user.name;

// objectni bo'sh-bo'shemasligini tekshirib beradi

/// function isEmpty(test) {
///     if (test === {}) {
///         return true;
///     } else {
///         return false;
///     }
/// }

/// console.log(isEmpty(user))

// katta o'rtancha kichig

/// let obj = {
///     Ann: Math.round(Math.random() * 1000),
///     Joxn: Math.round(Math.random() * 1000),
///     Pete: Math.round(Math.random() * 1000)
/// };
/// console.log(obj);
/// let valeus = Object.values(obj);
/// let res = 0;
/// if (valeus[0] > res) {
///     res = valeus[0];
/// } if (valeus[1] > res) {
///     res = valeus[1];
/// } if (valeus[2] > res) {
///     res = valeus[2];
/// }
/// console.log(res);

/// if (valeus[0] > valeus[1] && valeus[0] < valeus[2] || valeus[0] < valeus[1] && valeus[0] > valeus[2]) {
///     res = valeus[0];
/// } if (valeus[1] > valeus[0] && valeus[1] < valeus[2] || valeus[1] < valeus[0] && valeus[1] > valeus[2]) {
///     res = valeus[1];
/// } if (valeus[2] > valeus[1] && valeus[2] < valeus[0] || valeus[2] < valeus[1] && valeus[2] > valeus[0]) {
///     res = valeus[2];
/// }
/// console.log(res);

/// if (valeus[0] < res) {
///     res = valeus[0];
/// } if (valeus[1] < res) {
///     res = valeus[1];
/// } if (valeus[2] < res) {
///     res = valeus[2];
/// }
/// console.log(res);