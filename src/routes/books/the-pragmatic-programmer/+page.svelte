<nav>
	<ul>
		<li><a href="/books/the-pragmatic-programmer/exercises">Exercises</a></li>
		<li><a href="/books/the-pragmatic-programmer/tips">Tips</a></li>
	</ul>
</nav>

<h1>Notes on The Pragmatic Programmer</h1>

<p>Someday, I'll stop typing &ldquo;Pragmatic&rdquo; as <s>Pragmattic</s>!</p>

<section>
	<h2>Foreword&thinsp;/&thinsp;Preface</h2>
	<dl>
		<dt>
			pp. xx&ndash;xxi: What &ldquo;Pragmatic Programmer&rdquo; characteristics
			do you share?
		</dt>
		<dd>
			I&rsquo;d love to say that I have them all, but I need to qualify this.
			<dl>
				<dt>Early adopter&thinsp;/&thinsp;fast adapter</dt>
				<dd>
					Yes, with caveats: I&rsquo;ve worn the hat of senior developer before,
					so I know there&rsquo;s value in carefully weighing changes before
					rushing to adopt them. But I <em>love</em> adopting&thinsp;/&thinsp;adapting
					more freely in my own side projects&mdash;I mean, does anyone ever stop
					tinkering with their own site?! But for projects that will be inherited
					by other developers, sometimes company culture matters more than the &ldquo;best&rdquo;
					technology choice.
				</dd>

				<dt>Inquisitive</dt>
				<dd>
					I think I do this pretty well&hellip;though if I&rsquo;m honest, I
					feel fatigue at the exponential growth of frameworks. I&rsquo;m not
					fatigued learning about languages, nor about continuing to take in
					distilled wisdom from good books (books like <cite
						>The Pragmatic Programmer</cite
					>,
					<cite>Refactoring</cite>). I also enjoy good talks on programming, and
					I enjoy working with people who will expose me to new ideas. I think I
					feel framework fatigue because there&rsquo;s so much of
					<strong>that</strong> happening and so little time for the slower, deeper
					things.
				</dd>

				<dt>Critical Thinker</dt>
				<dd>
					I think I learned this one much better with time. I tend towards
					idealism, so when someone holds up an ideal (e.g., <i
						>GraphQL is the future!</i
					>), I tend to try it on for a while. Getting stung a few times by that
					idealism helps temper it with prudence.
				</dd>

				<dt>Realistic</dt>
				<dd>
					Again, improved with time. I&rsquo;m categorically bad at accurate
					estimating and tend to believe&mdash;only for myself&mdash;that
					I&rsquo;m not allowed to get stuck on stuff. When things that are
					supposed to be hard, are hard, I still get bummed out.
				</dd>

				<dt>Jack of all trades</dt>
				<dd>I sure try. I enjoy being <i>T</i>&dash;shaped.</dd>
			</dl>
		</dd>
	</dl>
</section>

<section>
	<h2>Chapter One</h2>

	<dl>
		<dt>pp. 1&ndash;1: It&rsquo;s Your Life</dt>
		<dd>
			Do I act as if I have agency, or do I accept what I&rsquo;m not satisfied
			with?
		</dd>

		<dt>pp. 3&ndash;4: The Cat Ate My Source Code</dt>
		<dd>
			This is a message I need to hear now and again (though I consider myself a
			fairly trustworthy person): take responsibility for your actions. The
			thought of rubber ducking your excuse is particularly useful, as you'll
			have an opportunity to come up with options instead of lame excuses.
		</dd>

		<dt>pp. 6&ndash;8: Software Entropy</dt>
		<dd>
			<p>
				I&rsquo;ll admit that the &ldquo;Broken Windows&rdquo; model of policing
				has its detractors (with good cause, I imagine), but I know in my core
				that I tend to treat shabby projects without the care they need. I love
				the practicality of suggesting that even a small step helps, like
				sending a 501 Not Implemented on that API endpoint that&rsquo;s not
				quite ready to be written.
			</p>
			<p>
				I&rsquo;d be interested in exploring the tension between Martin
				Fowler&rsquo;s &ldquo;Litter&dash;Pickup Refactoring&rdquo; and the
				&ldquo;pull requests should be small&rdquo; mindset. My own thoughts? I
				think commits should be focused, but pull requests are only a burden
				because we don&rsquo;t pair program on features and we often don&rsquo;t
				write comprehensive tests to cover those features.
			</p>
		</dd>

		<dt>pp. 8&ndash;11: Stone Soup and Boiled Frogs</dt>
		<dd>
			<p>
				My best takeaway from both sides (soldiers and villagers) of this odd
				story is that there&rsquo;s an art to being a catalyst for change: ask
				for what&rsquo;s reasonable, then bring people into that success.
				Suggest how useful the next feature would be; wait for others to add
				what they would have originally withheld. From the villager&rsquo;s
				perspective, keep your eye on the big picture; review what&lsquo;s
				happening around you, not just your narrow lane.
			</p>
			<p>
				I wonder how this works cross&dash;culturally. I also wonder if the
				authors have ever seen that next&dash;suggested feature get absolutely
				mangled by internal politics or procedure.
			</p>
		</dd>

		<dt>pp. 11&ndash;13: Good&dash;Enough Software</dt>
		<dd>
			<p>
				I mean&hellip;ouch&hellip;I felt this (when speaking of a project that <em
					>you</em
				>
				are working on):
			</p>
			<blockquote>
				As Ed Yourdon described in an article in <cite
					>IEEE Software, When good&dash;enough software is best</cite
				>, you can discipline yourself to write software that&rsquo;s good
				enough&mdash;good enough for your users, for future maintainers, for
				your own peace fo mind. You&rsquo;ll find that you are more productive
				and you users are happier. And you may well find that your programs are
				actually better off for their shorter incubation.
			</blockquote>
			<p>
				I&rsquo;m internally putting a lot of emphasis on the <strong
					>good</strong
				> in &ldquo;good enough&rdquo;, because I don&rsquo;t want to be a developer
				who writes shoddy software. Thomas and Hunt are not implying poorly&dash;written
				code should be the outcome of good&dash;enough software. Instead, they advocate
				that we involve our users in the tradeoff between quality&thinsp;/&thinsp;features
				and (ultimately) cost by making quality a requirements issue.
			</p>
			<p>I&rsquo;ve sat both sides of this particular fence:</p>
			<ul>
				<li>
					being the squeaky wheel in a project being where the users were not
					consulted, but should have been (treading a line between squeaky
					enough to get the grease, yet not get kicked off the project).
				</li>
				<li>
					working on a project long enough to realize that I was being a
					perfectionist, or bikeshedding
				</li>
			</ul>
			<p>
				As it relates to the overall quality of the product and how many bells
				and whistles it includes, I find this approach refreshingly humble and
				pragmatic. This section is tough love&mdash;a much&dash;needed reminder
				that we are <em>for</em> the users.
			</p>
			<p>
				Being so strongly <em>for</em> the user reminds me of Kathy
				Sierra&rsquo;s excellent talk,
				<cite
					><a
						href="https://www.mindtheproduct.com/video-badass-making-users-awesome-by-kathy-sierra/"
						target="_blank"
						rel="noopener">Badass: Making Users Awesome</a
					></cite
				>.
			</p>
		</dd>

		<dt>pp. 13&ndash;19: Your Knowledge Portfolio</dt>
		<dd>
			<h3>Building Your Portfolio</h3>

			<ul>
				<li>
					Invest regularly: set aside a consistent time and place. I&rsquo;m
					fortunate enough to have quieter Fridays, so I&rsquo;ll be using that
					time to build.
				</li>

				<li>
					Diversify: broaden your knowledge. Read the tea leaves a bit, but be
					practical. Aside, <a href="https://nolanlawson.com/" rel="noopener"
						>Read the Tea Leaves</a
					> is a great blog by Nolan Lawson.
				</li>

				<li>
					Manage risk: See &ldquo;read the tea leaves a bit&rdquo;, above.
				</li>

				<li>
					Buy low, sell high: eh&hellip;I feel like this is starting to get
					repetitive. Sure, find those technologies that will do well and invest
					early.
				</li>

				<li>
					Review and rebalance: I appreciate this. You might have started down a
					path no longer worth pursuing, so adjust. Or you might have nailed it
					and want to go further up and further in.
				</li>
			</ul>

			<h3>Goals</h3>

			<p>This is a list of suggestions, not a checklist.</p>

			<ul>
				<li>Learn at least one new language every year.</li>
				<li>Read a technical book each month.</li>
				<li>Read nontechnical books, too.</li>
				<li>Take classes</li>
				<li>Participate in local user groups and meetups.</li>
				<li>Experiment with different environments.</li>
				<li>Stay current.</li>
			</ul>

			<p>
				At this particular stage, I feel like the following would be most
				beneficial:
			</p>

			<ul>
				<li>Learn a new language: I&rsquo;d like that to be Rust.</li>
				<li>
					Participate in local user groups and meetups: perhaps a
					&ldquo;Maker&rdquo; meetup?
				</li>
				<li>
					Stay current: I&rsquo;ll need to curate my <dfn
						><abbr title="Really Simple Syndication">RSS<abbr /></abbr></dfn
					> feed.
				</li>
			</ul>

			<h3>Opportunities for Learning</h3>

			<p>
				I the advice from this section! Freely admit that you don&rsquo;t know
				something, but don&rsquo;t stop there. Your opportunities to learn are
				queued by your lack of knowledge.
			</p>

			<h3>Think Critically</h3>

			<p>
				Again, solid advice! Search engines are not neutral, and you should
				evaluate what you&rsquo;re ingesting.
			</p>

			<ul>
				<li>Ask the &ldquo;five whys&rdquo;.</li>
				<li>Who does this benefit?</li>
				<li>What&rsquo;s the context?</li>
				<li>When or where would this work?</li>
				<li>Why is this a problem?</li>
			</ul>
		</dd>

		<dt>pp. 19&ndash;25: Communicate!</dt>
		<dd>
			<p>
				This section is full of winsome advice on how to present your point of
				view in the right time, to the right people, in an
				aesthetically&dash;pleasing format.
			</p>
			<p>
				&ldquo;Know Your Audience&rdquo; is one area where I feel that I fall
				short in my current job. There are a few meetings I present in that are
				to a large&dash;ish audience of software engineers and
				scientists&hellip;it feels almost impossible to nail the middle ground.
				I&rsquo;m going to tackle this challenge, though. The next time I
				present, I want to clearly explain the software development side of my
				presentation (presumably, my area of expertise) and perhaps ask
				questions of my audience for the scientific side that I do not
				understand.
			</p>
			<p>
				I&squo;ve compared this job to feeling like a plumber: I can tell you
				all about the pipes, junctions, and fluid dynamics, but I have little
				idea of what&rsquo;s flowing through them.
			</p>
		</dd>
	</dl>
</section>

<section>
	<h2>Chapter Two</h2>

	<dl>
		<dt>pp. 28&ndash;30: The Essence of Good Design</dt>
		<dd>
			Good design is <abbr>ETC</abbr> (Easier to Change). This is a value, not a
			rule. If you&rsquo;re not sure what is easier to change while writing code,
			write a note about this situation. When the time comes to change the code,
			learn from your note&mdash;you&rsquo;ll train your instinct.
		</dd>

		<dt>pp. 30&ndash;38: DRY&ndash;The Evils of Duplication</dt>
		<dd>
			<p>
				<abbr>DRY</abbr> stands for &ldquo;Don&rsquo;t Repeat Yourself&rdquo;.
				<abbr>DRY</abbr> applies to code, but it applies to more than code:
				every piece of knowledge must have a single, unambiguous, authoritative
				representation within a system. You may choose to violate
				<abbr>DRY</abbr> for performance reasons, but try to localize the duplication.
			</p>
			<p>
				I&rsquo;m not sure how I feel about this: &ldquo;Where possible, always
				use accessor functions to read and write the attributes of
				objects.&rdquo; This is recommended because when a module exposes a data
				structure (and I access the exposed data structure directly), I&rsquo;m
				coupling my code to that data structure. This makes sense, but it
				does&rsquo;nt mean that I will always write getters and setters for my
				Objects in JavaScript&hellip;though I might be more likely to use a Map.
			</p>
			<p>
				Using accessors for objects honors Meyer&rsquo;s Uniform Access
				principle, described in <i>Object&dash;Oriented Software Construction</i
				>, stating that
				<q
					>All services offered by a modules should be available through a
					uniform notation, which does not betray whether they are implemented
					through storage or through computation.</q
				>
			</p>
			<p>
				To prevent duplication in data structures, rather than manually creating
				a fixed structure that represents external data (Struct / Class), stick
				it in a simple key&thinsp;/&thinsp;value data structure. You can use a
				tool like <a href="https://zod.dev/" rel="noopener" target="_blank"
					>Zod
				</a>to regain data surety.
			</p>
			<p>To prevent inter&dash;developer duplication, communicate!</p>
		</dd>
	</dl>
</section>
