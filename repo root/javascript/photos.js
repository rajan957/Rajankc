 const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const images = document.querySelectorAll(".photo img");
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      currentIndex = index;
    });
  });

  function closeModal() {
    modal.style.display = "none";
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  }

  function openInNewTab() {
    window.open(modalImg.src, "_blank");
  }

  // Optional: Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });