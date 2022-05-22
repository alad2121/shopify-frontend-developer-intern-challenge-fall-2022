import axios from "axios";

export default axios.create({
  baseURL: "https://api.openai.com/v1/engines/text-curie-001/completions",
  headers:{
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    "Context-Type": "application/json"
  },
});
