import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task7semana15';

  constructor(private router: Router) {

  }

  OnClick(active: boolean){

    sessionStorage.setItem('autenticarse', active ? 'true': 'false')
    if(active === false){
      this.router.navigate(['/'])
    }
  }
}
