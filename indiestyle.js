function countdown(num, callback) {
    setTimeout(function () {
        document.getElementById('countdown').innerText = num;
        callback && callback();
    }, 1000);
}

countdown(10, function () {
    countdown(9, function () {
        countdown(8, function () {
            countdown(7, function () {
                countdown(6, function () {
                    countdown(5, function () {
                        countdown(4, function () {
                            countdown(3, function () {
                                countdown(2, function () {
                                    countdown(1, function () {
                                        document.getElementById('countdown').innerText = "Happy Independence Day!";
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
