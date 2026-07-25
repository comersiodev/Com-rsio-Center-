function loginComersio(event){

    event.preventDefault();

    const nama =
    document.getElementById(
        "nama"
    ).value.trim();

    const email =
    document.getElementById(
        "email"
    ).value.trim();

    const password =
    document.getElementById(
        "password"
    ).value.trim();

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

        alert(
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

    window.location.href =
    "./index.html";

}

/* =========================
   BUBBLE ALERT
========================= */

function showBubble(text){

    const bubble =
    document.getElementById(
        "bubbleAlert"
    );

    bubble.innerText = text;

    bubble.style.opacity = "1";

    bubble.style.bottom = "30px";

    setTimeout(()=>{

        bubble.style.opacity = "0";

        bubble.style.bottom = "-100px";

    },2000);

}