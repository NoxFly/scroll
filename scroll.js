/**
 * COPYRIGHT NOXFLY 2019
 * Scroll LIB
 * 
 * link: https://cdn.jsdelivr.net/gh/NoxFly/scroll/scroll.js
 * 
 */

class Scroll {
    constructor(elements, transition='auto') {
        if(transition != "smooth" && transition != "auto") {
            transition = "auto";
        }

        this.H = this.window.innerHeight;
        this.elts = elements;
        this.container = "#wrapper-"+this.elts;

        this.page = 1;
        this.maxPage = 0;

        this.scroll = 0;
        this.transition = transition;

        document.querySelectorAll(`.${this.elts}`).forEach(p => {this.maxPage++;});

        this.keys = {};

        this.window.addEventListener('wheel', e => {
            this.scrollPage(e.deltaY > 0);
        });
    }

    scrollPage(dir) {
        if(dir && this.page < this.maxPage) {
            this.page++;
        } else if(!dir && this.page > 1) {
            this.page--;
        }


        let pg = document.querySelector(`.${this.elts}-${this.page}`);
        let pg_scroll = pg.offsetTop;

        document.querySelector(this.container).scroll({
            top: pg_scroll,
            left: 0,
            behavior: this.transition
        });
    }

    goTo(i) {
        if(!isNaN(i)) {
            document.querySelector(this.container).scroll({
                top: i,
                left: 0,
                behavior: this.transition
            });
        }
    }

    preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    preventDefaultForScrollKeys(e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }
    
    disableScroll() {
        this.window.onkeydown = e => {
            if(e.keyCode == 38 || e.keyCode == 40) {
                e.preventDefault();
                this.scrollPage(e.keyCode==40);
            }
        }

        if (this.window.addEventListener) {
            this.window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        }

        document.addEventListener('wheel', this.preventDefault, {passive: false});
        this.window.onwheel = this.preventDefault;
        this.window.onmousewheel = document.onmousewheel = this.preventDefault;
    }
    
    enableScroll() {
        if (this.window.removeEventListener) {
            this.window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        }

        document.removeEventListener('wheel', this.preventDefault, {passive: false});
        this.window.onmousewheel = document.onmousewheel = null;
        this.window.onwheel = null;
    }
}