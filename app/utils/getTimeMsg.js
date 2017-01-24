import moment from 'moment';
export default function getTimeMsg(time){


		var now = moment(new Date());
		var dt = moment(new Date(time));
		var timeMsg = 'posted ' + moment.duration(now.diff(dt)).humanize() + ' ago';

		return timeMsg;

		

	}