$(document).ready(function() {
    // Add hover effect to change color when hovering over list items in the header
    $('header ul li').hover(
      function() {
        // Mouse enter: Change color to grey
        $(this).css('color', 'grey');
      },
      function() {
        // Mouse leave: Change color back to the original color
        $(this).css('color', ''); // Reset color to its original value (specified in CSS)
      }
    );
  });

$(document).ready(function() {
    // Add hover effect to change button color when hovering over it
    $('button').hover(
      function() {
        // Mouse enter: Change button background color to purple
        $(this).css('background-color', 'purple');
      },
      function() {
        // Mouse leave: Change button background color back to its original color
        $(this).css('background-color', ''); // Reset background color to its original value (specified in CSS)
      }
    );
  });
  