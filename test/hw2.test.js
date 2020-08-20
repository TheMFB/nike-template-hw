const assert = require('assert');
const hw2 = require('../controllers/hw2');

describe('hw2', function () {
    const template = `[
        {
            "dataText": "Hello {{firstName}},",
            "fallbackText": "Hello from Nike,"
        },
        "This dynamic data is {{requiredText}}",
        {
        "dataText": "Sincerely yours, {{senderName}}",
        "fallbackText":
        }
    ]`;

    const dynamic_data = '{["firstName", "Mary"], ["requiredText", "required"]}';
    const message = `Hello Mary,\nThis dynamic data is required\n`;

    describe('properly dynamic values', function () {
        it('should replace the template appropriately ', function () {
            assert.equal(hw2.generate(template, dynamic_data), message);
        });
    });

    describe('bad dynamic values', function () {
        describe('dynamic data argument is missing', function () {
            it('should throw an error ', function () {
                assert.throws(() => hw2.generate(template), Error);
            });
        });
        describe('dynamic data argument is empty', function () {
            it('should throw an error ', function () {
                assert.throws(() => hw2.generate(template, {}), Error);
            });
        });
        describe('dynamic data does not include required key', function () {
            it('should throw an error ', function () {
                assert.throws(() => hw2.generate(template, '{["secondName", "Doe"]}' ), Error);
                assert.throws(() => hw2.generate(template, '{["first Name", "Mary"]}' ), Error);
                assert.throws(() => hw2.generate(template, '{["firstName", ]}' ), Error);
            });
        });
    });
});