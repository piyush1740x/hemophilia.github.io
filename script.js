let slideIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  const offset = -slideIndex * 100;
  document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

setInterval(() => {
  changeSlide(1);
}, 7000);

const videos = ["vid.mp4","vid2.mp4", "vid3.mp4","vid1.mp4","vid5.mp4","vid7.mp4","vid8.mp4"];
let currentVideoIndex = 0;
const videoPlayer = document.getElementById("video-player");

function loadCurrentVideo() {
  videoPlayer.src = videos[currentVideoIndex];
  videoPlayer.load();
}

document.getElementById("next-btn").addEventListener("click", function() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadCurrentVideo();
});

document.getElementById("prev-btn").addEventListener("click", function() {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  loadCurrentVideo();
});

loadCurrentVideo();



