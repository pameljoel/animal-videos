import axios from "axios";

const KEY = 'AIzaSyCth3fzhizoG-9vOyfZ1xRnyLMHmQOvpmc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: KEY
  }
})
