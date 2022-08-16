const url = "http://localhost:5500/api";

const getUsers = () => {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((e) => console.error(e));
};

getUsers();
