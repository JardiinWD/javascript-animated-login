/* # -> Commenti seguiti da asterisco sono i passaggi necessari per il corretto funzionamento app */

//#region Variabili js
/* #1 - Salvo in delle variabili gli ancor tag che indirizzano alle varie pagine */
const login = document.querySelector(".login-link")
const register = document.querySelector(".register-link")
const forgot = document.querySelector(".forgot-link")
const closeButton = document.querySelector(".close")
console.log(login, register, forgot, closeButton); // Verifica in console

/* #1.1 - Salvo in delle variabili le sezioni relative a login, register ecc */
const loginSection = document.querySelector(".login")
const registerSection = document.querySelector(".register")
const forgotSection = document.querySelector(".forgot")
console.log(loginSection, registerSection, forgotSection); // Verifica in console

/* #3 - toggle della visibilità per le password (lato login) */
const loginPassword = document.querySelector("#login-password") // Tramite query selector vado a trovare il mio input id password (lato login)
const loginEyeIcon = document.querySelector("#login-eye") // Ora pesco l'id della mia icona (lato login)
const registerPassword = document.querySelector("#register-password") // Tramite query selector vado a trovare il mio input id password (lato login)
const registerEyeIcon = document.querySelector("#register-eye") // Ora pesco l'id della mia icona (lato login)
console.log(loginPassword, loginEyeIcon, registerPassword, registerEyeIcon);
//#endregion

//#region Eventi js

/* #2 - Aggiungo un evento al link per la registrazione */
register.addEventListener("click", (e) => {
    e.preventDefault(); // Rimuovo il refresh della pagina
    /* alert("You Click on register link") */ // Verifico tramite alert
    loginSection.style.display = "none" // al click la mia pagina di login diventa none
    registerSection.style.display = "flex" // al click la mia pagina register diventa visibile
})

/* #2.1 - Aggiungo un evento al link per tornare alla pagina di login */
login.addEventListener("click", (e) => {
    e.preventDefault(); // Rimuovo il refresh della pagina
    /* alert("You Click on login link") */ // Verifico tramite alert
    loginSection.style.display = "flex" // al click la mia pagina di login diventa visibile
    registerSection.style.display = "none" // al click la mia pagina register diventa none 
})

/* #2.2 - Aggiungo un evento al link per andare sulla pagina del forgot password */
forgot.addEventListener("click", (e) => {
    e.preventDefault(); // Rimuovo il refresh della pagina
    /* alert("You Click on forgot link") */ // Verifico tramite alert
    loginSection.style.display = "none" // al click la mia pagina di login diventa none 
    forgotSection.style.display = "flex" // al click la mia pagina forgot diventa visibile 
})

/* #2.3 - Al click sulla croce ritorno alla mia pagina di login */
closeButton.addEventListener("click", (e) => {
    e.preventDefault(); // Rimuovo il refresh della pagina
    /* alert("You Click on close Button") */ // Verifico tramite alert
    loginSection.style.display = "flex" // al click la mia pagina di login diventa visibile 
    forgotSection.style.display = "none" // al click la mia pagina forgot diventa none 
})
//#endregion

//#region Toggle visibility

/* #3.1 - Aggiungo evento alla mia icona lato login  */
loginEyeIcon.addEventListener("click", () => {
    /* console.log("Stai cliccando sull'icona!"); */
    /* Condizione per la visualizzazione della password */
    if (loginEyeIcon.classList.contains("fa-eye")) {
        /* Se il mio input contenesse l'icona dell'occhiolino */
        loginPassword.setAttribute("type", "text") // Il mio input cambia da type password a type text
        /* eyeIcon.classList.remove("fa-eye") */ // Rimuovo la mia icona fa-eye
        /* eyeIcon.classList.add("fa-eye-slash") */ // Per aggiungerle l'icona con occhio sbarrato che servirà a nasconderla
        /* Per utilizzare metodo più aggiornato utilizzo il replace */
        loginEyeIcon.classList.replace("fa-eye", "fa-eye-slash") // Fa le stesse cose viste sopra ma con meno codice
    } else if (loginEyeIcon.classList.contains("fa-eye-slash")) {
        /* Se appunto contenesse l'icona con occhio sbarrato */
        loginPassword.setAttribute("type", "password") // la password torna invisibile
        /* eyeIcon.classList.remove("fa-eye-slash") */ // Gli rimuovo l'icona con occhio sbarrato
        /* eyeIcon.classList.add("fa-eye") */ // E gli riaggiungo nuovamente l'icona iniziale
        loginEyeIcon.classList.replace("fa-eye-slash", "fa-eye") // Fa le stesse cose viste sopra ma con meno codice
    }
})

/* #3.2 - Aggiungo evento alla mia icona lato login  */
registerEyeIcon.addEventListener("click", () => {
    /* console.log("Stai cliccando sull'icona!"); */
    /* Condizione per la visualizzazione della password */
    if (registerEyeIcon.classList.contains("fa-eye")) {
        /* Se il mio input contenesse l'icona dell'occhiolino */
        registerPassword.setAttribute("type", "text") // Il mio input cambia da type password a type text
        /* eyeIcon.classList.remove("fa-eye") */ // Rimuovo la mia icona fa-eye
        /* eyeIcon.classList.add("fa-eye-slash") */ // Per aggiungerle l'icona con occhio sbarrato che servirà a nasconderla
        /* Per utilizzare metodo più aggiornato utilizzo il replace */
        registerEyeIcon.classList.replace("fa-eye", "fa-eye-slash") // Fa le stesse cose viste sopra ma con meno codice
    }
    else if (registerEyeIcon.classList.contains("fa-eye-slash")) {
        /* Se appunto contenesse l'icona con occhio sbarrato */
        registerPassword.setAttribute("type", "password") // la password torna invisibile
        /* eyeIcon.classList.remove("fa-eye-slash") */ // Gli rimuovo l'icona con occhio sbarrato
        /* eyeIcon.classList.add("fa-eye") */ // E gli riaggiungo nuovamente l'icona iniziale
        registerEyeIcon.classList.replace("fa-eye-slash", "fa-eye") // Fa le stesse cose viste sopra ma con meno codice
    }
})

//#endregion