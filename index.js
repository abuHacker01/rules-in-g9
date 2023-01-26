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