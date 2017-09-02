import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-trailer-preview',
  templateUrl: './trailer-preview.component.html',
  styleUrls: ['./trailer-preview.component.scss']
})
export class TrailerPreviewComponent implements OnInit {

  public trailerId: string = '';
  public SIZE: any = {
    width: 752,
    height: 423
  };

  public isOpenPopup: boolean = false;
  public redirectPath: string;


  public constructor(private _activatedRoute: ActivatedRoute,
                     private _router: Router,) {
  }

  public ngOnInit() {
    this._activatedRoute.params
      .subscribe((params: Params) => {
        this.trailerId = params['trailerId'];
        this.redirectPath = this._getPreviousPath();
        this.isOpenPopup = true;
      });
  }

  public closePopup(): void {
    this.isOpenPopup = false;
    this._router.navigateByUrl(this.redirectPath);
  }

  private _getPreviousPath(): string {
    return this._router.url.split('(')[0];
  }
}
