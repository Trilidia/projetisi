import axios from "axios";
import { properties } from "../../properties"

export default axios.create({
    baseURL: properties.axiosBaseURL
});