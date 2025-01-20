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
  // Portfolio
  loadFragment('folio-fashionfloors', './fragments/portfolio/folio-fashionfloors.html');
  loadFragment('folio-tic-tac-toe', './fragments/portfolio/folio-tic-tac-toe.html');
  loadFragment('folio-new-diamonds-inc', './fragments/portfolio/folio-new-diamonds-inc.html');
  loadFragment('folio-employee-directory', './fragments/portfolio/folio-employee-directory.html');
  loadFragment('folio-lakeland-pharmacy', './fragments/portfolio/folio-lakeland-pharmacy.html');
  loadFragment('folio-zaika', './fragments/portfolio/folio-zaika.html');
  loadFragment('folio-riteaway-pharmacy', './fragments/portfolio/folio-riteaway-pharmacy.html');
  loadFragment('folio-clicky-cards', './fragments/portfolio/folio-clicky-cards.html');
  loadFragment('folio-mt-playmore', './fragments/portfolio/folio-mt-playmore.html');
  loadFragment('folio-are-you-psychic', './fragments/portfolio/folio-are-you-psychic.html');
  loadFragment('folio-password-generator', './fragments/portfolio/folio-password-generator.html');
  loadFragment('folio-elite-trading-services', './fragments/portfolio/folio-elite-trading-services.html');
  loadFragment('folio-sell-sum-donuts', './fragments/portfolio/folio-sell-sum-donuts.html');
  loadFragment('folio-jalpa-dance', './fragments/portfolio/folio-jalpa-dance.html');
  loadFragment('folio-weather', './fragments/portfolio/folio-weather.html');
  loadFragment('folio-oasis', './fragments/portfolio/folio-oasis.html');
  loadFragment('folio-rock-paper-scissor', './fragments/portfolio/folio-rock-paper-scissor.html');
  loadFragment('folio-superior', './fragments/portfolio/folio-superior.html');
  loadFragment('folio-apollo-tiles', './fragments/portfolio/folio-apollo-tiles.html');
  loadFragment('folio-pipkin-pharmacy', './fragments/portfolio/folio-pipkin-pharmacy.html');
  loadFragment('folio-procsafe', './fragments/portfolio/folio-procsafe.html');
  loadFragment('folio-golfsmith', './fragments/portfolio/folio-golfsmith.html');
  loadFragment('folio-save-my-road', './fragments/portfolio/folio-save-my-road.html');
  loadFragment('folio-denim', './fragments/portfolio/folio-denim.html');
  loadFragment('under-construction', './fragments/portfolio/under-construction.html');
