function login(){
    const website_admin = 'admin'
    const website_password = 'password'
    let account = document.getElementById('account').value
    let password = document.getElementById('password').value

    if (account !== website_admin || password !== website_password) {
        alert("Đăng nhập thất bại, mời đăng nhập lại!");
        return false;
    } else if (username === website_admin && password === website_password) {
        localStorage.setItem("account", website_admin)
        alert("Đăng nhập thành công!")
    }

}

