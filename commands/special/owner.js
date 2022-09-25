exports.run = {
   usage: ['owner'],
   async: async (m, {
      client
   }) => {
      client.628886529913(m.chat, `CasperAG`, m.sender.split('@')[0], m)
   },
   error: false,
   cache: true,
   location: __filename
}
