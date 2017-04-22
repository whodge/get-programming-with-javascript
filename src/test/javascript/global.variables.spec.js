/**
 * Created by w.hodge on 4/22/17.
 */
describe('Global Variables',function(){
    it('should be able to subtract two number correctly',function(){
        var num1;
        var num2;
        var results1;

        num1 = 4;
        num2 = 2;

        results1 = num1 - num2;

        expect(results1).toBe(2);
    });

    it('should be able to add two number correctly',function(){
        var num1;
        var num2;
        var results1;

        num1 = 1;
        num2 = 1;

        results1 = num1 + num2;

        expect(results1).toBe(2);
    });
});