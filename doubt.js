// // let arr = [1, 5, 8, 7, 6, 2];
// // function filterdata(arr, t){
// //     const result = arr.filter( (item, index)=>{
// //        return item == t;
// //     })
// //     console.log(result);
// // }
// //  filterdata(arr, 0);

// function highPerformers(students) {

//     const result = students
    
//     .map(student => {
    
//     const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    
//     return { name: student.name, average: average };
    
//     })
    
//     .filter(student => student.average > 90);
    
//     result.forEach(student => {
    
//     console.log(true);
    
//     console.log(student.name);
    
//     console.log(Math.round(student.average)); // Rounding to the nearest integer for cleaner output
    
//     });
    
//     return result;
    
//     }
    
//     let students = [
    
//     {"name": "Ram", "scores": [80, 95, 60]},
    
//     {"name": "Mohan", "scores": [85, 70, 90]},
    
//     {"name": "Sai", "scores": [60, 70, 80]},
    
//     {"name": "Hemang", "scores": [95, 90, 94]}
    
//     ];
    
//     const answer = highPerformers(students);
    
    // --------------------------------------------------------
//     import java.io.*; // for handling input/output
// import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
// class Main {
//     public static double[] squre(double[] arr){
//         for(int i = 0;i < arr.length;i++){
//             arr[i] = Math.pow(arr[i], 2);
//         }
//         return arr;
//     }
//     public static void main (String[] args) {
//         // Your code here
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         double[] arr = new double[n];
//         for(int i = 0;i < n;i++){
//             arr[i] = sc.nextLong();
//         }
//         double[] newArr = squre(arr);
//         double sum = 0;
//         for(int i = 0;i < n;i++){
//             sum += newArr[i];
//         }
//         double Mean= sum / n;
//         double res = Math.sqrt(Mean);

//        System.out.print(String.format("%.6f",res));
//     }
// }

// ------------------------------------------------------------------------
// const hand = ['👋', '🤚', '🖖', '🫲', '👌', '✌️'];
// console.log(hand);
// console.log(hand[0]);
// console.log(hand[4]);

// const IntArray = [1,2,3,4,5]
// console.log(IntArray.toString());
// let x = 'hello';
// let y = 'tello';
// console.log(x.join(y));


//------------ Reversing an array using unshift() method--------------------

// let original_array = [1, 2, 3, 4, 5];
// let reversed_array = [];

// original_array.forEach((element) => {
//     reversed_array.unshift(element);
// });
 
// console.log(reversed_array);




// let original_array = [1, 2, 3, 4];
// let reversed_array = [];
 
// reversed_array = original_array.reduce((acc, item)=> [item].concat(acc), [])
 
// console.log(reversed_array);


//-----------------------JS Array toString ---------------
// const arr=["abc", "def", 1, 5]
// let text=arr.toString();

// console.log(text);


//-----------slice() function------------
// var array=["A", "B", "C", "D", "E"];
// var new_array=array.slice(1,4);

// console.log(new_array);

//--------------splice() function-----------
// var array=["A", "B", "C", "D", "E"];
// array.splice(1, 2, "new1", "new2", "new3");

// console.log(array);


//----------------------Date---------------------
// let date = new Date('October 25 1998');
// console.log(date.getFullYear());


// let date = new Date();
//     date.setDate('25');
//     date.setMonth('11');
//     date.setFullYear('1998');
//     console.log(date.toDateString());