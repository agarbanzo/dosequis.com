require('jasmine-jquery');
import $ from 'jquery';
import Agegate from '../dev/scripts/agegate/agegate';
import {setCookie,getCookie,eraseCookie} from '../dev/scripts/utils/cookies';

describe('Agegate', () => {
	it('should exist', () => {
        var removecookie = eraseCookie('legalage');
        const agegate = new Agegate();
    });

    it(' validateAgeEntry() should validate the users age is > 21', () => {
         const agegate = new Agegate();
         
         agegate.$el = $('.agegate');
    });


     it(' getAge() should return the users age', () => {
         const agegate = new Agegate();

         agegate.$el = $('.agegate');

         var result = agegate.getAge('12/05/1999');

         expect(result).toEqual(16);
    });

    it(' should call the error message is the user is under 21',()=>{
         const agegate = new Agegate();
        agegate.$el = $('.agegate');
        spyOn(agegate, 'showErrorMesssage');

        agegate.render();

        expect(agegate.showErrorMesssage).toHaveBeenCalled();

    })
});