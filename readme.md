
```lua
    --// FUNCTIONS
    OpenLink( --[[ PUT HERE YOUR URL ]] 'my_url')  -- Use this function to open an url

    -- // COMMANDS

    -- server/server.lua
    RegisterCommand('leave', function(source, args, raw) -- This command kick you from the server
        DropPlayer(source, --[[ PUT HERE YOUR KICK MESSAGE ]]  'You have disconnected from the server!')
    end)
```