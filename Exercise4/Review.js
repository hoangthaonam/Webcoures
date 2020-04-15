/* Tạo mảng student gồm các phần tử 
    {name: "Hoang",age:20,score:7.5}
    {name: "Thao",age:23,score:8}
    {name: "Nam",age:21,score:9}
*/
var student = [
    {name: "Hoang",age:20,score:7.5},
    {name: "Thao",age:23,score:8.5},
    {name: "Nam",age:21,score:9}
]
// Viết hàm giển thị thông tin sinh viên có trong mảng
function display(student)
{
    console.log("\n");
    student.map(function(obj){
        console.log("Tên:" + obj.name + " Tuổi:" + obj.age + " Score:" + obj.score);
    });
};

display(student);
// Thêm sinh viên vào cuối trong mảng
student.push({name: "Hung",age:23,score:8});
display(student);

// Thêm sinh viên vào đầu trong mảng
student.unshift({name: "Toan",age:22,score:5});
display(student);

// Lấy sinh viên đầu mảng
console.log(student.shift());
display(student);

// Lấy sinh viên cuối mảng
console.log(student.pop({name: "Toan",age:22,score:5}));
display(student);
// Lấy danh sách sinh viên có điểm lớn hơn 8
display(student.filter(function (obj){
    if(obj.score>8) return true;
}))
// Tính tổng trung bình điểm của toàn bộ sinh viên
var score = student.reduce(function(a,b){
    return a + b.score;
},0)/student.length;
console.log("Điểm trung bình: ",score);
// Sử dụng forEach để in ra thông tin sinh viên
console.log("forEach")
student.forEach(obj => console.log(obj));
// Sử dụng for để in ra thông tin sinh viên
console.log("For of");
for(let obj of student)
{
    console.log(obj);
}
// Sử dụng destructuring, forEach, arrow function

