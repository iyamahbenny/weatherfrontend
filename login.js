const loginfunction = async () => {
  const loginemail = document.getElementById("loginemail").value;
  const loginpassword = document.getElementById("loginpassword").value;
  await fetch("https://weatherbackend.onrender.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      loginemail: loginemail,
      loginpassword: loginpassword,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      window.location.href = `/index.html?user=${result}`;
    })
    .catch((error) => console.log("error", error));
};
