import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjY4OSwiaWF0IjoxNjQ5Mjg0MDAzfQ.alOOcwHQ1Gq7L3JLpB75u82KjGz5k-jUncYer791Gcc';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

export function getHabits() {
    return axios.get(`${BASE_URL}/habits`, config);
}

export function createHabit(body) {
    return axios.post(`${BASE_URL}/habits`, body, config);
}
