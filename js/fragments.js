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
  
  // Load header and footer fragments
  loadFragment('header', './fragments/header.html');
  