/*
Problem 1: Rendering with Dynamic Data

you'll write a simple Render function that accepts two arguments:
• A Template: JSON definition of the email message template
• Dynamic Data: A list of key value pairs that personalizes each email


template: {
    body:
    variables: {
        ...
    }
}

dynamic_data: [{
    name: dynamic_data
}]

const template = '[
        "Hello {{firstName}},",
        "This is a simple example."
        ]'

const dynamic_data = {["firstName", "Mary"]}

=>
Hello Mary,
This is a simple example.



The function should throw an exception if a dynamic value is missing. In the example above, an
exception should be thrown if the dynamic data argument is missing, is empty, does not include
the key "firstName", or has a whitespace or empty value.
*/


const generate = (template, dynamic_data) => {
    return template
}

console.log(generate(4, 6))