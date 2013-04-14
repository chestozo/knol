no.Model.define('album', {
    
    // model specific params:
    params: {
        author_login: null,
        album_id: null
    },

    //  paging params (defined separately because they do not affect the main model, only the portion of data)
    paging_params: {
        page_number: 0,
        num_per_page: 20
    },
    
    //  how to extract models
    //  which events with that models must affect this one (for example: deleted model may affect collection)
    extract_models: {},
    
    //  caching params ? 
    cache: {
        fresh: '5m'  //  3s / 3sec / 5min,
        mode: 'idle' //  timeout (after specified time we drop data no metter what)
                     //  idle (if model was not touched for specified time — drop data)
                     //  manual (on demand)
    }

}, no.Collection);

/**Q:
[ ] should we drop cache for data portions that were just got?
    for example I surf some album and when I get to 15th page cache timeout is reached and we drop
    all data (including the 14th page)
[ ] when I request a photo A from the 0 page and then I request full 0 page should I check for photo A presense in cache?
*/
