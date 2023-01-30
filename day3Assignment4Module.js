/*
1. A function with arrOfObj as a parameter, searchSalary ; 
return pos of firstElement which has a particular salary -- arr.findIndex
function f1(arrObj,searchSalary):number
*/

var empArr = [
    { empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
    { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
    { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
    { empId: 104, empName: "Kishan", salary: 3500, deptId: "D1" },
    { empId: 105, empName: "Keshav", salary: 3500, deptId: "D2" },
    { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
    { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }
];

function f1(arrObj, searchSalary) {
    var empObjIndex = arrObj.findIndex((empObj) => empObj.salary == searchSalary);
    return empObjIndex;
}

var salary = 3500;
var index = f1(empArr, salary);
console.log("Index of the employee obj which has " + salary + " is : " + index);


/*
2. Add an obj at a particular index position in the arrOfObj
function addEmp(arrObj,emp,position)=> boolean
*/

function addEmp(arrObj, emp, position) {
    arrObj.splice(position, 0, emp);
    return arrObj.includes(emp);
}

var newEmpObj = { empId: 170, empName: "Ram", salary: 3800, deptId: "D3" };
var newEmpPosition = 4;

if (addEmp(empArr, newEmpObj, newEmpPosition)) {
    console.log("Employee added successfully");
} else {
    console.log("Error");
}


/*
3. Remove an obj from the arrOfObj
function removeEmp(arrObj,emp)=> boolean
*/

function removeEmp(arrObj, emp) {
    var empObjIndex = arrObj.findIndex((empObj) => empObj.empId == emp.empId);
    arrObj.splice(empObjIndex, 1);
    return arrObj.includes(emp);
}

var empObjToRemove = { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" };

if (!removeEmp(empArr, empObjToRemove)) {
    console.log("Employee removed successfully");
} else {
    console.log("Error");
}

/*
4. Get a particule emp details from arrObj
function getEmpDetails(arrObj,empId)=> Obj
*/

function getEmpDetails(arrObj, empId) {
    console.log(arrObj);
    let emp = arrObj.find((empObj) => empObj.empId == empId);
    return emp;
}

var empId = 105;
var employee = getEmpDetails(empArr, empId);
console.log(employee);