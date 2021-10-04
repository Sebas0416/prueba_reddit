import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/Theme.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public data: any;
  public isValid= null;

  constructor(public themeService: ThemeService) { }

  ngOnInit(){
    this.themeService.getThemes().subscribe(data => {
      this.data= data;
    })
  }

}
