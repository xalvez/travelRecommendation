
const btnSearch = document.getElementById('btnSearch');

    function searchDestination() {
        const input = document.getElementById('DestinationInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        debugger;
        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const Destination = data.Destinations.find(item => item.name.toLowerCase() === input);
            if (Destination) {
                const name = Destination.name;
            //   const cities = Destination.cities.join(', ');
            //   const CitiesName = Destination.cities.name.join(', ');
            //   const CitiesimageUrl = Destination.cities.imageUrl;
            //   const CitiesDescription = Destination.cities.description.join(', ');

                resultDiv.innerHTML += `<h2>${name}</h2>`;
            //   resultDiv.innerHTML += `<p><strong>cities : </strong> ${cities}</p>`;
            //   resultDiv.innerHTML += `<p><strong>name : </strong> ${CitiesName}</p>`;
            //   resultDiv.innerHTML += `<img src="${CitiesimageUrl}" alt="hjh">`;
            //   resultDiv.innerHTML += `<img src="${CitiesDescription}" alt="hjh">`;
            } else {
              resultDiv.innerHTML = 'Destination not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
    }
        btnSearch.addEventListener('click', searchDestination);

