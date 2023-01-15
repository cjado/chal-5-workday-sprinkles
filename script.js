
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
        var timeBlockHour = parseInt($this.attr('id').split('-')[1]);
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
        }});

    $('#currentDay').html('Todays date: ' + now.format('MM/DD/YYYY'));

  });
