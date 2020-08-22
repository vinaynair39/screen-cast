const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // we are waiting till the users assign which screen we want to screencast
		videoElement.srcObject = mediaStream; // passing that screencast as the source to the video tag
		videoElement.onloadedmetadata = () => {
			// when the video has loaded the metadata, this funtion gets triggered which just starts the video
			videoElement.play();
		};
	} catch (error) {
		// Catch Error Here
	}
}

button.addEventListener("click", async () => {
	// Disable Button
	button.disabled = true;
	// Start Picture in Picture
	await videoElement.requestPictureInPicture();
	// Reset Button
	button.disabled = false;
});

// On Load
selectMediaStream();
