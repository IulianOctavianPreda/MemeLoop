import { StatsDetail } from "./stats-detail";
import { UserDetail } from "./user-detail";

export interface CommentDetail {
    reply?: CommentDetail[];
    comment?: string;
    stats: StatsDetail;
    user?: UserDetail;
    id?: number;
}
