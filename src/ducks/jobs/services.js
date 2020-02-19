import request from "../helpers/request";

export default {
  getJobs({description, location, full_time}) {
    return request.get('/positions.json',{
      params: {
        description: description,
        location: location,
        full_time: full_time,
      },
    });
/*    return request.get('planets/1/')*/
  }
};

