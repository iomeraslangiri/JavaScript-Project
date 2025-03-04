window.onload = function () {
    var menuButton = document.getElementById("menuButton");
    var navLinks = document.getElementById("navLinks");

    menuButton.onclick = function () {
        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("show");
    };

    var lightbulbButton = document.getElementById("lightbulb-button");
    var notification = document.getElementById("notification");
    var closeNotification = document.getElementById("closeNotification");

    lightbulbButton.onclick = function () {
        notification.classList.remove("hidden");
    };

    closeNotification.onclick = function () {
        notification.classList.add("hidden");
    };

    setTimeout(function () {
        notification.classList.remove("hidden");
    }, 3000);

    setTimeout(function () {
        notification.classList.add("hidden");
    }, 8000);

    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = function () {
            this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

            var card = this;
            setTimeout(function () {
                card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
            }, 1000);
        };
    }

    var saveButton = document.getElementsByClassName("save-button")[0];
    saveButton.onmouseover = function () {
        this.style.backgroundColor = "#1976D2";
    };
    saveButton.onmouseout = function () {
        this.style.backgroundColor = "#2196F3";
    };

    var shareButton = document.getElementsByClassName("share-button")[0];
    shareButton.onmouseover = function () {
        this.style.backgroundColor = "#E0E0E0";
    };
    shareButton.onmouseout = function () {
        this.style.backgroundColor = "white";
    };
};