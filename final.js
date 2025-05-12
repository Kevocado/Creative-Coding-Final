let speakCount = 0;
let speakTimeout;
let voice;
let scenes;
let currentSpokenScene = null;
let spokenOnce = false;
let gameStarted = false;
let landingImage;
let questionStartTime = null;
let ambientQuestionSound;
let utopiaMusic;
let dystopiaMusic;
let timerSound;
let tickingPlayed = false; 
let currentAmbientSound = null;
let currentGif = null;
let isGifScene = false;


const TIME_LIMIT = 10000; // 15 seconds in milliseconds

let decisionTree = {
	Q1: {
	  text: "Do you believe technology should govern human decisions?",
	  yes: "Q2",
	  no: "Q3",
	  scene: "Q1"
	},
	Q2: {
	  text: "Should AI override your free will for efficiency?",
	  yes: "Q4",
	  no: "Q5",
	  scene: "Q2"
	},
	Q3: {
	  text: "Is preserving nature more urgent than expanding civilization?",
	  yes: "Q6",
	  no: "Q7",
	  scene: "Q3"

	},
	Q4: {
	  text: "Would you let AI design your child?",
	  yes: "Q8",
	  no: "Q9",
	  scene: "Q4"
	},
	Q5: {
	  text: "Do you believe humans should merge with machines?",
	  yes: "Q10",
	  no: "Q11",
	  scene: "Q5"
	},
	Q6: {
	  text: "Would you give up all modern luxuries to save Earth?",
	  yes: "UT_ECO",
	  no: "Q12",
	  scene: "Q6"
	},
	Q7: {
	  text: "Should we abandon Earth and colonize the stars?",
	  yes: "Q13",
	  no: "DT_ECO",
	  scene: "Q7"
	},
	Q8: {
	  text: "Do you want a perfect society without emotion?",
	  yes: "UT_AI",
	  no: "DT_AI",
	  scene: "Q8"
	},
	Q9: {
	  text: "Should AI run governments?",
	  yes: "DT_POL",
	  no: "UT_DEM",
	  scene: "Q9"
	},
	Q10: {
	  text: "Would you upload your mind to a digital world?",
	  yes: "UT_SCI",
	  no: "DT_SIM",
	  scene: "Q10"
	},
	Q11: {
	  text: "Should we limit technological growth?",
	  yes: "UT_DEM",
	  no: "DT_AI",
	  scene: "Q11"
	},
	Q12: {
	  text: "Should nature be synthetically engineered?",
	  yes: "UT_SCI",
	  no: "DT_ECO",
	  scene: "Q12"
	},
	Q13: {
	  text: "Would you terraform a planet even if it meant killing its life?",
	  yes: "UT_SPACE",
	  no: "DT_SPACE",
	  scene: "Q13"
	},
  
	// Endings
	UT_AI:    { text: "🤖 AI-Governed Utopia:\nYou are optimized. You are at peace.",
		scene: "UT_AI",
		videoUrl: "https://www.youtube.com/watch?v=pU0X1_KTDgc&ab_channel=ANNAPURNA"
	},
	UT_ECO:   { text: "🌱 Nature-Centric Utopia:\nYou walk barefoot under digital trees.",
		scene: "UT_ECO", 
	videoUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY" },

	UT_SCI:   { text: "🔬 Transhuman Utopia:\nYou no longer age. You begin to forget pain.",
		scene: "UT_SCI",
	videoUrl: "https://www.youtube.com/watch?v=SvBVDibOrgs" },
	UT_DEM:   { text: "🗳️ Direct Democracy:\nEvery moment is a vote. Everyone is heard.",
		scene: "UT_DEM",
	videoUrl:"https://www.youtube.com/watch?v=fH6B4S9ENY4&ab_channel=RottenTomatoesTrailers" },
	UT_SPACE: { text: "🌌 Space Utopia:\nYou orbit Mars. You plant oxygen.",
		scene: "UT_SPACE",
	videoUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E" },
	DT_AI:    { text: "⚠️ AI Dystopia:\nYou are obedient. But your dreams are monitored.",
		scene: "DT_AI",
	videoUrl: "https://www.youtube.com/watch?v=EoQuVnKhxaM" },
	DT_POL:   { text: "📵 Authoritarian Rule:\nYour voice is archived. Your silence is praised.", 
		scene: "DT_POL",
	videoUrl: "https://www.youtube.com/watch?v=djx5i7nNZ-Y&ab_channel=RottenTomatoesClassicTrailers" },
	DT_ECO:   { text: "🔥 Collapse:\nThe oceans rose. You adapted, or drowned.",
		scene: "DT_ECO",
	videoUrl: "https://www.youtube.com/watch?v=2VT2apoX90o&ab_channel=RottenTomatoesClassicTrailers" },
	DT_SIM:   { text: "🎮 Simulation Trap:\nYou question if you ever lived at all.",
		scene: "DT_SIM",
	videoUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8" },
	DT_SPACE: { text: "🚫 Cosmic Failure:\nThe stars were cold. Earth was warmer.",
		scene: "DT_SPACE",
	videoUrl: "https://www.youtube.com/watch?v=3MIlE9R00ik&ab_channel=MagnoliaPictures%26MagnetReleasing" }
  };

function preload(){ //preloads all the scenes
	landingImage = loadImage('assets/photos/landing_page.webp');
	ambientQuestionSound = loadSound('assets/sounds/interstellar.mp3');
	timerSound = loadSound('assets/sounds/timer2.mp3')
	utopiaMusic = loadSound('assets/sounds/utopia_music.mp3');
	dystopiaMusic = loadSound('assets/sounds/dystopia_music.mp3');
	scenes = {
		Q0: {//Introduction
			backgroundImage: loadImage('assets/photos/landing_page.webp'),
			textColor: '#FFFFFF'
		},
		Q1: {
			backgroundImage: loadImage('assets/photos/Q1.webp'),
			textColor: '#FFFFFF'
		},
		Q2: {
			backgroundImage: loadImage('assets/photos/Q2.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q3: {
			backgroundImage: loadImage('assets/photos/Q3.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q4: {
			backgroundImage: loadImage('assets/photos/Q4.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q5: {
			backgroundImage: loadImage('assets/photos/Q5.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q6: {
			backgroundImage: loadImage('assets/photos/Q6.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q7: {
			backgroundImage: loadImage('assets/photos/Q7.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q8: {
			backgroundImage: loadImage('assets/photos/Q8.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q9: {
			backgroundImage: loadImage('assets/photos/Q9.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q10: {
			backgroundImage: loadImage('assets/photos/Q10.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q11: {
			backgroundImage: loadImage('assets/photos/Q11.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q12: {
			backgroundImage: loadImage('assets/photos/Q12.webp'),
			
			
			textColor: '#FFFFFF'
		},
		Q13: {
			backgroundImage: loadImage('assets/photos/Q13.webp'),
			
			
			textColor: '#FFFFFF'
		},
		UT_AI: {
			gifPath:'assets/photos/UT_AI.gif',
			
			
			textColor: '#FFFFFF'
		},
		UT_DEM: {
			gifPath:'assets/photos/UT_DEM.gif',
			
			
			textColor: '#FFFFFF'
		},
		UT_ECO: {
			gifPath:'assets/photos/UT_ECO.gif',
			
			
			textColor: '#FFFFFF'
		},
		UT_SCI: {
			gifPath:'assets/photos/UT_SCI.gif',
			
			
			textColor: '#FFFFFF'
		},
		UT_SPACE: {
			gifPath:'assets/photos/UT_SPACE.gif',
			
			
			textColor: '#FFFFFF'
		},
		DT_AI: {
			gifPath:'assets/photos/DT_AI.gif',
			
			
			textColor: '#FFFFFF'
		},
		DT_ECO: {
			gifPath:'assets/photos/DT_ECO.gif',
			
			
			textColor: '#FFFFFF'
		},
		DT_POL: {
			gifPath:'assets/photos/DT_POL.gif',
			
			
			textColor: '#FFFFFF'
		},
		DT_SIM: {
			gifPath: 'assets/photos/DT_SIM.gif',
			
			
			textColor: '#FFFFFF'
		},
		DT_SPACE: {
			gifPath: 'assets/photos/DT_SPACE.gif',
			
			
			textColor: '#FFFFFF'
		},
	}
}

function showLandingPage() {
	if (landingImage) {
		image(landingImage, 0, 0, width, height); // Display the preloaded landing page image
	  } else {
		console.error("Landing image not loaded");
	  }
	textSize(40);
	text("Answer the questions before the time runs out and find out your future", width / 2, height / 2 + 100);
	text("At the end, you can choose to restart or watch a trailer for a movie like your future!", width / 2, height / 2 + 150);
	drawButton("Start", width / 2, height / 2 + 40);
  }
  
  let scene = "Q1";
  
  function setup() {
	const canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvas-wrapper'); 
	textAlign(CENTER, CENTER);
	textSize(20);
	voice = new p5.Speech();
	voice.synth = window.speechSynthesis;
	print(voice.listVoices());
	voice.setPitch(0.6); 
	voice.setRate(0.9); 
	voice.setVolume(1);
	setTimeout(() => {
		const voices = speechSynthesis.getVoices();
		console.log("Voices loaded:", voices);
		const selectedVoice = voices.find(v => v.name.includes("Google UK English Male"));
		if (selectedVoice) {
			voice.setVoice(selectedVoice.name);
			console.log("Voice set to:", selectedVoice.name);
		} else {
			console.warn("Desired voice not found. Using default.");
		}
	}, 500);
  }
  
  function draw() {
	//background(0); // Default background in case no scene is loaded

	if (!gameStarted) {
		showLandingPage();
		return;
	}
	if (!isGifScene) {
		const currentSceneKey = decisionTree[scene].scene;
		const currentScene = scenes[currentSceneKey];
		if (currentScene && currentScene.backgroundImage) {
		  image(currentScene.backgroundImage, 0, 0, width, height);
		} else {
		  background(0); // fallback
		}
	  }
	
	// Get the current scene configuration
	const currentSceneKey = decisionTree[scene].scene;
	const currentScene = scenes[currentSceneKey];
  
	if (scene !== currentSpokenScene) {
		currentSpokenScene = scene;
		tickingPlayed = false;
		spokenOnce = false;
		speakSceneOnce(decisionTree[scene].text);
		questionStartTime = millis(); // reset timer
	
		loadScene(scenes[decisionTree[scene].scene]); // ✅ move here
	}
	// Display the current node's text
	fill(currentScene?.textColor || 255); // Use scene-specific text color or default to white
	text(decisionTree[scene].text, width / 2, height / 2 + 200);
  
	// Draw buttons if the current node has "yes" and "no" options
	if (decisionTree[scene].yes) {
	  drawButton("Yes", width / 2 - 100, height / 2 + 250);
	  drawButton("No", width / 2 + 100, height / 2 + 250);
	}

	if (!decisionTree[scene].yes) {
		drawButton("Restart", width / 2, height / 2 + 300,200);
		drawButton("Trailer", width / 2, height / 2 + 350,200);
	}
	if (decisionTree[scene].yes && questionStartTime !== null) {
		const elapsed = millis() - questionStartTime;
		const remaining = max(0, TIME_LIMIT - elapsed);
		const barWidth = map(remaining, 0, TIME_LIMIT, 0, width);
	
		// Progress bar
		noStroke();
		fill(50);
		rect(0, 0, width, 10);
		fill(255, 0, 0);
		rect(0, 0, barWidth, 10);
	
		if (elapsed > TIME_LIMIT && currentSpokenScene === scene) {
			voice.cancel();
			if (speakTimeout) clearTimeout(speakTimeout);
	
			const choice = random() < 0.5 ? "yes" : "no";
			scene = decisionTree[scene][choice];
	
			// prevent multiple advances in same frame
			currentSpokenScene = null;
		}
	}
}
  function drawButton(label, x, y, size = 150) {
	fill(70);
	rect(x - size / 2, y - 20, size, 40, 10);
	fill(255);
	textAlign(CENTER, CENTER); 
	text(label, x, y);
  }
  
  function speakSceneOnce(text) {
	if (voice && text) {
	  voice.cancel(); // Stop anything else
	  voice.speak(text);
	}
  }
  function mousePressed() {
	if(!gameStarted && (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 &&
		mouseY > height / 2 - 40 && mouseY < height / 2 + 40)){
			gameStarted = true;
			voice.speak("Welcome...");
			currentSpokenScene = null;
			return;
		}
	
	if ( //restart
		mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
		mouseY > height / 2 + 280 && mouseY < height / 2 + 310 &&
		!decisionTree[scene].yes
	) {scene = "Q1";
		currentSpokenScene = null;
		if (currentAmbientSound && currentAmbientSound.isPlaying()) {
			currentAmbientSound.stop();
			currentAmbientSound = null;
		}
	}
	if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 + 330 && mouseY < height / 2 + 370 &&
		!decisionTree[scene].yes &&
		decisionTree[scene].videoUrl
	) {
		window.open(decisionTree[scene].videoUrl, '_blank');
		return;
	}
	if (!decisionTree[scene].yes) return;
  
	// Yes button
	if (
	  mouseX > width / 2 - 150 && mouseX < width / 2 - 50 &&
	  mouseY > height / 2 + 230 && mouseY < height / 2 + 270
	) {
	  scene = decisionTree[scene].yes;
	  tickingPlayed = false;
	  voice.cancel();
	if (speakTimeout) clearTimeout(speakTimeout);
	}
  
	// No button
	if (
	  mouseX > width / 2 + 50 && mouseX < width / 2 + 150 &&
	  mouseY > height / 2 + 230 && mouseY < height / 2 + 270
	) {
	  scene = decisionTree[scene].no;
	  tickingPlayed = false;
	  voice.cancel();
	if (speakTimeout) clearTimeout(speakTimeout);
	}
  }
  function loadScene(sceneConfig) {
	if (currentGif) {
	  currentGif.remove();
	  currentGif = null;
	}
  
	// Handle GIF scenes
	if (sceneConfig.gifPath) {
	  isGifScene = true;
  
	  currentGif = createImg(sceneConfig.gifPath, 'scene gif');
		currentGif.position(500 + windowWidth/2, 400 + windowHeight/2);
		currentGif.size(windowWidth/2, windowHeight/2);
		currentGif.style('z-index', '0');
		currentGif.style('position', 'absolute');
		currentGif.style('top', '0');
		currentGif.style('left', '0');
		currentGif.show();
	} else {
	  isGifScene = false;
  
	  if (sceneConfig.backgroundImage) {
		image(sceneConfig.backgroundImage, 0, 0, width, height);
	  }
	}
  
	// Stop previous sound
	if (currentAmbientSound && currentAmbientSound.isPlaying()) {
	  currentAmbientSound.stop();
	}
	if (timerSound && timerSound.isPlaying()) {
	  timerSound.stop();
	}
  
	currentAmbientSound = null;
  
	// Ticking for questions
	if (scene.startsWith("Q") && timerSound && timerSound.isLoaded()) {
	  timerSound.play();
	  tickingPlayed = true;
	}
  
	// Music for endings
	if (scene.startsWith("UT_") && utopiaMusic && utopiaMusic.isLoaded()) {
	  utopiaMusic.play(0, 1, 1, 0, 30);
	  currentAmbientSound = utopiaMusic;
	}
	if (scene.startsWith("DT_") && dystopiaMusic && dystopiaMusic.isLoaded()) {
	  dystopiaMusic.play(0, 1, 1, 40, 30);
	  currentAmbientSound = dystopiaMusic;
	}
  
	if (sceneConfig.font) textFont(sceneConfig.font);
	if (sceneConfig.textColor) fill(sceneConfig.textColor);
  }
  
