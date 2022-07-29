let taikhoan = document.getElementById('taikhoan').value
let matkhau = document.getElementById('password').value

if(taikhoan === 'admin'){
    if(matkhau === 'password'){
        return window.location("login.html")
    }
    else{
        alert("Sai mật khẩu") 
    }
}
else
{
    alert("Không đúng tài khoản")
}