var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
// plusdivs 按鈕按下去會加或減一 如果加一的話 上面宣告slideindex的值為1 n帶入1 那 showdive=slideindex+n= 2然後帶入下面fn
function showDivs(n) {
    // 下面是如果 2的值大於 x的長度的話 那會將 slideIndex帶入1到最後面 的式子去 如果沒有的話握繼續執行下面程式
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    //這個迴圈會把一開始所有的圖片顯示為none看不見 然後會跳到下一行值把前面的值帶進去最後show出那張圖片
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "inline";
}

function listBtn() {
    var listBtn = document.getElementById('btn');
    var textlistn = document.getElementById('ad');
    if (textlistn.style.display === 'flex') {
        textlistn.style.display = 'none';
        listBtn.style.display = 'none';
    }
}