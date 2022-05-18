// declarate variables
let uName = prompt("Please enter name");
let email = prompt("Enter email");
let country = "USA";
let salary = Number(prompt('salary'));

// calculate salary
let yearSalary = salary * 12;

// prompt 
document.writeln(`
<div>
    <p>Name: ${uName}</p>
    <p>Email: ${email}</p>
    <p>Salary: ${yearSalary}</p>
</div>
`)