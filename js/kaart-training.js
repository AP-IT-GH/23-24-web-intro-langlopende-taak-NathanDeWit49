let map = L.map('contactmap').setView([51.23019754006511, 4.417727156147742], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.23039, 4.41818], [51.22992, 4.41739]];

L.rectangle(bounds, {color: "#027313", weight: 1}).addTo(map);