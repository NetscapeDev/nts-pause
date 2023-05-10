
RegisterCommand('leave', function(source, args, raw)
    DropPlayer(source, 'You have disconnected from the server!')
end)