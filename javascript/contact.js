document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var contactText = document.getElementById("contactText");
  
    // Event listener for submit button click
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission (for this example)
      alert("Спасибо, за ваш ответ!");
    });
  
    // Event listener for contact text mouseover
    contactText.addEventListener("mouseover", function() {
      contactText.style.color = "blue";
    });
  
    // Event listener for contact text mouseout
    contactText.addEventListener("mouseout", function() {
      contactText.style.color = "orange";
    });
  });
  
  function showRandomQuote() {
    var quotes = [
      "Фотография может поблекнуть, безделушка может потеряться, бюст Вагнера может разбиться, но когда-либо проглотивший пищу в байрейтском ресторане будет носить её в себе до гробовой доски.",
      "Находиться здесь одному, дружище, – это неприлично, а право быть неприличным я зарезервировал за собой. Давай выпьем.",
      "Ресторан — это как театр. Наша задача — ослепить, поразить, развлечь вас... ничем не выдав, какая за кулисами творится Хиросима.",
      "Любой ресторан при отеле проверяется качеством салата «Цезарь» — мотайте на ус!",
      "Где вы, Шмидт? Тут так пафосно, я даже не знаю, какой вилкой себя заколоть."
    ];
    
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("quote");
    quoteElement.innerText = quotes[randomIndex];
  }