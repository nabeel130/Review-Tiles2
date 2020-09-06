const reviews = [
  {
    id: 1,
    name: "Farhan",
    job: "ui/ux developer",
    img: "https://i.pinimg.com/236x/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2--headshot-photography-men-photography.jpg",
    text: "fddaigf"
  },
  {
    id: 2,
    name: "Nazeeb",
    job: "Editor",
    img: "https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-light-styling-min.jpg",
    text: "fddaigf"
  },
  {
    id: 3,
    name: "Nabeel km",
    job: "MERN stack dev",
    img: "images/mypic.jpg",
    text: "fddaigf"
  },
  {
    id: 4,
    name: "Sabeel",
    job: "nursing",
    img: "https://thumbs.dreamstime.com/b/business-concept-happy-professional-african-american-businessman-confident-arms-crossed-business-concept-happy-professional-110355991.jpg",
    text: "fddaigf"
  },
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded" , function(){
  showPerson();
});

//show person based on item

function showPerson(){

  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}

//show next prson
nextBtn.addEventListener("click" , function(){
  currentItem++;
  if(currentItem > reviews.length-1){
    currentItem = 0;
  }
  showPerson();
})

//show previous prson
prevBtn.addEventListener("click" , function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length-1;
  }
  showPerson();
});

//show random person
randomBtn.addEventListener("click" , function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})



