location.href =
"login.html";

function loginComersio(event){

    event.preventDefault();

    const nama =
    document.getElementById("nama").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    let title = "";

    if(password === "66788482821"){

        title = "Employee";

    }

    else if(password === "77552666666"){

        title = "People";

    }

    else if(password === "77827778888"){

        title = "Supervisor";

    }

    else if(password === "99166388826"){

        title = "Owner";

    }

    else{

        showBubble(
        "Password Salah"
        );

        return;

    }

    localStorage.setItem(
    "username",
    nama
    );

    localStorage.setItem(
    "email",
    email
    );

    localStorage.setItem(
    "title",
    title
    );

    /* MASUK KE INDEX */

    location.href =
    "index.html";

}

function showBubble(text){

    const bubble =
    document.getElementById(
        "bubbleAlert"
    );

    bubble.innerText = text;

    bubble.style.opacity = "1";

    setTimeout(()=>{

        bubble.style.opacity = "0";

    },2000);

        }
