let form = document.querySelector("#register-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //   console.dir(form[2]);
  //   console.log(form[2].value);
  const getDate = await axios.get(
    "https://6883de81745306380a371217.mockapi.io/users"
  );
  const { data } = getDate;
  data.forEach((item) => {
    if (item.email === form[1].value) {
      alert("ye bar omadi");
      return;
    }
  });
  console.log(getDate);
  if (form[2].value !== form[3].value) {
    alert("not yeksan password");
    return;
  }
  const userData = {
    name: form[0].value,
    email: form[1].value,
    password: form[2].value,
  };
  const res = await axios.post(
    "https://6883de81745306380a371217.mockapi.io/users",
    userData
  );
  localStorage.setItem("nameuser", form[0].value);
  location.href = "./index.html";
});
