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
///// shart bizda faqat (-comparation-) bo'lishi shart emas . (--True--) yoki (--False--) qaytarsa bo'ldi
//// songra (--jingalak qavs--) .
///// uni ichida shart to'g'ri chiqib qolsa nima qaytarishi yoziladi .
//// kegin (--else--) keywordi yoziladi . Unga shart yozilmaydi ;
//// va yana (--jingalak qavs--)