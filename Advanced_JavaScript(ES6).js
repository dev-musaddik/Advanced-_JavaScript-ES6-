// import name from "./index2.js";
//                                  ---------------ARROW FUNCTION







// var FullName =function(firstName){
//     return `Md. ${firstName}`;
// }
// console.log(FullName("Musaddik"))
// var FullName =(firstName)=>{
//     return `Md. ${firstName}`;
// }
// console.log(FullName("Musaddik"))
// var FullName =(firstName)=> `Md. ${firstName}`;

// console.log(FullName("Musaddik"))
// var FullName =firstName=> `Md. ${firstName}`;

// console.log(FullName("Musaddik"))



//                                              -------------OBJECT LITERALS

////preveiw;

// var name ="musaddik";
// var age = 17;
// var school="yasin high school"
// var obj={
//     name:name ,
//     age:age,
//     school:school
// }
//  console.log(obj);


//    es6 qwality

// var name ="musaddik";
// var age = 17;
// var school="yasin high school"
// var obj={
//     name ,
//     age,
//     school
// }
//  console.log(obj);

// other

// var age=35;
// var  name ="student";

// var obj ={
//     [name +"Name"]:"musaddik",
//     age,
//     detaills:function(id){
//         return`${this.studentName} age:${age} id: ${id} index no : ${age+id}`
//     }
// }
// console.log(obj)
// console.log(obj.detaills(57))


//--------- before using that

// var obj={
//     Name:"musaddik",
//     Show:function(){
//        return this.Name
//     }
// };
// console.log(obj)
// console.log(obj.Show())

// ---------------new quality  (es6 version)

// var obj={
//     Name:"musaddik",
//     // Show(){
//         'deatils Show' (){  //es6 version
//        return this.Name
//     }
// };
// console.log(obj)
// // console.log(obj.Show())
//     console.log(obj['Show']())    //es6 version



///////// -------------------es6 version (function return object)

// var name="musaddik";
// var lname='hossain';
// var age =17;

// details=(info1,info2,info3)=>{
//     var fullname= info1 + " " + info2;
//    return {info1,info2,info3,fullname}
// }
// var information=details(name,lname,age);

// console.log(details(name,lname,age))
// console.log(information.info1);




// ---------------------------------------Rest operator---------------------------

// before quality
// -------function with Multiple arquments


// function ArgumentFunction(){
//     console.log(arguments)
//     let sum=0;
//     for(let i in arguments){
//         sum+=arguments[i];
//     }
//     console.log(sum + " ");
// }
// ArgumentFunction(45,67);
// ArgumentFunction('MUSADDIK',45,67);  ///it's the the problems in before version


// --------------------------------now fix it's. using by arguments  (es6 version0--------



// function ArgumentFunction(name, address,...args){
//     console.log(arguments)
//     console.log(`hi ${name} i think your address is : ${address} . am i right`)
//     let sum=0;
//     for(let i in args){
//         sum+=args[i];
//     }
//     console.log(sum );

// }
// ArgumentFunction(45,67);
// ArgumentFunction('MUSADDIK',45,67);
// ArgumentFunction('MUSADDIK','Rajbari',45,67);



//                       ------------------------spread operetor --------------------

//exmple 01
//   function spreadOperetor(name , course ,...array){
//     console.log(arguments)
//     var sum=0;
//     for(let i in array ){
//         sum+=array[i]
//     }
//     console.log(`
//      your name : ${name}
//      your course :${course}
//      sum of your number is : ${sum}`)
//   }
// //   spreadOperetor(66,2,5,37) /// don't give any number in first two parameter because your first two parameter is string

// // spreadOperetor('musaddik','tazwer',5,37,45,86)
// var arr=[5,37,45,86]

// // spreadOperetor('musaddik','tazwer',arr) //it's not work
// spreadOperetor('musaddik','tazwer', ...arr) /// (...) this is "spread" operator

//------------------exmple02 (copy)

// var arr1=[10,20,30,40,50];
// var arr2= arr1;
// arr1.push(60);  // push is work i arr2
// console.log(arr2)
// console.log(arr1)
// -----
// var arr1=[10,20,30,40,50];

// var arr2=[...arr1];//using spread operator

// arr1.push(60);  // push is work not effects in arr2
// console.log(arr1)
// console.log(arr2)

//-------------------------------------------------exmple03 (concat)----------------
// beforeType
// var arr1=[10,20,30,40,50];
// var arr2=[101,201,301,401,501];
// var arr3 = arr1.concat(arr2);
// console.log(arr3)

// -------new version

// var arr1=[10,20,30,40,50];
// var arr2=[101,201,301,401,501];
// // var arr3 = [...arr2 ,...arr1];
// //var arr3 = [...arr1 ,...arr2];  ///concat using spread operator  (es6)
// var arr3 = [45,...arr1 ,...arr2,56]; //(push and concat in 1 line) using spread operator  (es6)
// console.log(arr3)

// -----------------------exmple04 -------concat obj


// var obj1={
//   name:"musaddik",
//   address:"rajari"
// }
// var obj2={
//     age :54,
//     roll:02
// }
// var obj3={...obj1,...obj2}; //concat objects using spread operator
// console.log(obj3)





// -----------------------------------------------Desttructuring array-----------


// before quality

// let user =["Musaddik ",25,"Rajbari"]
// let name =user[0];
// let age = user[1];
// let address = user[2];// it's so lengthy process

// new version ///////////////////////////////////

// let user =["Musaddik ",25,"Rajbari","yasin high school"]
// let [name ,age,address,school]=user;
// ----------
//let user =["Musaddik ",25,"Rajbari","yasin high school"]
// let [name ,age,address,school="jpi"]=user; //set default value
// //--------------------------------
// let user =["Musaddik ",25,"Rajbari","yasin high school",['male',02]]////iner array (nasted array)
// let [name ,age,address,school,[gender,roll]]=user;

// console.log(name)
// console.log(address)
// console.log(age)
// console.log(school)
// console.log("gender:",gender,"roll:",roll)




// ------------------- using there rest operator

// let user =["Musaddik ",25,"Rajbari"]
// let [name ,...args]=user;///rest operator

// console.log(name)
// console.log(args)




////exmple1

// function user([name,age,address]){
//   console.log("name:",name,"age:",age,"address:",address)
// }
// user(["Musaddik ",25,"Rajbari"])


// exmple02
// function user(){
//   return ["Musaddik ",25,"Rajbari"];
// }
// let  [name,age,address]=user()
// console.log(name);





// ------------------------------Destructuring Object------


// var obj={
//   name:"musaddik",
//   age:17,
//   address:"Rejbari"

// }

// // var {name, age, address}=obj;
// // console.log( name , age , address)
// var {name :studentName, age:myAge, address}=obj;
// console.log( studentName , myAge , address)




// --------------------------OPP (Object Oriented Programing)
///opp=class+object/
//class=properties+method's

// class wellcome{

//   constructor(){   // constructor: automatically celled
//   let name;
//     console.log("i'm celled auto")
//   }
//   message(){
//     console.log(`Hello ${this.name}. how are you?`);
//   }

// }
// var massageFunction=new wellcome();
// massageFunction.name="musaddik";
// massageFunction.message()

////propeller system
// class wellcome{

//   constructor(name,age){   // constructor method's: automatically celled
// this.student=name;
// this.studentAge=age;
//     console.log("i'm celled auto")
//   }
//   message(){  ////prototype method's
//     console.log(`
//                  Hello ${this.student}.
//                  your age is ${this.studentAge} `);
//   }
//   static staticMethod(){
//     console.log("staticMethod")
//   }

// }
// var massageFunction=new wellcome("musaddik",17);
// var massageFunction2=new wellcome("tazwer",18);

// massageFunction.message()
// massageFunction2.message()
// // massageFunction.staticMethod()  ///not work
// wellcome.staticMethod();



// -------------------Inharitence -----------------------

// class studentName {
//   constructor(id, name, age) {
//     this.empName = name;
//     this.empAge = age;
//     this.empId = id
//     console.log(`constructor : studentName ${name || "g"}`)
//   }
//   info() {
//     console.log(`info01 details
//                  employId=${this.empId}
//                  employName=${this.empName}
//                  employAge=${this.empAge}`)
//   }
// }
// // class studentAge extends studentName{
// //   constructor(age){
// //     super(); ///without using super function it's not work
// //       console.log(`constructor : studentage: ${age}`)
// //   }
// // }
// class studentAge extends studentName {

//   info2() {
//     super.info()
//     let idplus = 10;
//     let newid = this.empId + idplus;

//     console.log(`info02 details
//                employId=${newid}
//                employName=${this.empName}
//                employAge=${this.empAge}`)
//   }
// }
// // class Test extends studentAge{  ///muliple
// //  info03(){
// //   console.log("musaddik")
// //  }
// // }
// let test = new studentAge(02, "musaddik", 17);
// // let ex=new Test(02, "musaddik", 17);

// test.info2();
// // let test01 =new studentAge(23);



// -----------------------------Modules

// console.log(name);
// console.log("tazwer");


// ---------------------------Promise----

////////// promise return function


// function prom(complate){ 
//    return prom = new Promise(function(resolve,reject){
//         if(complate){
//             resolve("right");
//         }else{
//             reject("error");
//         }
//     });

// }
// // console.log(prom(true))
// console.log(prom(false))



/////////


// function prom(a,b){ 
//     return new Promise(function(resolve,reject){
//         console.log("Fetching data,please wait")
//       var c=a/b;
//         setTimeout(() => {
//             //  if(c){
//                 if(a,b){
//              resolve(`your answer c =${c}`);
//          }else{
//              reject("error");
//          }
//         },5000);
//      }); 
//  }


// let onfullfill=(result)=>{
//     console.log(result)
// }
// let onRejection=(error)=>{
//     console.log(error)
// }
// prom(true).then(onfullfill);
// prom(false).catch(onRejection)


// prom(true).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });


// prom(5,0).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });

// ///////from server
// function prom(){ 
//     return new Promise(function(resolve,reject){
//         console.log("Fetching data,please wait")

//         setTimeout(() => {
//             $.get("https://jsonplaceholder.typicode.com/posts",function(data){
//                 resolve(data);
//             }).fail(error=>{
//                 reject("faild to load data")
//             })
//         },5000);
//      }); 
//  }

// prom().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });




// -----------------------------promise.all------------------



// let prom1=new Promise((ok,error)=>{
//     setTimeout(() => {
//         console.log('okey1')
//         ok(10)
//     }, 1*1000);
// });
// // let prom2=new Promise((ok,error)=>{
// //     setTimeout(() => {
// //         console.log('okey2')
// //         ok(20)
// //     }, 2*1000);
// // });
// let prom2=new Promise((ok,error)=>{
//     setTimeout(() => {
//         console.log('error')
//         error(20)
//     }, 2*1000);
// });
// let prom3=new Promise((ok,error)=>{
//     setTimeout(() => {
//         console.log('okey3')
//         ok(30)
//     }, 3*1000);
// })

// var total=0;
// Promise.all([prom1,prom2,prom3]).then((result)=>{
//     for(var i in result){total+=result[i];}
//     console.log(`Results: ${result}`)
//     console.log(`Totals: ${total}`)
// }).catch((error)=>{
//     console.log(`Error: ${error}`)
// })



////short


// let promiseCelle=function(returnData,message){
//   return function(resolve,reject){
//         setTimeout(() => {
//             console.log(`details : ${message} resolve`)
//             resolve(10)
//         }, returnData*100);
//     }
// };

// let prom1=new Promise(promiseCelle(10,'first'))
// let prom2=new Promise(promiseCelle(20,'second'))
// let prom3=new Promise(promiseCelle(30,'Third'))
// var total=0;

// Promise.all([prom1,prom2,prom3]).then((result)=>{
//     for(var i in result){total+=result[i];}
//     console.log(`Results: ${result}`)
//     console.log(`Totals: ${total}`)
// }).catch((error)=>{
//     console.log(`Error: ${error}`)
// })

// ----------------------------------------------Javascript Ajax-------------------






// -----------------------------------Fetch- Syntax--------------------------

//////////////// Async & Await  Function  



///////////////////////////////Async  ES(2017)
//async allows return promise

///01

//  async function test(){
//     return 'hello'
// }
///02
//  let test= async function(){
//         return 'hello'
//     }

// 03
// let test= async()=> "Hello"
// test().then(result=>console.log(result))
// test().catch(error=>console.log('error there'))


/////// -----------------------------------------------Await///////

// const love = async () => {
//     try {
//         const response = await fetch("/json/students_data.json");
//         const students = await response.json();
//         return students;
//     }
//     catch (err) {
//         console.log(err)
//     }




// }

// love().then(res => console.log(res))
//     .catch(error => console.log(error))

// -------------------------------------------------------------Symbol data type

// var x=Symbol('Hello');
// var y=Symbol('Hello');
// console.log(typeof x )
// console.log(typeof y )
// console.log(x);
// console.log(y)
// console.log(x===y)
// let test = x.toString;
// console.log(test)


// let age =Symbol('ages');
// let user={
//     name:"musaddik",
//     class:5,
//     [age.description]: 17
// }
// user[age]=25
// console.log(user)
// // console.log(user.age) //can't this way
// console.log(user[age])//this is the right way

// for(let i in user){///we can't use symbol in for in loop
//     console.log(i)
// }
// console.log(JSON.stringify(user))




// ----------------------------------------------------Iterators   (a control loop)------------------


// var name=['musaddik','tazwer','zaki','hasan'];

// console.log(name)
// // console.log( typeof name[Symbol.iterator])
// let iter =name [Symbol.iterator]();
// console.log(iter)
// iter.next()
// console.log(iter.next().value)
// iter.next()
// console.log(iter.next().dane)
// console.log(iter.next())


///use iterator in loop
// var name=['musaddik','tazwer','zaki','hasan','talha','asik','nacsir'];


// // let iter =name[Symbol.iterator]();
// let iter =name[Symbol.iterator]();
// console.log(iter)
// let result=iter.next()


// while(!result.done){
//     console.log(result.value)
//     result=iter.next()
// }
///for of loop 
// let t="musaddik hosen";
// for(char of t){
//     console.log(char)
// }



// ----------------------how to work iterator--------------------
// function numberIterator(arr){
//     var nextNum =0;
//     return{
//         next(){
//             if(nextNum <arr.length){
//                return{
//                 value:arr[nextNum++],
//                 done:false
//             }  
//             }
//             else{ 
//                 return{
//                 value:arr[nextNum++],
//                 done:true
//             }
//             }

//         }
//     }
// }

// let numbers=[21,32,434]
//  let num = numberIterator(numbers)
//  console.log(num.next())
//  console.log(num.next())
//  console.log(num.next())
//  console.log(num.next())

//  -----------------------------end--------------------------------

// --------------------------------------------------------Generators --------------------

// function* generatorsFunction() {
//     console.log(1)
//     console.log(11)
//     yield "first";
//     yield "second";
//     yield "third";
//     console.log(111)


// }
// // console.log(generatorsFunction)
// let Gf = generatorsFunction();
// // -------for of loop
// // for( let value of Gf){
// //     // console.log(value)
// //     console.log(value.done)
// // }
// console.log(Gf.next())
// console.log(Gf.next())
// Gf.next()
// // console.log(Gf.next().done)
// console.log(Gf.next().value)
//     // console.log(Gf.next())

// //.............................................................mucolyt

 
// function *generator_function(){
//     yield 55;
//     yield ['node','angular','react'];
//     yield* ['node','angular','react'];////*

// }
// let G=generator_function();
// // console.log(G.next())
// console.log(G.return('ending now'))
// console.log([...G])///spred



