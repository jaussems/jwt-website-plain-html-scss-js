//update this with your js_form selector
const form_id_js = "modal_form";

const data_js = {
    "access_token": "cbccll26waqohl0q9i71mgur"
};

const sendButton = document.getElementById("js_send");

sendButton.addEventListener("click", function (e) {
    //console.log('testing e ');
    e.preventDefault();
});

function js_send(event) {
    sendButton.value = 'Sending…';
    sendButton.disabled = true;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
            if (request.readyState == 4) {
                js_onError(request.response);
            }
    };

    const subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    const message = document.querySelector("#" + form_id_js + " [name='text']").value;
    data_js['subject'] = subject;
    data_js['text'] = message;
    const params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
    event.preventDefault();
    evt.stopPropagation();

    //return false;
}
async function sendForm(e) {

    const request = new XMLHttpRequest();


    const subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    const message = document.querySelector("#" + form_id_js + " [name='text']").value;
    data_js['subject'] = subject;
    data_js['text'] = message;
    const params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
    this.errorHandler(request, subject.value, message.value);
    // if (request.status !== 200) {
    //     errorMessage.textContent = 'Failed to send your message';
    // }

    // if (!subject.value || !message.value) {
    //     errorMessage.textContent = 'Please fill in your email / message';
    // }

    console.log(request);

    e.preventDefault();
    e.stopImmediatePropagation();

    return false;
}


function toParams(data_js) {
    const form_data = [];
    for (const key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

function errorHandler(request) {
    const errorMessage = document.getElementById('error_message');
    const subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    const message = document.querySelector("#" + form_id_js + " [name='text']").value;
    if (request.status === 200) {
        errorMessage.classList.add('modal_message--succes');
        errorMessage.classList.add('bounce');
        errorMessage.textContent = 'You have succesfully send your message 👍';

    }
    if (request.status !== 200) {
        errorMessage.classList.add('modal_message--danger');
        errorMessage.classList.add('bounce');
        errorMessage.textContent = `Failed to send your message👎`;

    }

    if (!subject.value || !message.value) {
        errorMessage.classList.add('modal_message--danger');
        errorMessage.classList.add('bounce');
        errorMessage.textContent = 'Please fill in your email / message 👎';
    }

    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000)
}

