interface JQuery {
    /**
     * Displays typing effect of an HTMLElement.
     * @param speed Could be either 'slow', 'normal', 'fast', or a number
     * @param callback Run after all contents has be typed in.
     */
    typeIn(speed?: string | number, callback?: ($this: JQuery<HTMLElement>) => void): JQuery<HTMLElement>;
    /**
     * @param cursor default `_`.
     */
    typeIn(speed?: string | number, cursor?: string, callback?: ($this: JQuery<HTMLElement>) => void): JQuery<HTMLElement>;
}

(function ($: JQueryStatic) {
    if (!$) return console.error("Unable to register function $.fn.typeIn()");

    $.fn.typeIn = function typeIn(speed?: string | number, cursor?: any, callback?: any) {
        speed = speed || 100;

        if (typeof speed == "string") {
            switch (speed) {
                case "slow":
                    speed = 150;
                    break;
                case "normal":
                    speed = 100;
                    break;
                case "fast":
                    speed = 50;
                    break;
                default:
                    throw new TypeError("'speed' must be either 'slow', 'normal', 'fast', or a number.");
            }
        }

        cursor = cursor || '_';

        if (typeof cursor == 'function') {
            callback = cursor;
            cursor = '_';
        }

        let $this = $(this),
            html = $this.html().trim(),
            i = 0;

        $(this).html('').each(() => {
            let int = setInterval(() => {
                if (html.substr(i, 1) == '<') {
                    i = html.indexOf('>', i) + 1;
                } else {
                    i++;
                }

                $this.html(html.substring(0, i) + (i & 1 ? cursor : ''));

                if (i >= html.length) {
                    clearInterval(int);
                    if (typeof callback == 'function') {
                        (<Function>callback).call(this, $this);
                    }
                }
            }, <number>speed);
        });

        return $this;
    };
})(typeof $ != "undefined" ? $ : (typeof module == "object" ? require("jquery") : null));