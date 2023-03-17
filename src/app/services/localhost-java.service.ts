import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class LocalhostJavaService {

	localhostUrl = 'http://localhost:8081';

	constructor(private http: HttpClient) {}

	getProjects() {
		return this.http.get(this.localhostUrl + '/ftm/api/progetti');
	}

  postProject(body: {}) {
    return this.http.post(this.localhostUrl + '/ftm/progetti', body);
  }
}
