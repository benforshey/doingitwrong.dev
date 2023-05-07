<h1>The Cascade Algorithm</h1>

<h2>Four Stages of the Cascade Algorithm</h2>

<p>The cascade algorithm is split into 4 distinct stages.</p>

<ol>
	<li>
		Position and order of appearance: the order of which your CSS rules appear
	</li>
	<li>
		Specificity: an algorithm which determines which CSS selector has the
		strongest match
	</li>
	<li>
		Origin: the order of when CSS appears and where it comes from, whether that
		is a browser style, CSS from a browser extension, or your authored CSS
	</li>
	<li>
		Importance: some CSS rules are weighted more heavily than others, especially
		with the !important rule type
	</li>
</ol>

<h2>Order of Specificity for Origins</h2>

<ol>
	<li>
		User agent base styles. These are the styles that your browser applies to
		HTML elements by default.
	</li>
	<li>
		Local user styles. These can come from the operating system level, such as a
		base font size, or a preference of reduced motion. They can also come from
		browser extensions, such as a browser extension that allows a user to write
		their own custom CSS for a webpage.
	</li>
	<li>Authored CSS. The CSS that you author.</li>
	<li>
		Authored !important. Any !important that you add to your authored
		declarations.
	</li>
	<li>
		Local user styles !important. Any !important that come from the operating
		system level, or browser extension level CSS.
	</li>
	<li>
		User agent !important. Any !important that are defined in the default CSS,
		provided by the browser.
	</li>
</ol>

<h2>Order of Importance</h2>

<ol>
	<li>normal rule type, such as font-size, background or color</li>
	<li>animation rule type</li>
	<li>!important rule type (following the same order as origin)</li>
	<li>transition rule type</li>
</ol>
