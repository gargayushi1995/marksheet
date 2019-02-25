import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  //

  getData() {
    return this.http.get('https://opentdb.com/api.php?amount=10')
  }
}
//   getMovieById(id:number){
    

//     return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.API_KEY+'&language=en-US');
//   }
//   getCastById(id: number){
//     return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + this.API_KEY + '&language=en-US');
    
//     }
//     getRecomendationsById(id: number){
//       return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=' + this.API_KEY + '&language=en-US');
      
//       }
//    searchMovieByName(name: string){
//       return this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+this.API_KEY+'&language=en-US&query='+name+'&page=1&include_adult=false')
//    }   
// }
