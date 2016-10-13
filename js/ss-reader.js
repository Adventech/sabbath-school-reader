var ssReader = Class({
  $singleton: true,

  setFontAndada: function(){
    this.setFont("andada");
  },

  setFontLato: function(){
    this.setFont("lato");
  },

  setFontPtSerif: function(){
    this.setFont("pt-serif");
  },

  setFontPtSans: function(){
    this.setFont("pt-sans");
  },

  setFont: function(fontName) {
    $("#ss-wrapper").removeClass().addClass("ss-wrapper, ss-wrapper-"+fontName);
  }
});