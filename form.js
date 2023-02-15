function buat_login() {
    const btnForm = document.getElementById("X");
    btnForm.parentElement.removeChild(btnForm);

    const title = document.createElement("p");
    title.className = "title_regis";
    title.innerHTML = "Silahkan Mendaftar".toUpperCase();
    const divTitle = document.getElementsByTagName("div")[0];
    divTitle.appendChild(title);
    const form = document.createElement("form");
    divTitle.appendChild(form);

    const namaUser = document.createElement("label");
    namaUser.innerHTML = "Nama User";
    form.appendChild(namaUser);
    const inputNamaUser = document.createElement("input");
    inputNamaUser.type = "text";
    inputNamaUser.name = "namaUser";
    inputNamaUser.placeholder = "Nama User..."
    inputNamaUser.className = "form_register";
    form.appendChild(inputNamaUser);
    
    const nomorHp = document.createElement("label");
    nomorHp.innerHTML = "Nomor Handphone";
    form.appendChild(nomorHp);
    const inputNomorHp = document.createElement("input");
    inputNomorHp.type = "tel";
    inputNomorHp.name = "nomorHp";
    inputNomorHp.pattern ="[0-9]{3}-[0-9]{2}-[0-9]{3}";
    inputNomorHp.placeholder = "Nomor Handphone..."
    inputNomorHp.className = "form_register";
    form.appendChild(inputNomorHp);
    
    const username = document.createElement("label");
    username.innerHTML = "Username";
    form.appendChild(username);
    const inputUserName = document.createElement("input");
    inputUserName.type = "text";
    inputUserName.name = "username";
    inputUserName.pattern ="[0-9]{4}-[0-9]{4}-[0-9]{4}";
    inputUserName.placeholder = "Username atau email..."
    inputUserName.className = "form_register";
    form.appendChild(inputUserName);
    
    const password = document.createElement("label");
    password.innerHTML = "Password";
    form.appendChild(password);
    const inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.placeholder = "Password..."
    inputPassword.className = "form_register";
    form.appendChild(inputPassword);

    const btnRegis = document.createElement("input");
    btnRegis.type = "submit";
    btnRegis.value = "Daftar Sekarang".toUpperCase();
    btnRegis.className = "tombol_register";
    form.appendChild(btnRegis);



}