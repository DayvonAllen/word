import { Component, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  slang;
  word;
  constructor(private data: DataService) {}
  ionViewWillEnter() {
    this.slang = this.data.showData()
    this.word =  this.slang.sort(function (a, b) {
      if (a['word'] < b['word']) return -1;
      else if (a['word'] > b['word']) return 1;
      return 0;
    });

  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.word.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


}
