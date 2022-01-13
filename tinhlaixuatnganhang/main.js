let tiengui = prompt("Nhap so tien gui")
let nam = prompt("So nam can gui")
let laidon = (tiengui/100)*6.9
let tienlai = +tiengui + +nam * laidon

document.write("So tien gui la " + tiengui + " co lai la " + (laidon) + "/1nam")
document.write('<br/>')
document.write("So tien gui la" + tiengui + " co lai la sau " + nam + " nam la " + (tienlai))
