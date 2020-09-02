import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const createStuff = (newStuff) => axios.post(`${baseUrl}/stuff.json`, newStuff);

export default { createStuff };
