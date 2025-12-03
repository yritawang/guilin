// script.js

// ============================================
// REPLACE YOUR IMAGES HERE (18 images total)
// ============================================
// Add your image file paths or URLs in order
const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg',
  'images/image9.jpg',
  'images/image10.jpg',
  'images/image11.jpg',
  'images/image12.jpg',
  'images/image13.jpg',
  'images/image14.jpg',
  'images/image15.jpg',
  'images/image16.jpg',
  'images/image17.jpg',
  'images/image18.jpg', 
];

// ============================================
// REPLACE POEM 1 HERE (18 lines total)
// ============================================
// Each line corresponds to an image in the same order
const poem1 = [
  'I\'ve been looking at photos of Guilin',
  'I found them when I scrolled through my feed.\nThey are from 2009.',
  'I think it was because I was looking for photos of 2000s Guangzhou* \n*My hometown.',
  'Since I left at 5, I don’t really remember what my Guangzhou looked like.',
  'But I don’t like looking at photos of Guilin.',  
  'I’m not sure why, The two cities look pretty similar during this time. \nThe train station, the mall, the McDonald’s. \nBut the similarity is what throws me off.',
  'I think that’s because I know that’s what he saw',
  'So I try looking for photos of Guangzhou,',
  'And I try to find \n*in the billboards \n*in the faces of locals \n*in the bags of shoppers \n*in the tint of the taxis \n*in the smiles of children \n*in the design of the road signs',
  'What did   he see   that made him   want to   leave?',
  'The apartments reminds me of the calligraphy classes I took when I was 7. \nThe malls rekindle memories of excited Saturdays spent wandering the aisles.',
  'It makes me think that he must not have loved them with me. \nThat when he dropped me off at my classes, held my hand while walking the stores. \nIt must not have been enough.',
  'Guangzhou and Guilin look nearly identical in these photos.',
  'That means the reason he left was because of something else* \n*Because of escaping escalating responsibilities \n*Because of dissatisfaction \n*Because of–',
  'I hated when he came back. \nBecause he never explained to me why he left.',
  'And now I’m here, looking at these photos.',
  'I went back to Guilin last August. \nThe city draped its humidity over me and slowly pierced my skin, drawing blood.',
  'I don’t wish to go back',
];

// ============================================
// REPLACE POEM 2 HERE (18 lines total)
// ============================================
// These lines will be paired with images in REVERSE order
// So poem2[0] will appear with images[17], poem2[1] with images[16], etc.
const poem2 = [
  'there is a silent sacrilegious assailment these states have set up on me',
  ' always must wonder', 
  'where am I supposed to be?',
  'when I return to my motherland \nwhen I see the hotel that my parents met in\nwhen I see the apartment my parents bought when they were newlyweds\nwhen I eat the food of their city\nwhen I see the village that should have raised me', 
  'anemoia',
  'why did you come here?',
  'my parents did not come to this educated\nthey did not come young and childless\nmy mom followed my father into this country in 2001,',
  'how did you feel?', 
  'coming from a city where your mother was once the mayor\nwhere you were able to afford a western car, a japanese watch, in a city without\nindustry, untouched by the impieties of a merchant class\nwhere there was a village to ease the perilous monotony of parenting', 
  'what were u searching for?',
  'what were u running from?',
  'perhaps I am the answer, perhaps not.', 
  'i was still 1 year away when my sister couldn’t get a visa to come to this country', 
  'i was still 2 years away when my grandfather, my mother’s father, died and she could not go back to visit ', 
  'i was still 4 years away when they first came, 4 years spent away from their daughter, who about her mom and dad must have wondered', 
  'what are you searching for and how could you and why are you gone and where did you go?',
  'when I visit Guilin, \nthis beautiful eastern city, \nthe only city that has ever felt like home,\na city that feels so calm, \nso full, so happy to me',
  'i feel it all.' 
];



// ============================================
// INTRO PAGE FUNCTIONALITY
// ============================================

const introPage = document.getElementById('introPage');
const mainContent = document.getElementById('mainContent');
const imageStack = document.getElementById('imageStack');

// Create scattered image stack
function createImageStack() {
  // Random positions and rotations for scattered effect
  const positions = [
    { top: '50%', left: '30%', rotate: -12, zIndex: 1, delay: 0 },
    { top: '45%', left: '55%', rotate: 8, zIndex: 2, delay: 0.05 },
    { top: '35%', left: '40%', rotate: -5, zIndex: 3, delay: 0.1 },
    { top: '55%', left: '45%', rotate: 15, zIndex: 4, delay: 0.15 },
    { top: '40%', left: '25%', rotate: -18, zIndex: 5, delay: 0.2 },
    { top: '50%', left: '60%', rotate: 6, zIndex: 6, delay: 0.25 },
    { top: '30%', left: '50%', rotate: -8, zIndex: 7, delay: 0.3 },
    { top: '60%', left: '35%', rotate: 12, zIndex: 8, delay: 0.35 },
    { top: '42%', left: '48%', rotate: -3, zIndex: 9, delay: 0.4 },
    { top: '48%', left: '38%', rotate: 10, zIndex: 10, delay: 0.45 },
    { top: '52%', left: '52%', rotate: -7, zIndex: 11, delay: 0.5 },
    { top: '38%', left: '45%', rotate: 14, zIndex: 12, delay: 0.55 },
    { top: '58%', left: '42%', rotate: -10, zIndex: 13, delay: 0.6 },
    { top: '44%', left: '55%', rotate: 4, zIndex: 14, delay: 0.65 },
    { top: '46%', left: '32%', rotate: -15, zIndex: 15, delay: 0.7 },
    { top: '54%', left: '50%', rotate: 9, zIndex: 16, delay: 0.75 },
    { top: '36%', left: '48%', rotate: -6, zIndex: 17, delay: 0.8 },
    { top: '50%', left: '46%', rotate: 2, zIndex: 18, delay: 0.85 }
  ];

  images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'stacked-image';
    img.style.top = positions[index].top;
    img.style.left = positions[index].left;
    img.style.transform = `translate(-50%, -50%) rotate(${positions[index].rotate}deg)`;
    img.style.setProperty('--rotate', `${positions[index].rotate}deg`);
    img.style.zIndex = positions[index].zIndex;
    img.style.animationDelay = `${positions[index].delay}s`;
    imageStack.appendChild(img);
  });
}

// Click to start with staggered fade
imageStack.addEventListener('click', () => {
  introPage.classList.add('fade-out');
  mainContent.style.display = 'block';
  
  // Wait for intro fade out to complete, then fade in main content
  setTimeout(() => {
    mainContent.classList.add('fade-in');
    updatePage();
  }, 400);
  
  // Remove intro page from DOM after transition
  setTimeout(() => {
    introPage.style.display = 'none';
  }, 1400);
});

// ============================================
// MAIN CODE (No need to modify below)
// ============================================

let currentPage = 0;
let currentPoem = 1;
let flippedCards = { left: false, right: false };
let collectedLines = [];

const cards = {
  left: document.querySelector('[data-card="left"]'),
  right: document.querySelector('[data-card="right"]')
};

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const poem1Btn = document.getElementById('poem1Btn');
const poem2Btn = document.getElementById('poem2Btn');
const aboutBtn = document.getElementById('aboutBtn');
const aboutOverlay = document.getElementById('aboutOverlay');
const closeAbout = document.getElementById('closeAbout');
const pageIndicator = document.getElementById('pageIndicator');
const collectedLinesEl = document.getElementById('collectedLines');
const container = document.querySelector('.container');

function getCurrentPoem() {
  return currentPoem === 1 ? poem1 : poem2;
}

function getCurrentImages() {
  if (currentPoem === 1) {
    return images;
  } else {
    // For poem 2: reverse, then replace image1 with image20 and image2 with image19
    let poem2Images = [...images].reverse();
    
    // After reversing, image1 is at position 17 and image2 is at position 16
    poem2Images[17] = 'images/image20.jpg';  // Replace image1 with image20
    poem2Images[16] = 'images/image19.jpg';  // Replace image2 with image19
    
    return poem2Images;
  }
}

function updatePage() {
  const poem = getCurrentPoem();
  const currentImages = getCurrentImages();
  const leftIndex = currentPage * 2;
  const rightIndex = currentPage * 2 + 1;

  // Add fade transition
  container.classList.add('page-transition');

  setTimeout(() => {
    // Update left card
    cards.left.querySelector('.card-image').src = currentImages[leftIndex];
    cards.left.querySelector('.poem-line').textContent = poem[leftIndex];

    // Update right card
    if (rightIndex < currentImages.length) {
      cards.right.querySelector('.card-image').src = currentImages[rightIndex];
      cards.right.querySelector('.poem-line').textContent = poem[rightIndex];
      cards.right.style.opacity = '1';
    } else {
      cards.right.style.opacity = '0';
    }

    // Reset flipped state
    cards.left.classList.remove('flipped');
    cards.right.classList.remove('flipped');
    flippedCards = { left: false, right: false };

    // Update navigation
    prevBtn.classList.toggle('disabled', currentPage === 0);
    nextBtn.classList.toggle('disabled', currentPage >= Math.floor(images.length / 2) - 1);

    // Update page indicator
    pageIndicator.textContent = `${currentPage + 1} / ${Math.ceil(images.length / 2)}`;

    // Remove transition class
    setTimeout(() => {
      container.classList.remove('page-transition');
    }, 50);
  }, 200);
}

function addCollectedLine(line) {
  if (!collectedLines.includes(line)) {
    collectedLines.push(line);
    const lineEl = document.createElement('div');
    lineEl.className = 'collected-line';
    lineEl.textContent = line;
    collectedLinesEl.appendChild(lineEl);
  }
}

// Card flip interaction
cards.left.addEventListener('click', (e) => {
  e.stopPropagation();
  cards.left.classList.toggle('flipped');
  flippedCards.left = !flippedCards.left;
  
  if (flippedCards.left) {
    const poem = getCurrentPoem();
    addCollectedLine(poem[currentPage * 2]);
  }
});

cards.right.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentPage * 2 + 1 < images.length) {
    cards.right.classList.toggle('flipped');
    flippedCards.right = !flippedCards.right;
    
    if (flippedCards.right) {
      const poem = getCurrentPoem();
      addCollectedLine(poem[currentPage * 2 + 1]);
    }
  }
});

// Section click for navigation
document.querySelector('[data-section="left"]').addEventListener('click', (e) => {
  if (e.target.closest('.card')) return;
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

document.querySelector('[data-section="right"]').addEventListener('click', (e) => {
  if (e.target.closest('.card')) return;
  if (currentPage < Math.floor(images.length / 2) - 1) {
    currentPage++;
    updatePage();
  }
});

// Arrow navigation
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.floor(images.length / 2) - 1) {
    currentPage++;
    updatePage();
  }
});

// Poem toggle with two buttons
poem1Btn.addEventListener('click', () => {
  if (currentPoem !== 1) {
    currentPoem = 1;
    currentPage = 0;
    collectedLines = [];
    collectedLinesEl.innerHTML = '';
    updatePage();
    
    poem1Btn.classList.add('active');
    poem2Btn.classList.remove('active');
    document.body.classList.remove('poem2-active');
  }
});

poem2Btn.addEventListener('click', () => {
  if (currentPoem !== 2) {
    currentPoem = 2;
    currentPage = 0;
    collectedLines = [];
    collectedLinesEl.innerHTML = '';
    updatePage();
    
    poem2Btn.classList.add('active');
    poem1Btn.classList.remove('active');
    document.body.classList.add('poem2-active');
  }
});

// About button functionality
aboutBtn.addEventListener('click', () => {
  aboutBtn.classList.toggle('active');
  aboutOverlay.classList.toggle('active');
});

closeAbout.addEventListener('click', () => {
  aboutBtn.classList.remove('active');
  aboutOverlay.classList.remove('active');
});

// Close overlay when clicking outside the content
aboutOverlay.addEventListener('click', (e) => {
  if (e.target === aboutOverlay) {
    aboutBtn.classList.remove('active');
    aboutOverlay.classList.remove('active');
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && currentPage > 0) {
    currentPage--;
    updatePage();
  } else if (e.key === 'ArrowRight' && currentPage < Math.floor(images.length / 2) - 1) {
    currentPage++;
    updatePage();
  }
});

// Initialize intro page
createImageStack();