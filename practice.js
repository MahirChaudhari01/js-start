//  print   *****
//          ****
//          ***
//          **
//          *


// function printFudii(){
//     for (let i=1;i<=5;i++){
//         let count = "";
//         for(let j=6-i;j>=1;j--){
//             count =count + "* "

//         }
//         console.log(count);

//     }

//  }
// printFudii();


// 1
// 1 2
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

// let fudii = () => {

//     for (let i = 1; i <= 5; i++) {
//         let num = ""
//         for (let j = 1; j <= i; j++) {
//             num = num + j;

//         }
//         console.log(num);
//     }
//      for (let i = 1; i <= 5; i++) {
//         let num = ""
//         for (let j = 1; j <= 4-i; j++) {
//             num = num + j;

//         }
//         console.log(num);
//     }
// }
// fudii();

// * * * * * *
//  * * * * *
//   * * * *
//    * * *
//     * *
//      * 
//     * *
//    * * *
//   * * * *
//  * * * * *
// * * * * * *
// function fudii() {
//     let space = ""
//     for (let i = 0; i <= 6; i++) {
//         let count = "";
//         space += " ";
//         for (let j = 1; j <= 7 - i; j++) {
//             count = count + "* ";

//         }
//         console.log(space + count + space);

//     }
//     space = "";
//     for (let k = 1; k <= 6; k++) {
//         let count2 = "";

//         for(let s = 1;s<=7-k;s++){
//             space += " ";
//         }

//         for (let l = 1; l <= k + 1; l++) {
//             count2 += "* ";

//         }
//         console.log(space+count2+space);
//         space="";

//     }


// }
// fudii()

