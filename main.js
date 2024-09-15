const findElement = (element, parent = document) => {
  return parent.querySelector(element);
};

const elSignBtn = findElement("#sign-btn");
const elInputUserName = findElement("#username");
const elInputPassword = findElement("#password");
const elLoginDiv = findElement("#login-div");
const elIsLogin = findElement("#isLogin");
const elLogout = findElement("#logout");


const elRegisterBtn = findElement("#register-btn");
const elInputRegUsername = findElement("#reg-username");
const elInputRegPassword = findElement("#reg-password");
const elInputRegEmail = findElement("#reg-email");
const elInputFirstName = findElement("#firstname");
const elInputLastName = findElement("#lastname");
const elInputPhone = findElement("#phone");
const elInputCity = findElement("#city");
const elInputStreet = findElement("#street");
const elInputHouseNumber = findElement("#house-number");
const elInputZipcode = findElement("#zipcode");

const BASE_URL = "https://fakestoreapi.com";


if (localStorage.getItem("token")) {
  elLoginDiv.style.display = "none";
  elIsLogin.style.display = "flex";
}


elLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  elLoginDiv.style.display = "flex";
  elIsLogin.style.display = "none";
});

elSignBtn.addEventListener("click", () => {
  const obj = {
    username: elInputUserName.value,
    password: elInputPassword.value,
  };
  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Invalid login");
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      window.location.replace(`../admin.html`);
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
});


elRegisterBtn.addEventListener("click", () => {
  const newUser = {
    email: elInputRegEmail.value,
    username: elInputRegUsername.value,
    password: elInputRegPassword.value,
    name: {
      firstname: elInputFirstName.value,
      lastname: elInputLastName.value,
    },
    address: {
      city: elInputCity.value,
      street: elInputStreet.value,
      number: Number(elInputHouseNumber.value),
      zipcode: elInputZipcode.value,
      
    },
    phone: elInputPhone.value,
  };

  fetch(`${BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Registration successful:", data);
      alert("User registered successfully!");
    })
    .catch((err) => {
      alert("Registration failed: " + err.message);
    });
});
