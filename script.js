const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

menuBtn.onclick=()=>{
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};

overlay.onclick=()=>{
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

/* ================= DATA ================= */

const facultyData = {

"BSc CS":{
   1:[
    {
      name:"MT-111 Calculas",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODAzNTI4NzI2NDc0?cjc=dfwy3lt3",
      videos:["playlist?list=PLyZhC9kb9O7-ExmOjI8gpso837kKPNeLU"]
    },
    {
      name:"MT-112 Prac On Matrix Algebra",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODAzNTI4NzI2NDc0?cjc=dfwy3lt3",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"CS-111 C Programming-I",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["irqbmMNs2Bo"]
    }, 
    {
      name:"El-111 Introduction to Electronics",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"CS-115 IKS",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODAzNTI4NzI2NDc0?cjc=dfwy3lt3",
      videos:["dQw4w9WgXcQ"]
    },
  ],
  2:[
    {
      name:"MT-121 Theory of Equations",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODAzNTI4NzI2NDc0?cjc=dfwy3lt3",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"MT-122 Prac on Co-Ordinate Geometry",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODAzNTI4NzI2NDc0?cjc=dfwy3lt3",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"El-121 Electronics Semiconductor Devices",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"PH-121 ",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"CS-121 C Programming-II",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["irqbmMNs2Bo"]
    },   
    {
      name:"CI-125 Consititution of india",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODAzNTI4NzI2NDc0?cjc=dfwy3lt3",
      videos:["7sIL19Xa1U","JqUiuviG9mk","b55f1qEhrFs","ITk6LWmwZnk"]
    },
  ],
  3:[
    {
      name:"Cs-211 Data Structure-I",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"CS-212 Vedic Mathematics",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODA0NTMwODIyNDU2?cjc=q7w5ehhe",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"CS-214 Linear Programming Problem",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODA0NTMwODIyNDU2?cjc=q7w5ehhe",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"EL-214 Digital Circuit And Application",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"El-215 Fundamentals of Arduino",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
  ],
  4:[
    {
      name:"CS-221 Data Structure-II",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"MT-223 Group Theory",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODA0NTMwODIyNDU2?cjc=q7w5ehhe",
      videos:[" playlist?list=PLU6SqdYcYsfKaQARA0_vnhuXbxmuOQVFF"]
    },
    {
      name:"MT-224 Theroy of Equation",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODA0NTMwODIyNDU2?cjc=q7w5ehhe",
      videos:["playlist?list=PLmthGxpQ-7KLREsD35v0G7pyvb6qht8QC","playlist?list=PLU6SqdYcYsfLkBvdDM5J_Ss9a2-55lGVh"]
    },
    {
      name:"CS-226 Database Management System",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"ElE-223 MIL",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
  ],
  5:[
    {
      name:"Cs-501 System Programming",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzkyMDIzODMzNTAw?cjc=lbiih5l4",
      videos:["playlist?list=PLCSAAIuWuhN8NSoaQK-ChB9ed8udxp7dg","playlist?list=PLPIwNooIb9vh9l2_rk2OGAWYcA9b8X9Y5"]
    },
    {
      name:"Cs-502 Database Management System",
      imp:"https://docs.google.com/document/d/1p6jIiTIAwVLoQgrt3VztfoRfE5L5Hqt3/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["playlist?list=PLqleLpAMfxGDEClbx9ymd-KWDDJrx_W8C","playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX","dl00fOOYLOM"]
    },
    {
      name:"Cs-503 Software Engineering",
      imp:"https://docs.google.com/document/d/1oKpmTRWwae4m6mE1yONbT2qVmmgPEAc1/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzkxMTg5MjUzNTQx?cjc=ph5dwgil",
      videos:["playlist?list=PLqleLpAMfxGB1g0xlYj2H6lyY2Q2ku7p9"]
    },
    {
      name:"Cs-504 Computer Graphics Aided",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["playlist?list=PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T"]
    },
    {
      name:"Cs-505 Python Programming-I",
      imp:"https://docs.google.com/document/d/1r7QgLStDMeA1FdjJ66QMoMSEu8n9jw2e/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzgzMTAzMjg4MDEw?cjc=46bannxv",
      videos:["UrsmFxEIp5k","t2_Q2BRzeEE"]
    },
    {
      name:"Cs-506(B) Java Programming-I",
      imp:"https://docs.google.com/document/d/1r7QgLStDMeA1FdjJ66QMoMSEu8n9jw2e/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzgzMTAzMjg4MDEw?cjc=46bannxv",
      videos:["playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","xTtL8E4LzTQ"]
    },
  ],
  6:[
    {
      name:"Cs-601 Operating System",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzkzMDIxNjE0MDEw?cjc=7peqhzez",
      videos:["playlist?list=PL23dd-8zssJDbCZI4Rle3vuQokIAdiDdB"]
    },
    {
      name:"Cs-602 R-DBMS",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODQxMTQwMDk3MDg2?cjc=svz5o424",
      videos:["playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"]
    },
    {
      name:"Cs-603 Computer Network",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"https://drive.google.com/drive/folders/1xt_s8ZnV5CRZGVRSMsSON-iyf204kz38?usp=drive_link",
      classroom:"",
      videos:["playlist?list=PLqleLpAMfxGCUpDRFUnLKeDrgBsPOwTQK"]
    },
    {
      name:"Cs-604 Theoretical Computer Science",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"https://drive.google.com/drive/folders/13_RkYTiOsuufvao-ggIyB29udQ5bXLPJ?usp=drive_link",
      classroom:"#",
      videos:[""]
    },
    {
      name:"Cs-605 Python Programming-II",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODM3ODE3NDc2OTYy?cjc=fwkxgapv",
      videos:["UrsmFxEIp5k","t2_Q2BRzeEE"]
    },
    {
      name:"Cs-606 Java Programming-II",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"https://drive.google.com/drive/folders/1CPY07muZueW00m8zvk-584VBy7eQLpQT?usp=drive_link",
      classroom:"#",
      videos:["playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","xTtL8E4LzTQ"]
    },
  ],
},
"BCA":{
  2:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
 4:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
6:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],

},
"BSc Chem":{
  6:[
    {
      name:"CH-606 Spectroscopy",
      imp:"Pointer Important Questions",
      pdf:"https://drive.google.com/drive/folders/1ByDz5H4Gijla6enqLkSlXqgok5ysvG1A?usp=drive_link",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    
 3:[
    {
      name:"CH-211 Physical and Inorganic Chemistry-I",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"CH-212 Ancient Indian Chemistry-I",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"CH-214 Physical and Inorganic Chemistry",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"CH-218 Organic and Analytical Chemistry-I",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
4:[
    {
      name:"CH-221 Physical and Inorganic-II",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"CH-226 Organic and Analytical Chemistry-II ",
      imp:"Pointer Important Questions",
      pdf:"https://drive.google.com/drive/folders/1k8rj0_6gF2RutlOk4TItagmkOSFjzjlH?usp=drive_link",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  
},

"B Pharma":{
  2:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
 4:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
6:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
  
},
"BSc Biotech":{
  2:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
 4:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
6:[
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
    {
      name:"C Programming",
      imp:"Pointer Important Questions",
      pdf:"#",
      classroom:"#",
      videos:["9bZkp7q19f0"]
    },
  ],
},

};

let selectedFaculty="";
let selectedSemester="";

/* ================= OPEN FACULTY ================= */

function openFaculty(name){
  selectedFaculty=name;

  document.getElementById("semesterSection").style.display="block";
  document.getElementById("subjectSection").style.display="none";

  document.getElementById("facultyTitle").innerText=
    name+" - Select Semester";

  window.scrollTo({
    top:document.getElementById("semesterSection").offsetTop,
    behavior:'smooth'
  });
}

/* ================= SEM CLICK ================= */

document.querySelectorAll(".sem-card").forEach(card=>{
  card.addEventListener("click",()=>{
    selectedSemester=card.innerText.split(" ")[1],[5];
    showSubjects();
  });
});

/* ================= SHOW SUBJECTS ================= */

function showSubjects(){

  const subjects =
  facultyData[selectedFaculty][selectedSemester];

  const subjectSection=document.getElementById("subjectSection");
  const container=document.querySelector(".notes-container");
  const title=document.getElementById("subjectTitle");

  subjectSection.style.display="block";

  title.innerText=
  selectedFaculty+" | Semester "+selectedSemester+" Subjects";

  container.innerHTML="";

  subjects.forEach(sub=>{

    container.innerHTML+=`
      <div class="note-card">
        <h4>📘 ${sub.name}</h4>
        <button onclick="openSubject('${sub.name}')">
        Open Subject
        </button>
      </div>`;
  });

  window.scrollTo({
    top:subjectSection.offsetTop,
    behavior:'smooth'
  });
}

/* ================= SUBJECT DETAIL ================= */

function openSubject(name){

  const subject =
  facultyData[selectedFaculty][selectedSemester]
  .find(s=>s.name===name);

  const container=document.querySelector(".notes-container");

  /* First video as default */
  let firstVideo = subject.videos[0];

  let playlistHTML="";
  subject.videos.forEach(v=>{
    playlistHTML+=`
      <div class="playlist-item"
        onclick="changeVideo('${v}')">
        ▶ Lecture
      </div>`;
  });

  container.innerHTML=`

  <div class="subject-details">

    <div class="note-card">
        <h4>📌 Important Q/A</h4>
      <a href="${subject.imp}" target="_blank">
      <button>Download Notes</button>
      </a>
    </div>

    <div class="note-card">
      <h4>📄 Notes PDF </h4>
      <a href="${subject.pdf}" target="_blank">
        <button>View Notes</button>
    </div>



    <div class="note-card">
      <h4>🏫 Teacher Classroom</h4>
      <a href="${subject.classroom}" target="_blank">
        <button>Join Classroom</button>
      </a>
    </div>

  </div>

  <!-- PLAYLIST STYLE -->
  <div class="playlist-container">

    <div class="main-video">
      <iframe id="mainVideo"
        src="https://www.youtube.com/embed/${firstVideo}"
        allowfullscreen>
      </iframe>
    </div>

    <div class="playlist">
      ${playlistHTML}
    </div>

  </div>

  <button onclick="showSubjects()">⬅ Back</button>

  `;
}
function changeVideo(videoID){
  document.getElementById("mainVideo").src =
  "https://www.youtube.com/embed/" + videoID;
}
/* ================= SEARCH SYSTEM ================= */

document.getElementById("searchInput").addEventListener("keyup", function(){

  let value = this.value.toLowerCase();

  if(value===""){
    return;
  }

  let results=[];

  for(let faculty in facultyData){

    for(let sem in facultyData[faculty]){

      facultyData[faculty][sem].forEach(sub=>{

        if(sub.name.toLowerCase().includes(value)){
          results.push({
            faculty:faculty,
            semester:sem,
            subject:sub.name
          });
        }

      });

    }

  }

  showSearchResults(results,value);

});
function showSearchResults(results,value){

  const container=document.querySelector(".notes-container");
  const subjectSection=document.getElementById("subjectSection");
  const title=document.getElementById("subjectTitle");

  subjectSection.style.display="block";

  title.innerText="Search Results for: "+value;

  container.innerHTML="";

  if(results.length===0){
    container.innerHTML="<p>No Subject Found</p>";
    return;
  }

  results.forEach(r=>{

    container.innerHTML+=`
      <div class="note-card">
        <h4>${r.subject}</h4>
        <p>${r.faculty} | Semester ${r.semester}</p>
        <button onclick="
          selectedFaculty='${r.faculty}';
          selectedSemester='${r.semester}';
          openSubject('${r.subject}');
        ">
          Open
        </button>
      </div>
    `;
  });

  window.scrollTo({
    top:subjectSection.offsetTop,
    behavior:'smooth'
  });

}

function copyPrompt(id){
let text=document.getElementById(id).innerText;
navigator.clipboard.writeText(text);
alert("Prompt Copied ✅");

  function openGemini(){
window.open("https://gemini.google.com/","_blank");
}
}




















