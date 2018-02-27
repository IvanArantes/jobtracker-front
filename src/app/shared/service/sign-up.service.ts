
import {HttpClient} from '@angular/common/http';
import {RestService} from '../../core/rest/rest.service';
import {User} from '../../domain/model/user';
import {Injectable} from '@angular/core';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient,
              private restService: RestService) {
  }

  signUp(name: string, password: string, email: string ) {
    const url = `${this.restService.getUrl()}auth/sign-up`;
    return this.http.post<User>(url, {name, password, email})
      .map(result => result);
  }
}
