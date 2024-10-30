 // 버튼 클릭 시 팝업창 열기
document.getElementById("shortcutPlus").addEventListener("click", function() {
document.getElementById("popup").style.display = "block";
});

// 팝업창 닫기
function closePopup() {
    document.getElementById("popup").style.display = "none";
}  

// 완료 및 이름과 URL 받아 로컬스토리지에 현재시간에 맞게 저장

function completePopup() {
    //완료 후 닫기
    document.getElementById("popup").style.display = "none";
}


