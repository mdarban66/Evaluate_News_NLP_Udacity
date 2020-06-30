var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    // let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    //     .then(res => res.json())
    //     .then(function(res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })

    let url = document.getElementById('url').value;
    Client.checkForName(url);
    console.log("::: Form Submitted :::")
        /* checking for valid url
        ref: https://www.npmjs.com/package/valid-url */
    if (validUrl.isUri(url)) {
        console.log('Looks like an URI');

        fetch('http://localhost:8081/posting', {
                method: 'POST',
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url })
            })
            .then(res => res.json())
            .then(function(res) {
                // document.getElementById('results').innerHTML = `- Article Content: ${res.text}`;
                document.getElementById('result_polarity').innerHTML = `- Polarity: ${res.polarity}`;
                document.getElementById('result_polarity_conf').innerHTML = `- Polarity Confidence: ${res.polarity_confidence}`;
                document.getElementById('result_subjectivity').innerHTML = `- Subjectivity: ${res.subjectivity}`;
                document.getElementById('result_subjectivity_conf').innerHTML = `- Subjectivity Confidence: ${res.subjectivity_confidence}`;
            })
    } else {
        console.log('Not a URI');
        document.getElementById('results').innerHTML = "Please enter a valid URL to the text for being analysed...";
        document.getElementById('result_polarity').innerHTML = "";
        document.getElementById('result_polarity_conf').innerHTML = "";
        document.getElementById('result_subjectivity').innerHTML = "";
        document.getElementById('result_subjectivity_conf').innerHTML = "";

    }
}



export { handleSubmit }