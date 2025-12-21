const handleAnimeError = (err) => {
  console.log(err.message, err.code);
  const errors = {
    Name: "Valid",
    Description: "Valid",
    Episodes: "Valid",
    link: "Valid",
  };
  if (err.code === 11000) {
    errors.Name = "The Anime is already registered";
    return errors;
  }

  Object.values(err.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
  return errors;
};


const handleGameError = (err) => {
  //console.log(err.message, err)

  const errors = { link: "", description: "", name: "" };
  if (err.code === 11000) {
    errors.name = "The Game Already Exists";
    return errors;
  }
  Object.values(err.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
  return errors;
};

module.exports = { handleAnimeError,
    handleGameError
}