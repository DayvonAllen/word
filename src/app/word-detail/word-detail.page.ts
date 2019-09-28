import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.page.html',
  styleUrls: ['./word-detail.page.scss'],
})
export class WordDetailPage implements OnInit {
  word;
  audio;
  constructor(private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('wordId')){
        this.router.navigate(['home/']);
        return;
      }
      const wordId = paramMap.get('wordId');
      this.word = this.data.showWord(wordId);
      
    })
  }

  play(){
    this.audio = new Audio(`../../assets/${this.word['word']}.mp3`);
    this.audio.play();
  }

}
