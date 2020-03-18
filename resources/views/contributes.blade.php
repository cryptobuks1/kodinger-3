@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Kontribusi</h1>

    <div class="flex items-center">
        <div class="w-full">
            @include('flash::message')

            @forelse($contributes as $contribute)
                @include('layouts.card_contribute', ['contribute' => $contribute])
            @empty
            <div class="text-center">
                <svg width="300" class="inline-block" viewBox="0 0 1200 1200"><defs><style>.cls-1{fill:#dfdfdf;}.cls-2{fill:#f3f3f3;}.cls-3,.cls-4{fill:none;stroke-miterlimit:10;}.cls-3{stroke:#f3f3f3;stroke-width:6px;}.cls-4{stroke:#dfdfdf;stroke-width:11px;stroke-dasharray:22;}.cls-5{fill:#de8e68;}.cls-6{fill:#56cad8;}.cls-7{fill:#fcc486;}.cls-8{fill:#fed385;}.cls-9{fill:#fed892;}.cls-10{fill:#333;}.cls-11{fill:#d37c59;}.cls-12{fill:#74d5de;}</style></defs><title>Artboard 1</title><g id="Backgrund"><rect class="cls-1" x="1005.5" y="142.5" width="137" height="188"/><rect class="cls-2" x="1005.5" y="142.5" width="137" height="13"/><rect class="cls-2" x="141" y="217" width="334" height="107"/><circle class="cls-1" cx="195.5" cy="269.5" r="35"/><rect class="cls-1" x="254.5" y="236.5" width="196" height="12"/><rect class="cls-1" x="254.5" y="264.5" width="66" height="12"/><polyline class="cls-3" points="218.89 255.42 190 284.31 178.05 272.35"/><rect class="cls-2" x="141" y="348" width="334" height="107"/><circle class="cls-1" cx="195.5" cy="400.5" r="35"/><rect class="cls-1" x="254.5" y="367.5" width="196" height="12"/><rect class="cls-1" x="254.5" y="395.5" width="66" height="12"/><polyline class="cls-3" points="218.89 386.42 190 415.31 178.05 403.35"/><rect class="cls-2" x="141" y="479" width="334" height="107"/><circle class="cls-1" cx="195.5" cy="531.5" r="35"/><rect class="cls-1" x="254.5" y="498.5" width="196" height="12"/><rect class="cls-1" x="254.5" y="526.5" width="66" height="12"/><polyline class="cls-3" points="218.89 517.42 190 546.3 178.05 534.35"/><rect class="cls-2" x="978.5" y="173.5" width="137" height="188"/><rect class="cls-1" x="978.5" y="173.5" width="137" height="13"/><rect class="cls-1" x="993.5" y="209.5" width="108" height="9"/><rect class="cls-1" x="993.5" y="227.5" width="108" height="9"/><rect class="cls-1" x="993.5" y="245.5" width="108" height="9"/><path class="cls-4" d="M752.5,429.5c0-10,18-26,49-26,38,0,90,81,148,81,40,0,95-33,95-93"/></g><g id="Vector"><path class="cls-5" d="M454,527c-2,7-34,176,21,333,9,2,8-23,8-23L473,622l5-81Z"/><path class="cls-6" d="M604,1156H507s-33-341-33-348c6,6,5,8,30,15,15,16,121,282,121,282Z"/><path class="cls-7" d="M555.81,400c46.73,13.37,9.83,156.11-7.47,168.07s-98.4-21.7-104.94-36.84S489.65,381.07,555.81,400Z"/><path class="cls-8" d="M598,362c149,0,152,428,131,446s-236,35-255,0S436,362,598,362Z"/><path class="cls-9" d="M652,391c39-29,130,87,129,108s-77,65-93,61S596.78,432.06,652,391Z"/><path class="cls-5" d="M767,503c37,61,47,142,47,156,0,38-19,57-31,57-48,0-206-122-217-132s21-40,26-35,62,41,145,77c-12-15-47-60-48-74S767,503,767,503Z"/><rect class="cls-10" x="489.71" y="477.92" width="63.18" height="108.3" transform="translate(-73.53 83.71) rotate(-8.58)"/><ellipse class="cls-5" cx="557.5" cy="553" rx="27" ry="37.5" transform="translate(-200.16 759.31) rotate(-60)"/><path class="cls-11" d="M624,381c0,13-52,14-52,0V302h52Z"/><ellipse class="cls-5" cx="584.5" cy="257.5" rx="51.5" ry="91.5"/><circle class="cls-5" cx="632.5" cy="270.5" r="13.5"/><path d="M808,153c-39,0-71,28-113,28-30,0-59-36-101-36-54,0-71,29-71,49,0,16,10,34,13,34,0-5,6-23,8-25,2,7,44,56,81,56v.28a13.5,13.5,0,1,1,0,22.44V311h10c13,0,19-5,39-5,35,0,84,43,144,43,65,0,92-49,92-104C910,172,841,153,808,153Z"/><path class="cls-12" d="M729,808v348H604L503.88,822.77C539,829,672,834,729,808Z"/></g></svg>
                <h2 class="text-xl font-semibold">Tidak Ada Kontribusi</h2>
                @if(isset($myposts))
                <p class="mt-2 leading-loose text-gray-600 text-sm">{{ $user->name }}, belum ada kontribusi ke semua konten kamu.</p>
                @else
                <p class="mt-2 leading-loose text-gray-600 text-sm">{{ $user->name }} belum pernah melakukan kontribusi.</p>
                @endif
            </div>
            @endforelse

            <div class="mt-5"> 
                {!! $contributes->links('vendor.pagination.simple-default') !!}
            </div>
        </div>
    </div>
@stop
