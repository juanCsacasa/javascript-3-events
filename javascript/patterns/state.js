let data = {
  favorites: [],
  interested: [],
  going: [],
};

const getData = () => ({ ...data });

const updateData = (updatedData) => {
  data = { ...data, ...updatedData };
};

export { getData, updateData };


