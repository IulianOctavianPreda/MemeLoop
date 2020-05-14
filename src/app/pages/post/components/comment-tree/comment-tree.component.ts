import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommentDetail } from "src/app/api/types/comment-detail";

@Component({
    selector: "app-comment-tree",
    templateUrl: "./comment-tree.component.html",
    styleUrls: ["./comment-tree.component.scss"],
})
export class CommentTreeComponent implements OnInit {
    @Input() comments: CommentDetail[];
    // @Input() depth = 0;

    @Output() addComment: EventEmitter<string> = new EventEmitter<string>();

    newComment = "";
    constructor() {}

    ngOnInit() {}

    add() {
        this.addComment.emit(this.newComment);
        this.newComment = "";
    }
}
