<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8" />
	</head>
	<body>
		<h1>Welcome to the Platform of the People</h1>

		<p>Congratulations!  After clicking <a href="{{ url('user/verify/' . $token, $parameters = array(), $secure = null) }}">here</a> to verify your account, you can:</p>

		<ol>
			<li>Find a policy by browsing through the full list or filtering by sponsor, status, or category</li>
			<li>Add your voice by supporting or opposing a policy, making general comments, or annotating specific sections of the work in progress.</li>
		</ol>

		<p>When you comment on or annotate a policy the policy's sponsor will be notified.  Your interaction with policy on Platform of the People will keep sponsors informed on how their constituents feel about their work; they may also choose to incorporate suggested edits straight into their policys.</p>

		<ol>
			<li>Become an active member of the Platform of the People community.  <a href="http://eepurl.com/EvUnb">Sign up to receive email updates</a> about Platform of the People.  Interact with other civic-minded participants by responding to their comments.  Share what you find via links and social media.  <a href="http://www.usa.gov/Contact/Elected.shtml">Call your elected officials</a>.  Speak out on the issues that matter to you.</li>
			<li>Help us to add useful features to Platform of the People by leaving feedback and suggestions in the tab to the left-hand side of the page.</li>
		</ol>

		<p>Welcome to the Platform of the People community: everyday Americans working together to improve state, local and federal government, and hold it accountable.</p>
		<p>Click <a href="{{ url('user/verify/' . $token, $parameters = array(), $secure = null) }}">here</a> to start co-creating laws with Platform of the People</p>

		<p>You can also check us out on <a href="https://www.facebook.com/opengovfoundation">Facebook</a>, <a href="https://twitter.com/foundopengov">Twitter</a>, <a href="http://opengovfoundation.tumblr.com">Tumblr</a>, and <a href="http://www.linkedin.com/company/opengov-foundation">LinkedIn</a></p>
	</body>
</html>
