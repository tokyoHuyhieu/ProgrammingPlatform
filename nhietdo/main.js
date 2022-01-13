let nhietdo = Number(prompt("Nhập vào nhiệt độ"))
while (nhietdo<20 || nhietdo>100){
    if(nhietdo<20){
        alert("Nhiệt độ quá lạnh cần tăng nhiệt độ")
        nhietdo = Number(prompt("Nhập vào nhiệt độ"))
    }else if(nhietdo>100){
        alert("Nhiệt độ quá nóng cần giảm nhiệt độ")
        nhietdo = Number(prompt("Nhập vào nhiệt độ"))
    }
}
alert("Nhiệt độ bình thường")