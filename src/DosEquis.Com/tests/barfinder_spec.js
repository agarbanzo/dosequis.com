require('jasmine-ajax');
require('jasmine-jquery');
require('jquery');
import Barfinder from '../dev/scripts/beerlocator/beerlocator';
import Map from "../dev/scripts/components/gmap";

describe('Barfinder', () => {
    it('should exist', () => {
        const barfinder = new Barfinder();
    });

    describe("mocking ajax", function() {
        // beforeEach(()=> {
        //     jasmine.Ajax.install();
        // });

        //     afterEach(()=> {
        //         jasmine.Ajax.uninstall();
        // });

        // it("specifying response when you need it", ()=> {
        //     var doneFn = jasmine.createSpy("success");

        // var xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function(args) {
        //     if(this.readyState == this.DONE){
        //         doneFn(this.responseText);
        //     }
        // };

        // xhr.open("GET",'test_responses/results.json');
        // xhr.send();

        // expect(jasmine.Ajax.requests.mostRecent().url).toBe('test_responses/results.json');
        // expect(doneFn).not.toHaveBeenCalled();

        // jasmine.Ajax.requests.mostRecent().respondWith({
        //     "status": 200,
        //     "contentType": "text/plain",
        //     "responseText": 'awesome response'
        // });

        // expect(doneFn).toHaveBeenCalledWith('awesome response');
        // })
    });

    //test whether right url was passed to $.ajax
    describe("getProducts Tests", function(){
        const barfinder = new Barfinder();
        const map = new Map();

        barfinder.zipcodeToSearch = "10036";

        var configuration = {
            url: "http://localhost:56682/api/BarFinder/Search?zipcode=10036&pageNumber=0&format=jsonp",
            remainingCallTime: 30000
        };

        it("should make an ajax request to the correct url",()=>{
            //spyOn($, "ajax");
            //barfinder.getProducts(configuration.url);
           // expect($.ajax.mostRecentCall.args[0]["url"]).toEqual(configuration.url);
        })
    });

    describe("validateZipCode", function(){
        const barfinder = new Barfinder();

        it("should validate a 5 digit zipcode ",()=>{
            expect(barfinder.validateZipcode('10036')).toBeTruthy();
        })

        it("should not validate letters ",()=>{
            expect(barfinder.validateZipcode('eric')).toBeFalsy();
        })

        it("should not validate zipcode 6 characters ",()=>{
            expect(barfinder.validateZipcode('334443')).toBeFalsy();
        })

        it("should not validate zipcode with characters and numbers ",()=>{
            expect(barfinder.validateZipcode('1003r')).toBeFalsy();
        })

        // it("should show the error message if a vipcode is not valid",()=>{
        //     spyOn(barfinder, 'showErrorMsg');
        //     barfinder.initSearch('eric');
        //     expect(barfinder.validateZipcode('eric')).toBeFalsy();
        //     expect(barfinder.showErrorMsg).toHaveBeenCalled();
        // })
    });

    describe("show loader Test",function(){
        // it("has initial value of null",()=>{

        // })
    })
})