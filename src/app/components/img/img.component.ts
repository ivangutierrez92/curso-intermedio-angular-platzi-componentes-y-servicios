import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  img = '';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('changed just img', this.img);
  }
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default.png';
  counter = 0;
  idInterval: number | undefined;
  constructor() {
    // before render.
    //No correr cosas async, solo se corre una vez.
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before render and during render
    //changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit() {
    // before render
    // async - fetch -- corre solo una vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    /* this.idInterval = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000); */
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    /* window.clearInterval(this.idInterval); */
  }

  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
    console.log('Log hijo');
    this.loaded.emit(this.img);
  }
}
