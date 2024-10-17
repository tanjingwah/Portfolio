window.addEventListener('load', function() {
    console.log("Window has loaded");
    const loadingScreen = document.querySelector('.loading-screen');
    const container = document.querySelector('.container');

    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = 'none'; // Hide loading screen
            console.log('loading screen hidden');
        }
        if (container) {
            container.style.display = 'flex'; // Show content
            console.log('container displayed');
        }
        console.log('Loading completed or timed out');
    }, 3500); // Wait 4 seconds before forcing hide
});

