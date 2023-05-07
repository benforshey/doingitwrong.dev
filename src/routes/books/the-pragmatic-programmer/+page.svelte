<svelte:head>
	<title>Books: The Pragmatic Programmer</title>
</svelte:head>

<h1>Notes on The Pragmatic Programmer</h1>

<p>Someday, I'll stop typing &ldquo;Pragmatic&rdquo; as <s>Pragmattic</s>!</p>

<section>
	<h2>Foreword&thinsp;/&thinsp;Preface</h2>
	<dl>
		<dt>pp. xx&ndash;xxi: What &ldquo;Pragmatic Programmer&rdquo; characteristics do you share?</dt>
		<dd>
			I&rsquo;d love to say that I have them all, but I need to qualify this.
			<dl>
				<dt>Early adopter&thinsp;/&thinsp;fast adapter</dt>
				<dd>
					Yes, with caveats: I&rsquo;ve worn the hat of senior developer before, so I know
					there&rsquo;s value in carefully weighing changes before rushing to adopt them. But I <em
						>love</em
					> adopting&thinsp;/&thinsp;adapting more freely in my own side projects&mdash;I mean, does
					anyone ever stop tinkering with their own site?! But for projects that will be inherited by
					other developers, sometimes company culture matters more than the &ldquo;best&rdquo; technology
					choice.
				</dd>

				<dt>Inquisitive</dt>
				<dd>
					I think I do this pretty well&hellip;though if I&rsquo;m honest, I feel fatigue at the
					exponential growth of frameworks. I&rsquo;m not fatigued learning about languages, nor
					about continuing to take in distilled wisdom from good books (books like <cite
						>The Pragmatic Programmer</cite
					>,
					<cite>Refactoring</cite>). I also enjoy good talks on programming, and I enjoy working
					with people who will expose me to new ideas. I think I feel framework fatigue because
					there&rsquo;s so much of <strong>that</strong> happening and so little time for the slower,
					deeper things.
				</dd>

				<dt>Critical Thinker</dt>
				<dd>
					I think I learned this one much better with time. I tend towards idealism, so when someone
					holds up an ideal (e.g., <i>GraphQL is the future!</i>), I tend to try it on for a while.
					Getting stung a few times by that idealism helps temper it with prudence.
				</dd>

				<dt>Realistic</dt>
				<dd>
					Again, improved with time. I&rsquo;m categorically bad at accurate estimating and tend to
					believe&mdash;only for myself&mdash;that I&rsquo;m not allowed to get stuck on stuff. When
					things that are supposed to be hard, are hard, I still get bummed out.
				</dd>

				<dt>Jack of all trades</dt>
				<dd>I sure try. I enjoy being <i>T</i>&dash;shaped.</dd>
			</dl>
		</dd>
	</dl>

	<h2>Chapter One</h2>

	<dl>
		<dt>pp. 1&ndash;1: It&rsquo;s Your Life</dt>
		<dd>Do I act as if I have agency, or do I accept what I&rsquo;m not satisfied with?</dd>

		<dt>pp. 3&ndash;4: The Cat Ate My Source Code</dt>
		<dd>
			This is a message I need to hear now and again (though I consider myself a fairly trustworthy
			person): take responsibility for your actions. The thought of rubber ducking your excuse is
			particularly useful, as you'll have an opportunity to come up with options instead of lame
			excuses.
		</dd>

		<dt>pp. 6&ndash;8: Software Entropy</dt>
		<dd>
			<p>
				I&rsquo;ll admit that the &ldquo;Broken Windows&rdquo; model of policing has its detractors
				(with good cause, I imagine), but I know in my core that I tend to treat shabby projects
				without the care they need. I love the practicality of suggesting that even a small step
				helps, like sending a 501 Not Implemented on that API endpoint that&rsquo;s not quite ready
				to be written.
			</p>
			<p>
				I&rsquo;d be interested in exploring the tension between Martin Fowler&rsquo;s
				&ldquo;Litter&dash;Pickup Refactoring&rdquo; and the &ldquo;pull requests should be
				small&rdquo; mindset. My own thoughts? I think commits should be focused, but pull requests
				are only a burden because we don&rsquo;t pair program on features and we often don&rsquo;t
				write comprehensive tests to cover those features.
			</p>
		</dd>

		<dt>pp. 8&ndash;11: Stone Soup and Boiled Frogs</dt>
		<dd>
			<p>
				My best takeaway from both sides (soldiers and villagers) of this odd story is that
				there&rsquo;s an art to being a catalyst for change: ask for what&rsquo;s reasonable, then
				bring people into that success. Suggest how useful the next feature would be; wait for
				others to add what they would have originally withheld. From the villager&rsquo;s
				perspective, keep your eye on the big picture; review what&lsquo;s happening around you, not
				just your narrow lane.
			</p>
			<p>
				I wonder how this works cross&dash;culturally. I also wonder if the authors have ever seen
				that next&dash;suggested feature get absolutely mangled by internal politics or procedure.
			</p>
		</dd>

		<dt>pp. 11&ndash;13: Good&dash;Enough Software</dt>
		<dd>
			<p>
				I mean&hellip;ouch&hellip;I felt this (when speaking of a project that <em>you</em>
				are working on):
			</p>
			<blockquote>
				As Ed Yourdon described in an article in <cite
					>IEEE Software, When good&dash;enough software is best</cite
				>, you can discipline yourself to write software that&rsquo;s good enough&mdash;good enough
				for your users, for future maintainers, for your own peace fo mind. You&rsquo;ll find that
				you are more productive and you users are happier. And you may well find that your programs
				are actually better off for their shorter incubation.
			</blockquote>
			<p>
				I&rsquo;m internally putting a lot of emphasis on the <strong>good</strong> in &ldquo;good enough&rdquo;,
				because I don&rsquo;t want to be a developer who writes shoddy software. Thomas and Hunt are
				not implying poorly&dash;written code should be the outcome of good&dash;enough software. Instead,
				they advocate that we involve our users in the tradeoff between quality&thinsp;/&thinsp;features
				and (ultimately) cost by making quality a requirements issue.
			</p>
			<p>I&rsquo;ve sat both sides of this particular fence:</p>
			<ul>
				<li>
					being the squeaky wheel in a project being where the users were not consulted, but should
					have been (treading a line between squeaky enough to get the grease, yet not get kicked
					off the project).
				</li>
				<li>
					working on a project long enough to realize that I was being a perfectionist, or
					bikeshedding
				</li>
			</ul>
			<p>
				As it relates to the overall quality of the product and how many bells and whistles it
				includes, I find this approach refreshingly humble and pragmatic. This section is tough
				love&mdash;a much&dash;needed reminder that we are <em>for</em> the users.
			</p>
			<p>
				Being so strongly <em>for</em> the user reminds me of Kathy Sierra&rsquo;s excellent talk,
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
					Invest regularly: set aside a consistent time and place. I&rsquo;m fortunate enough to
					have quieter Fridays, so I&rsquo;ll be using that time to build.
				</li>

				<li>
					Diversify: broaden your knowledge. Read the tea leaves a bit, but be practical. Aside, <a
						href="https://nolanlawson.com/"
						rel="noopener">Read the Tea Leaves</a
					> is a great blog by Nolan Lawson.
				</li>

				<li>Manage risk: See &ldquo;read the tea leaves a bit&rdquo;, above.</li>

				<li>
					Buy low, sell high: eh&hellip;I feel like this is starting to get repetitive. Sure, find
					those technologies that will do well and invest early.
				</li>

				<li>
					Review and rebalance: I appreciate this. You might have started down a path no longer
					worth pursuing, so adjust. Or you might have nailed it and want to go further up and
					further in.
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

			<p>At this particular stage, I feel like the following would be most beneficial:</p>

			<ul>
				<li>Learn a new language: I&rsquo;d like that to be Rust.</li>
				<li>Participate in local user groups and meetups: perhaps a &ldquo;Maker&rdquo; meetup?</li>
				<li>
					Stay current: I&rsquo;ll need to curate my <dfn
						><abbr title="Really Simple Syndication">RSS<abbr /></abbr></dfn
					> feed.
				</li>
			</ul>

			<h3>Opportunities for Learning</h3>

			<p>
				I the advice from this section! Freely admit that you don&rsquo;t know something, but
				don&rsquo;t stop there. Your opportunities to learn are queued by your lack of knowledge.
			</p>

			<h3>Think Critically</h3>

			<p>
				Again, solid advice! Search engines are not neutral, and you should evaluate what
				you&rsquo;re ingesting.
			</p>

			<ul>
				<li>Ask the &ldquo;five whys&rdquo;.</li>
				<li>Who does this benefit?</li>
				<li>What&rsquo;s the context?</li>
				<li>When or where would this work?</li>
				<li>Why is this a prolem?</li>
			</ul>
		</dd>

		<dt>pp. 19&ndash;25: Communicate!</dt>
		<dd>&nbsp;</dd>
	</dl>
</section>

<section>
	<h2>One Hundred Tips</h2>

	<dl>
		<dt>p. xvi: &numero;1 Care About Your Craft</dt>
		<dd>Not just care about being right, or care about being respected: care about your craft.</dd>

		<dt>p. xvi: &numero;2 Think! About Your Work</dt>
		<dd>It&rsquo;s hard work but rewarding. You&rsquo;ll improve in your craftsmanship.</dd>

		<dt>p. 1: &numero;3 You Have Agency</dt>
		<dd>
			&ldquo;You can change your organization or change your organization.&rdquo; &mdash;<cite
				>Martin Fowler</cite
			>
		</dd>

		<dt>p. 4: &numero;4 Provide Options, Don&rsquo;t Make Lame Excuses</dt>
		<dd>
			You can factor in everything that went wrong&mdash;including that which is outside your
			control&mdash;but holding yourself accountable and providing options to move forward shows
			humility and dedication to your craft.
		</dd>

		<dt>p. 7: &numero;5 Don&rsquo;t Live with Broken Windows</dt>
		<dd>
			Hey, that project you worked on where that suite of tests didn't pass but you never fixed it?
			It&rsquo;s only getting worse&hellip;you&rsquo;ve stopped writing new tests.
		</dd>

		<dt>p. 9: &numero;6 Be a Catalyst for Change</dt>
		<dd>
			&ldquo;It&rsquo;s easier to ask for forgiveness than it is to get permission.&rdquo; &mdash;<cite
				>Rear Admiral Dr. Grace Hopper</cite
			>
		</dd>

		<dt>p. 10: &numero;7 Remember the Big Picture</dt>
		<dd>
			This differs from tip &numero; 7, in which one stops caring. When you lose sight of the big
			picture, you just don&rsquo;t notice how things deteriorate.
		</dd>

		<dt>p. 12: &numero;8 Make Quality a Requirements Issue</dt>
		<dd>
			<a href="https://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good" rel="noopener"
				>Perfect is the enemy of good</a
			>
		</dd>

		<dt>p. 15: &numero;9 Invest Regularly in Your Knowledge Portfolio</dt>
		<dd>Invest regularly; diversify; manage risk; buy low, sell high; review and rebalance.</dd>

		<dt>p. 17: &numero;10 Critically Analyze What You Read and Hear</dt>
		<dd>Perhaps even get into a good discussion with a friend.</dd>
	</dl>
</section>
