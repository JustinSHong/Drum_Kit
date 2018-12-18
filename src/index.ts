import "./styles.less";

(function() {
    // remove transition once sound is done playing
    function stopTransition(e: any) {
        console.log(`event obj ${e}`);
        if (e.propertyName === "transform") {
            e.target.classList.remove("playing");
        }
    }

    // plays a key's corresponding sound
    function playDrumSound(e: any) {
        const audio: any = document.querySelector(
            `audio[data-key="${e.keyCode}"]`
        );
        const key: any = document.querySelector(`div[data-key="${e.keyCode}"]`);
        // only play sound if key codes match
        if (audio) {
            key.classList.add("playing");
            audio.currentTime = 0;
            audio.play();
        }
    }

    window.addEventListener("keydown", playDrumSound);

    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach(key => {
        key.addEventListener("transitionend", stopTransition);
    });
})();
