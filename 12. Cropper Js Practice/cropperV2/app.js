let cropper;
const fileInput = document.getElementById('file-input');
const image = document.getElementById('image');
const profileImage = document.getElementById('profile-image');
const cropButton = document.getElementById('crop-button');

const cropperWrap = document.querySelector('.cropper-wrap');
const confirm = document.getElementById('confirm');
const cancel = document.getElementById('cancel');

// 이미지 파일을 선택할 때 처리
fileInput.addEventListener('change', function(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        
        // 파일 읽기가 완료되었을 때 
        reader.onload = function(e) {
            image.src = e.target.result; // 이미지 소스를 설정
            image.style.display = 'block'; // 이미지를 화면에 표시
            cropButton.style.display = 'inline-block'; // 자르기 버튼을 화면에 표시

            if (cropper) {
                cropper.destroy(); // 기존 cropper 인스턴스 제거
            }
            
            cropper = new Cropper(image, {
                aspectRatio: 1, // 프로필 이미지를 위해 1:1 비율로 설정
                viewMode: 1,
                scalable: true,
                zoomable: true,
                movable: true,  
                responsive: true,
                background: false, // Cropper.js 배경 비활성화 (투명도 유지)
                cropBoxResizable: false, // 크롭 박스 크기 조정 
                dragMode: false  // 새 크롭 박스 이동 
            });
        };
        reader.readAsDataURL(file); // 파일을 Data URL로 읽기
    }
});

// 자르기 버튼 클릭 시 처리
cropButton.addEventListener('click', function() {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas({
            width: 150,
            height: 150,
            fillColor: '#fff' // 투명한 배경 대신 흰색 배경을 채움
        });

        // 자른 이미지를 프로필 이미지로 설정
        profileImage.src = canvas.toDataURL();
        cropperWrap.style.display = "none";
    }
});

// 확인 버튼 클릭 시 파일 업로드 창 열기
confirm.addEventListener('click',()=>{
    if( cropperWrap.style.display === "none"){
        cropperWrap.style.display = "flex";
    }
    fileInput.click();
})

// 취소 버튼 클릭 시 닫기
cancel.addEventListener('click',()=>{
    cropperWrap.style.display = "none";
    profileImage.src = "/img/profile.png"
})