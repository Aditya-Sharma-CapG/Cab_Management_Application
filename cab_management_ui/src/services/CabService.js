import axios from "axios";

const CAB_API_BASE_URL = "http://localhost:8080/api/v1/cabs";

class CabService {
  saveCab(cab) {
    return axios.post(CAB_API_BASE_URL, cab);
  }

  getCabs() {
    return axios.get(CAB_API_BASE_URL);
  }

  deleteCab(cabId) {
    return axios.delete(CAB_API_BASE_URL + "/" + cabId);
  }

  getCabById(cabId) {
    return axios.get(CAB_API_BASE_URL + "/" + cabId);
  }

  updateCab(cab, cabId) {
    return axios.put(
      CAB_API_BASE_URL + "/" + localStorage.getItem("cabId"),
      cab
    );
  }
}

export default new CabService();
