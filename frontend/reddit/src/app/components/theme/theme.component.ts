import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/services/Theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  public data : any;
  public id: any;
  public isValid = null;

  constructor(public themeService: ThemeService, private ruote: ActivatedRoute) {
    this.data = {}
   }

  ngOnInit(){
    this.id=this.ruote.snapshot.params.id;
    this.themeService.getThemeById(this.id).subscribe(data => {
      this.data= data[0];
      let splitCommunity = data[0].community_icon.split("?");
      let splitBanner = data[0].banner_background_image.split("?");
      this.data.community_icon = splitCommunity[0];
      this.data.banner_background_image = splitBanner[0];
      console.log(this.data.title)
    })
  }
}
