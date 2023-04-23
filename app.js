navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => {
    const video = document.getElementById("video");
    video.srcObject = stream;
  })
  .catch(error => {
    console.error("Could not access camera: " + error.message);
  });
