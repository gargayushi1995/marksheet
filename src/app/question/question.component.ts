import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MatStepper } from '@angular/material/stepper';
import { Router} from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  isLinear = false;
  records : any;
  FormGroup: FormGroup;
  userAns = [];
   // Only required when not passing the id in methods
  @ViewChild('stepper') stepper: MatStepper;
  
  constructor(private data: DataService,private router:Router,private _formBuilder: FormBuilder,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.FormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required],
          firstCtrl1: ['', Validators.required],
          firstCtrl2: ['', Validators.required]
        });
    this.data.getData().subscribe(data => {
      this.records = data['results'].map(i => {
	
        let incorrect = [...i.incorrect_answers];
        let correct = i.correct_answer;
      
        incorrect.push(correct);
        console.log(incorrect);
        console.log(correct);
      
        let options = this.shuffle(incorrect);
        i.options = options;
        return i;
      });
      console.log(data)
    })
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
 
    getAnswer(event :any){
     
      const user_ans = event.target.value;
      const correct_ans = this.records[event.target.className]['correct_answer'];
      let score = 0;
      if(user_ans === correct_ans){
        score = 10;    
      }else{
        score = 0;
      }
      
      const obj = {
        'ques_no' :  event.target.className,
        'question' : this.records[event.target.className].question,
        'correct' : correct_ans,
        'score' : score,
        'selected_answer' : user_ans
      }

      this.userAns.push(obj);
      setTimeout(()=> this.stepper.next(), 500)
      
     
      if(event.target.className == 9){
        localStorage.setItem('userdata', JSON.stringify(this.userAns));
        this.router.navigate(['/marksheet/'])
      }
        
      
        
      }
}
