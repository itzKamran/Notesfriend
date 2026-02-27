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
  2:[
    {
      name:"Programming Fundamentals",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
     {
      name:"Programming Fundamentals",
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
      name:"Cs226-Database Management System",
      imp:"Important Loops and Arrays Questions",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["dQw4w9WgXcQ"]
    },
    {
      name:"Eng-223 MIL",
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
      classroom:"#",
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
      classroom:"https://classroom.google.com/c/NzkxMTg5MjUzNTQx",
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
      classroom:"https://classroom.google.com/c/Nzg4OTk4NTk4NjE4",
      videos:["UrsmFxEIp5k","t2_Q2BRzeEE"]
    },
    {
      name:"Cs-506(B) Java Programming-I",
      imp:"https://docs.google.com/document/d/1r7QgLStDMeA1FdjJ66QMoMSEu8n9jw2e/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzgzMTAzMjg4MDEw",
      videos:["playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop","xTtL8E4LzTQ"]
    }
  ],
  6:[
    {
      name:"Cs-601 Operating System",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/NzkzMDIxNjE0MDEw",
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
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"https://classroom.google.com/c/ODM3ODE3NDc2OTYy",
      videos:["playlist?list=PLqleLpAMfxGCUpDRFUnLKeDrgBsPOwTQK"]
    },
    {
      name:"Cs-604 Theoretical Computer Science",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:[""]
    },
    {
      name:"Cs-605 Python Programming-II",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["UrsmFxEIp5k","t2_Q2BRzeEE"]
    },
    {
      name:"Cs-606 Java Programming-II",
      imp:"https://docs.google.com/document/d/1HkHJutAF6u_hIj4-pe-TjPXSu3kDORZV/edit?usp=drive_link&ouid=115459576305560944580&rtpof=true&sd=true",
      pdf:"Sorry,Notesfriend Can't add Notes Join Us Teacher Classroom",
      classroom:"#",
      videos:["Tc1RVGZUXbU"]
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
"BCom":{
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
      videos:["playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"]
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
      <p>${subject.pdf}</p>
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





