import { post } from './libs/post';

let posts = post.init('.posts', {
    url: routes.post_both,
    params: params => ({
        ...params,
        status: status,
        username: this_user
    }),
    truncate_content: true
});
