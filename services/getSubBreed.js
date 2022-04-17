import { API_URL } from '../setting';

export function GetListSubBreed(response) {
    const { results } = response;
  
    return results;
  }
  
  export default function GetSubBreed(subBreed) {
    return fetch(`${API_URL}/breed/${subBreed}/list`)
      .then((res) => res.json())
      .then(GetListSubBreed);
  }