const stories = [
  { id: 1, src: "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhfGVufDB8fDB8fHww" },
  { id: 2, src: "https://images.unsplash.com/photo-1519955266818-0231b63402bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhfGVufDB8fDB8fHww" },
  { id: 3, src: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGluZGlhfGVufDB8fDB8fHww" },
  { id: 4, src: "https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxpbmRpYXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, src: "https://images.unsplash.com/photo-1500614922032-b6dd337b1313?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGluZGlhfGVufDB8fDB8fHww" },
  { id: 6, src: "https://images.unsplash.com/photo-1604491671692-bb9413a6003b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxpbmRpYXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, src: "https://plus.unsplash.com/premium_photo-1682092674304-f126a5cbb656?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGluZGlhfGVufDB8fDB8fHww" },
];

const storyBar = document.querySelector(".story-bar");
const storyViewer = document.querySelector(".story-viewer");
const storyImage = document.getElementById("story-image");
const progressBar = document.querySelector(".progress-bar");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentStory = 0;
let timer;

function createThumbnails() {
  stories.forEach((story, index) => {
    const img = document.createElement("img");
    img.src = story.src;
    img.addEventListener("click", () => {
      openStory(index);
    });
    storyBar.appendChild(img);
    
  });
}

function openStory(index) {
  currentStory = index;
  storyImage.src = stories[currentStory].src;
  storyViewer.classList.remove("hidden");
  progressBar.style.animation = "none"; 
  void progressBar.offsetWidth; 
  progressBar.style.animation = "fill 5s linear forwards";

  clearTimeout(timer);
  timer = setTimeout(() => {
    nextStory();
  }, 5000);
}

function closeStory() {
  storyViewer.classList.add("hidden");
  clearTimeout(timer);
}

storyViewer.addEventListener("click", (e) => {
  if (e.target === storyViewer) {
    closeStory();
  }
});

function nextStory() {
  if (currentStory < stories.length - 1) {
    openStory(currentStory + 1);
  } else {
    closeStory();
  }
}

function prevStory() {
  if (currentStory > 0) {
    openStory(currentStory - 1);
  }
}

nextBtn.addEventListener("click", nextStory);
prevBtn.addEventListener("click", prevStory);

createThumbnails();