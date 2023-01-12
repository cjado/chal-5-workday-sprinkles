// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    

    $(document).on('click', '.saveBtn', function() {
        var $this = $(this);
        var hour = parseInt($this.closest('.time-block').attr('id').split('-')[1]);
        var description = $this.prev().val();
        localStorage.setItem('hour-' + hour, description);
    })
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    $('.time-block').each(function() {
        var now = dayjs();
        var hour = now.hour();
        var $this = $(this);
        var id = parseInt($this.attr('id').split('-')[1]);

        if (hour > id) {
            $this.addClass('past');
            $this.removeClass('present future');
        } else if (hour < id) {
            $this.addClass('future');
            $this.removeClass('present past');
        } else {
            $this.addClass('present');
            $this.removeClass('future past');
        }});
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });

