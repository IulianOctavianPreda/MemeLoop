import { CommentDetail } from "src/app/api/types/comment-detail";

import { StatsDetail } from "./stats-detail";

export interface PostItem {
    id: number;
    title: string;
    path: string;
}

export interface PostDetail {
    id: number;
    title: string;
    path: string;
    comments: CommentDetail[];
    stats: StatsDetail;
}

export interface PostSave {
    title: string;
    path: string;
}
