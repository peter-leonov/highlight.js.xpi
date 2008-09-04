
Highlighter = {}

Highlighter.Extension =
{
	panel: {},
	
	init: function()
	{
		// win = browser || mail
		var win = document.getElementById("appcontent") || document.getElementById("messagepane")
		
		var me = this
		if (win)
			win.addEventListener("DOMContentLoaded", function (e) { me.onPageLoad(e) }, true)
	},
	
	click: function ()
	{
		alert(this.win)
	},
	
	onPageLoad: function(e)
	{
		var doc = e.originalTarget
		if (doc.nodeName != "#document")
			return
		
		// if (!this.prefs.getBoolPref("enable"))
		// 	return
		
		var scripts = doc.getElementsByTagName("script")
		for (var i = 0; i < scripts.length; i++)
			if (/highlight\.js$/.test(scripts[i].src))
				return false
		
		if (doc.defaultView.content.initHighlighting)
			return
		
		// drop highlighting if non-HTML document opened
		if (doc.contentType != 'text/html')
			return false
		
		var css = doc.createElement("link")
		css.setAttribute("rel", "stylesheet")
		css.setAttribute("type", "text/css")
		css.setAttribute("href", "resource://highlighter/default.css")
		
		var mainScript = doc.createElement("script")
		mainScript.setAttribute("type", "text/javascript")
		mainScript.setAttribute("src", "resource://highlighter/highlight.js")
		
		var languagesScript = doc.createElement("script")
		languagesScript.setAttribute("type", "text/javascript")
		languagesScript.setAttribute("src", "resource://highlighter/languages.js")
		
		var head = doc.getElementsByTagName("head")[0]
		head.appendChild(css)
		head.appendChild(mainScript)
		head.appendChild(languagesScript)
	},
}

// Get our prefs branch
Highlighter.Extension.prefs = Components
								.classes["@mozilla.org/preferences-service;1"]
								.getService(Components.interfaces.nsIPrefService)
								.getBranch("extensions.highlighter.")

window.addEventListener("load", function () { Highlighter.Extension.init() }, false)

