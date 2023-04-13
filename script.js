const currentMonth = new Date().getMonth();
const mois = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"
];

const day = document.querySelector('.body-container');

const monthEndDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const monthStartDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

(document.querySelector('.currentMonth')).innerHTML = mois[currentMonth];
(document.querySelector('.currentDate')).innerHTML = new Date().toDateString();

let days = "";

for (let i = monthStartDay; i > 0; i--) {
    days += '<div class="empty"></div>'
}
for (let i = 1; i <= monthEndDay; i++) {
    if (i === new Date().getDate()) {
        days += '<div class="today">' + i + '</div>'
    } else {
        days += '<div>' + i + '</div>';
    }
}

console.log(days);
day.innerHTML = days;