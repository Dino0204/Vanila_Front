const imageUpload = document.getElementById('imageUpload');
const imageProfile = document.getElementById('profileImage');

imageUpload.addEventListener('change', (e)=>{
  const oneFile = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () =>{
    imageProfile.src = reader.result;
  }
  reader.readAsDataURL(oneFile);

  
})

// 기타 파일 
// const allFiles = e.target.files;
// if(allFiles.length > 0){
//   for(const file of allFiles){
//     console.log('파일:',e.target.files[0]);
//     console.log('파일 이름:',file.name);
//     console.log('파일 크기:',file.size);
//     console.log('파일 유형:',file.type);
//   }
// }