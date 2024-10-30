
const originImage = document.getElementById('originImage');
const profileImage = document.getElementById('profileImage');
const imageUpload = document.getElementById('imageUpload');

const cropBtn = document.getElementById('crop-button');
const CropperComponent = document.getElementById('Cropper');

function loadCropper(){
  const cropper = new Cropper(originImage, {
    aspectRatio: 1, 
    viewMode: 1,
    cropBoxResizable: false, // 크롭 박스 크기 조정 
    dragMode: 'none', // 새 크롭 박스 이동 
  });
  
  cropBtn.addEventListener('click', ()=> {
    const canvas = cropper.getCroppedCanvas({width: 150, height: 150});
    profileImage.src = canvas.toDataURL(); // 조정한 이미지를 프로필 이미지로 설정
  });


  // 서버 전송용 코드
  // canvas.toBlob(function(blob) {
  //     const formData = new FormData();
  //     formData.append('profileImage', blob);

  //     // AJAX 요청을 사용해 서버에 이미지를 업로드
  //     fetch('/upload-profile-image', {
  //         method: 'POST',
  //         body: formData,
  //     }).then(response => {
  //         console.log('Profile image uploaded successfully');
  //     }).catch(error => {
  //         console.error('Error uploading profile image:', error);
  //     });
  // });

};


imageUpload.addEventListener('change', (e)=>{
  const oneFile = e.target.files[0];
  const reader = new FileReader();
  console.log('changed');
  reader.onload = () =>{
    originImage.src = reader.result;
    CropperComponent.style.display = "block";
    loadCropper();
  }
  reader.readAsDataURL(oneFile);

  
})
