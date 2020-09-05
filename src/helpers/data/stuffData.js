import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const createStuff = (newStuff) => axios.post(`${baseUrl}/stuff.json`, newStuff);

const getAllStuff = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuff.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allStuff = response.data;
      const theStuff = [];

      if (allStuff) {
        Object.keys(allStuff).forEach((stuffId) => {
          const stuff = allStuff[stuffId];
          stuff.id = stuffId;
          theStuff.push(stuff);
        });
      }

      resolve(theStuff);
    })
    .catch((err) => reject(err));
});

const getStuffById = (stuffId) => axios.get(`${baseUrl}/stuff/${stuffId}.json`);

const deleteStuffById = (stuffId) => axios.delete(`${baseUrl}/stuff/${stuffId}.json`);

const updateStuffById = (stuffId, newStuffObj) => axios.put(`${baseUrl}/stuff/${stuffId}.json`, newStuffObj);

export default { createStuff, deleteStuffById, getAllStuff, getStuffById, updateStuffById, };
