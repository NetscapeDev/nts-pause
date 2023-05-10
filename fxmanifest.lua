--[[ FX Information ]] --
fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game 'gta5'

--[[ Resource Information ]] --
author 'Netscape Development'
description 'Netscape Pause Menu'
version '1.0.0'

--[[ Manifest ]] --
ui_page "web/dist/index.html"

shared_scripts {
   '@es_extended/imports.lua',
   'shared/*'
}

client_scripts {
   'client/*'
}

server_scripts {
   'server/*'
}

files {
   "web/dist/index.html",
   "web/dist/js/*.*",
   "web/dist/img/*",
   "web/dist/css/*.*" 
}

escrow_ignore {
   'shared/*',
   'server/*'
}