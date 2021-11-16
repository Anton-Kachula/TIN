function validateStudentID (studentID) {
    const regex = /^\d{5}$/
    return regex.test(studentID.toString())
}

function validateDomain (email) {
    const regex = /@pjwstk\.edu\.pl$/i
    return regex.test(email)
}

function validateEmail (email, studentID) {
    const regex = new RegExp('^s' + studentID + '@pjwstk\.edu\.pl$', 'i')
    return regex.test(email)
}

const studentID = document.getElementById('studentID')
const email = document.getElementById('email')
const emailLabel = document.getElementById('email-label')

function validateForm () {
    const CorrectStudentID = validateStudentID(studentID.value)
    if (CorrectStudentID) {
        studentID.style.backgroundColor = 'green'
    } else {
        studentID.style.backgroundColor = 'red'
        email.style.backgroundColor = 'red'
        emailLabel.textContent = 'School email (Invalid StudentID, must match StudentID)'
    }
    let CorrectEmail = false
    if (!validateDomain(email.value)) {
        email.style.backgroundColor = 'red'
        emailLabel.textContent = 'School email (Must have domain @pjwstk.edu.pl)'
    } else if (CorrectStudentID) {
        CorrectEmail = validateEmail(email.value, studentID.value)
        if (CorrectEmail) {
            email.style.backgroundColor = 'green'
        } else {
            studentID.style.backgroundColor = 'red'
            email.style.backgroundColor = 'red'
            emailLabel.textContent = 'School email (Must match StudentID)'
        }
    }
    return CorrectStudentID && CorrectEmail
}