# SiteHost Recruitment

Thanks for your interest in joining the SiteHost team! Before we go any further we just need to make sure that your technical chops and problem solving skills are a good fit for us. To test this we've put together a small challenge which will touch on a few areas:

- Your basic programming skills, and ability to use an API
- Familiarity with Git for version control
- A working understanding of DNS
- Empathy when working with customers and solid communication skills

You can start this test whenever you like, and it will likely take you around two hours to complete. If you need more time that's okay, but please don't spend more than three hours. Just put up a PR for what you have and let us know.

You should have all the information you need to complete the challenge in this repo, but if you do think something is unclear or missing please let us know, we're always looking to improve the process.

## The Challenge
This challenge is broken into two parts: one in which you will call a few API endpoints to retrieve some information, and one in which you will use this information to help identify a problem with a fictional customer's website.

### Getting Started
First you'll need the following ready to go:

- An editor or IDE of your choice
- One of the following languages: Go, Python, PHP, or Javascript
- Git, but if you got this far that shouldn't be an issue ;)

Now you can get started – create a branch of this repo, read the challenge details below and get committing! Try to keep your commit messages concise and comprehensible as we will be looking at them.

### Part One - Calling an API
We have provided a simple API that returns information about registered domain names and any DNS records associated with those domains. This API returns data in JSON format and exposes the following endpoints:

- `/domains/{client_id}`: Returns a list of domains registered by the customer with ID `client_id` including a list of any DNS zones that exist for each domain.
- `/zones/{zone_id}`: Returns a list of DNS records for the DNS zone with ID `zone_id`

The URL for the API is `https://api.recruitment.shq.nz` and to access it you will need to provide a key as a query parameter named `api_key`.

The customer **Business Systems International** has a `client_id` of `100`. Using the endpoints available to you, the API key `h523hDtETbkJ3nSJL323hjYLXbCyDaRZ`, and the programming language of your choice, retrieve a list of their domains, and DNS records and print them to the screen.

Keep your code simple, with no (or very few) dependencies and tell us how we can run it to see the result. By the way, the information returned may be handy later.

### Part Two - Resolving a Customer Issue
Customers entrust us with their websites, data, and livelihoods. We take this very seriously. This part of the challenge will test your ability to troubleshoot a common customer issue, and communicate your findings to them effectively.

In the file `email.md` you will find an email from Alice at **Business Systems International** describing an issue accessing their website. Use the information in the email (and perhaps some other sources), to identify what is wrong with the website and figure out a way to visit it. Once on the site, view the source and retrieve the code hidden in an HTML comment in the `<head>` of the document.

In `reply.md` respond to the customer explaining the issue and how they can resolve it (note that you cannot resolve the issue yourself). Keep your reply concise and **make sure you include the code that you retrieved from their site** as proof that you managed to see the page.

### Submitting Your Solution
When you're happy with your solution do a final commit, push your branch up to GitHub, and create a **Pull Request** for your branch into the main branch, and request a review from the `sitehost-hiring-bot` user. Please don't merge the PR, as we want to review it ;).

If you haven't done this before GitHub provide [thorough documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). One of our team members will review your PR and be in touch soon – but it may take a couple of days.

Thank you, and good luck!
