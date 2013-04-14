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
    extract models: {},
    
    //  caching params ? 
    cache: {}

}, no.Collection);
