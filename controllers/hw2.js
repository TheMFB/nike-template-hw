const convert = require('../helpers/convert');

/**
 * Problem 1: Rendering with Dynamic Data
 *
 * Replaces the template's variables with the appropriate data via dynamicData.
 * @param {string} template a stringified array containing a templated message.
 * @param {string} dynamicData a stringified key-value pair array in '{["firstName", "Andre"], ["requiredText", "required"]}' form.
 * @return {string} the messages with {{dynamic data}} replaced
 */
exports.generate = (template, dynamicData) => {
    // Convert to workable JSON dictionary.
    const dynamicDict = convert.toDictionary(dynamicData);

    // Adds null values into template in order to convert to JSON.
    template = convert.giveMeEmpties(template);

    console.log("---- template: ", template);
    let messages = JSON.parse(template);

    // Replace all the variables in the messages appropriately.
    messages = messages.map((el) => {
        let message;
        let fallback = null;

        if (typeof el === 'object') {
            message = el.dataText;
            fallback = el.fallbackText;
        } else {
            message = el;
        }

        let matched = message.match(/{{([^}]+)}}/g);

        matched.forEach((match) => {
            const matchString = match.substring(2, match.length-2)
            // if it exists in the dictionary, replace as normal.
            if (dynamicDict[matchString]) {
                message = message.replace(match, dynamicDict[matchString]);
            // if it doesn't, but there's a fallback, send that.
            } else if (fallback !== null) {
                message = fallback;
            // if not, then burn it all down.
            } else {
                throw new Error("Template variable not defined in dynamicData and no fallback text!");
            }
        })

        return message;
    })

    // Throw error if there are any variables left in message that weren't replaced.
    if (messages.some((el) => el.match(/{{([^}]+)}}/g))) throw new Error("Template variable not defined in dynamicData");

    // turn the stringified array into a multi-line message
    messages = messages.reduce((acc, el) => acc + el + '\n', "")

    // Remove the trailing new line
    return messages.substring(0, messages.length - 1);
}

