let form = document.querySelector("#form-h2");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const usermassage = {
    name: form[0].value,
    email: form[1].value,
    massage: form[2].value,
  };
  const respans = await axios.post(
    "https://6883de81745306380a371217.mockapi.io/message",
    usermassage
  );
  alert("send massage sucsusfoly");
  form.reset();
  location.href = "./index.html";
});
