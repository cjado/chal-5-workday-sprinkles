
$(function () {
    var now = dayjs();
    console.log(now)
    var nowHour = parseInt(now.format('h'));
    console.log(nowHour)
    if(now.format('A') === 'PM') {
        nowHour += 12;}
    console.log(nowHour)

    $('.saveBtn').click(function(){
        var parent = this.parentNode;
        var hour = parent.id.split('-')[1];
        var userInput = parent.querySelector('textarea').value;
        localStorage.setItem(hour,userInput)
    })

    $('.time-block').each(function() {
        var $this = $(this);
        var timeBlockHour = parseInt($this.attr('id').split('-')[1]);  // get the hour value from the id "hour-#"
        var storedInput = localStorage.getItem(timeBlockHour);
        $this.find('textarea').val(storedInput);
        if (nowHour > timeBlockHour) {
            $this.addClass('past');
            $this.removeClass('present future');
        } else if (nowHour < timeBlockHour) {
            $this.addClass('future');
            $this.removeClass('present past');
        } else {
            $this.addClass('present');
            $this.removeClass('future past');
        }
    });

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?


    $('#currentDay').html('Todays date: ' + now.format('DD/MM/YYYY'));

  });
