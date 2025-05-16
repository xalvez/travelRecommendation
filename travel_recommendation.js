
const btnSearch = document.getElementById('btnSearch');

 
function searchRecommendation() {
  const keyword = document.getElementById('keywordInput').value.toLowerCase();
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = '';

  fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
      if (keyword === 'country') {
        data.countries.forEach(country => {
country.cities.forEach(city => {
  resultDiv.innerHTML += `
    <div class="place-card" style="background-image: url('${city.imageUrl}');">
      <div class="place-info">
        <h3>${city.name}</h3>
        <p>${city.description}</p>
      </div>
    </div>
  `;
});
        });
      } else if (keyword === 'temple') {
data.temples.forEach(temple => {
  resultDiv.innerHTML += `
    <div class="place-card" style="background-image: url('${temple.imageUrl}');">
      <div class="place-info">
        <h3>${temple.name}</h3>
        <p>${temple.description}</p>
      </div>
    </div>
  `;
});
      } else if (keyword === 'beach') {
        data.beaches.forEach(beach => {
  resultDiv.innerHTML += `
    <div class="place-card" style="background-image: url('${beach.imageUrl}');">
      <div class="place-info">
        <h3>${beach.name}</h3>
        <p>${beach.description}</p>
      </div>
    </div>
  `;
        });
      } else {
        resultDiv.innerHTML = `<p>Please enter a valid keyword: "beach", "temple", or "country".</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
    });
}
        btnSearch.addEventListener('click', searchDestination);

function clearSearch() {
  document.getElementById('keywordInput').value = '';
  document.getElementById('keywordInput').focus();
  document.getElementById('results').innerHTML = ''; // Optional: clear the results too
}























        