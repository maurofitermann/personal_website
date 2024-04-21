fetch('../json_content/content.json')
  .then(response => response.json())
  .then(data => {
    // Inject 'aboutMe' content into elements with class 'about-me'
    const aboutMeElements = document.querySelectorAll('.about-me');
    aboutMeElements.forEach(element => {
      element.textContent = data.aboutMe;
    });
  })
  .catch(error => console.error('Error fetching content:', error));
