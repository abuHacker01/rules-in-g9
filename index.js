// GitHub :

/// GitHub bu dasturchilar fleshkasi ,
//// Yani ular GitHub orqali malumot ulashishadi .

/// master.....................=> proectdagi eng katta branch (proectni o'zi) .
/// brach......................=> yani bir kichik qisim .
/// pull.......................=> ma'lum branch-dan ma'lum branch-ga ma'lumot yuborish .
/// push.......................=> ma'lum branch-ni masterga qo'shish .

/// push to GitHub :


//// repositoryga ulash

///// 1 - git init
///// 2 - git remote add origin https://github.com/abuHacker01/javaScript.git


//// birinchi urunishda xatolik ko'rsatadi u xolda quidagi ko'dlarni yozamiz :

///// 1. git config -global user.email "your@gmail.com"
///// 2. git config --global user.name "mukhtorov"uo5oiyoiyourjht;kthg


//// kiritish/yangilash

///// 3. git add .
///// 4. git commit -m ""
///// 5. git push origin master

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
/// non-primetive : bir obyektni malumotlarini saqlaydi


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

///// object...............=> array, function ;

// Type Convirsion

/// Type Convirsion-bu ma'lum data turidagi ma'lumotni boshqa data turiga o'zgartirish\

/// BOOLEAN ==> STRING

// first

// let valeu = true;     // yangi o'zgaruvchhi ochildi ;
// console.log(typeof valeu); // bu yerda boolean chiqadi ;
// valeu = String(valeu);  // shu yerda stringga o'zgaryapti ;
// console.log(typeof valeu);  // string-deb chiqadi ;


// STRING ==> NUMBER

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


// Basic operators of maths :

/// 1. +.......................=> qo'shuv ;
/// 2. -.......................=> ayruv ;
/// 3. *.......................=> ko'paytiruv ;
/// 4. /.......................=> bo'luv ;
/// 5. %.......................=> foizlig bo'luv ;
/// 6. **......................=> kvadrat ;

// taqqoslash :

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

/// misol uchun :

//// console.log("1" == 1);      // false

/// uni oddiy tenglikdan farqi u data typesigaxam qaraydi ;


// if , else :

/// if else nima vazifa bajaradi ?

//// if else - to'g'ri yoki noto'g'riligiini tekshirib , unga qarab bergan xodisamizbi bajaradi ;

/// Syntax of if else ?

///          shart   nima chiqarishi
//            /         /
//           /         /
//          /         /
//// if(condition){manual}

///// shart - aynan shu shartimiz to'g'ri yoki noto'g'ri bo'ladi ;
///// yani shart yozilgan ma'lumot

///// qo'nlanma - qo'nlanmaga yozgan ko'dlarimiz ishlaydi . Agar to'g'ri bo'lsa ;

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

// switch :

/// switch-xam if else , turnery bilan bitta vazifa bajaradi :
//// farqi uni shartini aniq qilib beriladi ;

/// syntax of switch :

// keyword
//    |      nimani ustida
//    |      amal bajarishi      break keywordi
//    |         /                      |
//    |        /         shart        /
//    |       /            |         /
// switch (element) {      |        /
//     case condition:-----|       /     default (else)
//                                |            |
//         break;-----------------|            |
//     default:--------------------------------|    break keywordi
//                                                       |
//         break;----------------------------------------|
// }

/// break bizga agar shart to'g'ri keladigan bo'lsa shu joyda to'xtatib beradi ;
//// agar break bo'lmasa bitta case to'g'ri kelsa kegingi xammasini chiqarib yuboradi ;

// for loop

/// for loop - iterator xissoplanadi . Yaniy aylaantirib beruvchi ;

/// Syntax of for loop

//        keyword
//  _________|
//  |             boslang'ich qiymat
//  |          ____________|         qancha qo'shilib borishi
//  |          |                                 |
//  |          |           qachon tugashi        |
//  |          |                 |               |    biz xoxlagan amallar
//  |   _______|______ __________|_________  ____|___          |
// for (let index = 0; index < array.length; index++) {        |
//                                 ____________________________|
// }

// while

/// while (if-ga o'xshab ketadi) uni if-dan farqi false chiqgunicha aylanaveradi .

/// Syntax of while :

//         keyword
//            |        shart
//   _________|          |
//   |        ___________|     amal
//   |        |                 |
// while (condition) {          |
//    __________________________|
// }


// do while

/// do while bilan whilening farqi do while birinchi amal bajariladi :
//// bu degani sart xato bo'lsaxam bir martta ishlaydi .

/// Syntax of do while :

//    keyword
//  ____|                shart
// |                       |
// |        amal           |
// |         |             |
// do {      |    _________|
//      _____|    |
// } while (condition);

// Function declaration :

/// Function bu javascriptdagi dastur kod bloki ;

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

//// clean code - bu codni boshqalar tushunadigan darajada yozish ;

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
///// chunki unda verable bor ;

// arrow function :

///syntax of arrow function :

// verable                                 amallar
//  |                                         /
//  |  functionname                keyword   /
//  |        |        parametrs      /      /
//  |        |            |         /      /
//  |        |            |        /      /
// let functionname = (parametrs) => {"amallar"};

// this

/// this bu thini o'rab turgan functionni o'rab turgan object
//// misol uchun :

// let object = {
//     name: "Dilmurod",
//     surname: "Xabibullaev",
//     fn() {
//         console.log(this.name + this.surnam);
//     }
// };
// console.log(object.fn);

/// qachon this kerak ?
//// qachon oddiy usulda korsatsak keginchalik objectni nomini o'zgartirsak bizning usul ishlamaydi ;

/// qachon this ishlamaydi ?

//// qachonki arrow function ishlasa

// garberge collaction :

/// garberge collectio b qachonki non-primetive data turilig verable yaratsag
//// va uni primetive-ga o'tkazsag stackdagi malumot bilan heapdagi malumoni bog'lab turuvchi ko'prig uzuladi va heapdagi malumot garbergega tushadi ;

// structuredClone :

/// structuredClone bu objectni faqat qiymatlarini copy qilish ;





// toq va juft sonlarni chiqarib


// for (i = 3; i < 100; i++) {
//     if (i%2==1) {
//         console.log(i);
//     }else{
//         console.log(i);
//     }
// }

// New Date :

/// New Date-bizga kamputerdagi vaqtni chiqarib beradi :





// JSON :

/// JSON-ning kengaytmasi : JavaScript Object Notation

/// JSON-ning vazifasi :

//// bizing o'zgaruvchilar boshqa programming language lar bilan to'g'ri kelmasligi mumkun .
///// shuning uchun bizga JSON-kerak ;

//// biz beckend-da malumot oldi-berdilari uchunxam JSON-dan foidalanamiz

/// JSON-daxam xuddi JavaScript-ga o'xshab extncioni bo'ladi ;

/// JSON-ni syntaxi boshqa faylda :

//// uni objectdan farqi :
///// uni keylarixam stringda yoziladi ;

//// uni faqat ikkitalig qo'shtirnoqda yozish shart . Budegani bittalig qo'shtirnoda yozsa xato beradi


/// Metods :

//// add :

///// stringfy...........=> objectni keylarini string ichida yozib beradi ;

//// exec :

///// agar iz uni ichidagi bironta malumotni chiqarmoxchi bo'lsag
////// oddiy nuqtabilan chiqara olmaymiz . Uning uchun :

///// parse.............=> bitta parametr qaysi JSON-ga kirishi misol uchun :

////// let obj = { name: "Dilmurod", surname: "Xabibullaev", age: 15, work: false };                    |
////// let res = JSON.stringify(obj);                                                                   |---------bu yerda 15-chiqadi ;
////// console.log(JSON.parse(res).age);                                                                |

//// Agar biz backentga faqat o'zimiz xoxlgan malumotlarni jo'natmoxchi bo'lsag :

///// let obj = { name: "Dilmurod", surname: "Xabibullaev", age: 15, work: false };                     |
///// let res = JSON.stringify(obj, ["name"]);                                                          |---------bu yerda (--{"name":"Dilmurod"}--)chiqadi
///// console.log(res);                                                                                 |

///// buni sababi ikkinchi parametrda jo'natmoxchi bo'lgan key-ni yozganimiz ;

//// bizda uchinchi parametrxam bor :

// let obj = { name: "Dilmurod", surname: "Xabibullaev", age: 15, work: false };       |
// let res = JSON.stringify(obj, ["name", "surnam", "age", "work"],2);                 |---------u bizda (--name/surname/age/work--)ni oldidan nechta probel bo'lishini elon qiladi
// console.log(res);                                                                   |

//{
//    name: 'Dilmurod',
//    surname: 'Xabibullaev',
//    age: 15,
//    work: false,
//}



// map , set :

/// Sizda qanaqa malumot turi bo'lishidan qat'iy nazar xuddi anashu malumot turini saqlab qo'yadi ;
//// map va set o'zimizning ojectga o'xshaydi . Misol uchun :

// let map = new Map();                |
// let obj = Object();                 |_________bu yerda : (Map(0) {})___chiqadi
// console.log(map);                   |                    ({}       )
// console.log(obj);                   |

///// ularning farqi :

////// mapda (--Map(0)--)- bor

/// agar biz map-ni to'liq hususiatlarini ishlatishimiz uchun ularni metodlaridan foidalanishimiz kerak :

/// Metods :

//// set................=> malumot qo'shish uchun . Ikkita qiymat qbul qiladi : 1.key , 2.value ;

///// objectdan farqi :
////// objectda key va valuelarni (--:--)-bilab ajratadi . map-da esa (--=>--)-bilan
//// get
//// delete
//// clear

// Scope

/// scope-lar xar xil bo'ladi :

//// function scope
//// while scope
//// if&else scope
//// for loop scope...

/// scopelarni ishlashi :

//// aslida javacriptda yozgan kodlarimiz bitta global scope-da joylashadi :
///// ayni JavaScript file ochishimiz bilan uni ichida ko'rinms scope ochiladi ;

/// scope-ni ko'rinishi :

// let a = 2;
// {
//     let a = 1;
// }
// console.log(a);   /// bu yerda ikki chiqadi chunki 1-degan o'zgaruvchi scope ichida ;


// let q = 2;
// {
//     console.log(q);     /// bu yerda ikki chiqadi cchunki scope-da chiqish bor kirish yo'q;
// }

// Lexical Environment :

/// qayerda scope bo'lsa o'sha yerni o'zini (--Lexical Environment--)-bo'ladi ;

/// Lexical Environment ikkiga bo'linadi :

//// 1. recorde 
//// 1. reference

/// qachonki biz misol uchun console.log qilsag :

//// birinchi bo'lib recordega qaraydi . Agar topa olmasa kegin reference-dan qidiradi .           | shu xodisani (--Lexical Environment--) deyiladi ;


// Closure function :


/// Closure function-deb qachonki function o'zini scope-sidan tashqaridagi o'zgaruvchini ishlatsa aytadi ;

/// misol uchun :

// let number =12;                       |
// function name(num) {                  |
//     console.log(num);                 |__________shu (--Closure function--) deyiladi ;
// }                                     |
// name(number);                         |

// Array.prototype.length



// clsss

/// class bu : (--template for creating object--) yaniy :
//// objectlarni yasash uchun shablon

/// yangi class yaratish :

// class Str { }                  |
// let obj = new Str();           |-------bu yerda (--Str {}--)-chiqadi
// console.log(obj);              |

/// biz class bilan yangi o'zgaruvchi yaratishimiz mumku ,
//// xatto functionxam yaratishimiz mumkun :

// class Str {                                     |
//     number = 0;                                 |
//     count(params) {                             |
//         console.log(++this.number);             |
//     }                                           |-------------- bu yerda xar ishlaganda numberni qiymatini oshirin beradi . yani bir qo'shganini eslab qoladi ;
// }                                               |
// let obj = new Str();                            |
// obj.count()                                     |
// obj.count()                                     |
// obj.count()                                     |


/// ammo boshqa o'zgaruvchiga tenglab ketsan unda eslab qolmayni yaniy :


// class Str {                                     |
//     number = 0;                                 |
//     count() {                                   |
//         console.log(++this.number);             |
//     }                                           |
// }                                               |---------------- bu yerda (--1 1 2 2--)-chiqadi ;
// let obj = new Str();                            |
// let obj1 = new Str();                           |
// obj.count();                                    |
// obj1.count();                                   |
// obj.count();                                    |
// obj1.count();                                   |

/// contraktor :

//// qachonki (let obj1 = new Str())- bunday qilib o'zgaruvchi ochsag contraktor birinchi o'rinda yuradi . pasta yoki tepada bo'lishidan qatiy nazar ;

/// security verable :
//// biz yasagan oddiy verable :
// class Str {
//     password = 017746;
//     login = "text";
// }

//// biz yasagan private o'zgaruvchi : private- shaxsiy degani :

// class Str {
//     #password = 017746;
//     #login = "text";
// }

//// ularning farqi private o'zgaruvchini tashqaridin exec qila olmaymiz ;

//// uni exec qilish uchun ;

// class Str {
//     #password = 017746;
//     #login = "text";
//     password(){
//         console.log(this.#password);
//     }
// }

//// uni o'zgartirish uchun setter, getter-lar yordamga keladi :

// class Str {
//     #password = 11;
//     #login = "text";
//     get password() {
//         return this.#password;
//     }
//     set password(newValue) {
//         this.#password = newValue;
//     }
// }
// let add = new Str();
// add.password = 22;
// console.log(add.password);


///// get shunchaki malumotni ekranga chiqarish degani ;
///// set esa malumotni o'zgartirish degani

//// bu esa public degani :

// class Str {
//     _password = 017746;
//     _login = "text";
// }

//// public bilan oddiy o'zgaruvchini JavaScript-da umuman farqi yo'q . Ammo clean code jixatidan public-publicemas degan afzalroq ;

// inheritance :

/// extends :

//// extends-bu kengaytirmoq degani yani :

// class Str {                                |
//     login = "text";                        |
// }                                          |
// class Num extends Str {                    |_____________bu yerda Num metodlarini kengaytiryapti Str metodlar bilan
//     password = 017746;                     |
// }                                          |
// let add = new Num();                       |
// console.log(add.login);                    |

///// endi xoxlasag add.login-deb uni exec qila olamiz ;
////// shumalumotni meros qilib olish degani ;

/// super :

// class Str {
//     login = "text";
// }
// class Num extends Str {
//     password = 017746;
//     func() {
//         console.log(super.login);
//     }
// }
// let add = new Num();
// console.log(add.func());

//// yani biz super bilan boshqa functionlarni ishlatishimiz mumkun ;


// DOM 2

/// agar biz html-ga biron-bi element qo'shmoxchi bo'lsag :

//// let body = document.querySelector(".theBiggest");                   |
//// body.before(`<h1>before</h1>`)                                      |                                           <h1>before</h1>
//// body.append(`<h1>append</h1>`);                                     |-----------------bu yeda bu narsa chiqadi: <h1>prepend</h1> <h1>append</h1>
//// body.prepend(`<h1>prepend</h1>`)                                    |                                           <h1>after</h1>
//// body.after(`<h1>after</h1>`);                                       |

///// before.............=> biz ko'rsatkan elementdan oldin element qo'shadi ;
///// append.............=> biz ko'rsatkan elementni boshidan element qo'shadi ;
///// prepend............=> biz ko'rsatkan elementni oxiridan element qo'shadi ;
///// after..............=> biz ko'rsatkan elementdan kegin elementdan qo'shadi ;

/// remove :

//// biz agar body.remove() dydigan bo'lsak ko'rsatgan elementimiz o'chib ketadi ;

/// cloneNode :

//// cloneNode-bizga ko'rsatgan elementimizni ichidagi yozuvda tashqari xama narsanini copy qilib beradi ;

///// let body = document.querySelector(".theBiggest");                        |__________ bu yerda body-dan clonega clone qilyapti ;
///// let clone = body.cloneNode()                                             |