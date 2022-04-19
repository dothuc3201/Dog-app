import { API_URL } from '../setting';

export function GetImageBreed(response) {
    const  results  = response.message;
    return results;
  }
  
  export default function GetBreed(breed) {
    return fetch(`${API_URL}/breed/${breed}/images`)
      .then((res) => res.json())
      .then(GetImageBreed);
  }