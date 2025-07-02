### Where to put files
src goes in /domains

### Taskfile biz
Task file needs "nats\nmessaging\ndocker\ndev" string to have the new domain. around line 15, note the \n 

It could be DRYer but also add a select:<new_domain>

it's specific tasks should start with ' <new_domain>_ '

there is a render_template task should your domain need it ... which It really should.

### Environment Variables
.env, but likely need to be rendered from template per above

--

