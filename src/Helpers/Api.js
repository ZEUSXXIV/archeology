import axios from "axios";

export default axios.create({
  baseURL: BaseUrl,
  headers: {
    Authorization: Authorization,
    AppVersion: AppVersion,
  },
});