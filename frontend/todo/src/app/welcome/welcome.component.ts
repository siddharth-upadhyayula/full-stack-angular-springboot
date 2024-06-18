import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message = 'Some welcome message'
  name = ''
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message)
    console.log(this.name = this.route.snapshot.params['name']);
  }

  getWelcomeMessage() {
    console.log("get welcome message")
  }

}
