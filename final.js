//comments
	//Less leading questions
	//point based system asking all different questions
	// show each ending depending 
	// make a layered decision tree using general questions
	// Make a distinction between the video and the game
	//make it more edgy and scary depending on what I believe should be the different futures
	//Indicate what direction of utopia or distopia the user goes into, each screen has a different font and style
	//Make sure to integrate the speech and words 
	//use videos in the background?
	//Think about the experience 
			//what they feel and experience
			//MTA feedback survery that never ends
			//make the survey 
			//Space oddessy computer?
	//make it weird and creepy 
	// decribes the sound
	// you as a player see what your life owuld be like 
	// show different aspects of each utopia or dystopia that shows the different aspects of life from political, enviroment, education, weather, housing,


let scenes;
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
		scene: "UT_AI"
	},
	UT_ECO:   { text: "🌱 Nature-Centric Utopia:\nYou walk barefoot under digital trees.",
		scene: "UT_ECO" },
	UT_SCI:   { text: "🔬 Transhuman Utopia:\nYou no longer age. You begin to forget pain.",
		scene: "UT_SCI" },
	UT_DEM:   { text: "🗳️ Direct Democracy:\nEvery moment is a vote. Everyone is heard.",
		scene: "UT_DEM" },
	UT_SPACE: { text: "🌌 Space Utopia:\nYou orbit Mars. You plant oxygen.",
		scene: "UT_SPACE" },
	DT_AI:    { text: "⚠️ AI Dystopia:\nYou are obedient. But your dreams are monitored.",
		scene: "DT_AI" },
	DT_POL:   { text: "📵 Authoritarian Rule:\nYour voice is archived. Your silence is praised.", 
		scene: "DT_AI" },
	DT_ECO:   { text: "🔥 Collapse:\nThe oceans rose. You adapted, or drowned.",
		scene: "DT_ECO" },
	DT_SIM:   { text: "🎮 Simulation Trap:\nYou question if you ever lived at all.",
		scene: "DT_SIM" },
	DT_SPACE: { text: "🚫 Cosmic Failure:\nThe stars were cold. Earth was warmer.",
		scene: "DT_SPACE" }
  };

function preload(){
	scenes = {
		Q0: {//Introduction
			backgroundImage: loadImage('assets/photos/Q1.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q0_1: {//Introduction
			backgroundImage: loadImage('assets/photos/Q1.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q1: {
			backgroundImage: loadImage('assets/photos/Q1.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q2: {
			backgroundImage: loadImage('assets/photos/Q2.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q3: {
			backgroundImage: loadImage('assets/photos/Q3.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q4: {
			backgroundImage: loadImage('assets/photos/Q4.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q5: {
			backgroundImage: loadImage('assets/photos/Q5.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q6: {
			backgroundImage: loadImage('assets/photos/Q6.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q7: {
			backgroundImage: loadImage('assets/photos/Q7.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q8: {
			backgroundImage: loadImage('assets/photos/Q8.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q9: {
			backgroundImage: loadImage('assets/photos/Q9.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q10: {
			backgroundImage: loadImage('assets/photos/Q10.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q11: {
			backgroundImage: loadImage('assets/photos/Q11.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q12: {
			backgroundImage: loadImage('assets/photos/Q12.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		Q13: {
			backgroundImage: loadImage('assets/photos/Q13.webp'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		UT_AI: {
			backgroundImage: loadImage('assets/photos/UT_AI.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		UT_DEM: {
			backgroundImage: loadImage('assets/photos/UT_DEM.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		UT_ECO: {
			backgroundImage: loadImage('assets/photos/UT_ECO.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		UT_SCI: {
			backgroundImage: loadImage('assets/photos/UT_SCI.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		UT_SPACE: {
			backgroundImage: loadImage('assets/photos/UT_SPACE.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		DT_AI: {
			backgroundImage: loadImage('assets/photos/DT_AI.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		DT_ECO: {
			backgroundImage: loadImage('assets/photos/DT_ECO.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		DT_POL: {
			backgroundImage: loadImage('assets/photos/DT_POL.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		DT_SIM: {
			backgroundImage: loadImage('assets/photos/DT_SIM.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
		DT_SPACE: {
			backgroundImage: loadImage('assets/photos/DT_SPACE.gif'),
			//font:
			//sound:
			textColor: '#FFFFFF'
		},
	}
}
  
  let scene = "Q1";
  
  function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(20);
  }
  
  function draw() {
	background(30); // Default background in case no scene is loaded
  
	// Get the current scene configuration
	const currentSceneKey = decisionTree[scene].scene;
	const currentScene = scenes[currentSceneKey];
  
	// Load the scene settings (background, tint, etc.)
	if (currentScene) {
	  loadScene(currentScene);
	}
	// Display the current node's text
	fill(currentScene?.textColor || 255); // Use scene-specific text color or default to white
	text(decisionTree[scene].text, width / 2, height / 2 + 200);
  
	// Draw buttons if the current node has "yes" and "no" options
	if (decisionTree[scene].yes) {
	  drawButton("Yes", width / 2 - 100, height / 2 + 250);
	  drawButton("No", width / 2 + 100, height / 2 + 250);
	}
  }
  
  function drawButton(label, x, y) {
	fill(70);
	rect(x - 50, y - 20, 100, 40, 10);
	fill(255);
	text(label, x, y);
  }
  
  function mousePressed() {
	if (!decisionTree[scene].yes) return;
  
	// Yes button
	if (
	  mouseX > width / 2 - 150 && mouseX < width / 2 - 50 &&
	  mouseY > height / 2 + 230 && mouseY < height / 2 + 270
	) {
	  scene = decisionTree[scene].yes;
	}
  
	// No button
	if (
	  mouseX > width / 2 + 50 && mouseX < width / 2 + 150 &&
	  mouseY > height / 2 + 230 && mouseY < height / 2 + 270
	) {
	  scene = decisionTree[scene].no;
	}
  }  
  
  function loadScene(sceneConfig) {
	
	if (sceneConfig.backgroundImage) {
	  let bgImage = sceneConfig.backgroundImage;
	  if (bgImage) {
		image(bgImage, 0, 0, width, height);
	  }
	}
	if (sceneConfig.sound) {
	  let sound = loadSound(sceneConfig.ambientSound, () => {
		sound.loop();
	  });
	}
	if (sceneConfig.font) {
	  textFont(sceneConfig.font);
	}
	if (sceneConfig.textColor) {
	  fill(sceneConfig.textColor);
	}
  }
