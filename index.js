document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const dot = document.querySelector(".dot");

  const updateDotPosition = () => {
    const scrollTop = window.scrollY;
    const cardPositions = Array.from(cards).map((card) => {
      const rect = card.getBoundingClientRect();
      return {
        top: rect.top + scrollTop,
        height: rect.height,
      };
    });

    cardPositions.forEach((pos, index) => {
      const viewportCenter = window.innerHeight / 2 + scrollTop;
      if (viewportCenter >= pos.top && viewportCenter <= pos.top + pos.height) {
        const offset = pos.top - scrollTop + pos.height / 2;
        dot.style.top = `${offset}px`;

        cards.forEach((card) => card.classList.remove("active"));
        cards[index].classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateDotPosition);
  updateDotPosition();
});
