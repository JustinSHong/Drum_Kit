import "./styles.less";

(function() {
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
})();
