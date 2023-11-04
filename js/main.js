const apiKey = "12QM3D8-1R446R1-G0P0618-A1KR933"; // Ваш API-ключ
const apiUrl = "https://api.kinopoisk.dev"; // URL API

// Создать объект заголовков для отправки API-ключа
const headers = new Headers();
headers.append('X-API-KEY', apiKey);

// Опции запроса
const requestOptions = {
  method: 'GET', // Или 'POST', в зависимости от вашего случая
  headers: headers,
  // Другие опции, если необходимо
};

// Выполнить запрос к API
fetch(apiUrl, requestOptions)
  .then(response => {
    if (response.ok) {
      // Обработка успешного ответа от API
      return response.json();
    } else {
      // Обработка ошибки, например, если ключ API неверный
      console.error('Ошибка запроса:', response.status, response.statusText);
    }
  })
  .then(data => {
    // Обработка данных от API
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка запроса:', error);
  });



  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  
  // Добавьте обработчик события keyup к полю ввода
  searchInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
          const query = searchInput.value;
          searchMovies(query);
      }
  });
  
  function searchMovies(query) {
      // Очистка результатов предыдущего поиска
      searchResults.innerHTML = "";
  
      // Здесь вам нужно выполнить запрос к API с использованием fetch
      // Замените 'Ваш_URL_API' на фактический URL API
      fetch(`https://api.kinopoisk.dev/search?query=${query}`)
          .then(response => response.json())
          .then(data => {
              // Обработка результатов поиска
              displaySearchResults(data.docs);
          })
          .catch(error => {
              console.error("Ошибка запроса:", error);
          });
  }
  
  function displaySearchResults(results) {
      if (results.length === 0) {
          searchResults.innerHTML = "Ничего не найдено";
      } else {
          const ul = document.createElement("ul");
          results.forEach(movie => {
              const li = document.createElement("li");
              li.textContent = movie.name;
              ul.appendChild(li);
          });
          searchResults.appendChild(ul);
      }
  }
  