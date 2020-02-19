import { request } from "../helpers/request";

export default {
  getJobs(description, location, full_time = false) {
    return request.get(' /positions.json',{
      params: {
        description,
        location,
        full_time
      }
    })
  }
};

