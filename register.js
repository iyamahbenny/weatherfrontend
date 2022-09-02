const registerfunction = async () => {
  const name = document.getElementById("registername").value;
  const email = document.getElementById("registeremail").value;
  const password = document.getElementById("registerpassword").value;

  await fetch("https://weatherbackend.onrender.com/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((result) => (window.location.href = `/weather.html?user=${result}`))
    .catch((error) => console.log("error", error));
};
