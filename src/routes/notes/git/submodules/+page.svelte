<main>
	<h1>Git Submodules</h1>

	<p>Oft-used, never understood.</p>

	<h2>References</h2>

	<ul>
		<li><a href="https://git-scm.com/book/en/v2/Git-Tools-Submodules">Git SCM</a></li>
		<li><code>man git-submodule</code></li>
	</ul>

	<h2>Add a Submodule</h2>

	<p><code>git submodule add &lt;URL&gt;</code></p>
	<p>
		This creates a <code>.gitmodules</code> file that shows the mapping between your project and its
		submodules.
	</p>

	<h2>Clone with Submodules</h2>

	<ol>
		<li>clone your project as normal</li>
		<li><code>git submodule init</code> to initialize from <code>.gitmodules</code></li>
		<li>
			<code>git submodule update</code> to fetch data from the commit referenced at the other end of
			the
			<code>.gitmodules</code> repo URL
		</li>
	</ol>
</main>
