import { API_URL } from '../setting';

export function GetListBreed(response) {
    const { results } = response;
    console.log(response);  
    return results;
  }
  
  export default function GetBreed(breed) {
    return fetch(`${API_URL}/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then(GetListBreed);
  }