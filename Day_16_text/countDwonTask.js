const delay = (callback, delayMs) => {
    setTimeout(callback, delayMs);
  }
  
  const disCountDown = (number, delayMs, callback) => {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = number;
    delay(callback, delayMs);
  }
  
  const displayMessage = (message) => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }
  
  delay(() => {
    disCountDown(10, 1000, () => {
    disCountDown(9, 1000, () => {
    disCountDown(8, 1000, () => {
    disCountDown(7, 1000, () => {
    disCountDown(6, 1000, () => {
    disCountDown(5, 1000, () => {
    disCountDown(4, 1000, () => {
    disCountDown(3, 1000, () => {
    disCountDown(2, 1000, () => {
    disCountDown(1, 1000, () => {
    disCountDown(0, 1000, () => {
        displayMessage("Happy Independence Day!");
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
    });                                                          
    }, 1000);
  