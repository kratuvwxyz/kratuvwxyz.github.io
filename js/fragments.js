// Function to load HTML fragments
function loadFragment(containerId, fragmentPath) {
    fetch(fragmentPath)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${fragmentPath}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  // Load fragments
  loadFragment('header', './fragments/header.html');
  loadFragment('introSection', './fragments/introSection.html');
  loadFragment('aboutSection', './fragments/aboutSection.html');
  loadFragment('devide1Section', './fragments/devide1Section.html');
  loadFragment('devide2Section', './fragments/devide2Section.html');
  loadFragment('devide3Section', './fragments/devide3Section.html');
  loadFragment('resumeSection', './fragments/resumeSection.html');
  loadFragment('servicesSection', './fragments/servicesSection.html');
  loadFragment('contactSection', './fragments/contactSection.html');
  loadFragment('footer', './fragments/footer.html');
  loadFragment('portfolioSection', './fragments/portfolioSection.html');
  