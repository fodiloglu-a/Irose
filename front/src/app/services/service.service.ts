import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {ResponseModel} from "../pages/model/ResponseModel";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiHomeUrl = "http://localhost:8080/home"; // Doğru şekilde apiUrl tanımlandı
  apiBaseUrl = "http://localhost:8080"; //

  constructor(private http: HttpClient) { }

  getHomePage(): Observable<any> {
    console.log("getHomePage");

    return this.http.get<any>(this.apiHomeUrl, { withCredentials: true })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error("Hata:", error);
          alert(error.message);
          return throwError(error); // Hata yeniden iletilir
        })
      );
  }

  getModelByOznaka(oznaka: string): Observable<ResponseModel> {
    const url = `${this.apiBaseUrl}/graph/${oznaka}`;
    return this.http.get<ResponseModel>(url);
  }
  getCurrencyPage():Observable<ResponseModel>{
    const url = `${this.apiBaseUrl}/currency`;
    return this.http.get<ResponseModel>(url);
  }
  getComparePageValue(requestModel:ResponseModel):Observable<ResponseModel>{


    const url =`${this.apiBaseUrl}/currency/compare`;
    return this.http.post<ResponseModel>(url,requestModel);

  }


}

