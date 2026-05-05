
document.getElementById("contactForm").addEventListener("submit", function (e) {
    const fullname = document.getElementById("fullname").value.trim();
    const namePattern = /^[A-Za-z\s]+$/;

    if (fullname.length < 5) {
        alert("Numele complet trebuie să aibă cel puțin 5 caractere.");
        e.preventDefault();
        return;
    }
    if (!namePattern.test(fullname)) {
        alert("Numele complet trebuie să conțină doar litere și spații.");
        e.preventDefault();
        return;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt\.ro$/;

    if (!emailPattern.test(email)) {
        alert("Email-ul trebuie să fie valid și să se termine cu @e-uvt.ro");
        e.preventDefault();
        return;
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone !== "") {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Telefonul trebuie să conțină exact 10 cifre.");
            e.preventDefault();
            return;
        }
    }

    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (subject === "") {
        alert("Câmpul Subiect este obligatoriu.");
        e.preventDefault();
        return;
    }
    if (message === "") {
        alert("Mesajul nu poate fi gol.");
        e.preventDefault();
        return;
    }

    const sursaOptions = document.getElementsByName("sursa");
    let sursaChecked = false;
    for (let i = 0; i < sursaOptions.length; i++) {
        if (sursaOptions[i].checked) {
            sursaChecked = true;
            break;
        }
    }
    if (!sursaChecked) {
        alert("Te rugăm să selectezi o opțiune pentru 'Cum ai auzit de noi?'.");
        e.preventDefault();
        return;
    }

    const dobValue = document.getElementById("dob").value;
    if (!dobValue) {
        alert("Te rugăm să introduci data nașterii.");
        e.preventDefault();
        return;
    }
    const dob = new Date(dobValue);
    const today = new Date();
    let ageCalc = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        ageCalc--;
    }
    if (ageCalc < 18) {
        alert("Trebuie să ai cel puțin 18 ani impliniți.");
        e.preventDefault();
        return;
    }

    const ageInput = document.getElementById("age").value;
    if (ageInput < 18 || ageInput > 60 || ageInput === "") {
        alert("Vârsta trebuie să fie între 18 și 60 de ani.");
        e.preventDefault();
        return;
    }

    const website = document.getElementById("website").value.trim();
    if (!website.startsWith("https://")) {
        alert("Adresa website trebuie să înceapă cu https://");
        e.preventDefault();
        return;
    }

    const fileInput = document.getElementById("fileUpload");
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const allowedExtensions = /(\.pdf|\.docx)$/i;
        if (!allowedExtensions.exec(file.name)) {
            alert("Sunt acceptate doar fișiere .pdf sau .docx");
            e.preventDefault();
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert("Fișierul nu trebuie să depășească 2MB.");
            e.preventDefault();
            return;
        }
    } else {
        alert("Te rugăm să încarci un fișier.");
        e.preventDefault();
        return;
    }


    const favColor = document.getElementById("favColor").value;
    if (!favColor) {
        alert("Te rugăm să selectezi o culoare.");
        e.preventDefault();
        return;
    }

    const confirmare = confirm("Toate datele sunt valide. Ești sigur că vrei să trimiți formularul?");
    if (!confirmare) {
        e.preventDefault();
    }
});