document.addEventListener("DOMContentLoaded", () => {
  console.log("Acar Mühendislik | Site Yüklendi");
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

