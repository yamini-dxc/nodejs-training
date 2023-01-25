var arr = [10, 20, 30, 40, 50];
// Create a function which returns the squares of all the elements without using the map method
//[100,400,900,1600,2500]

function getSquares(array) {
    var sqrArr = [];
    for (i = 0; i < array.length; i++) {
        sqrArr[i] = array[i] * array[i];
    }
    return sqrArr;
}

var squareArray = getSquares(arr);
console.log(squareArray);


// Create a function which takes in a string which holds a phoneNumber and returns the masked version


function createMaskOnPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.toString();
    var first3 = phoneNumber.substring(0, 3);
    var last3 = phoneNumber.substring(phoneNumber.length - 3);

    mask = phoneNumber.substring(3, phoneNumber.length - 3).replace(/\d/g, "*");

    return first3 + mask + last3;
}

var res = createMaskOnPhoneNumber(1234567890); //123****890
console.log(res);

// Create a function which takes in array of objects and returns the obj which has the highest salary 

var empArr = [
    { empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
    { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
    { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
    { empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
    { empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
    { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
    { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }
]

function getHighestSalaryEmp(empArray) {
    var maxSalary = 0;
    for (var i = 0; i < empArray.length; i++) {
        maxSalary = Math.max(maxSalary, empArr[i].salary)
    }

    for (var i = 0; i < empArray.length; i++) {
        if (empArray[i].salary == maxSalary) {
            return empArray[i];
        }
    }
}

var obj = getHighestSalaryEmp(empArr);
console.log(obj);
//{empId:106,empName:"Pran",salary:4000,deptId:"D3"}