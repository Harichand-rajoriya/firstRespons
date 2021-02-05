let btnGen = document.querySelector('button');

btnGen.addEventListener('click', () => {
    let info = faker.helpers.createCard();
    // console.log(info);
    let{name, email, phone} = info;
    //console.log(phone);
    //alert(name);
    document.querySelector('name').value = name;
    document.querySelector('email').Value = email;
    document.querySelector('phone').Value = phone;
});