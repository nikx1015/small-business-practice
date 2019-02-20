printDom = () => {
    fetch("http://localhost:8088/employees?_expand=department&_expand=computer",{
        headers: {
            "Content-Type": "application/json",
        },
    })
.then(employees => employees.json())
.then(allEmployeeInfo => {
    allEmployeeInfo.forEach(employee => {
document.querySelector("#employee-info").innerHTML += `<div>
<h2>Employee Name: ${employee.name}</h2>
<h3>Employee Dept: ${employee.department.name}</h3>
<h3>Employee PC: ${employee.computer.type}</h3>
</div>`
})
})}
printDom()

