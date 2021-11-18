import { Component, NgModule, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class TableComponent implements OnInit {
 public accept = new BehaviorSubject<boolean>(this.cookieService.get('hasAccepted') === 'true');

 get hasAccepted() {
  return this.accept.asObservable();
 }

 constructor(
 private router: Router, private http: HttpClient, private cookieService: CookieService
) { }

 ngOnInit(): void {
 }
}
