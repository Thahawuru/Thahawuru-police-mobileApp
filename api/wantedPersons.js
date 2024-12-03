import apiClient from "./apiClient";
export const wantedPersons = () => {
  const personList = () => {
    return {
      name: "Kumara Ranathunga",
      sex: "male",
      no: "200043923488",
      dob: "1995-02-02",
      address: "No 23, 1st Lane, Colombo 03",
      doi: "2021-02-02",
      id: "2332543563",
      pob: "Sri Jayawardenapura",
      type: "NIC",
    };
  };

  const getList = async () => {
    try {
      const response = await apiClient.get(`/wantedPerson`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };

  const getPerson = async (id) => {
    try {
      const response = await apiClient.get(`/wantedPerson/${id}`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };
  return {
    getList,
    personList,
    getPerson,
  };
};
