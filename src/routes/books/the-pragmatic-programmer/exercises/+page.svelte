<script>
	import Highlight from 'svelte-highlight';
	import python from 'svelte-highlight/languages/python';
	import 'svelte-highlight/styles/gruvbox-dark-medium.css';
</script>

<nav>
	<ul>
		<li><a href="/books/the-pragmatic-programmer">Notes</a></li>
		<li><a href="/books/the-pragmatic-programmer/tips">Tips</a></li>
	</ul>
</nav>

<h1>Exercises from The Pragmatic Programmer</h1>

<dl>
	<dt>p. 46: &numero;1</dt>
	<dd>
		<h2>Exercise</h2>

		<p>
			You&rsquo;re asked to read a file a line at a time. For each line, you
			have to split it into fields. Which of the following sets of pseudo class
			definitions is likely to be more orthogonal?
		</p>

		<Highlight
			language={python}
			code={`class Split1 {
  constructor(fileName)  # opens the file for reading
  def readNextLine()     # moves to the next line
  def getField(n)        # returns the nth field in current line
}`}
		/>

		<Highlight
			language={python}
			code={`class Split2 {
  constructor(line)       # splits a line
  def getField(n)         # returns the nth field in current line
}`}
		/>

		<h2>Solution before Reading Possible Answer</h2>

		<blockquote>
			<p>
				In computing, [Orthogonal] has come to signify a kind of independence or
				decoupling. Two or more things are orthogonal if changes in one do not
				affect any of the others. In a well-designed system, the database code
				will be orthogonal to the user interface: you can change the interface
				without affecting the database, and swap databases without changing the
				interface.
			</p>
			&mdash;<cite>The Pragmatic Programmer, p. 39</cite>
		</blockquote>

		<p>
			I&rsquo;d choose <code>Split2</code> as the more orthogonal class. While the
			current requirement is to read line-by-line, the requirement might later change
			to skipping metadata positioned at the head of the file. Using the atomicity
			of splitting a single line keeps the iteration of the lines and the reading
			of the file as a concern decoupled from this utility class.
		</p>

		<h2>Solution after Reading Possible Answer</h2>

		No change in my answer, really.
	</dd>

	<dt>p. 46: &numero;2</dt>
	<dd>
		<h2>Exercise</h2>

		<p>
			What are the differences in orthogonality between object-oriented and
			functional languages? Are these differences inherited in the languages
			themselves, or just in the way people use them?
		</p>

		<h2>Solution before Reading Possible Answer</h2>

		<p>
			I&rsquo;ll admit my bias and my lack of expertise in the same breath—I
			prefer functional languages over object-oriented languages, but am an
			expert in neither. I&rsquo;ve used Java (epitome of OOP) and Clojure
			(epitome of functional), but most of my daily work is done in JavaScript,
			which cleanly falls into neither category. I tend toward preferring
			functional patterns in that, too. I find that orthogonality and
			class-based inheritance fight against each other.
		</p>

		<p>
			You can find tutorials on how to use Java within a mostly-functional
			paradigm, but the majority of instructional material and the language
			itself will push you into its class-based object-oriented design. By
			saying &ldquo;push you into its...design&rdquo;, I&rsquo;m answering the
			exercise&rsquo;s question: those differences are inherited in the
			language. I could work hard to overcome the language's DNA by developing
			in a functional style, but I&rsquo;ll always be fighting against the
			culture of Java and its syntax.
		</p>

		<p>
			My answer differs slightly for functional languages. They don&rsquo;t
			offer class-based inheritance—there's composition instead. I can&rsquo;t
			imagine wanting to (being able to?) write something like object-oriented
			code in Clojure.
		</p>

		<h2>Solution after Reading Possible Answer</h2>

		<blockquote>
			<p>
				Let&rsquo;s start with an assertion: you can write good, orthogonal code
				in just about any language.
			</p>
			&mdash;<cite>The Pragmatic Programmer, p. 293</cite>
		</blockquote>

		<p>
			That&rsquo;s a good thing for me to remember. Clean Code and Clean
			Architecture (both by &ldquo;Uncle Bob&rdquo;) are both examples of
			orthogonal code taught (mostly) in an OOP environment. The authors make
			several other good points:
		</p>

		<ul>
			<li>
				multiple inheritance, exceptions, operator overloading, and
				parent-method overloading (via sub-classing) increase coupling in
				non-obvious ways
			</li>
			<li>classes couple code to data</li>
			<li>when coupling is good, we call it cohesion</li>
			<li>
				small, composed functions typically transform data, which means that the
				result of one function can become the input to another
			</li>
			<li>
				making a change to the data format a function generates can result in a
				failure down the transformational stream; languages with good type
				systems can help mitigate this
			</li>
		</ul>
	</dd>
</dl>
