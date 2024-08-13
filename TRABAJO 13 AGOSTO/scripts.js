document.addEventListener('DOMContentLoaded',()=>{
    const studentform=document.getElementById("studentform")
    const studentlist=document.getElementById("studentlist")
    let students=JSON.parse(localStorage.getItem("students"))||[]
    function renderstudent(){
    studentlist.innerHTML=''
    students.forEach((students,index) => {
    const li=document.createElement("li")
    li.innerHTML=`
    
    ${student.name} - ${student.age} años - grado: ${student.grade}
    editarborrar `
    studentlist.appendChild(li)
    
    });
    
    }
    studentform.addEventListener("submit", (e)=>{
    e.preventDefault()
    const studentid = document.getElementById('studentid').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const grade = document.getElementById('grade').value
    const studentdata={name,age,grade}
    
    if (studentid){
    students[studentid]=studentdata
    }else{
    students.push(studentdata)
    }
    localStorage.setItem("students",JSON.stringify(students))
    renderstudent()
    studentform.reset()
    document.getElementById('studentid').value=''
    })
    
    window.editstudent=(index)=>{
    document.getElementById('studentid').value='index'
    document.getElementById('name').value='students[index].name'
    document.getElementById('age').value='students[index].age'
    document.getElementById('grade').value='students[index].grade'
    }
    window.deletestudent=(index)=>{
    students.splice(index,1)
    localStorage.setItem("students",JSON.stringify(students))
    
    }
    renderstudent()
    
    })