let input_number = parseInt(prompt('Nhap vao gia tri so nguyen duong'));
let i;
let factorial=1;
for(i=1; i<=input_number; i++){
    factorial=factorial*i;
}
document.write('Giai thua cua '+input_number+' la: '+factorial);