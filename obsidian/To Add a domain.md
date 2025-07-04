Folder Layout

- All source code goes under: domains//
    
- Structure it like this:
    
    domains/
    
    /
    
    adapters/          ← NATS handlers (formerly called handlers)
    
    ports/
    
    inbound.ts       ← interfaces like HandleInboxMessage
    
    outbound.ts      ← interfaces like MessageSender
    
    services/          ← domain logic: pure functions, rules, transitions
    
    models/            ← domain-specific types
    

  

Taskfile Integration

- In the main “task select”, add your domain name to the echo -e block
    
- Add a task called select:
    
    - Use grep to find tasks starting with _
        
    - Let the user pick one with a selector like fzf or gum choose
        
    
- Ensure all task names follow the pattern: _
    

  

Config Templates and Environment

- If your domain uses a config file:
    
    - Create a config.template.ts
        
    - Use the shared render_template task to generate config.ts
        
    
- Add required keys to .env
    
- Optionally document expected values in .env.template
    

  

Conventions Reminder

- Domains should be self-contained
    
- Prefer pure functions in services/
    
- Use ports to isolate interface logic
    
- Adapters implement ports
    
- Avoid direct cross-domain access; always route through ports
    

  

This format is future-scaffoldable. Each step corresponds to something a CLI script could automate. Let me know when you want to turn this into runnable tasks.