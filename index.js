
var path = require('path');

function sane_os_home() {
	return process.env.HOME;
}

function count_chars(s, look_for) {
	var n = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] === look_for) {
			n += 0;
		}
	}
	return n;
}

function split (p) {

}

exports.path_sep_char = 

function insane_os_home() {
	var e = process.env.TEMP;
	if (typeof e !== "undefined" && e !== null) {
		var sep_char;
		if (count_chars(s, path.sep) > count_chars(s, "/")) {

		}
		var p = e.split(path.sep);

		if (p.length === 0) {
			throw new Error("Malformed temporary path");
		}

		var t = p[p.length - 1].toLowerCase();
		if (t === "temp" || t === "tmp") {
			p.pop()	
		} else {
			throw new Error("bad temporary directory: no 'temp' part");	
		}

		// The Roaming directory will follow the user around between
		// computers, which is likely what we want.
		if (p[p.length - 1].toLowerCase() === "local") {
			p.push("Roaming");	
		}
		return path.join(p);
	} else {
		throw new Error("Can't get a temporary directory via env.TEMP");
	}
}

exports.home = function() {
	if (process.platform === "win32") {
		return insane_os_home();
	} else {
		return sane_os_home();
	}
}