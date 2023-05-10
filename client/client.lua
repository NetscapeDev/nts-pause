function CloseMenu()
    SendNUIMessage({
        action = 'close_ui',
    })
end

function OpenMenu(data)
    SendNUIMessage({
        action = 'open_menu',
        data = {
            inventario = data.inventario,
            my_data = data.my_data,
            colore = CFG.color,
            nome_server = CFG.server_name,
            tasto_esc = CFG.esc_button,
            langs = CFG.langs,
            riquadro = CFG.empty_space.square,
            images = CFG.images,
            evento = CFG.event,
            shop = CFG.shop,
            bottoni = CFG.empty_space.buttons
        }
    })
    SetNuiFocus(true, true)
end

function OpenLink(link)
    SendNUIMessage({
        action = 'open_url',
        url = link,
    })      
end

RegisterNetEvent('pausemenu.close', CloseMenu)

RegisterNetEvent('pausemenu.open', function(data)
    if data and type(data) == 'table' then
        OpenMenu(data)
    end
end)

RegisterNUICallback('closeNui', function(data)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('pressButton', function(data)
    if data then
        if not CFG.Interaction[data.name] then return end
        pcall(CFG.Interaction[data.name])
    end
end)

RegisterKeyMapping('net:pausemenu', 'Pause menu', 'keyboard', 'ESCAPE')
RegisterCommand('net:pausemenu', function(source, args, raw)
    if CFG.CanOpen() then 
        OpenMenu({
            inventario = {
                kg = CFG.ServerData('weight'),
                kg_massimi = CFG.ServerData('max_weight'),
                oggetti = CFG.ServerData('items'),
            },
            my_data = {
                nome = CFG.ServerData('name'),
                lavoro = CFG.ServerData('job'),
                grado = CFG.ServerData('grade'),
                stats = {
                    banca = CFG.GetAccounts(CFG.ServerData('bank_account')),
                    contanti = CFG.GetAccounts(CFG.ServerData('cash_account'))
                }
            }
        })
    end
end)

Citizen.CreateThread(function()
	while true do
	    Citizen.Wait(0)
		SetPauseMenuActive(false)
	end
end)