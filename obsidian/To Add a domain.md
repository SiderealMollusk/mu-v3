Adding a New Domain

Where to Put Files:
	•	Put all source code under: domains/<your-domain>/
	•	Keep things self-contained: NATS handlers, business logic, types, etc.

Taskfile Setup:
	•	In the selector, add your domain to the list of options (look for the “echo -e” block).
	•	Add a select:<your-domain> entry. It should:
	•	Use grep to find tasks that start with <your-domain>_
	•	Let the user choose one and then run it
	•	Make sure all your tasks are named like: <your-domain>_something

Templates and Environment Variables:
	•	If you have config files, use the shared render_template task.
	•	Add any new environment variables to .env
	•	Optional: make a .env.template file to document them
# Adding a New Domain

## Folder Layout

- Put all source code under: `domains/<your-domain>/`
- Keep it self-contained: handlers, ports, business logic, types, etc.

## Taskfile Integration

- In the main Taskfile selector, add your domain to the `echo -e` block so it shows up in the UI.
- Add a `select:<your-domain>` task:
  - It should use `grep` to list tasks starting with `<your-domain>_`
  - Let the user pick and run one
- Name your tasks like `<your-domain>_<action>`

## Config Templates and Environment

- If your domain uses config files, use the shared `render_template` task
- Define env vars in `.env`, and document them in `.env.template` if needed

## Conventions

domains/

  inbox/

    adapters/          <- NATS handlers (formerly called handlers)

    ports/

      inbound.ts       <- interfaces like HandleInboxMessage

      outbound.ts      <- interfaces like MessageSender

    services/          <- domain logic: pure functions, rules, state transitions

    models/            <- types specific to this domain