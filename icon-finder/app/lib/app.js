/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

var qs = require('querystring');
var request = require('request');

window.$ = window.jQuery = require('jquery');

var settings = {
  url: 'https://api.iconfinder.com/v2/icons/search?',
  count :  21,
  type : '',
  vector : 'all',
  premium : 1
}

var timeout, query, result, _self, lastItem, list = "";

var byks = {
  init: function(){
    _self = this;

    $('.search').bind('input', function(e) {

      clearTimeout(timeout);
      if($(this).val().length > 1){
        value = $(this).val();
        timeout = setTimeout(function(){
          _self.wait(true);
          _self.search(value)
        },600)
      }else{
        _self.clear();
      }

    });
  },

  search : function(value){
    query = qs.stringify({ query: value , count: settings.count, style: settings.type, vector: settings.vector, premium: settings.premium })
    this.get(settings.url, query);
  },

  get : function(url,query){
    _self = this;

    request({url : url+query}, function (error, response, data) {

        if (!error && response.statusCode == 200) {
            result = JSON.parse(data);

            if(result.icons.length > 0){
              _self.list(result)
            }else{
              _self.notFound()
            }
        }else{
          _self.message();
        }
      });
  },

  list : function(result){
    list = "";
    $.each(result.icons,function(e,icons){
      lastItem = Object.keys(icons.raster_sizes).sort().reverse()[0];
      list += '<li><a class="item"><img src="'+icons.raster_sizes[lastItem].formats[0].preview_url+'"/></a></li>';
    });

    $('#list').html(list);
    this.wait(false);
  },

  clear : function(){
    $('#list').empty()
    this.wait(false);
  },

  message : function(){
    this.clear();
    $('#list').html('<div class="fail-message">Something went wrong, </br> please check your internet connection</div>');
  },

  notFound : function(){
    this.clear();
    $('#list').html('<div class="no-result">I couldn\'t find anything, sorry :(</div>');
  },

  wait : function(args){
    $('.loading').toggle(args)
  },
};


$(function(){
  byks.init();
});
