import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as randomProfileGenerator from 'random-profile-generator/dist/index.js';
import { CommentDetail } from 'src/app/api/types/comment-detail';

@Component({
    selector: 'app-comment-tree',
    templateUrl: './comment-tree.component.html',
    styleUrls: ['./comment-tree.component.scss']
})
export class CommentTreeComponent implements OnInit {
    @Input() comments: CommentDetail[];
    // @Input() depth = 0;

    @Output() addComment: EventEmitter<string> = new EventEmitter<string>();

    newComment = '';
    profileGenerator = randomProfileGenerator;
    constructor() {}

    ngOnInit() {}

    alterComments(): CommentDetail[] {
        if (this.comments) {
            return this.comments.map((x) => ({
                ...x,
                user: { ...x.user, name: this.profileGenerator.profile().fullName }
            }));
        }
    }
    add() {
        this.addComment.emit(this.newComment);
        this.newComment = '';
    }
}
