$(document).ready(function () {

    $('#contestEntryTableContainer').jtable({
        title: 'Manage Video Submissions',
        paging: true,
        pageSize: 10,
        sorting: true, //Enable sorting
        defaultSorting: 'Id DESC', //Sort by Name by default
        actions: {
            listAction: '/StayThirstyGrant/GetSubmissions',
            updateAction: '/StayThirstyGrant/UpdateSubmissionStatus',
            deleteAction: '/StayThirstyGrant/Delete',
            //createAction: '/Department/Create'
        },
        fields: {
            Id: {
                key: true,
                list: false,
                create: false,
                edit: false
            },
            FirstName: {
                title: "First Name",
                edit: false
            },
            LastName: {
                title: "Last Name",
                edit: false
            },
            EmailAddress: {
                title: "Email",
                edit: false
            },
            VideoTitle: {
                title: "Title",
                edit: false
            },
            YoutubeLink: {
                title: "youtube Link",
                display: function (data) {
                    return "<a href='" + data.record.YoutubeLink + "' target='_blank'>" + data.record.YoutubeLink + "</a>";
                },
                edit: false
            },
            Round: {
                title: "Round",
                edit: false
            },
            IsOptedIn: {
                title: "Opted-In?",
                type: 'checkbox',
                values: { 'false': 'No', 'true': 'Yes' },
                edit: false
            },
            IsApproved: {
                title: "Approved?",
                type: 'checkbox',
                values: { 'false': 'No', 'true': 'Yes' },
                //defaultValue: 'true'
            },
            IsRejected: {
                title: "Rejected?",
                type: 'checkbox',
                values: { 'false': 'No', 'true': 'Yes' },
                //defaultValue: 'true'
            },
            IsFinalist: {
                title: "Finalist?",
                type: 'checkbox',
                values: { 'false': 'No', 'true': 'Yes' },
                //defaultValue: 'true'
            },
            IsWinner: {
                title: "Winner?",
                type: 'checkbox',
                values: { 'false': 'No', 'true': 'Yes' },
                //defaultValue: 'true'
            }
        }

    });

    function loadRecords() {
        $('#contestEntryTableContainer').jtable('load', {
            round: $('#filter_round').val(),
            isFinalist: $('#filter_finalist').val(),
        });
    }

    //Re-load records
    $('#filter_round').change(function (e) {
        loadRecords();
    });
    $('#filter_finalist').change(function (e) {
        loadRecords();
    });

    loadRecords();

});