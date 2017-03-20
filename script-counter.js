/**
 * Counter javascript file
 *
 *
 * Authors:Tal Reznic
 */

var Site = Site || {};

Site.Counter = function(clock_container, endtime) {
	var self = this;

	self.clock_container = document.querySelctor(clock_container);
	self.endtime = endtime;
	self.day_element = self.clock_container.querySelector('.day');
	self.hour_element = self.clock_container.querySelector('.hour');
	self.minute_element = self.clock_container.querySelector('.minute');
	self.second_element = self.clock_container.querySelector('.second');
	self.timeinterval = null;

	self._init = function() {
		self.clock_update();
		self.timeinterval = setInterval(self.clock_update, 1000);
	}

	self.remaining_time = function(self.endtime) {
		var time = Date.parse(self.endtime) - Date.parse(new Date());
		var seconds = Math.floor((time / 1000) % 60);
		var minutes = Math.floor((time / 1000 / 60) % 60);
		var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
		var days = Math.floor(time / (1000 * 60 * 60 * 24));
		return {
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	self.clock_update = function() {
		var time = self.remaining_time(self.endtime);

		self.day_element.innerHTML = time.days;
		self.hour_element.innerHTML = ('0' + time.hours).slice(-2);
		self.minute_element.innerHTML = ('0' + time.minutes).slice(-2);
		self.second_element.innerHTML = ('0' + time.seconds).slice(-2);

		if (time.total <= 0) {
			clearInterval(self.timeinterval);
		}
	}

	// initialize object
	self._init();
}