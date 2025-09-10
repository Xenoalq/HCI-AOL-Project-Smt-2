function validateForm() {
    let email_orphone = document.getElementById("emailorphone").value;
    let pass = document.getElementById("pass").value;
    error = "";
    let isValid = (!!email_orphone);

    if (email_orphone == "" || pass == "" ) {
        alert("All fields must be filled");
        return false;
    } 
    
    if (!isValid) error = "Email field is empty!";

    isValid = isValid && email_orphone.includes("@");
    if (!isValid && !error) error = "Email is not valid!";

    isValid = isValid && pass;
    if (!isValid && !error) error = "Password field is empty!";

    isValid = isValid && (pass == passconfirmation);
    if (!isValid && !error) error = "Password and password confirmation do not match!";

    if (isValid) {
        alert("Successfully login!")
        return true;
    }
    
    else {
        alert(error);
        return false;
    }
}