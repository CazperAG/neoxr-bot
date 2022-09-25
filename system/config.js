global.owner = '628886529913'
global.max_upload = 200 // 200MB (1 = 1MB)

global.status = {
   wait: Func.texted('bold', 'Processed . . .'),
   invalid: Func.texted('bold', 'URL Salah!'),
   wrong: Func.texted('bold', 'format salah!'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Maaf fitur ini eror'),
   premium: Func.texted('bold', 'Fitur ini khusus PREMIUM.'),
   owner: Func.texted('bold', 'Command Kusus owner.'),
   god: Func.texted('bold', 'Command Ini Kusus Master'),
   group: Func.texted('bold', 'Command ini hanya berlaku di groups.'),
   botAdmin: Func.texted('bold', 'This command will work when I become an admin.'),
   admin: Func.texted('bold', 'Command ini kusus admin grub.'),
   private: Func.texted('bold', 'Hanya Untuk Chat Pribadi.')
}

global.users = global.db.users
global.groups = global.db.groups
global.chats = global.db.chats
global.sticker = global.db.sticker
global.statistic = global.db.statistic
global.setting = global.db.setting
