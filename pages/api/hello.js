import axios from 'axios';

export default async (req, res) => {
  const response = await axios.get('http://api.tvmaze.com/people/1');
  res.status(response.status).json({ data: response.data })
}