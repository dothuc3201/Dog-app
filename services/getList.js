import { API_URL } from '../setting';

export function GetListBreed(response) {
    const results = response;
    return results;
  }
  
export default function GetList() {
    
    return fetch(`${API_URL}/breeds/list/all`)
      .then((res) => res.json())
      .then(GetListBreed);
  }