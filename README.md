single / double tap (for touch devices)
========

This super lightweight special event extension will fire a `tap` or `doubleTap` event. A `doubleTap` event is considered one if after the first tap, a successive tap had been fired no later than 250ms. (configurable)

Weight: ~2kb (uncompressed)

## How to use:
    $(document).on('doubleTap', '.someItem', function(){ console.log('double tap'); })
               .on('tap', '.someItem', function(){ console.log('single tap'); })