const formRegistrer = document.getElementById('form_registrer');

formRegistrer.addEventListener('submit', (e) => {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if(name.length == 0 || mail.length == 0 || pass.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Debes llenar todos los campos',
        })
    } else {

        if(validar_nombre(name)){
            Swal.fire({
                icon: 'error',
                title: 'El nombre no es valido',
            })

        } else if(validar_email(mail)){
            Swal.fire({
                icon: 'error',
                title: 'El correo no es valido',
            })

        } else if(pass.length <= 8) {
            Swal.fire({
                icon: 'error',
                title: 'La contraseña es muy corta',
            })

        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Gracias por registrarte',
                showConfirmButton: false,
                timer: 1600
              })
        }
    }
})

function validar_email( email ){
    var regex =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    return regex.test(email) ? true : false;
}

function validar_nombre(nombre){
    var regName = / ^ [a-zA-Z] + [a-zA-Z] + $ / ;
    return regName.test(nombre) ? true : false;
}