import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {

  constructor(private datePipe: DatePipe) { }

  getCurrentDateFormatted(): string {
    const currentDate = new Date();
    return this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');
  }
}
