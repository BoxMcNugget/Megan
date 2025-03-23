$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");

            for (let i = 0; i < 10; i++) {
                let heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('heartb');
                document.body.appendChild(heart);
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.top = '50%';
                heart.style.opacity = '1';
                heart.style.transform = `translateY(-${Math.random() * 200 + 100}px)`;
                heart.style.transition = 'opacity 1s ease-in-out, transform 2s ease-in-out';
                
                setTimeout(() => {
                    heart.style.opacity = '0';
                    setTimeout(() => heart.remove(), 2000);
                }, 100);
            }
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})