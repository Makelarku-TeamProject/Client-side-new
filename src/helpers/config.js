const config = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const hostTarget = "http://localhost:3030/api/v1";

export { config, hostTarget };
