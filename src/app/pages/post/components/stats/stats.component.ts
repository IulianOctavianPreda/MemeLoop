import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { StatsDetail } from "../../../../api/types/stats-detail";

@Component({
    selector: "app-stats",
    templateUrl: "./stats.component.html",
    styleUrls: ["./stats.component.scss"],
})
export class StatsComponent implements OnInit {
    @Input() stats: StatsDetail;
    @Input() size = "default";
    @Input() fill = "solid";

    @Output() upvoteCallback: EventEmitter<void> = new EventEmitter<void>();
    @Output() downvoteCallback: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {}

    upvote() {
        this.upvoteCallback.emit();
    }

    downvote() {
        this.downvoteCallback.emit();
    }
}
