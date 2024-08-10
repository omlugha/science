import _0x598dc7 from 'moment-timezone';
import _0x10804f from 'fs';
import _0xfa0258 from 'os';
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
import _0x282e2a, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x282e2a;
const totalMemoryBytes = _0xfa0258.totalmem();
const freeMemoryBytes = _0xfa0258.freemem();
function formatBytes(_0xa982aa) {
  if (_0xa982aa >= Math.pow(1024, 3)) {
    return (_0xa982aa * 9.313225746154785e-10).toFixed(2) + " GB";
  } else {
    if (_0xa982aa >= Math.pow(1024, 2)) {
      return (_0xa982aa * 9.5367431640625e-7).toFixed(2) + " MB";
    } else {
      return _0xa982aa >= 1024 ? (_0xa982aa * 0.0009765625).toFixed(2) + " KB" : _0xa982aa.toFixed(2) + " bytes";
    }
  }
}
const time2 = _0x598dc7().tz("Africa/Nairobi").format("HH:mm:ss");
let pushwish = '';
if (time2 < "04:00:00") {
  pushwish = "𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 🌄";
} else {
  if (time2 < "11:00:00") {
    pushwish = "𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 🌄";
  } else {
    if (time2 < "15:00:00") {
      pushwish = "𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧 🌅";
    } else {
      if (time2 < "18:00:00") {
        pushwish = "𝐆𝐨𝐨𝐝 𝐄𝐯𝐞𝐧𝐢𝐧𝐠 🌃";
      } else if (time2 < "19:00:00") {
        pushwish = "𝐆𝐨𝐨𝐝 𝐄𝐯𝐞𝐧𝐢𝐧𝐠 🌃";
      } else {
        pushwish = "𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 🌌";
      }
    }
  }
}
const test = async (_0x476feb, _0x425c1c) => {
  let _0x4b45fe;
  const _0x5527f9 = _0x476feb?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
  const _0x9ad78a = _0x476feb?.["message"]?.["interactiveResponseMessage"];
  if (_0x9ad78a) {
    const _0x1849da = _0x9ad78a.nativeFlowResponseMessage?.["paramsJson"];
    if (_0x1849da) {
      const _0x33f621 = JSON.parse(_0x1849da);
      _0x4b45fe = _0x33f621.id;
    }
  }
  const _0x2ce2ca = _0x4b45fe || _0x5527f9;
  const _0x5f5977 = /^[\\/!#.]/gi.test(_0x476feb.body) ? _0x476feb.body.match(/^[\\/!#.]/gi)[0] : '.';
  const _0x5d974f = _0x476feb.body.startsWith(_0x5f5977) ? _0x476feb.body.slice(_0x5f5977.length).toLowerCase() : '';
  const _0x4b43b7 = process.env.MODE;
  const _0x35e09f = ["menu", "menus", "listmenu", "allmenu", "botmenu", "help", "list"];
  if (_0x35e09f.includes(_0x5d974f)) {
    let _0x281e6e = generateWAMessageFromContent(_0x476feb.from, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "\n> *" + pushwish + "* _" + _0x476feb.pushName + "_\n╭══ *〘〘 ɢɪғᴛᴇᴅ-ᴍᴅ 〙〙* ═⊷\n┃❍ *ᴍᴏᴅᴇ:* _" + _0x4b43b7 + "_\n┃❍ *ᴘʀᴇғɪx:* [ " + _0x5f5977 + " ]\n┃❍ *ᴏᴡɴᴇʀ:* _ɢɪғᴛᴇᴅ ᴛᴇᴄʜ_\n┃❍ *ᴜsᴇʀ:* _" + _0x476feb.pushName + "_\n┃❍ *ᴠᴇʀꜱɪᴏɴ:* _5.0.0_      \n┃❍ *ᴅᴀᴛᴀʙᴀsᴇ:* _ᴄᵖᵃⁿᵉˡ_\n┃❍ *ᴛᴏᴛᴀʟ ʀᴀᴍ:* _" + formatBytes(totalMemoryBytes) + "_\n┃❍ *ғʀᴇᴇ ʀᴀᴍ:* _" + formatBytes(freeMemoryBytes) + "_\n┃❍ *ᴘʟᴀᴛғᴏʀᴍ:* _ᴡʜᴀᴛsᴀᴘᴘ_\n╰═════════════════⊷"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "> *©Sir Ibrahim* \n> *Bmw wabot*"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                'image': _0x10804f.readFileSync("./Deleted-message.jpg")
              }, {
                'upload': _0x425c1c.waUploadToServer
              })),
              'title': '',
              'gifPlayback': true,
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "quick_reply",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑",
                  'id': ".owner"
                })
              }, {
                'name': "quick_reply",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "𝐁𝐎𝐓 𝐒𝐂𝐑𝐈𝐏𝐓",
                  'id': ".repo"
                })
              }, {
                'name': "cta_url",
                'buttonParamsJson': JSON.stringify({
                  'display_text': "𝐁𝐎𝐓 𝐂𝐇𝐀𝐍𝐍𝐄𝐋",
                  'url': "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l"
                })
              }, {
                'name': "single_select",
                'buttonParamsJson': "{\"title\":\"🕳 𝐎𝐏𝐄𝐍 𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 🕳\",\n                 \"sections\":\n                   [{\n                    \"title\":\"🛸 𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔𝐒 𝐋𝐈𝐒𝐓 🛸\",\n                    \"highlight_label\":\"💿 𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇 💿\",\n                    \"rows\":[\n                      {\n                       \"header\":\"\",\n                       \"title\":\"𝐀𝐋𝐋 𝐌𝐄𝐍𝐔\",\n                       \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴀʟʟ ᴍᴇɴᴜ\",\n                       \"id\":\"All Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ ᴄᴍᴅs\",\n                        \"id\":\"Downloader Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Group Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴛᴏᴏʟ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Tools Menu\"\n                      },\n                           {\n                        \"header\":\"\",\n                        \"title\":\"𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴀɴɪᴍᴇ ᴘɪᴄs ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Anime Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐆𝐄𝐍𝐄𝐑𝐀𝐋 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"General Menu\"\n                      },\n                     {\n                        \"header\":\"\",\n                        \"title\":\"𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴀᴡᴇsᴏᴍᴇ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ᴄᴍᴅs\",\n                        \"id\":\"Owner Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐀𝐈 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴀɪ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Ai Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ sᴇᴀʀᴄʜ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Search Menu\"\n                      },\n    {\n                        \"header\":\"\",\n                        \"title\":\"𝐍𝐄𝐖𝐒 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ɴᴇᴡs ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"News Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐋𝐎𝐆𝐎 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ʟᴏɢᴏ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Logo Menu\"\n                      },\n                        {\n                        \"header\":\"\",\n                        \"title\":\"𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ғᴜɴ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Fun Menu\"\n                      },\n                            {\n                        \"header\":\"\",\n                        \"title\":\"𝐂𝐎𝐃𝐈𝐍𝐆 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴄᴏᴅɪɴɢ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Coding Menu\"\n                      },\n                            {\n                        \"header\":\"\",\n                        \"title\":\"+𝟏𝟖 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ +18 ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Adult Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐒𝐓𝐀𝐋𝐊𝐄𝐑 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Stalker Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ʀᴇᴀᴄᴛɪᴏɴs ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Reactions Menu\"\n                      },\n                      {\n                        \"header\":\"\",\n                        \"title\":\"𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 𝐌𝐄𝐍𝐔\",\n                        \"description\":\"sʜᴏᴡ ɢɪғᴛᴇᴅ-ᴍᴅ ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs\",\n                        \"id\":\"Converter Menu\"\n                      }\n                    ]}\n                  ]}"
              }]
            }),
            'contextInfo': {
              'mentionedJid': [_0x476feb.sender],
              'forwardingScore': 0x270f,
              'isForwarded': false
            }
          })
        }
      }
    }, {});
    await _0x425c1c.relayMessage(_0x281e6e.key.remoteJid, _0x281e6e.message, {
      'messageId': _0x281e6e.key.id
    });
  }
  if (_0x2ce2ca == "All Menu") {}
  if (_0x2ce2ca == "News Menu") {}
  if (_0x2ce2ca == "Downloader Menu") {}
  if (_0x2ce2ca == "Group Menu") {}
  if (_0x2ce2ca == "General Menu") {}
  if (_0x2ce2ca == "Fun Menu") {}
  if (_0x2ce2ca == "Coding Menu") {}
  if (_0x2ce2ca == "Adult Menu") {}
  if (_0x2ce2ca == "Owner Menu") {}
  if (_0x2ce2ca == "Search Menu") {}
  if (_0x2ce2ca == "Stalker Menu") {}
  if (_0x2ce2ca == "Reactions Menu") {}
  if (_0x2ce2ca == "Tools Menu") {}
  if (_0x2ce2ca == "Anime Menu") {}
  if (_0x2ce2ca == "Logo Menu") {}
  if (_0x2ce2ca == "Ai Menu") {}
  if (_0x2ce2ca == "Converter Menu") {
    const _0x3bb8dd = "\n> *" + pushwish + "* _" + _0x476feb.pushName + "_\n╭══ *〘〘 ɢɪғᴛᴇᴅ-ᴍᴅ 〙〙* ═⊷\n┃❍ *ᴍᴏᴅᴇ:* _" + _0x4b43b7 + "_\n┃❍ *ᴘʀᴇғɪx:* [ " + _0x5f5977 + " ]\n┃❍ *ᴏᴡɴᴇʀ:* _ɢɪғᴛᴇᴅ ᴛᴇᴄʜ_\n┃❍ *ᴜsᴇʀ:* _" + _0x476feb.pushName + "_\n┃❍ *ᴠᴇʀꜱɪᴏɴ:* _5.0.0_      \n┃❍ *ᴅᴀᴛᴀʙᴀsᴇ:* _ᴄᵖᵃⁿᵉˡ_\n┃❍ *ᴛᴏᴛᴀʟ ʀᴀᴍ:* _" + formatBytes(totalMemoryBytes) + "_\n┃❍ *ғʀᴇᴇ ʀᴀᴍ:* _" + formatBytes(freeMemoryBytes) + "_\n┃❍ *ᴘʟᴀᴛғᴏʀᴍ:* _ᴡʜᴀᴛsᴀᴘᴘ_\n╰═════════════════⊷\n\n> *𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 𝐌𝐄𝐍𝐔*\n" + readmore + "\n╭━━━━━━━━━━━━━━━⊷\n┃◇ " + _0x5f5977 + "ᴀᴛᴛᴘ\n┃◇ " + _0x5f5977 + "ᴀᴛᴛᴘ2\n┃◇ " + _0x5f5977 + "ᴀᴛᴛᴘ3\n┃◇ " + _0x5f5977 + "ᴛǫᴜᴏᴛᴇᴅ\n┃◇ " + _0x5f5977 + "ᴇɴᴄᴏᴅᴇ\n┃◇ " + _0x5f5977 + "ᴇʙɪɴᴀʀʏ\n┃◇ " + _0x5f5977 + "ᴅᴇᴄᴏᴅᴇ\n┃◇ " + _0x5f5977 + "ᴅᴇʙɪɴᴀʀʏ\n┃◇ " + _0x5f5977 + "ᴇᴍᴏᴊɪᴍɪx\n┃◇ " + _0x5f5977 + "ᴍᴘ3\n┃◇ " + _0x5f5977 + "ᴛᴏᴍᴘ3\n╰━━━━━━━━━━━━━━━⊷\n" + readmore + "\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*\n> *ᴍᴀᴅᴇ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*\n";
    await _0x425c1c.sendMessage(_0x476feb.from, {
      'image': _0x10804f.readFileSync("./Deleted-message.jpg"),
      'caption': _0x3bb8dd,
      'contextInfo': {
        'mentionedJid': [_0x476feb.sender],
        'forwardingScore': 0x270f,
        'isForwarded': false
      }
    }, {
      'quoted': _0x476feb
    });
  }
};
export default test;
