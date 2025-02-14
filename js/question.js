document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const questionContainer = document.querySelector(".question-container");
    const congratsContainer = document.querySelector(".congrats-container");
    const congratsVideo = document.getElementById("response-video");
  
    // Audio effects for button clicks.
    const clickSound = new Audio("./assets/audio/bubble_pa2Gn0A.mp3");
    const noSound = new Audio("./assets/audio/please2.m4a");  // Sound effect for "No" button
  
    // Function to spawn a floating heart in the congrats page.
    function spawnHeart() {
      const heart = document.createElement("div");
      heart.classList.add("floating-heart");
      // Inline SVG for the heart.
      heart.innerHTML = `
        <svg width="81" height="69" viewBox="0 0 81 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.25932 27.061C-0.213374 19.8522 -0.953525 10.5795 5.01085 5.84158C10.8776 1.17431 19.8364 3.91085 25.4873 8.83944C31.0916 13.7162 34.887 20.2933 38.5776 26.7428C41.527 20.7155 45.1023 15.0012 49.2309 9.70397C52.0456 6.09814 55.3781 2.52376 59.8006 1.34248C67.4138 -0.693733 75.2102 5.43178 78.1666 12.7391C79.8861 16.9856 80.4542 21.6965 79.7952 26.231C78.4839 35.2573 72.5644 42.9214 66.2076 49.4712C60.6216 55.2257 54.5327 60.4922 48.0309 65.1887C45.8378 66.7729 43.5101 68.3292 40.85 68.823C34.0256 70.0868 22.5209 57.6977 18.0945 53.0407C11.0546 45.6343 5.57757 36.7336 2.25932 27.061" fill="#FC1515"/>
        </svg>
      `;
      // Random horizontal position
      heart.style.left = Math.random() * 100 + "vw";
      // Randomize animation duration for variety (3-5 seconds)
      heart.style.animationDuration = (3 + Math.random() * 2) + "s";
      // Append the heart to the heart container within the congrats container.
      const heartContainer = document.querySelector(".heart-container");
      heartContainer.appendChild(heart);
  
      // Remove the heart after animation ends.
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }
  
    // Variable to hold the heart spawning interval ID (if needed to clear later)
    let heartInterval;
  
    // When "Yes" is clicked:
    yesBtn.addEventListener("click", function () {
      // Play click sound
      clickSound.currentTime = 0;
      clickSound.play();
  
      // Animate out the question container
      questionContainer.classList.add("hide");
  
      // After the fade-out animation (300ms), hide question container,
      // show congratulatory container, play the video, and start floating hearts.
      setTimeout(() => {
        questionContainer.style.display = "none";
        congratsContainer.classList.add("show");
  
        // Play the congratulatory video.
        congratsVideo.play();
  
        // Start spawning hearts every 500ms.
        heartInterval = setInterval(spawnHeart, 500);
      }, 300);
    });
  
    // When "No" is clicked, simply play the no sound effect.
    noBtn.addEventListener("click", function () {
      noSound.currentTime = 0;
      noSound.play();
    });
  });
  