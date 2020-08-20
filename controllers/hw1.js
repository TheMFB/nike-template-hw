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

    // turn the stringified array into a multi-line message
    const messages = JSON.parse(template);
    let messageText = messages.reduce((acc, el) => acc + el + '\n', "")

    // Replace the template with the items in the dictionary.
    for (const [key, value] of Object.entries(dynamicDict)) {
        // if (key !== "requiredText") {
            messageText = messageText.replace(`{{${key}}}`, value);
        // }
    }

    // Throw error if there are any variables left in message that weren't replaced.
    if (messageText.match(/{{([^}]+)}}/g)) throw new Error("Template variable not defined in dynamicData");

    // Remove the trailing new line
    return messageText.substring(0, messageText.length - 1);
}

