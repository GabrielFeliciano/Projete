class Simulator {
    constructor (simulatorContainer, link) {
        this.activated = false;
        this.isIframeLoaded = false;

        this.container = $(simulatorContainer);
        this.overlayButton = $(`
            <a class="button-overlay" href="${link}" target="_blank">
                <p>Clique para simular</p>
            </a>
        `)
        // https://www.tinkercad.com/embed/?editbtn=1
        this.simulator = $(`
            <iframe class="simulator"
                src="${link}" 
                frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
            </iframe>
        `);

        this.container.append([this.overlayButton, this.simulator]);

        // this.simulator.on('load', this._whenIframeLoaded.bind(this))
        
        // this.overlayButton.on('click', this._whenClicked.bind(this));
    }

    // _whenClicked (e) {
    //     const button = $(e.target);
    //     const container = button.parent();
    //     const simulator = container.find('.simulator');

    //     if (!this.isIframeLoaded) { return; }

    //     button.toggleClass('on');

    //     container.toggleClass('on');

    //     simulator.toggleClass('on');
    //     simulator.css({
    //         left: window.innerWidth
    //     })
    //     simulator.animate({
    //         left: 0
    //     }, 3000);
    // }

    // _whenIframeLoaded () {
    //     console.log("IFrame loaded")
    //     this.isIframeLoaded = true;
    // }

    // toggle () {
    //     this.activated = !this.activated;
    // }
}

export default Simulator;