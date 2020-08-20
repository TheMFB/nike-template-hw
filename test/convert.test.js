const assert = require('assert');
const convert = require('../helpers/convert');

describe('convert', function () {
    const template = '[ "Hello {{firstName}},", "This is a simple example." ]'
    describe('.toDictionary', function () {
        describe('is given a properly formatted dynamic data template', function () {
            it('should return a json object ', function () {
                assert.deepEqual(convert.toDictionary(
                    '{["firstName", "Andre"], ["requiredText", "required"]}'),
                    {
                        firstName: 'Andre',
                        requiredText: 'required'
                    }
                )
            });
        });

        describe('is given an improperly formatted dynamic data template', function () {
            it('should throw an error. ', function () {
                assert.throws(() => { convert.toDictionary('{["firstName", "Andre"], ["requiredText", "required"]') }, Error);
            });
        });
    })
    describe('.giveMeEmpties', function () {
        const fallbackTemplate = `[
            {
                "dataText": "Hello {{firstName}},",
                "fallbackText":
            },
            {
                "dataText": "Sincerely yours, {{senderName}}",
                "fallbackText":
            }
        ]`;
        const fixedFallbackTemplate = `[
            {
                "dataText": "Hello {{firstName}},",
                "fallbackText": "" },
            {
                "dataText": "Sincerely yours, {{senderName}}",
                "fallbackText": "" }
        ]`;


          it('should replace appropriately. ', function () {
            assert.equal(
                convert.giveMeEmpties(fallbackTemplate),
                fixedFallbackTemplate
            )
            });

    })

});