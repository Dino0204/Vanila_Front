let cropper;

const cropperModal = document.querySelector('.cropperModal');
const confirm = document.querySelector('#confirm');
const cancel = document.querySelector('#cancel');

const profileModal = document.querySelector('.profileModal');
const testImage = document.querySelector('#testImage');
const testBtn = document.querySelector("#testBtn");
const deleteBtn = document.querySelector('#deleteBtn');
const previewImage = document.querySelector('#previewImage');
const fileInput = document.querySelector('#file-input');


const OpenModalBtn = document.querySelector('#open-modal');
const CancleModalBtn = document.querySelector('#cancle-modal');
const uploadBtn = document.querySelector("#uploadBtn");

// 이미지 파일을 선택할 시 처리
fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      
      // 파일 읽기가 완료되었을 때 
      reader.onload = function(e) {
          previewImage.src = e.target.result; // 이미지 소스를 설정
          previewImage.style.display = 'block'; // 이미지를 화면에 표시

          if (cropper) {
              cropper.destroy(); // 기존 cropper 인스턴스 제거
          }
          
          cropper = new Cropper(previewImage, {
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

// 크로퍼 모달 열기 및 프로필 이미지 설정
confirm.addEventListener('click', () => {
  if (cropper) {
      const canvas = cropper.getCroppedCanvas({
          width: 150,
          height: 150,
          fillColor: '#fff' // 투명한 배경 대신 흰색 배경을 채움
      });

      // 자른 이미지를 프로필 이미지로 설정
      testImage.src = canvas.toDataURL();
      cropperModal.style.display = "";
  }
});

// 크로퍼 모달 닫기
cancel.addEventListener('click',()=>{
  cropperModal.style.display = "";
})

// 프로필 모달 열기
OpenModalBtn.addEventListener("click", ()=>{
  profileModal.style.display="flex";
});

// 프로필 모달 닫기
CancleModalBtn.addEventListener("click",()=>{
  profileModal.style.display="none";
})

// 선택한 파일 업로드 버튼
uploadBtn.addEventListener("click",()=>{
  if( cropperModal.style.display === ""){
    cropperModal.style.display = "flex";
  }else{
    console.log("error | cropperModal");
  }
  profileModal.style.display="none";
  fileInput.click();
})

// 프로필 이미지 삭제 버튼
deleteBtn.addEventListener('click', ()=>{
  console.log("reset img");
  testImage.src = "/img/profile.png"; // 이미지 소스를 설정
})


// 테스트 : 다른 모달 버튼에서 파일 업로드 처리
// testBtn.addEventListener('click',() => {
//   if( cropperModal.style.display === ""){
//     cropperModal.style.display = "flex";
//   }else{
//     console.log("error | cropperModal");
//   }
//   fileInput.click();
// })  