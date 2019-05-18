import apiRequest from "./_base";

const endpoint = "/teams";

const fetchAll = () => apiRequest(endpoint, "get", undefined, undefined);
const create = (name, country) =>
  apiRequest(`${endpoint}/add`, "post", {
    name,
    country
  });
const destroy = id => apiRequest(`${endpoint}/delete/${id}`, "get");

export { fetchAll, create, destroy };
