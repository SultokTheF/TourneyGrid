const BASE_URL = "http://localhost:8000/api/v1";

const userValidateEndpoint = `${BASE_URL}/user/`;

const teamsEndpoint = `${BASE_URL}/teams/`;
const matchesEndpoint = `${BASE_URL}/matches/`;
const roundsEndpoint = `${BASE_URL}/rounds/`;
const userEndpoints = `${BASE_URL}/users/`;
const registerEndpoint = `${BASE_URL}/register/`;
const loginEndpoint = `${BASE_URL}/login/`;
const double_elimination_bracketsEndpoint = `${BASE_URL}/double_elimination_brackets/`;

export { userValidateEndpoint, teamsEndpoint, matchesEndpoint, roundsEndpoint, userEndpoints, registerEndpoint, loginEndpoint, double_elimination_bracketsEndpoint };
