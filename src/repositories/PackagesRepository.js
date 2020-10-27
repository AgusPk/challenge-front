import API from "../utils";

const PackagesRepository = {
  createPackage: async (packageData) => {
    try {
      let response = await API.post(`/packages`, { package: packageData });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCategories: async () => {
    try {
      let response = await API.get(`/packages/categories`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PackagesRepository;
