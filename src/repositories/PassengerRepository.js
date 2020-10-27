import API from "../utils";

const PassengerRepository = {
  createPassenger: async (passengerData) => {
    try {
      let response = await API.post(`/passengers`, passengerData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPassengers: async () => {
    try {
      let response = await API.get(`/passengers`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  showPassenger: async (id) => {
    try {
      let response = await API.get(`/passengers/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePassenger: async (id) => {
    try {
      let response = await API.delete(`/passengers/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PassengerRepository;
