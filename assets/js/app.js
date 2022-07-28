/* # -> Commenti seguiti da asterisco sono i passaggi necessari per il corretto funzionamento app */

//#region Variabili js
/* #1 - Salvo in delle variabili gli ancor tag che indirizzano alle varie pagine */
const login = document.querySelector(".login-link")
const register = document.querySelector(".register-link")
const forgot = document.querySelector(".forgot-link")
console.log(login, register, forgot); // Verifica in console

/* #1.1 - Salvo in delle variabili le sezioni relative a login, register ecc */
const loginSection = document.querySelector(".login")
const registerSection = document.querySelector(".register")
const forgotSection = document.querySelector(".forgot")
console.log(loginSection, registerSection, forgotSection); // Verifica in console
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




//#endregion