function validateForm() {
    let email_orphone = document.getElementById("emailorphone").value;
    let full_name = document.getElementById("fullname").value;
    let dob = document.getElementById("dob").value;
    let pass = document.getElementById("pass").value;
    let passconfirmation = document.getElementById("passconfirmation").value;
    error = "";
    let isValid = (!!email_orphone);

    if (email_orphone == "" || full_name == "" || dob == "" || pass == "" || passconfirmation == "") {
        alert("All fields must be filled");
        return false;
    } 
    
    if (!isValid) error = "Email field is empty!";

    isValid = isValid && email_orphone.includes("@");
    if (!isValid && !error) error = "Email is not valid!";

    isValid = isValid && full_name;

    if (!isValid && !error) error = "Full name field is empty!";

    isValid = isValid && dob;
    if (!isValid && !error) error = "Date of birth field is empty!";

    isValid = isValid && pass;
    if (!isValid && !error) error = "Password field is empty!";

    isValid = isValid && pass.length >= 8;
    if (!isValid && !error) error = "Password must be at least 8 characters long!";

    isValid = isValid && passconfirmation;
    if (!isValid && !error) error = "Password confirmation field is empty!";

    isValid = isValid && (pass == passconfirmation);
    if (!isValid && !error) error = "Password and password confirmation do not match!";

    if (isValid) {
        alert("Successfully created account!")
        return true;
    }
    
    else {
        alert(error);
        return false;
    }
}