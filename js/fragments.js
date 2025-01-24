// Function to load HTML fragments
function loadFragment(containerId, fragmentPath) {
  return fetch(fragmentPath)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${fragmentPath}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Load all fragments and wait for them to finish
const fragmentPromises = [
  loadFragment("header", "./fragments/header.html"),
  loadFragment("introSection", "./fragments/introSection.html"),
  loadFragment("aboutSection", "./fragments/aboutSection.html"),
  loadFragment("portfolioSection", "./fragments/portfolioSection.html"),
  loadFragment("devide1Section", "./fragments/devide1Section.html"),
  loadFragment("devide2Section", "./fragments/devide2Section.html"),
  loadFragment("devide3Section", "./fragments/devide3Section.html"),
  loadFragment("resumeSection", "./fragments/resumeSection.html"),
  loadFragment("servicesSection", "./fragments/servicesSection.html"),
  loadFragment("contactSection", "./fragments/contactSection.html"),
  loadFragment("footer", "./fragments/footer.html"),
];

// Portfolio content
function createPortfolioItem(options) {
  const {
    id,
    title,
    imageSrc,
    modalImages,
    description,
    tools,
    websiteLink,
    websiteText = "Visit Website",
    websiteLink2,
    websiteText2,
  } = options;

  const modalItem = `
    <!-- ${title} modal -->
    <div id="${id}-modal" class="popup-modal slider mfp-hide">
      <div class="media">
        <div id="carousel-${id}" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            ${modalImages
      .map(
        (img, index) =>
          `<li data-target="#carousel-${id}" data-slide-to="${index}" ${index === 0 ? "class='active'" : ""
          }></li>`
      )
      .join("")}
          </ol>
          <div class="carousel-inner">
            ${modalImages
      .map(
        (img, index) =>
          `<div class="carousel-item ${index === 0 ? "active" : ""}">
                    <img class="d-block w-100 lazy" src="${img}" alt="Slide ${index + 1}" />
                  </div>`
      )
      .join("")}
          </div>
          <a class="carousel-control-prev" href="#carousel-${id}" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-${id}" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="description-box">
        <h4>${title}</h4>
        <p>${description}</p>
        <div class="categories"><span style="color: black">Tools:</span> ${tools}</div>
        <div class="pt-5">
          <a href="${websiteLink}" target="_blank" class="btn btn-lg btn-light" style="letter-spacing: 2px">${websiteText}</a>
          ${websiteText2 && websiteLink2 ? `<a href="${websiteLink2}" target="_blank" class="btn btn-lg btn-light" style="letter-spacing: 2px">${websiteText2}</a>` : ''}
        </div>
      </div>
      <a href="#" class="popup-modal-dismiss btn btn-light btn-lg btn-block" style="text-transform: uppercase; letter-spacing: 3px"><span style="color: lightgray; font-weight: bolder; font-size: 15px"></span> Back to Portfolio</a>
    </div>
    <!-- /${title} modal -->
    `;

  // Append to your portfolio wrapper
  $('#folio-wrapper').append(modalItem);

  const portfolioItem = `
      <!-- ${title} -->
      <div class="bgrid folio-item web">
        <div class="item-wrap">
          <img class="lazy" src="${imageSrc}" alt="${title}" />
          <a href="#${id}-modal" class="overlay">
            <div class="folio-item-table">
              <div class="folio-item-cell">
                <h3 class="folio-title">${title}</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    `;

  // Append to your portfolio container
  $('#folio-wrapper').append(portfolioItem);
}

/* 

-- Still in business --
Fashion Floors
Lakeland Pharmacy
Zaika Kitchen
Oasis Dental
Apollo Tiles
Pipkin Pharmacy

-- Done or replaced by someone --
New Diamonds, Inc.
Mt Playmore
Elite Trading Service
Jalpa Dance
ProcSafe
GolfSmith
Rite Away Imagine

-- Way old --
Superior
Save My Road
Denim Summit
*/

// Wait for all fragments to load before running additional code
Promise.all(fragmentPromises).then(() => {
  console.log("All fragments loaded.");


  /*-----------------------------------------------------*/
  /* Navigation Menu
   ------------------------------------------------------ */
  var toggleButton = $(".menu-toggle"),
    nav = $(".main-navigation");

  // toggle button
  toggleButton.on("click", function (e) {
    e.preventDefault();
    toggleButton.toggleClass("is-clicked");
    nav.slideToggle();
  });

  // nav items
  nav.find("li a").on("click", function () {
    // update the toggle button
    toggleButton.toggleClass("is-clicked");
    // fadeout the navigation panel
    nav.fadeOut();
  });

  /*---------------------------------------------------- */
  /* Highlight the current section in the navigation bar
    ------------------------------------------------------ */
  var sections = $("section"),
    navigation_links = $("#main-nav-wrap li a");

  sections.waypoint({
    handler: function (direction) {
      var active_section;

      active_section = $("section#" + this.element.id);

      if (direction === "up") active_section = active_section.prev();

      var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },

    offset: "25%",
  });

  /*---------------------------------------------------- */
  /* Smooth Scrolling
    ------------------------------------------------------ */
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        2500,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------- */
  /* Stat Counter
    ------------------------------------------------------- */
  var statSection = $("#stats"),
    stats = $(".stat-count");

  statSection.waypoint({
    handler: function (direction) {
      if (direction === "down") {
        stats.each(function () {
          var $this = $(this);

          $({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 4000,
              easing: "swing",
              step: function (curValue) {
                $this.text(Math.ceil(curValue));
              },
            }
          );
        });
      }

      // trigger once only
      this.destroy();
    },

    offset: "90%",
  });

  /*---------------------------------------------------- */
  /* Toggle Script
    ------------------------------------------------------ */

  var toggler = document.getElementsByClassName("caret");
  var i;

  // Set initial text to "Read More"
  $(".caret").text("Read More");

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      // Toggle the "active1" class
      this.parentElement.querySelector(".nested1").classList.toggle("active1");
      this.classList.toggle("caret-down");

      // Toggle text based on whether "active1" class is present
      if (this.parentElement.querySelector(".nested1").classList.contains("active1")) {
        $(this).text("Read Less");
      } else {
        $(this).text("Read More");
      }
    });
  }

  /*---------------------------------------------------- */
  /* Portfolio
    ------------------------------------------------------ */

  // Fashion Floors
  createPortfolioItem({
    id: "Fashion-Floors",
    title: "Fashion Floors",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-24-fashion-floors.jpg",
    modalImages: [
      "images/portfolio/modals/fashionFloors/1.png",
      "images/portfolio/modals/fashionFloors/2.png",
      "images/portfolio/modals/fashionFloors/3.png",
      "images/portfolio/modals/fashionFloors/4.png",
      "images/portfolio/modals/fashionFloors/5.png",
      "images/portfolio/modals/fashionFloors/6.png",
    ],
    description:
      "Crafted an E-commerce WordPress platform for Fashion Floors and Carpets By Conrad, providing a seamless shopping experience. Tasked with overseeing continuous SEO optimization and managing marketing initiatives to enhance brand visibility and drive sales growth.",
    tools:
      "WordPress, PHP, HTML5/CSS3, Bootstrap, JavaScript/JQuery, Google Fonts, SVG Assets, Adobe Creative Suite",
    websiteLink: "https://carpetsbyconrad.com/",
  });

  // New Diamonds Inc.
  createPortfolioItem({
    id: "New-Diamonds-Inc",
    title: "New Diamonds, Inc.",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-22.jpg",
    modalImages: [
      "images/portfolio/modals/aakashDiamondsInc/3.png",
      "images/portfolio/modals/aakashDiamondsInc/2.png",
      "images/portfolio/modals/aakashDiamondsInc/1.png",
      "images/portfolio/modals/aakashDiamondsInc/4.png",
      "images/portfolio/modals/aakashDiamondsInc/5.png",
      "images/portfolio/modals/aakashDiamondsInc/6.png",
    ],
    description: `The development of a full-stack e-commerce website for a diamond shop, incorporating secure authentication, real-time database functionality, and integration with Google Sheets, promises to deliver a robust and user-friendly platform for both customers and administrators. By leveraging cutting-edge technologies and best practices in web development, this project aims to provide a seamless and efficient online shopping experience for diamond enthusiasts worldwide.`,
    tools: `Full-stack e-commerce website includes Google Firebase authentication, Firebase real-time database, PHP, JavaScript, Connect Google Sheets with Database, and Sass.`,
    websiteText: "Request a Demo",
    websiteLink: "https://kratuvwxyz.github.io/#contact",
  });

  // Superior
  createPortfolioItem({
    id: "superior",
    title: "Superior HealthPlan",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-13.jpg",
    modalImages: [
      "images/portfolio/modals/superior/1.jpg",
      "images/portfolio/modals/superior/2.jpg",
      "images/portfolio/modals/superior/4.jpg",
      "images/portfolio/modals/superior/5.jpg",
      "images/portfolio/modals/superior/6.jpg",
      "images/portfolio/modals/superior/7.jpg",
      "images/portfolio/modals/superior/8.jpg",
    ],
    description: `Collaborated with the marketing team to craft landing pages such as Discover Superior,
      Members First, and About Us, utilizing Adobe Experience Manager (AEM). Additionally,
      contributed to the creation of various branding materials for marketing purposes.`,
    tools: `Adobe Creative Suite - This
      includes Photoshop for image editing, Illustrator for vector graphics, and InDesign for
      layout design. HTML/CSS/JavaScript - For coding the landing page and email templates. Adobe
      Experience Manager (AEM) - Setup a platform for adding interactivity or dynamic elements to
      landing pages.`,
    websiteText: "Discover Superior Webpage",
    websiteLink: `https://www.superiorhealthplan.com/discover-superior.html`,
    websiteText2: "Members First Webpage",
    websiteLink2: `https://www.superiorhealthplan.com/members-first.html`,
  });

  /*
  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });

  // Title
  createPortfolioItem({
    id: "idTitle",
    title: "Title",
    imageSrc: "images/portfolio/intro-bg-sm/intro-bg-@@@.jpg",
    modalImages: [
      "images/portfolio/modals/name.png",
    ],
    description: `ddd`,
    tools: `ttt`,
    websiteLink: "www",
  });
*/


  /*---------------------------------------------------- */
  /*	Masonry
  ------------------------------------------------------ */
  var containerProjects = $("#folio-wrapper");

  containerProjects.imagesLoaded(function () {
    containerProjects.masonry({
      itemSelector: ".folio-item",
      resize: true,
    });
  });
});