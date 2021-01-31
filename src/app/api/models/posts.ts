import { PostDetail } from './../types/post-detail';

const post1: PostDetail = {
    id: 1,
    title: 'Welcome To The Gang',
    path: './assets/images/welcomeToTheGang.jpg',
    stats: {
        upvotes: 140,
        downvotes: 0
    },
    location: 'RO',
    comments: [
        {
            // reply: [
            //     {
            //         reply: [],
            //         comment: "You said it bro",
            //         stats: {
            //             upvotes: 18,
            //             downvotes: 0,
            //         },
            //         user: {
            //             name: "Bro3",
            //         },
            //         id: 3,
            //     },
            // ],
            comment: "Stay home, don't risk it",
            stats: {
                upvotes: 24,
                downvotes: 0
            },
            user: {
                name: 'Bro1'
            },
            id: 1
        },
        {
            reply: [],
            comment: 'A little bit more',
            stats: {
                upvotes: 2,
                downvotes: 0
            },
            user: {
                name: 'Bro2'
            },
            id: 2
        }
    ]
};

const post2: PostDetail = {
    id: 2,
    title: 'Second Chance',
    path: './assets/images/SecoundChance.jpg',
    location: 'DE',
    comments: [
        {
            // reply: [
            //     {
            //         reply: [],
            //         comment: "You said it bro",
            //         stats: {
            //             upvotes: 13,
            //             downvotes: 0,
            //         },
            //         user: {
            //             name: "Bro3",
            //         },
            //         id: 3,
            //     },
            // ],
            comment: "What is this, the 70's?",
            stats: {
                upvotes: 14,
                downvotes: 0
            },
            user: {
                name: 'Bro1'
            },

            id: 1
        },
        {
            reply: [],
            comment: "He's got a point",
            stats: {
                upvotes: 24,
                downvotes: 0
            },
            user: {
                name: 'Bro2'
            },
            id: 2
        }
    ],
    stats: {
        upvotes: 14,
        downvotes: 0
    }
};

const post3: PostDetail = {
    id: 3,
    title: 'Just work from home',
    path: './assets/images/WorkFromHome.jpg',
    stats: {
        upvotes: 149,
        downvotes: 3
    },
    location: 'US',
    comments: [
        {
            reply: [],
            comment: 'So cute',
            stats: {
                upvotes: 3,
                downvotes: 0
            },
            user: {
                name: 'Bro1'
            },
            id: 1
        },
        {
            reply: [],
            comment: "A man's gotta do what a man's gotta do. He needs to provide for his family after all.",
            stats: {
                upvotes: 4,
                downvotes: 0
            },
            user: {
                name: 'Bro2'
            },
            id: 2
        }
    ]
};

export const Posts: PostDetail[] = [post1, post2, post3];
