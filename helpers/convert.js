
/**
 * Converts stringified key value into dictionary
 *
 * For example, the "mean" of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875.
 *
 * @param {String} dynamicDataTemplate key-value pair array in '{["firstName", "Andre"], ["requiredText", "required"]}' form.
 * @return {Array} An array of key value pairs in JSON.
 */
exports.toDictionary = dynamicDataTemplate => {
    dynamicDataTemplate = dynamicDataTemplate.replace("{", "[");
    dynamicDataTemplate = dynamicDataTemplate.replace("}", "]");
    const arrayTemplate = JSON.parse(dynamicDataTemplate);

    const dictionaryTemplate = {};
    arrayTemplate.forEach((el) => {
        dictionaryTemplate[el[0]] = el[1];
    })

    return dictionaryTemplate
}

/**
 * Takes a string with ': }' and replaces it with ': null }'
 *
 * @param {String} template key-value pair array in '{["firstName", "Andre"], ["requiredText", "required"]}' form.
 * @return {string}
 */
exports.giveMeEmpties = template => {
    const regex = /:\s*}/g;
    const str = template.replace(regex, ': "" }');
    return str
}