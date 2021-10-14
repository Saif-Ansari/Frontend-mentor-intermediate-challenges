import "./style.scss";
let token = "8c2bde14e18cbf44c81a02258f061159bd67abb0";
let urlData = [];
let input = document.querySelector(".url");
let errMsg = document.querySelector(".errMsg");

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
      if (data.message) {
        addInputErrStyle();
      } else {
        if (urlData.length === 3) {
          urlData.shift();
        }
        urlData.push({ long_url: url, short_url: data.link });
        renderUrl();
      }
    });
}

document.getElementById("getLink").addEventListener("click", function (e) {
  let inputValue = input.value;
  if (!inputValue.trim()) {
    addInputErrStyle();
    return;
  } else {
    fetchData(inputValue);
    removeInputErrStyle();
    input.value = "";
  }
});

function renderUrl() {
  document.querySelector(".urlBlock").innerHTML = "";
  urlData.map(({ long_url, short_url }) => {
    let data = `<p title="${long_url}">${long_url}</p>
    <div>
      <span>${short_url}</span>
      <button data-id="${short_url}" class="copyUrl">Copy</button>
    </div>`;
    let div = document.createElement("div");
    div.className = "urlBlock__child";
    div.innerHTML = data;
    document.querySelector(".urlBlock").appendChild(div);
  });
}

document.addEventListener("click", function (e) {
  if (e.target.className === "copyUrl") {
    let btn = e.target;
    let url = e.target.dataset.id;
    navigator.clipboard.writeText(url);
    btn.innerHTML = "Copied!";
    btn.style.backgroundColor = "hsl(260, 8%, 14%)";
    setTimeout(() => {
      btn.innerHTML = "Copy";
      btn.style.backgroundColor = "hsl(180, 66%, 49%)";
    }, 1000);
  }
});

function addInputErrStyle() {
  input.style.border = "2px solid red";
  errMsg.style.display = "block";
}

function removeInputErrStyle() {
  input.style.border = "none";
  errMsg.style.display = "none";
}
