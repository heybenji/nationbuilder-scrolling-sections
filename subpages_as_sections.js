// Blast all the words within a subpage section
$('.subpage-section').blast({ delimiter: "word" }).velocity({ opacity: 0 }); // blast all the words

// Create waypoints for each section and animate-in the text
$('.subpage-section').waypoint(function(direction) {
  if ( direction === 'down' ) {
    $( this )
      .find(".blast")                         // find all the blasts
      .velocity("transition.slideLeftIn", {   // fade them in all fancy-like
        duration: 1250,
        stagger: 40
      });
    console.log("section hit scrolling downwards");
  } else {
    $( this )
      .find(".blast")
      .velocity("reverse");
    console.log("section hit scrolling upwards");
  }
}, { offset: 450 });
