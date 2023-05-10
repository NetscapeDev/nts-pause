CFG = {
    color = "#76b041",
    server_name = "Netscape Development",
    esc_button = true,
    empty_space = {
        buttons = {
            ['1'] = {
                titolo = 'RULES',
                label = 'Free Space',
                desc = 'This space is free you can<br>put whatever you want<br>-No RDM <br>-No VDM<br>-No Powergame',
                chiudi_quando_premuto = true -- close when pressed
            },
            ['2'] = {
                titolo = 'Free Space',
                label = 'Free Space',
                desc = 'This space is free you can<br>put whatever you want<br>-First Point<br>-Second Point<br>-Third Point',
                chiudi_quando_premuto = true -- close when pressed
            }
        },
        square = {
            titolo = 'Free Space',
            desc = 'This space is free, you can put whatever you want, This space is free, you can put whatever you want, This space is free, you can put whatever'
        }
    },
    images = {
        ['shop'] = 'https://cdn.discordapp.com/attachments/982738096774856714/1096562727180324884/8b910f9ad6b20e858d4a1905558ec1905f06d670.png',
        ['bottone_1'] = 'https://media.discordapp.net/attachments/982738096774856714/1086369026512519231/imgbin-grand-theft-auto-v-gta-5-online-gunrunning-smuggler-s-run-grand-theft-auto-san-andreas-playstation-4-others-man-holding-briefcase-1GbaWHu6nDZysuGvwTmGz6PjU-removebg-preview.png',
        ['bottone_2'] = 'https://media.discordapp.net/attachments/982738096774856714/1096178426383192115/debidix-181b4f9a-4556-4ae8-abea-2685404e3ed2.png?width=485&height=699',
        ['eventi'] = 'https://cdn.discordapp.com/attachments/982738096774856714/1096548741915365560/debieyt-e53b4f2f-2a66-4974-9913-25635489645a.png',
        ['inventario'] = 'https://media.discordapp.net/attachments/982738096774856714/1086369462476886169/ezgif.com-webp-to-png.png',
        ['mappa'] = 'https://cdn.discordapp.com/attachments/982738096774856714/1096824802381156482/mappa.png',
        ['impostazioni'] = 'https://cdn.discordapp.com/attachments/982738096774856714/1096824802381156482/mappa.png',
        ['quit'] = 'https://cdn.discordapp.com/attachments/982738096774856714/1096824802381156482/mappa.png',
        ['riquadro'] = 'https://cdn.discordapp.com/attachments/982738096774856714/1096503830398644235/gta-online-combat-arwork-png-8744-1600.png',
        ['background'] = 'https://www.pixel4k.com/wp-content/uploads/2020/01/chillin-with-da-homies-gta-5-4k-b8-3840x2160-1.jpg'
    },
    shop = {
        url = 'https://discord.gg/netscape',
        sconto = 20, -- sale % or 0
        cose_che_vendiamo = {'Cars','Properties','Items','Weapons','Clothes'}
    },
    event = {
        nome = 'Inauguration New Pausemenu',
        desc = 'A fantastic description for the inauguration of this new pause menu. This space is free, you can put whatever, This space is free, you can put whatever, This space is free, you can put whatever',
        tags = {'16:35','15/04/2023','Netscape','230'},
    },
    langs = {
        ['eventi_titolo'] = 'EVENTS',
        ['shop_titolo'] = 'SHOP',
        ['inventario_titolo'] = 'INVENTORY',
        ['mappa_titolo'] = 'MAP',
        ['impostazioni_titolo'] = 'SETTINGS',
        ['quit_titolo'] = 'LEAVE',
        ['shop_desc'] = 'A great description for your in-game store!',
        ['inventario_desc'] = 'Descrizione per il tuo fantastico inventario di questo server!',
        ['mappa_desc'] = 'Open the game map.',
        ['impostazioni_desc'] = 'Open the game settings menu',
        ['quit_desc'] = 'Quit the game',
        ['oggetti'] = 'Oggetti',
        ['kg'] = 'Kg',
        ['esc'] = 'ESC',
        ['esc_desc'] = 'GO BACK'
    },
}

CFG.GetAccounts = function(name)
    for _,v in pairs(ESX.PlayerData.accounts) do
        if v.name == name then
            return v.money
        end
    end
end

CFG.Interaction = {
    ['mappa'] = function()
        ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_MP_PAUSE'),0,-1)
    end,
    ['impostazioni'] = function()
        ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_LANDING_MENU'),0,-1)
    end,
    ['quit'] = function()
        ExecuteCommand('leave')
    end,
    ['bottone_2'] = function()
        ExecuteCommand('relog')
    end,
    ['bottone_1'] = function()
        OpenLink('https://discord.gg/netscape')
    end,
    ['shop'] = function()
        print('Shop opened in a new browser tab!')
    end,
}

CFG.ServerData = function(data)
    library = {
        weight = ESX.PlayerData.weight,
        max_weight = ESX.PlayerData.maxWeight,
        items = #ESX.PlayerData.inventory,
        name = ('%s %s'):format(ESX.PlayerData.firstName, ESX.PlayerData.lastName),
        job = ESX.PlayerData.job.label,
        grade = ESX.PlayerData.job.grade_label,
        bank_account = 'bank',
        cash_account = 'money'
    }
    return library[data]
end

CFG.CanOpen = function()
    return ESX.PlayerLoaded
    and not IsPauseMenuActive()
    and not IsPedFalling(PlayerPedId()) 
end