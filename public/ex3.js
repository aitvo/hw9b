document.getElementById("articleForm").addEventListener("submit", event => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  fetch("/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  })
  .then(response => response.json())
  .then(data => {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = data.message;
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
