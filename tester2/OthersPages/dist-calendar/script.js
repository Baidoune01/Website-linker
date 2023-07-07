"use strict";

// Fetch events from the PHP script
async function fetchEvents() {
    let response = await fetch('get_events.php');
    let data = await response.json();
    return data;
}

fetchEvents().then(data => {
    // initializing a new calendar object, that will use an html container to create itself
    var calendar = new Calendar(
        "calendarContainer", // id of html container for calendar
        "small", // size of calendar, can be small | medium | large
        [
            "Wednesday", // left most day of calendar labels
            3 // maximum length of the calendar labels
        ], [
            "#EEEEFF", // primary color
            "#9FB4C7", // primary dark color
            "#28587B", // text color
            "#28587B" // text dark color
        ]
    );

    // initializing a new organizer object, that will use an html container to create itself
    var organizer = new Organizer(
        "organizerContainer", // id of html container for calendar
        calendar, // defining the calendar that the organizer is related to
        data // fetched events data from the database
    );
});