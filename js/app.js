document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const muteBtn = document.getElementById("mute-btn");
    // Using querySelector to select a single element.
    const svg1 = document.querySelector(".svg-1");
    const svg2 = document.querySelector(".svg-2");
    const proceedBtn = document.querySelector(".proceed-btn");
    const clickSound = new Audio("./assets/audio/bubble_pa2Gn0A.mp3");
  
    // Auto-play audio when the page loads
    audio.play().catch(() => console.log("Autoplay blocked"));
  
    muteBtn.addEventListener("click", function () {
        clickSound.currentTime = 0;
        clickSound.play();
      if (audio.muted) {
        // Unmute audio
        audio.muted = false;
        svg1.style.opacity = "1"; // Show unmute icon
        svg2.style.opacity = "0"; // Hide mute icon
      } else {
        // Mute audio
        audio.muted = true;
        svg1.style.opacity = "0"; // Hide unmute icon
        svg2.style.opacity = "1"; // Show mute icon
      }
    });
  
    proceedBtn.addEventListener("click", function () {
        clickSound.currentTime = 0;
        clickSound.play();

      // slight delay before redirecting
      setTimeout(() => {
        window.location.href = "question.html"; // Change to your actual target page
      }, 100);
    });


    function spawnHeart() {
        console.log('Spawning heart...');
        // Create a new div for the heart
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
      
      
        heart.innerHTML = `
    <svg width="81" height="69" viewBox="0 0 81 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.25932 27.061C-0.213374 19.8522 -0.953525 10.5795 5.01085 5.84158C10.8776 1.17431 19.8364 3.91085 25.4873 8.83944C31.0916 13.7162 34.887 20.2933 38.5776 26.7428C41.527 20.7155 45.1023 15.0012 49.2309 9.70397C52.0456 6.09814 55.3781 2.52376 59.8006 1.34248C67.4138 -0.693733 75.2102 5.43178 78.1666 12.7391C79.8861 16.9856 80.4542 21.6965 79.7952 26.231C78.4839 35.2573 72.5644 42.9214 66.2076 49.4712C60.6216 55.2257 54.5327 60.4922 48.0309 65.1887C45.8378 66.7729 43.5101 68.3292 40.85 68.823C34.0256 70.0868 22.5209 57.6977 18.0945 53.0407C11.0546 45.6343 5.57757 36.7336 2.25932 27.061" fill="#FC1515"/>
    </svg>
        `;
      
        // Set a random horizontal position (using viewport width units)
        heart.style.left = Math.random() * 100 + 'vw';
      
        // Randomize the animation duration for variety (between 3 and 5 seconds)
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
      
        // Append the heart to the container
        document.querySelector('.heart-container').appendChild(heart);
      
        // Remove the heart element after the animation finishes
        heart.addEventListener('animationend', () => {
          heart.remove();
        });
      }
      
      // Create new hearts every 500 milliseconds
      setInterval(spawnHeart, 500);
      
  });
  