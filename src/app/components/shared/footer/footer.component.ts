import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  singupform: FormGroup;
  // sub1 = new ReplaySubject<number>(2);
  // obs1 = from([1, 2, 3]);
  constructor() {}

  ngOnInit(): void {
    this.singupform = new FormGroup({
      email: new FormControl('null', [Validators.required, Validators.email]),
      password: new FormControl('null', Validators.minLength(5)),
    });
    //   this.sub1.subscribe((val) => {
    //     console.log(`observer A:${val}`);
    //   });
    //   this.sub1.subscribe((val) => {
    //     console.log(`observer B:${val}`);
    //   });
    //   this.sub1.next(1);
    //   this.sub1.next(2);
    //   this.sub1.subscribe((val) => {
    //     console.log(`observer C:${val}`);
    //   });
    //   this.sub1.next(3);
    // }
    // this.obs1.subscribe((val) => {
    //   console.log(`oberver A:${val}`);
    // });
    // this.obs1.subscribe((val) => {
    //   console.log(`oberver B:${val}`);
    // });
  }
  onSubmit() {
    console.log(this.singupform.value);
    console.log('heeelo');
  }
}
