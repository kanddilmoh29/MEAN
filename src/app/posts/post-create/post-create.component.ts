import { PostService } from './../post.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postService: PostService) {}

  ngOnInit(): void {}

  onAddPost(form: NgForm) {
    console.log('HELOO');

    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
