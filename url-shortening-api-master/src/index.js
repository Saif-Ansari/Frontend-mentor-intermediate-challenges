import "./style.scss";
let token = "8c2bde14e18cbf44c81a02258f061159bd67abb0";
let urlData = [];

function fetchData(url) {
  let data = {
    long_url: url,
    domain: "bit.ly",
  };
  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      urlData.push({ long_url: url, short_url: data.link });
    });
  console.log({ urlData });
}

document.getElementById("getLink").addEventListener("click", function (e) {
  let inputValue = document.querySelector(".url").value;
  fetchData(inputValue);
});
