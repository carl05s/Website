// this is a js file to track my local time (UTC+8)
// declare time zone formatting

let options = {
    timeZone: 'Australia/Perth',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
},
formatter = new Intl.DateTimeFormat([], options);

// set time
setInterval(
    () => {
        document.querySelector("#time").innerText = formatter.format(new Date());
    }
, 1000);