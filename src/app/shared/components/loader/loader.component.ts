import { PhotosFacade } from 'src/app/photos.facade';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  public show: Subject<boolean>;
  constructor(private photosFacade: PhotosFacade) {}

  ngOnInit(): void {
    this.show = this.photosFacade.isLoading();
  }
}
