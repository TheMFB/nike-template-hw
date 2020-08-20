const assert = require('assert');
const hw1 = require('../controllers/hw1');

describe('hw1', function () {
    const template = '[ "Hello {{firstName}},", "This is a simple example." ]';
    const dynamic_data = '{["firstName", "Mary"]}';
    const message = `Hello Mary,\nThis is a simple example.`;

    describe('properly dynamic values', function () {
        it('should replace the template appropriately ', function () {
            assert.equal(hw1.generate(template, dynamic_data), message);
        });
    });

    describe('bad dynamic values', function () {
        describe('dynamic data argument is missing', function () {
            it('should throw an error ', function () {
                assert.throws(() => hw1.generate(template), Error);
            });
        });
        describe('dynamic data argument is empty', function () {
            it('should throw an error ', function () {
                assert.throws(() => hw1.generate(template, {}), Error);
            });
        });
        describe('dynamic data does not include required key', function () {
            it('should throw an error ', function () {
                assert.throws(() => hw1.generate(template, '{["secondName", "Doe"]}' ), Error);
                assert.throws(() => hw1.generate(template, '{["first Name", "Mary"]}' ), Error);
                assert.throws(() => hw1.generate(template, '{["firstName", ]}' ), Error);
            });
        });
    });
});