import Map from "../dev/scripts/gmap";
import MapList from '../dev/scripts/maplist';

describe('Gmap', () => {
    describe("setListItemSelected", ()=> {
        it('should set list item selected', () => {
            var fakeData = {
                id:0
            };
            const map = new Map();
            const list = new MapList();
            map.list = list;
            spyOn(map.list, 'setListItemSelected');
            //map.setListItem(fakeData);
            //expect(map.list.setListItemSelected).toHaveBeenCalled();
        });
    });
});