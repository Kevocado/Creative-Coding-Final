Decision Tree Game
This project is an interactive decision tree game built using p5.js. Players answer questions to determine their future, with dynamic scenes, sounds, and GIFs displayed based on their choices.

Features
    Interactive Questions: Players navigate through a series of questions.
    Dynamic Scenes: Background images and GIFs change based on player choices.
    Audio Effects: Ambient sounds and music play during questions and endings.
    Endings: Players reach utopian or dystopian futures based on their decisions.

Installation
  Prerequisites
    Ensure you have a modern browser (e.g., Chrome, Firefox) that supports the Web Speech API and p5.js.
    Install a local server to serve the files (e.g., Live Server extension for Visual Studio Code).

Steps
    Clone the repository:
      Navigate to the project directory:
        Open the project in Visual Studio Code or your preferred IDE.
        Start a local server (e.g., Live Server in VS Code).
        Open the game in your browser (e.g., http://127.0.0.1:5500).

How to Play
  Open the game in your browser.
  Click the Start button to begin.
  Answer the questions by clicking Yes or No buttons.
  Reach an ending and choose to Restart or Watch Trailer.
Troubleshooting
  1. Images or GIFs Not Displaying
    Ensure all image and GIF files are in the photos directory.
  Verify the file paths in final.js:
    Check the browser console for errors related to file paths.
  2. Audio Not Playing
    Ensure all audio files are in the sounds directory.
    Verify the file paths in final.js:
      If audio is blocked, ensure the browser allows autoplay after user interaction.
  3. Buttons Not Working
    Check the mousePressed() function in final.js to ensure button click detection matches the button positions:
      scene = decisionTree[scene].yes;
  4. Speech Not Working
    Ensure the browser supports the Web Speech API (e.g., Chrome).
    Check the console for p5.Speech: voices not loaded yet! messages. Wait for voices to load before calling voice.speak().

For questions or issues, feel free to contact me at kks9792@nyu.edu
