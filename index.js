function getValue(){
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email= document.getElementById("email").value;
    let occupation = document.getElementById("occupation").value;


    console.log(`
        First Name: ${firstName} \n
        Last Name: ${lastName} \n
        Email: ${email} \n
        Occupation: ${occupation} \n`
    );
    
}