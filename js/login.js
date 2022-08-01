function login(){
    const website_admin = 'admin'
    const website_password = 'password'
    let account = document.getElementById('account').value
    let password = document.getElementById('password').value


    if(account !== website_admin  || password !== website_password){
        alert('Đang nhập thất bại')
        return false
    }
    else
    {
        alert('Đăng nhập thành công')
    }

}

