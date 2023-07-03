import { Injectable } from '@angular/core';
import { HeaderDate } from './header-data.model';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderDate>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get HeaderDate(): HeaderDate {
    return this._headerData.value
  }

  set headerData(headerData: HeaderDate){
    this._headerData.next(headerData)
  }

}
