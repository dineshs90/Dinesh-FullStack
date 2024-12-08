function add(event) { 

    event.preventDefault()
    var name = document.getElementById("first").value
    console.log("Name",name)
    var age = document.getElementById("age").value
    console.log("Age",age)
    // var gender = document.querySelector('input[name="gender"]:checked').value ? document.querySelector('input[name="gender"]:checked').value : '';
    
    var genderElement = document.querySelector('input[name="gender"]:checked')
    var gender = genderElement ? genderElement.value : ''; //handling null value
    console.log("Gender",gender)

    var course = document.getElementById("course").value
    console.log("Course",course)
    
    var email = document.getElementById("email").value
    console.log("Email", email)
    
    //checking the inputs

    if (!name || !age || !gender || !course || !email) { 
        alert("Please fill out all fields !!!")
        return
    }

    //creating <tr> tag

    var row = document.createElement("tr")
    
    //creating <td> tag
    var nameTd = document.createElement("td")
    nameTd.textContent = name
    row.appendChild(nameTd)

    console.log("appendedRow", row)

    var ageTd = document.createElement("td")
    ageTd.textContent = age
    row.appendChild(ageTd)

    var genderTd = document.createElement("td")
    genderTd.textContent = gender
    row.appendChild(genderTd)

    var courseTd = document.createElement("td")
    courseTd.textContent = course
    row.appendChild(courseTd)

    var emailTd = document.createElement("td")
    emailTd.textContent = email
    row.appendChild(emailTd)

    //var deleteButton = document.createElement("td")
    var dbbutton = document.createElement("button")
    dbbutton.style.backgroundColor = "red";
    dbbutton.textContent = "DELETE"
    dbbutton.classList.add("delete-btn"); //changing fond size in css file

    //handling delete button

    dbbutton.addEventListener('click', function () { 
        row.remove()

    })


    row.appendChild(dbbutton)
    

    //appending all data into entry table body

    document.getElementById("entry").append(row)
    console.log("Final Data",row)

    //clear the form inputs after submission

    document.getElementById("FillForm").reset()
    

}