const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

const fakeUploadPercentage = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];
let i = 0;

const interval = setInterval(() => {
  progress.style.width = fakeUploadPercentage[i] + "%";
  loading.innerHTML = fakeUploadPercentage[i] + "%";
  i++;
  console.log(i);
  if (i == fakeUploadPercentage.length) {
    clearInterval(interval);
    loading.innerHTML = "Completed";
  }
}, 1000);
