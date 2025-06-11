async function generateStory() {
  const character = document.getElementById("character").value;
  const setting = document.getElementById("setting").value;
  const genre = document.getElementById("genre").value;
  const storyBox = document.getElementById("story");
  const errorBox = document.getElementById("error");

  storyBox.innerHTML = "";
  errorBox.style.display = "none";

  const prompt = `Write a ${genre} story set in ${setting} with a main character named ${character}. 
  The story should be creative and engaging, and limited to about 200 to 300 words.`;

  try {
    const response = await puter.ai.chat(prompt);
    storyBox.innerText = response;
  } catch (error) {
    errorBox.innerText = "Error: Failed to generate story. Please try again later.";
    errorBox.style.display = "block";
    console.error(error);
  }
}
