const getApi = async () => {
  const userdata = await fetch("http://localhost:5000/getuser").then((res) =>
    res.json()
  );

  console.log(userdata);
};

getApi();
