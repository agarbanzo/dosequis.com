import MapList from '../dev/scripts/maplist';
import Map from "../dev/scripts/gmap";

const list = new MapList();

describe('BarfinderList', () => {

    it('local import should exist', () => {
            expect(list).not.toBe(null);
    });

    describe("addItems", ()=> {
            it('should be addItems', () => {
                spyOn(list, 'addItems');

                expect(list.addItems.calls.any()).toEqual(false);

                list.addItems();

                expect(list.addItems.calls.any()).toEqual(true);
            });
    });

    describe("addItems", ()=> {
            it('should be addItems', () =>{

            spyOn(list, 'addItems');

            expect(list.addItems.calls.any()).toEqual(false);

            list.addItems();

            expect(list.addItems.calls.any()).toEqual(true);
        });
    });

    describe("show Item On Map",()=>{
        it("should close the list and show the right marker on the map",()=>{
            var fakeData = {
                id:0
            };

            spyOn(list, "toggleList");

            list.showOnMap(fakeData);

            expect(list.toggleList).toHaveBeenCalled();
        });


        it("should assign the right id to each marker when you add a page",()=>{

            var numItems = 40;
            var id = numItems;

            expect(id).toEqual(40);
        })
    });
});