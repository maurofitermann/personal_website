fetch('../json_content/content.json')
  .then(response => response.json())
  .then(data => {
    const works = data.projects;
    const worksContainer = document.getElementById('works-container');

    for (const key in works) {
      if (works.hasOwnProperty(key)) {
        const work = works[key];

        const workEntry = document.createElement('div');
        workEntry.className = 'col-md-12';
        workEntry.innerHTML = `
          <div class="work-entry animate-box">
            <a href="work-single.html" class="work-img" style="background-image: url('../images/${work.name}.jpeg');">
              <div class="display-t">
                <div class="work-name">
                  <h2>${work.name}</h2>
                </div>
              </div>
            </a>
            <div class="col-md-4 col-md-offset-4">
              <div class="desc">
                <p>${work.description}</p>
                <p class="read"><a href="#">View details</a></p>
              </div>
            </div>
          </div>
        `;
        worksContainer.appendChild(workEntry);
      }
    }
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
    // Display an error message or retry option to the user
  });
