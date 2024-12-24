function switchlight(){
    var check = window.document.frmlight.chklight;
    if(check.checked)
    document.bgColor = 'white';
    else
    document.bgColor='black';
}
function doimau(){
    var mau=prompt("Nhap mau nen cua trang","");
    document.body.style.backgroundColor=mau;
}