var widgetStrings = (function () {
    
  var _values = {
      TITLE : "Customer reviews",
      CREATE : "Write a customer review",
      READ : "",
      UPDATE : "Edit your review",
      DELETE : "Delete your review",
      REPLY : "Respond to review",
      SEND : "Send",
      BACK: "Back",
      CANCEL : "Cancel",
      COMMENTS : "Comments",
      COMMENT: "Comment",
      STARS: "Stars",
      STAR: "Star",
      "MORE COMMENTS" : "More comments",
      "LESS COMMENTS" : "Less comments",
      "LABEL REVIEW INTRO" : "Your review of this product",
      "LABEL STAR RATING" : "Your overall rating of this product",
      "LABEL REVIEW TITLE" : "Title of your review",
      "LABEL REVIEW BODY" : "Write your review here",
      "MESSAGE REVIEW OK" : "Thank you!",
      "EDIT REPLY"        : "Edit reply",
      "DELETE REPLY"      : "Delete reply",
      "EMPTY FIELDS" : "Please write a title and comment"
  };
  // var _locale = "en-UK";
  var _locale = "pt-PT";

  // Explicitly reveal public pointers to the private functions 
  // that we want to reveal publicly

   var value = function(key) {
       return _values[key];
   };
   var locale = function(){return _locale};
  
  return {
    value: value,
    locale: locale
  }
})();