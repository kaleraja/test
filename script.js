function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

 
}
document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Remove snowflake after 10 seconds
  }

  setInterval(createSnowflake, 100); // Create a snowflake every 100 milliseconds
});

document.addEventListener("DOMContentLoaded", function () {
  const butterfly = document.querySelector(".butterfly");
  const container = document.querySelector(".butterfly-container");

  function setRandomPositionAndDelay() {
    const x = Math.random() * (container.offsetWidth - butterfly.offsetWidth);
    const y = Math.random() * (container.offsetHeight - butterfly.offsetHeight);
    const delay = Math.random() * 5; // Random delay between 0 and 5 seconds

    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;
    butterfly.style.animationDelay = `${delay}s`;
  }

  setRandomPositionAndDelay();
}); 
