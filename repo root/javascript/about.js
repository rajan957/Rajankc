  const learnMoreBtn = document.getElementById('learnMoreBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    learnMoreBtn.onclick = () => modal.style.display = 'block';
    closeModal.onclick = () => modal.style.display = 'none';
    window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };