const url = "http://localhost:5500/api";

const getUsers = () => {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((e) => console.error(e));
};

const addNewUser = (newUser) => {
  axios
    .post(url, newUser)
    .then((response) => console.log(response.data))
    .catch((e) => console.error);
};

const newUser = {
  name: "Vitor Natario",
  avatar:
    "http://pm1.narvii.com/7029/191980f055b3b696bbe27c94c73cfc075e7fa37er1-736-736v2_uhq.jpg",
  city: "São Paulo",
};

const getUser = (id) => {
  axios
    .get(`${url}/${id}`)
    .then((respose) => {
      userId.textContent = respose.data.id;
      userName.textContent = respose.data.name;
      userCity.textContent = respose.data.city;
      userAvatar.src = respose.data.avatar;
    })
    .catch((e) => console.error(e));
};

const updateUser = (id, dataUpdate) => {
  axios
    .put(`${url}/${id}`, dataUpdate)
    .then((response) => console.log(response))
    .catch((e) => console.error(e));
};

const userUpdated = {
  name: "Sara Anita",
  avatar: "https://avatars.githubusercontent.com/u/105318276?v=4",
  city: "Suzano",
};

getUsers();
// addNewUser(newUser);

getUser(3);

// updateUser(3, userUpdated);
