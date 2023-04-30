//update this with your js_form selector
const form_id_js = "modal_form";

const data_js = {
    access_token: "cbccll26waqohl0q9i71mgur",
};

const sendButton = document.getElementById("js_send");

sendButton.addEventListener("click", function (e) {
    e.preventDefault();
});


async function sendForm(e) {
    const errorMessage = document.getElementById("error_message");
    const request = new XMLHttpRequest();
    const subject = document.querySelector(
        "#" + form_id_js + " [name='subject']"
    ).value;
    const message = document.querySelector(
        "#" + form_id_js + " [name='text']"
    ).value;
    data_js["subject"] = subject;
    data_js["text"] = message;
    if (!subject || !message) {
        errorMessage.classList.add("modal_message--danger");
        errorMessage.classList.add("bounce");
        errorMessage.textContent = "Please fill in your email / message 👎";
        return;
    }
    const params = toParams(data_js);
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    this.errorHandler(request, params);
    document.querySelector("#" + form_id_js + " [name='subject']").value = "";
    document.querySelector("#" + form_id_js + " [name='text']").value = "";
    e.preventDefault();
    e.stopImmediatePropagation();

    return false;
}

function toParams(data_js) {
    const form_data = [];
    for (const key in data_js) {
        form_data.push(
            encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
        );
    }

    return form_data.join("&");
}

function errorHandler(request) {
    const errorMessage = document.getElementById("error_message");
    //needs redesign in future, when mailing service is build.

    if (request) {
        errorMessage.classList.add("modal_message--succes");
        errorMessage.classList.add("bounce");
        errorMessage.textContent = "You have succesfully send your message 👍";
    }
}
