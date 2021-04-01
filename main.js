console.log("airtable demo");

var Airtable = require('airtable');
console.log("Airtable");
var base = new Airtable({apiKey: 'keyDvpfoibL19TD8A'}).base('app68AKsQa0Jgl05p');

base('sneakers').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 1000,
    view: "Grid view"

}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('sneaker_name'));
            var sneakerName = document.createElement("h1");
            sneakerName = record.fields.sneaker_name;
            document.body.append(sneakerName);

            // var sneakerImg = document.createElement("img");
            // sneakerImg.src = record.fields.image;
            // document.body.appendChild(sneakerImg);
    });
 
    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('image'));
        // var sneakerImage = document.createElement("img");
        // sneakerImage = record.fields.image;
        // document.body.append(sneakerImage);

        var sneakerImg = document.createElement("img");
        sneakerImg.src = record.fields.image;
        document.body.appendChild(sneakerImg);

    });
    fetchNextPage();

    records.forEach(function(record) {
    
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('current_resell_price'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('marketed_to:'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('release_date'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('drop_count'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('style'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('color_way'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('description'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('volatility'));
    });

    fetchNextPage();

    records.forEach(function(record) {
        console.log('Retrieved', record.get('designer'));
    });

    fetchNextPage();
    

}, function done(err) {
    if (err) { console.error(err); return; }




});



