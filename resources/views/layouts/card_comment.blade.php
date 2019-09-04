<div class="bg-gray-100 py-4 px-6">
    <form class="w-full flex">
        <img class="w-10 h-10 flex-shrink-0 rounded-full border border-gray-200" src="{{ auth()->user()->the_avatar }}">
        <div class="ml-3 w-full">
            <textarea 
                onkeydown="if(event.keyCode == 13 && !event.shiftKey) {event.preventDefault(); comment(this.value); this.value = ''; return false;} " 
                onkeyup="if(event.shiftKey && event.keyCode == 13 || event.keyCode == 8) {this.style.height='5px';this.style.height=(this.scrollHeight) + 'px';}" 
                class="rounded focus:shadow w-full border border-gray-200 py-2 h-10 px-4 text-sm focus:outline-none focus:border-gray-300" placeholder="Tulis komentar kamu ..." name="message"
            ></textarea>
            <div class="flex items-center">
                <svg width="20px" class="mr-2 fill-current text-gray-600" viewBox="0 0 256 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M238.371257,157.892216 L18.3952096,157.892216 C8.43113772,157.892216 0,149.461078 0,139.497006 L0,18.3952096 C0,8.43113772 8.43113772,0 18.3952096,0 L237.60479,0 C247.568862,0 256,8.43113772 256,18.3952096 L256,139.497006 C256,149.461078 248.335329,157.892216 238.371257,157.892216 L238.371257,157.892216 Z M18.3952096,12.2634731 C15.3293413,12.2634731 12.2634731,15.3293413 12.2634731,18.3952096 L12.2634731,139.497006 C12.2634731,143.329341 15.3293413,145.628743 18.3952096,145.628743 L237.60479,145.628743 C241.437126,145.628743 243.736527,142.562874 243.736527,139.497006 L243.736527,18.3952096 C243.736527,14.5628743 240.670659,12.2634731 237.60479,12.2634731 C238.371257,12.2634731 18.3952096,12.2634731 18.3952096,12.2634731 L18.3952096,12.2634731 Z M36.7904192,121.101796 L36.7904192,36.7904192 L61.3173653,36.7904192 L85.8443114,67.4491018 L110.371257,36.7904192 L134.898204,36.7904192 L134.898204,121.101796 L110.371257,121.101796 L110.371257,72.8143713 L85.8443114,103.473054 L61.3173653,72.8143713 L61.3173653,121.101796 L36.7904192,121.101796 L36.7904192,121.101796 Z M190.850299,121.101796 L154.05988,80.4790419 L178.586826,80.4790419 L178.586826,36.7904192 L203.113772,36.7904192 L203.113772,79.7125749 L227.640719,79.7125749 L190.850299,121.101796 L190.850299,121.101796 Z"></path>
                    </g>
                </svg>
                <p class="text-xs text-gray-600">Markdown &nbsp;&bull;&nbsp; Berdiskusi dengan bijak (<a href="#" class="text-indigo-700 font-bold">Kebijakan</a>)</p>
            </div>
        </div>
    </form>
</div>
<div id="comments">
</div>

@push('js')
    <script>
        let comment_tmp = '\
            <div class="px-6 py-3 bg-gray-100 rounded-bl rounded-br">\
                <div class="flex">\
                    <img class="rounded-full w-10 h-10 flex-shrink-0" src="{{ auth()->user()->the_avatar }}">\
                    <div class="ml-3 w-full">\
                        <p class="mx-1 text-blue-500 text-xs font-semibold float-right cmt-time">Baru saja</p>\
                        <h4 class="mb-1 font-bold text-sm">{{ auth()->user()->name }} <span class="text-gray-600 font-normal">({{ auth()->user()->the_username }})</span></h4>\
                        <div class="text-sm text-gray-700">\
                            <p>{msg}</p>\
                        </div>\
                    </div>\
                </div>\
            </div>',
            comments = $('#comments');

        function comment_add(msg, classes, method)
        {
            if(!method) method = 'append';

            let item = comment_tmp.replace(/{msg}/g, msg);
            item = item.str2dom();

            if(typeof classes == 'function')
                classes.call(this, item);

            if(typeof classes == 'string') {
                classes = classes.split(' ');
                classes.forEach((cl) => {
                    item.classList.add(cl);
                });
            }

            comments[method](item);

            return item;
        }

        function comment(msg)
        {
            let item = comment_add(msg, 'opacity-50 pointer-events-none', 'prepend');

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    let res = xhr.responseText;
                    if(res)
                        res = JSON.parse(res);

                    item.classList.removes('opacity-50 pointer-events-none')
                    item.$('.cmt-time').innerHTML = res.data.time;
                }
            }
            xhr.open("post", "{{ route('comments.store') }}", true);
            xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send('content=' + msg + '&post_id='+{{$post->id}});
        }

        @if($post->comments)
            @foreach($post->comments as $comment)
            comment_add('{{ $comment->content }}', function(item) {
                item.$('.cmt-time').innerHTML = '{{ $comment->time }}'
            });
            @endforeach
        @endif
    </script>
@endpush