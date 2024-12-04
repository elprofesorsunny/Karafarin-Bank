/**
 * Function to load an HTML component and its JavaScript.
 * @param {string} elementId - ID of the target element where the HTML will be loaded.
 * @param {string} componentName - Name of the component (e.g., 'header').
 **/
function loadComponent(elementId, componentName) {
  const htmlPath = `components/${componentName}.html`;
  const jsPath = `components/${componentName}.js`;

  // Load the HTML content
  fetch(htmlPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${htmlPath}`);
      }
      return response.text();
    })
    .then((htmlContent) => {
      document.getElementById(elementId).innerHTML = htmlContent;

      // Dynamically load the JavaScript file
      const script = document.createElement("script");
      script.src = jsPath;
      script.type = "text/javascript";
      document.body.appendChild(script);
    })
    .catch((error) => {
      console.error(`Error loading component ${componentName}:`, error);
    });
}

// Load components
loadComponent("header", "header");
loadComponent("main-content", "main-content");
loadComponent("section2", "section2");
loadComponent("section3","section3");
loadComponent("section4","section4");
loadComponent("footer", "footer");
