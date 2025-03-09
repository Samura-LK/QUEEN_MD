(function (_0x503cff, _0x3796b3) {
  const _0x429033 = _0x503cff();
  while (true) {
    try {
      const _0x4d9c45 = parseInt(_0x4080(248, -855)) / 1 * (-parseInt(_0x4080(1730, "0x43d")) / 2) + parseInt(_0x4080(152, 0x320)) / 3 + -parseInt(_0x4080(1571, "0x226")) / 4 * (parseInt(_0x4080(379, 0x25e)) / 5) + parseInt(_0x4080(1599, 0x4c5)) / 6 * (-parseInt(_0x4080(736, 0x12e)) / 7) + -parseInt(_0x4080(857, 0x1f6)) / 8 + -parseInt(_0x4080(1326, "0x393")) / 9 + parseInt(_0x4080(304, 0x323)) / 10;
      if (_0x4d9c45 === _0x3796b3) {
        break;
      } else {
        _0x429033.push(_0x429033.shift());
      }
    } catch (_0x26606b) {
      _0x429033.push(_0x429033.shift());
    }
  }
})(_0x4e5b, 272885);
const _0x14b07d = function () {
  let _0x40ac64 = true;
  return function (_0x49d7e8, _0x4599bd) {
    const _0x403662 = _0x40ac64 ? function () {
      if (_0x4599bd) {
        const _0x521739 = _0x4599bd.apply(_0x49d7e8, arguments);
        _0x4599bd = null;
        return _0x521739;
      }
    } : function () {};
    _0x40ac64 = false;
    return _0x403662;
  };
}();
const _0x2779d8 = _0x14b07d(this, function () {
  return _0x2779d8.toString().search("(((.+)+)+)+$").toString().constructor(_0x2779d8).search("(((.+)+)+)+$");
});
_0x2779d8();
const _0x28b4ec = function () {
  let _0x36189f = true;
  return function (_0x3eb502, _0x5e6b26) {
    const _0x33ba25 = _0x36189f ? function () {
      if (_0x5e6b26) {
        const _0x4fa453 = _0x5e6b26.apply(_0x3eb502, arguments);
        _0x5e6b26 = null;
        return _0x4fa453;
      }
    } : function () {};
    _0x36189f = false;
    return _0x33ba25;
  };
}();
(function () {
  _0x28b4ec(this, function () {
    const _0x1ece5d = new RegExp("function *\\( *\\)");
    const _0x3e2307 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x599c3e = _0x5b0dd7("init");
    if (!_0x1ece5d.test(_0x599c3e + "chain") || !_0x3e2307.test(_0x599c3e + "input")) {
      _0x599c3e("0");
    } else {
      _0x5b0dd7();
    }
  })();
})();
const {
  cmd,
  commands
} = require("../lib/command");
function _0x3a0049(_0x7457d0, _0x28f664, _0x34afa9, _0x3d8203, _0x5e9987) {
  return _0x4080(_0x34afa9 - "0x359", _0x5e9987);
}
const getMoviesIsaiduben = require("../lib/isaiduben");
const getMoviesIsaidubta = require("../lib/isaidubta");
const axios = require("axios");
const {
  GDriveDl,
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
function formatNumber(_0x1301b7) {
  return String(_0x1301b7).padStart(2, "0");
}
(function () {
  const _0x163526 = function () {
    let _0x27333d;
    try {
      _0x27333d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x1d3836) {
      _0x27333d = window;
    }
    return _0x27333d;
  };
  const _0x295575 = _0x163526();
  _0x295575.setInterval(_0x5b0dd7, 4000);
})();
let baseUrl;
(async () => {
  let _0x4167b3 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Movie.json");
  baseUrl = _0x4167b3.api;
})();
let baseUrl2;
(async () => {
  let _0xa97546 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Movie.json");
  baseUrl2 = _0xa97546.api2;
})();
async function free() {
  const _0x358828 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/zip.json");
  const _0x127e0f = _0x358828.moviefree;
  return _0x127e0f;
}
async function getPremiumUsers() {
  const _0xd3b269 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Moviedl/primiyam.json");
  const _0x2a672a = _0xd3b269.split(",");
  return _0x2a672a.map(_0x2a922a => _0x2a922a.replace(/[^0-9]/g, "") + "@s.whatsapp.net");
}
async function convertDownloadToViewLink(_0x5df031) {
  const _0x510686 = _0x5df031.match(/id=([^&]+)/);
  if (_0x510686 && _0x510686[1]) {
    const _0x501766 = _0x510686[1];
    const _0x3b05a6 = "https://drive.google.com/file/d/" + _0x501766 + "/view?usp=drivesdk";
    let _0x309a08 = await GDriveDl(_0x3b05a6);
    return _0x309a08.downloadUrl;
  }
  return "Invalid download link";
}
if (require("../package.json").version == "2.0.0") {
  console.log("decrypt karanna EPA pko");
}
const _0x5f46d1 = {
  pattern: "update",
  desc: "restart the bot",
  category: "owner",
  use: ".updatet",
  react: "☣",
  filename: __filename
};
cmd(_0x5f46d1, async (_0x3f59b7, _0x344655, _0x14a3df, {
  from: _0x3256f4,
  quoted: _0xfa9e8d,
  body: _0x2c061e,
  isCmd: _0xea69ad,
  command: _0x513595,
  args: _0x2ecc61,
  q: _0x219850,
  isGroup: _0xf9c532,
  sender: _0x370697,
  senderNumber: _0x2b6619,
  botNumber2: _0x29cc23,
  botNumber: _0x53d080,
  pushname: _0x2ed27a,
  isMe: _0x2f689f,
  isOwner: _0x33a8cc,
  groupMetadata: _0x5c2d27,
  groupName: _0xb592d1,
  participants: _0x3224af,
  groupAdmins: _0x127bbc,
  isBotAdmins: _0x3e849a,
  isAdmins: _0x22875c,
  reply: _0x3efb1f
}) => {
  try {
    if (!_0x33a8cc) {
      return _0x3efb1f("only for owner");
    }
    const {
      exec: _0x34b4ed
    } = require("child_process");
    const _0x5cde1c = {
      text: "*Updateing.....*"
    };
    const _0x1c8238 = {
      quoted: _0x344655
    };
    await _0x3f59b7.sendMessage(_0x3256f4, _0x5cde1c, _0x1c8238);
    const _0x47e139 = {
      text: "*Update Don ✔*"
    };
    const _0x1eda48 = {
      quoted: _0x344655
    };
    await _0x3f59b7.sendMessage(_0x3256f4, _0x47e139, _0x1eda48);
    await sleep(1500);
    _0x34b4ed("pm2 restart all");
  } catch (_0x4212b5) {
    console.log(_0x4212b5);
    _0x3efb1f("" + _0x4212b5);
  }
});
const _0x391164 = {
  pattern: "movie",
  react: "🎥",
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".movie < Movie Name >",
  filename: __filename
};
cmd(_0x391164, async (_0x3083be, _0x5cd792, _0x3c1ec2, {
  from: _0x571cc8,
  sender: _0x3be093,
  prefix: _0x918d42,
  quoted: _0x5c9c92,
  q: _0xad54c0,
  reply: _0x22089a
}) => {
  try {
    if (!_0xad54c0) {
      return await _0x22089a("Movie name please!");
    }
    const _0x122201 = await fetchJson(baseUrl + "/api/sinhalasubs/search?q=" + _0xad54c0 + "&apikey=asitha108");
    let _0x2afcc8 = _0x122201.data.data.data;
    var _0x434244 = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x2afcc8.length; _0x3c0b16++) {
      _0x434244.push({
        title: _0x3c0b16 + 1,
        description: _0x2afcc8[_0x3c0b16].title,
        rowId: _0x918d42 + "mpp " + _0x2afcc8[_0x3c0b16].link
      });
    }
    const _0x58c676 = await fetchJson(baseUrl + "/api/cinesubz/search?q=" + _0xad54c0 + "&apikey=asitha108");
    let _0x49b6ca = _0x58c676.data.data.data;
    var _0x3a279d = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x2afcc8.length; _0x3c0b16++) {
      _0x3a279d.push({
        title: _0x434244.length + 1 + _0x3c0b16,
        description: _0x49b6ca[_0x3c0b16].title,
        rowId: _0x918d42 + "mdc " + _0x49b6ca[_0x3c0b16].link
      });
    }
    const _0x5a34b8 = await fetchJson("https://www.dark-yasiya-api.site/movie/firemovie/search?text=" + _0xad54c0);
    var _0x37fa06 = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x5a34b8.result.data.length; _0x3c0b16++) {
      _0x37fa06.push({
        title: _0x434244.length + _0x3a279d.length + _0x3c0b16 + 1,
        description: _0x5a34b8.result.data[_0x3c0b16].title,
        rowId: _0x918d42 + "fdc " + _0x5a34b8.result.data[_0x3c0b16].link
      });
    }
    const _0x352816 = await getMoviesIsaiduben(_0xad54c0, 10);
    var _0x290da3 = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x352816.length; _0x3c0b16++) {
      _0x290da3.push({
        title: _0x434244.length + _0x3a279d.length + _0x37fa06.length + _0x3c0b16 + 1,
        description: _0x352816[_0x3c0b16].title,
        rowId: _0x918d42 + "dbl " + (_0x352816[_0x3c0b16].downloadUrls?.["720p"] || _0x352816[_0x3c0b16].downloadUrls?.["360p"] || "no") + " & " + _0x352816[_0x3c0b16].title + " & 720p"
      });
    }
    const _0x4a4571 = await getMoviesIsaidubta(_0xad54c0, 10);
    var _0x22ce32 = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x4a4571.length; _0x3c0b16++) {
      _0x22ce32.push({
        title: _0x434244.length + _0x3a279d.length + _0x37fa06.length + _0x290da3.length + _0x3c0b16 + 1,
        description: _0x4a4571[_0x3c0b16].title,
        rowId: _0x918d42 + "dbl " + (_0x4a4571[_0x3c0b16].downloadUrls?.["720p"] || _0x4a4571[_0x3c0b16].downloadUrls?.["360p"] || "no") + " & " + _0x4a4571[_0x3c0b16].title + " & 720p"
      });
    }
    const _0x21dd8c = await fetchJson(baseUrl2 + "/api/awa/movie/search?q=" + _0xad54c0);
    var _0x385f6c = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x2afcc8.length; _0x3c0b16++) {
      _0x385f6c.push({
        title: _0x434244.length + _0x3a279d.length + _0x37fa06.length + _0x290da3.length + _0x22ce32.length + _0x3c0b16 + 1,
        description: _0x21dd8c[_0x3c0b16].title,
        rowId: _0x918d42 + "awadll " + _0x21dd8c[_0x3c0b16].link
      });
    }
    const _0x2b85e4 = await fetchJson(baseUrl2 + "/api/baiscop/movie/search?q=" + _0xad54c0);
    var _0x10eb31 = [];
    for (var _0x3c0b16 = 0; _0x3c0b16 < _0x2b85e4.length; _0x3c0b16++) {
      _0x10eb31.push({
        title: _0x434244.length + _0x3a279d.length + _0x37fa06.length + _0x290da3.length + _0x22ce32.length + _0x385f6c.length + _0x3c0b16 + 1,
        description: _0x2b85e4[_0x3c0b16].title,
        rowId: _0x918d42 + "bais " + _0x2b85e4[_0x3c0b16].link
      });
    }
    const _0xb450bf = [{
      title: "*[Results from sinhalasub.lk]*\n",
      rows: _0x434244
    }, {
      title: "*[Results from cinesubz.co]*\n",
      rows: _0x3a279d
    }, {
      title: "*[Results from firemoviehub.com]*\n",
      rows: _0x37fa06
    }, {
      title: "*[Results from isaidub9.com English ]*\n",
      rows: _0x290da3
    }, {
      title: "*[Results from isaidub9.com Tamil ]*\n",
      rows: _0x22ce32
    }, {
      title: "*[Results from awa.com]*\n",
      rows: _0x385f6c
    }, {
      title: "*[Results from baiscop.lk]*\n",
      rows: _0x10eb31
    }];
    const _0x468e54 = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0xad54c0 + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0xb450bf
    };
    const _0x2f4064 = {
      quoted: _0x5cd792
    };
    return await _0x3083be.replyList(_0x571cc8, _0x468e54, _0x2f4064);
  } catch (_0x2931ec) {
    console.error(_0x2931ec);
    await _0x22089a("*ERROR !!*\n\n🚩 *Details:*\n" + (_0x2931ec.message || _0x2931ec) + "\n\n📩 If this error persists, please check your API endpoints or input.");
  }
});
const _0x54be6c = {
  pattern: "dbl2",
  react: "⬇️",
  filename: __filename
};
cmd(_0x54be6c, async (_0x44dcde, _0x4da396, _0x73e2c7, {
  from: _0x4d2e11,
  q: _0x356453,
  sender: _0x54e710,
  reply: _0x3ffe12
}) => {
  try {
    const _0x539ab0 = _0x356453.split(" & ")[0];
    const _0x4ee1c7 = _0x356453.split(" & ")[1];
    const _0x62b49b = _0x356453.split(" & ")[2];
    const _0x39bafb = _0x356453.split(" & ")[3];
    const _0x4e2d94 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x5c1e8b = _0x4e2d94.imageurl;
    let _0x54ba53 = _0x4e2d94.channel;
    if (!_0x539ab0) {
      return _0x3ffe12("❗ කරුණාකර download link එකක් ලබා දෙන්න.");
    }
    const _0x1b1f2c = /^(https?:\/\/[^\s]+)/;
    if (!_0x1b1f2c.test(_0x539ab0)) {
      return _0x3ffe12("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    const _0x5a2b0e = {
      text: "⬆️",
      key: _0x4da396.key
    };
    const _0x5802cc = {
      react: _0x5a2b0e
    };
    await _0x44dcde.sendMessage(_0x4d2e11, _0x5802cc);
    const _0x55ef2a = {
      title: "ASITHA-MD",
      body: "ASITHA-MD",
      thumbnailUrl: "" + _0x5c1e8b,
      sourceUrl: "" + _0x54ba53
    };
    const _0x4c003c = {
      quoted: _0x4da396
    };
    await _0x44dcde.sendMessage(_0x4d2e11, {
      image: {
        url: _0x39bafb ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      }
    }, _0x4c003c);
    const _0x11b50d = {
      url: _0x539ab0
    };
    const _0x10d56a = {
      externalAdReply: _0x55ef2a
    };
    const _0x559474 = {
      document: _0x11b50d,
      caption: "\n*" + _0x4ee1c7 + "*\n\n> *" + _0x62b49b + "*\n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      mimetype: "video/mp4",
      fileName: "🎬ASITHA-MD🎬" + _0x4ee1c7 + ".mp4",
      contextInfo: _0x10d56a
    };
    const _0x5efb2b = {
      quoted: _0x4da396
    };
    await _0x44dcde.sendMessage(_0x4d2e11, _0x559474, _0x5efb2b);
    const _0x229bb0 = {
      text: "✅",
      key: _0x4da396.key
    };
    const _0x30c1ba = {
      react: _0x229bb0
    };
    await _0x44dcde.sendMessage(_0x4d2e11, _0x30c1ba);
  } catch (_0x461514) {
    _0x3ffe12("❗ Error: " + _0x461514);
  }
});
const _0x12c2f1 = {
  pattern: "ginisisila",
  react: "🎥",
  desc: "Download movie for isaidub9.com",
  category: "movie",
  use: ".Ginisisila <Movie Name>",
  filename: __filename
};
cmd(_0x12c2f1, async (_0x13c1a6, _0x41ab87, _0x4e0e5d, {
  from: _0x17e1c4,
  sender: _0x43ead3,
  prefix: _0x500666,
  quoted: _0x2a2008,
  q: _0x44360a,
  reply: _0x56b316
}) => {
  try {
    let _0x169b1f = _0x44360a.split(" & ")[1];
    let _0x23f31f = _0x44360a.split(" & ")[0];
    const _0x436693 = "https://www.dark-yasiya-api.site/search/ginisisila?text=" + _0x23f31f + "&page=" + _0x169b1f;
    const _0xe2d77e = await axios.get(_0x436693).then(_0x3099a0 => _0x3099a0.data);
    if (!_0xe2d77e.status) {
      return _0x56b316("*ERROR:* Unable to fetch data for \"" + _0x23f31f + "\".");
    }
    let _0x4a9224 = _0xe2d77e.result.data;
    const _0x2bf27f = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x51c45a = _0x2bf27f.footer;
    var _0x328201 = [];
    for (var _0x201fc9 = 0; _0x201fc9 < _0x4a9224.length; _0x201fc9++) {
      _0x328201.push({
        title: _0x201fc9 + 1,
        description: _0x4a9224[_0x201fc9].title + "\n",
        rowId: _0x500666 + "gdrivegini " + (_0x4a9224[_0x201fc9].url || "N/A") + " & " + _0x4a9224[_0x201fc9].image
      });
    }
    const _0xb0fb31 = [{
      title: "*[Results from ginisisilacartoon.net]*\n",
      rows: _0x328201
    }];
    const _0x3cda00 = {
      text: "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 Entered Name || " + _0x23f31f,
      footer: _0x51c45a || "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0xb0fb31
    };
    const _0x43bb59 = {
      quoted: _0x41ab87
    };
    return await _0x13c1a6.replyList(_0x17e1c4, _0x3cda00, _0x43bb59);
  } catch (_0x4a1c9c) {
    console.error(_0x4a1c9c);
    _0x56b316("No Movie");
  }
});
const _0x24050f = {
  pattern: "sinhaladub",
  react: "🎥",
  desc: "Download movie for isaidub9.com",
  category: "movie",
  use: ".sinhaladub <Movie Name>",
  filename: __filename
};
cmd(_0x24050f, async (_0x5c0893, _0x735076, _0x5b36cf, {
  from: _0x4890f9,
  sender: _0x51a0d0,
  prefix: _0x4858e2,
  quoted: _0x29c37f,
  q: _0x237211,
  reply: _0x382f94
}) => {
  try {
    if (!_0x237211) {
      return _0x382f94("❌ Please provide a query.");
    }
    const _0x1325ad = await fetchJson(baseUrl2 + "/api/sinhaladub/movie/search?q=" + _0x237211);
    console.log(_0x1325ad);
    if (!_0x1325ad) {
      return _0x382f94("no movie .");
    }
    const _0x5e346d = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x419f7a = _0x5e346d.footer;
    var _0x3ec8ee = [];
    for (var _0x16965a = 0; _0x16965a < _0x1325ad.length; _0x16965a++) {
      _0x3ec8ee.push({
        title: _0x16965a + 1,
        description: _0x1325ad[_0x16965a].title + "\n",
        rowId: _0x4858e2 + "sinhaladubdll " + _0x1325ad[_0x16965a].link
      });
    }
    const _0xe912cc = [{
      title: "*[Results from sinhalamovie.com]*\n",
      rows: _0x3ec8ee
    }];
    const _0x4696e9 = {
      text: "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 Entered Name || " + _0x237211,
      footer: _0x419f7a || "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0xe912cc
    };
    const _0x40607c = {
      quoted: _0x735076
    };
    return await _0x5c0893.replyList(_0x4890f9, _0x4696e9, _0x40607c);
  } catch (_0x2bfb4e) {
    console.error(_0x2bfb4e);
    _0x382f94("No Movie : " + _0x2bfb4e);
  }
});
const _0xaad77a = {
  pattern: "sinhaladubdll",
  desc: "Check bot setting.",
  react: "🎬"
};
function _0x4e5b() {
  const _0x3b60c2 = ["fjzNP", "ion", "ows", "PJCSg", "UIMNv", "BhFKF", "size ", "Downl", "pgoDb", "rds", "HIDXx", "sapp.", "Dɪʀᴇᴄ", "ame>", "ASITH", " | සි", "KvTgb", "ize", "FTJAy", "resta", "wScFr", "ciner", "Lqgmq", "s/mov", "CUiTE", "m lin", "CpRVe", "XeoDe", "s fou", "DceJp", "uBAJo", "qgGil", "ubz/e", "Name ", "HFIFn", "rMEUp", "iZGcC", "ccurr", "➟➟*\n▫️", "acntq", "EJNpb", "Episo", "QNDqo", "WFgwF", "rVqDi", "NWyuh", "ruayj", "nqHsP", "LvUCC", "Nauxe", "XYPSd", "MrMEL", "vie/s", "Inval", "TulXP", "HLibd", "conte", "ls:*\n", "/asit", "insid", "XLwHE", "PvEjM", "yPupT", "JHWhx", "ANGBC", "eyMFj", "iedl/", "dllin", "SivSg", "🎬 ", "gBrrF", "ICVQA", "DRzVm", "eAXVD", "mtdLt", "20p &", "rnqrf", "id re", "runti", "state", "lid d", "uaJFv", "rkVYG", "rEQlg", "numbe", "CLBry", "fpAIm", "missi", "dPYVo", "then", "for o", "ngvjB", "mFtrH", "ifAjy", "dKxdr", "metho", "UTDZi", "aoWsR", "fxAaY", "Pqrlx", "ppMQf", "r sea", "pnZBU", "oXrYS", ".json", "*\n\n*⏤͟͞", "iMqUH", "hanne", "HsuRc", "PThxX", "නෑ මේ", "quote", "e a q", "ect L", "YTXOc", "uery_", "DBnuy", "_long", "_proc", "MWQwH", "GQWOX", "ɪɴ :*", "WVigN", "co < ", "tags", "JtSwa", "WlZvR", "bWkxv", "GwVMK", "Url", "tJZda", "rPFVe", "ctor(", "HicdR", "NDZSo", "tered", "lzwRj", "pGFgF", "Ypzkm", "lQPQm", "qQQzl", "yMWv3", "suPqE", "rDSob", "Csuez", "KKfmx", "tHyTR", "vnklH", "b.com", "ints ", " 𝗢 𝗩 ", "WVjtZ", "xwASy", "ytpfq", "pQTVa", "mmQod", "SutCE", "deCBX", "්න*", "JZMVK", "YpxqE", "*Rᴇʟᴇ", "dgVuS", "Yebae", "080p.", "gNXBB", " bot ", "Links", "qwWCs", "zrLyz", "ztPoM", "nesub", "NrIFf", "oad m", "nable", "\"dire", "MWv3Q", "⏤͟͟͞͞★*", "grETU", "MUoyk", "ty.", "ng.", "Movie", "UdBrX", "mIzwp", "gOYAq", "TcvjM", "rRAls", "name", "ztSpY", "YAyQj", "Mwwbz", "ᴏɪɴ :", "mddc", "gtPSL", "../li", "ructo", "Derty", "dcrxy", "nk720", "6446.", "vshow", "nks f", "LScNy", "HrmZB", "s/sea", "QxOBo", "xRu4h", "HYIwz", "red N", "vie/e", "xIEGM", "cpeDF", "patte", "EdXzO", "KoFQs", "kSuRF", "GUwSB", "ByKsc", "KfUkg", "Cᴏᴜɴᴛ", "Cᴀsᴛ ", "espon", "ction", "reque", "hrQhS", "bNqfu", "080p ", "tGBTK", "YlFPE", "hanGu", "YpBrc", " & 48", "sxyFJ", "put.", "Teleg", "➟➟*\n\n", "ipCjt", "OpsFw", "ENRHX", "QUvcd", "AyeaK", "eCoLl", "jpg", "❗ දීල", "yvemJ", "/movi", "TOhMa", "Liwsp", "KHqpN", "HjALA", "iZofD", "toStr", "No Di", "MNZhR", "terva", "ctDow", "rl=", "htxfw", "ease ", "alls ", "ie Na", "A6c33", "uery.", "ETwkX", "HICAq", "KWjId", "gtFmB", "biHIF", "pre_c", "pLHGd", "XDrVE", "EfvDU", "HGMaH", "e?url", "ABtNZ", "wtuUR", "677397JLbQgK", "PoAHN", "XRAEk", "aJOFn", "oQlda", "RWMls", "LAOXa", "cgQWZ", "ies.j", "nmBYm", "ffIsb", "AXBHs", "PBojy", "MNaIO", "://ba", "actor", "Xyyew", "XvYUU", "reate", "UCcke", "pTouA", "NlzCb", "desDe", "LaBdB", "s, pl", "jAjrl", "bGBar", " or 1", "No va", "kGCUr", "*තාම ", "jftEw", "SxPEP", "lOayS", "XNXVm", "ubz/t", "call", "a <Mo", "itha1", "vQjYA", "ng 'd", "NKeCS", "EyLZH", ".fire", "cDQlw", "dwTZb", "mOESY", "ranna", "TdMUj", "jHJfG", "dbl ", "Gᴇɴʀᴇ", "vvFPK", "itle", "OcfpG", " :- ", "api2", "*🔢 Re", "nd fo", "gFdDA", "se.", "fxwxq", "IYptw", "xvcDA", "nboUy", "HlzAi", "Kᴇʏᴡᴏ", "BSuir", "ZVafi", "Dᴇꜱᴄʀ", "HhKwD", "dbl2", "OguSK", "xebif", "QrDAa", "CxZvG", "kMqTQ", " 𝗡 𝗘 ", "\n▫️👨🏻‍💼 *", "CrcFn", "rzdyU", "IQAJj", "TeOcB", "pqr", "BPSdt", "ink එ", "vie N", "w.dar", "*Dᴇꜱᴄ", "iremo", "rglPA", "lgFAg", "UXuMq", "me >", "kNQNa", "SKcKg", "4exPhed", "RuWAR", "primi", "wskht", "QRzeH", "aesYj", "oDBtT", "\\( *\\", "PRDEL", "Bpwmf", "animo", "ixWoa", "VjFRO", "KJFNE", "?usp=", "ukfwC", "ajhNW", "ginis", "st.", "mIwCZ", "mCfad", "Z_$][", "Hlivf", "tsapp", "oRzdo", "rovid", "e) {}", "statu", "url", "No Li", "EJRJs", "ᴀᴛᴇ :", "L එක ", ".com]", "-rubb", "text", "r*\n", "FdwUs", "VbGTF", "rIQpF", "නෑ* ", "බා දෙ", "uctur", "JOCyP", "Zicjh", "pYdXW", "sendM", "e/dow", "mtjyf", "oad", "BOpbE", "legra", "GSmfk", "nks", "catio", "fAmRR", "13787920fLAJnr", "tIanA", "Objec", "oadLi", "ram ", "hdQjK", "tet", "Gbdcy", "ponse", "ype", "n ✔*", "ey=as", "iBjfZ", "cJloI", "LEuEV", "nKeva", "WZlVy", "wLEHy", " occu", "n/zip", "ing&q", "ඟ & 4", "low n", "HaedL", "iptio", "tting", "epUOk", "XLKDY", "͟͞★❮𝗔 ", "split", "mimet", "/view", "ByaHH", "yDQiO", "WvLNg", "ubz/d", "YgWwd", "awa/m", "NAWUG", "m]*", "➟➟➟*\n", "BGCLo", "dSIEs", "qQwFI", "chain", "yRCzQ", "WCprA", "MTXeD", "*\n\n👽 ", "ovie/", "s/tvs", "YlvSi", "key", "yPOJx", "react", "BiOuT", "mOHPZ", "TPHRn", "NzCIp", "TEXNy", "FjxXp", "aPJak", "RjtJu", "DcSCD", "vPger", "p.net", "zTfog", "*[Res", "oad l", "detai", "aZlaI", "ubz.c", "XtOTu", "CcDqz", "GcAdv", "1995bwWxOB", "mIFaT", "DwzB/", "WZsgY", "A-MD", "fFsHM", "resul", "TwxfO", "size7", "Dcegw", "0p & ", "IWxzc", "tTfCx", "KfdGo", "u/mov", "\n\n*⏤͟͟͞͞", "කක් ල", "Bsnmf", "UCKJT", "y qua", "MnpTK", "IKgrB", "dkbwH", "\n▫️🎭 *", "u.lk]", "HA-MD", "ply b", "IsBMz", "වැරදි", "MpxBf", "hytia", "eUrl", "&apik", "pGaBW", "NOZfA", "vUwdY", "dXpzR", "  𝗖 𝗜", "*Upda", "PODHv", "join", "YzKMV", "child", "TVtqH", "🎬ASIT", "oPbAO", "WZJKG", "▫️🔗 *J", "HYSnB", ".zip", "drive", "YSNmP", "toFix", "limit", "➟➟*\n", "for i", "bLNAl", "BRynv", "downl", " what", "mXdPk", "mnoVR", "eJRHK", "descr", "GkCeM", "fdc", "AIKZo", "iUeys", "GGNeB", "IsATO", "iTpMF", "tqPlO", "or an", "vzmxA", "ztmTB", "VEOAa", "tlab.", "dl_li", "://ci", "API c", "★❮𝗔 𝗦", "QSHlp", "jhhdA", "op.lk", "thumb", " සයිට", "iICZp", "$]*)", "remov", "\n▫️📃 *", "com/c", "fqFUQ", "පසිරැ", "saidu", " to f", "QhbLi", "iSFiJ", "rtgiN", "DocIh", "BskWR", "orGOz", "oeiKG", "GlIma", "ZjEiO", "filte", "iMKrm", "-MD*\n", "api", "TzQxJ", "LyqsV", "lBTge", "idubt", "ujwKm", "DIoOi", "oNSHf", "An er", "NjfZM", "kNDsM", "yjuGv", "jAeuD", "HJavy", "id do", "kDXuQ", "inKtH", "List", "ord-e", "VMVyZ", "2.0.0", "vRRyS", "zVzKH", "ozMzn", "yfxDz", "yHvHb", "qoUSw", "mAdhS", "uWKzM", "IJqNB", "Check", "rvOkM", "capti", "න්න.", "ɴᴇᴍᴀ📽️", "&page", "VYsEi", "mdc", "?url=", "ohwEb", "XhxJA", "uZtsS", "UGwLY", "nstru", "ASTvD", "kmfQN", "qhYOv", "VfpuW", "CVPdo", "eRwiI", " Name", "e/sea", "found", "r/Mov", "castD", "oSJbo", "WzZcW", "ckage", "date", "ities", "f thi", "R !!*", "gShdK", "WObWI", "es.lk", "idube", "YObnf", "pCzgF", "d, bu", "te/se", "qqdOe", "bbuzJ", "fdc ", "Rᴇʟᴇᴀ", "\n\n▫️📃 ", "TwkPN", "IjMyp", "xmpMy", "zJlfh", "MRjMV", "t all", "gDuAj", "rTPdy", "gChca", "rzZBu", "hdSda", "CLYip", "Detai", "vhcPs", "දුවේ ", ".lk]*", "jHnrF", "\n▫️🌎 *", "ELayJ", ".movi", "WXfER", "MRXJS", "JqNaG", "aozZK", "ase p", "ZGYeF", "eWRzP", "u2000", "TpFMW", "AkgJR", "Wskyx", "PUHJa", "UXgnT", "sDQxT", "ny qu", "VPorT", "rpEsL", "OhATN", "asub.", "ie_ep", "searc", "iKHoc", "ha-md", "JttLg", "ZmbdH", "ETVYo", "EuEYk", "uhRmL", "LDUSS", "b/sin", "(((.+", "pDDst", "ks fo", "SuIvt", "FZccv", "qCsjX", "owner", "FAYOF", "ies", "alKXv", "des d", "wner", "fayCQ", "awa", "categ", "und!", "tkeUO", "AEQNH", "sub", "dQqOD", "rkQMB", "Idaxg", "MyPDJ", "80p &", " ||* ", "rAswA", "AJgjY", "d lin", "OxnfZ", "cast", "uTasx", "HZqZF", "IKqcI", "s/epi", "waTnX", "CsFjo", "data ", "/raw/", "QfnMd", "kGCkl", "bHuBt", "for a", ".upda", ".mp4", "zlGkJ", "isila", "btlfT", "FoEWN", "LmqfN", "GJQSw", "vBwGC", " name", "No di", "EYETA", ")+)+)", "ons", "fiiZe", ".bais", "TTyOD", "e720p", "WtDWS", "FUric", "*[Dir", "und f", "lgEBQ", "sode?", "ryHPr", "EVyKz", "aTbWc", "ovieh", "ZrPlF", "zplOO", "WRNmK", "yMNzt", "EaxRY", " - ", "yts.m", "nctio", "ame", "rxWuq", "biIKa", "error", "vEaMA", "ound ", "TMWTA", "duerW", "uaTsj", "RDrnk", "son?s", "seDat", "quali", "LeAmF", "atsap", "ksVyh", "r all", "qRzMR", "szoFI", "pEWqn", "/tvsh", "DhhhP", "QSino", "mOnMg", "wnlin", "CtSrY", "mcyPH", "GXxWA", "BNQoW", "ZsQvf", "ng do", "://gi", "XxkKJ", "BMVKv", "hqdgc", "UrINC", "mTuEI", "ɪᴏɴ :", "maste", "XQFra", "use", " qual", "oogle", "Mv na", "crnmu", "jseYz", "elkNE", "35CMhnPB", "zFeTr", "VdtTp", "xJLUM", "ImyxR", "PUKAx", "DXsdn", "alasu", "cjGvU", "GHXyy", "d <Mo", "NhHiJ", "❗ Err", "EJDHh", "ad li", " plea", "ess", "IUhzo", "sjiys", "hsigp", "DeTom", "★*\n\n👽", "vie/d", "nNxJI", "|* ", "BZwlP", "rQlik", "QxRu4", "YOuTy", "IXmRv", "api/v", "ppTWp", "0-9a-", "WMOBI", "gGOqJ", "fGGfn", "CVVqG", "𝗧 𝗛 𝗔", "isode", "y=rat", "desc", "\n▫️📅 *", "ZcPKm", "id AP", "DdgkU", "HpdAH", "XQpWe", " EPA ", "GhPPV", "Pxmmg", "Urls", "r/zip", "secti", "myQih", "s < M", "sisil", "OpMuR", "720", "UJSKH", "om Ta", "id da", "kzswz", "msUtc", "yqTgI", "Choos", "VvAvA", "{}.co", "GAvZH", "fXbLX", "jvHfF", "flatM", "sub.l", "LQtmQ", "z.co/", "VqgJL", "EyHUn", "❯★*\n\n", "QHJQd", "BNSxT", "the r", "YZify", "UBjRg", "MYuiY", "SwSlC", "decry", "oujQD", "cotxG", "qsKkl", "fWDdo", "JVhwG", "OrFKI", "datal", "GlYMJ", "movie", "VVLNA", "GDcob", "FSUOb", "lnTBr", "kIZBZ", "KDGDg", "vPLIR", "heade", "messa", "ladub", "vKDyR", "nfpmU", "AtvcT", "CYaKL", "🔢 Rep", "RYARU", "aBhqE", " (tru", "XHyeq", "foote", "හ කරන", "sNAwM", "xCFbG", "qNuDu", "jejSE", "eVZNC", "DqcxG", "2469704zHUfgM", "HEAD", " & ", "r/Mre", " Ente", "VcMfl", "ʀʏ :*", "DSGof", "posti", "p :- ", "Ndcsl", "BAftW", "repla", "Reply", "axios", "nk480", "JjYFx", "ROrjg", "://i.", "QvROo", "pYcUi", "aLFbY", "yjORF", "r/dit", "image", "zFFud", "qTPmK", "FWPze", "ybtOE", "JhZaL", "ංහල උ", "/9FGJ", "SoFqz", "ults ", " & 10", "AmGtj", "QlXxv", "Ortby", "OjSfa", "vprvM", "Hbtbz", "e bot", "qfeHk", "RrDtw", "xzVfV", "b/fun", "qWgzV", "gdriv", "ame |", "MSxWE", "RZKjU", "ᴍᴅ ᴄɪ", "GuSpd", "href", "Gecau", "aDZRV", "oAPAR", "ed to", " by A", "CNeyk", "skYNz", " 720p", "HzsGZ", "push", "*ERRO", "dXSXw", "size", "lity", "nPJFd", "ly be", "PCRAS", "\n*📽️ᴀꜱ", "WxOSj", " 𝗜 𝗧 ", "RLouT", "͟͞★*", "match", "art", "dkUDB", "*Down", "xrKrD", "gaPEu", "EATSP", "CWZIe", "xtfJS", "OpZIo", "eltaE", "qubod", "Rmrqy", "for \"", "funct", "FMCHd", "e < M", "t_mov", "IlgNk", "zmKUE", "hSSyC", "80p, ", "const", "YJrHR", "rZEoW", "NCUDr", "st/mo", "CRbQp", "APxLC", "ovie?", "720p ", "-db/-", "versi", "arch/", "xOuXs", "dll ", "for 4", "xzXjD", "XJbCZ", "strin", "tQUQX", "CKhzi", "on.ne", "zA-Z_", "ypjWw", "YVsXp", " Link", "size3", "PuOka", "phEeQ", "gKyNK", "bstOG", "dxvmq", "qVRzD", "𝗡 𝗘 𝗠", "er-st", "HvRzO", "EdDNA", "vie .", " fetc", "nText", "NXiwN", "DyxRQ", "JxlNr", "etch ", "Direc", "iFLxK", "AZbBx", "ply.j", " fail", "TqtiS", "oPdpp", "essag", "b9.co", "mddc ", "init", "Null", "StxMO", "ZHOEq", "endpo", "ZkAmI", "ustra", "RMSVq", "bxIcg", "Frbld", "bwufH", "siYic", "eoerC", "\n\n📩 I", "only ", "FfNxB", "LWXRk", "aEMUK", "MvGHG", "xoOnw", "iya-a", "nLMsX", "ed wh", "DwEnW", "tGQpx", "genre", "VDiSa", "ent", "gurlK", "ils n", "HkwHu", "bzgBs", "diVeI", "\"retu", "ncaWw", "x]*", "k fou", "s/dow", "from ", "bais", "JNtIO", "yam.j", "gRmQX", "oadli", "pbvCz", "WtKct", "EnfHV", "check", "BwwpR", "lgOTN", "ᴛʟᴇ :", "IiGHP", "ifROU", "maint", "BMqdn", " උත්ස", "iFvHf", "oUpdt", "cBehG", "dUEQU", "ZkwJG", "ubz/m", "WkKyu", "IufFC", "ive.g", "YwWIj", "Esbvc", "se!", "PugsU", "YjpCM", "size4", "rect ", "hYZbg", "480", "JgqdL", "BXmtK", "qfgKT", "HtJXP", ". කරු", "rive ", "ඟ & 1", "s emp", " නොහැ", "xUIWG", "9Vaey", "siImy", "LICLf", "HIjQM", "fDbXj", "cZdGd", "TIpCy", "bpXHc", ", but", "Error", "VbOqA", "mcVek", "wjQvm", "QvAAH", "e you", "episo", "ZGvNL", "naEnn", "fYndZ", "ength", "jWqtD", "xNvpo", "IIudO", "GAIGk", "BdBzT", "BFXxD", "BlVwE", "Name", "\n*★❮𝗔", "UVXQm", "mpp ", "*★❮𝗔 ", "nmUlP", "roces", "OINnf", "WDGJG", "𝗔 𝗦 𝗜", "viaHx", "➟➟➟➟➟", "ubz/s", "HhZuB", "txms", "apply", "Z\n*➟➟", "WwZyi", "AbsVw", "වෙලා ", "cguXo", "CEOXq", "uxKQx", "iKcrR", "mVgWu", "29Vae", "rred:", "cbIkH", " 𝗧 𝗛 ", "🔗 *Jᴏ", "or pe", "TOXMn", "🚫 No ", "mpETW", "rxAYK", "tQxFo", "\n▫️⏱️ *", "earch", "PKQvv", "zWFYr", "fYxMm", "exter", "AOeoh", "𝗘❯⏤͟͟͞͞★", "EbBeu", "nYWts", "vSgDZ", "uKYKf", "TJKbE", "map", " link", "ort_b", "mpp", "appli", "SVegP", "ryNYd", "dll", "MDNVz", "hHYAw", "ayrpL", "nukun", "AsIwI", "oAsrY", "ෙන UR", "WrqWo", "rror-", "fVzJK", "pEhTj", "h val", "ණාකර ", "MPdjn", "pXZEb", "fUfsz", "👽 *En", " *Tɪᴛ", "term=", "noQdL", "\" in ", "ink]*", "එක හො", "HHNLR", "NzFNZ", "qgPOB", "IsOrF", "QRuBE", "baisc", "alias", "MwXgL", "link", "qiAaH", "ssful", "log", "padSt", "xIRiq", "DYqEj", "pRMit", "𝗠 𝗔 ㋡", "com/a", "aGDIr", "oadUr", ".cine", "CpCYA", "lKjqM", "xkrWq", "wnloa", " 1080", "uHWit", "mainD", "gFbSN", "oYvJR", "te Do", "KffRE", "AVdXu", " 𝗛 𝗔 ", "JssOb", "grnVG", "*[Gdr", "pqr ", "ArBzF", "JUbfa", "WTAqF", "tYhzz", "ata i", "gKnIR", "WWWWz", "qBJut", "todaq", "direc", "fASBh", "pZDfK", "*නැවත", " 𝗖 𝗜 ", "ලබාගත", "s?url", "sOAAf", "find", "awa.c", "hNiBu", "hqpFA", "ywvRU", "pQCHo", "TnzoT", "\n\n\n*➟", "://yt", "bmfYB", " 𝗩 𝗜 ", "Qqyow", " ඇඩ් ", "rghlL", "Tv Sh", "keywo", "gAdlT", "isaid", "zihkO", "VOZSg", "://dr", "../se", "UTyGx", "rch?q", "nmhSc", "ZTboW", "HpugR", "cYrib", "FohIe", "JNqPY", "UZsyl", "uRoyV", "CtGvp", "lengt", "lEHVL", "bvsmG", "get", "GKFnL", "docum", "cAnHF", "zMTef", "e480p", "actio", "rEaVB", "nhala", "avail", "lamov", "o < M", "DGmdq", "*Ente", "lzlmq", "Pipex", "jtIuV", "JeCBG", "caCsz", "@s.wh", "BJHej", "e str", "size1", "QBweQ", "GiqOG", "glubb", " API ", "nailU", "ymDGg", "බලන්න", "DmeBH", "fmyNN", "PBLQU", "rch q", "YwoNi", "om En", "2078649noyxPj", "egini", "Dxmbn", "QliGl", "nalAd", "PCamm", "No gd", "mSBjR", "*\n\n> ", "vpuvE", "ive D", "rYNMg", "teing", "pisod", "bXLDD", "dateC", "➟➟* ", "TMwbE", "ubz", "mpfpe", "ovie ", "amp-w", "ʀɪᴘᴛɪ", "son", "VOzVH", "XhLDK", "Svvbf", "Ppcsp", "LeXzX", "ftKuy", "pFZGt", "DEVav", "pi.si", "QNyYJ", "rKjWY", "s err", "e1080", "xeyaI", "fWiaF", "while", "SIwLF", "Yunlg", "pm2 r", "?q=", "file/", "yudzA", " & 72", "subz ", "WADgh", "BbAVK", "nQeQV", "JWXen", "UvrZG", "PdZXM", "\n▫️🕵️‍♂️ *", "nkWUu", "aAsuk", "PKdXn", "HUJpc", "ory", "080", "oxZPn", "ldfAg", "lJZoC", "pmASb", "File ", "ytxms", "NfGhI", "inclu", "fpZdu", "iLvQe", "ɪᴘᴛɪᴏ", "JkXMj", "awNOn", "kuUPl", "yGITo", " vali", "gpRsJ", "b < M", "HxroC", "ipPSJ", "𝗛 𝗔 〽️", "GIHDE", "CMeDx", "AdZvs", "EPmgH", "oocaZ", "fileN", "TLIkT", "Zrfga", "xvfrq", "cheer", "tion-", "hOOYe", "om]*", "TcXQX", "mg.cc", "loadL", "DjBnR", "cines", "rows", "zdCuE", "vWhRu", "IFzGL", "TbDzk", "DHeix", "vie/f", "KBAAh", "zDPEI", "WERED", "HAEom", "KaIlc", "IKsKL", "glish", "des", "vie/m", "ovies", "rt th", " 𝗦 𝗜 ", "1080", "nt-le", "KmUuN", "JIaKo", "3Z\n*➟", "estar", "pko", "zqtkR", "GaytL", "sinha", "cahBT", "CnpVo", "*(?:[", "butto", "KZlCL", " 𝗔 ㋡❯", "oJJsT", "vie :", "ile p", "xtInf", "KivII", "JhuFU", "❌ Ple", "mbddc", "සි සම", "★*\n\n☘️", "hA6c3", "\n\n🚩 *", "ality", "ZykQP", "〽️ 𝗢 𝗩", "k/mov", "QIEaz", "ᴛᴇ :*", "iaiUH", " 480p", "360p", "://fi", "pIrHH", "spxKc", ".isai", "r dow", "yiBtu", "k-yas", "IVoOw", "mdc ", "gkHmD", "rPpkY", "links", "NCyNS", "OWifT", "tvsho", ".sinh", "o]*", "zmJSQ", "PDxyi", "kYBUd", "t no ", ".Gini", "HryVJ", "CfiaQ", "NCDlp", "*  ", "API r", "ngtOS", "PWUwC", "JTwGv", "ownlo", "xyntt", "qoLbX", "JycnX", "able ", "mage", "SkWJC", "r you", "NWMQT", "t.me", "* wha", "body", "sourc", "mrRxH", "BxoKW", "is\")(", "ɪᴛʜᴀ-", "xBNnD", "no mo", "relea", "eXLJL", "BGZLS", "cQoYy", "Unkno", "rsist", "𝗜 𝗘❯⏤͟͞", "type", "etail", "s.mx/", "KDAGu", "diQNw", "swROn", "JVtdj", "oKhzh", "ugJUC", "e or ", "firem", "wHeHQ", "link ", "awadl", "iFTLI", ".....", "jqWXO", "SITHA", "GUbYG", "IkSfD", "your ", "RfCIv", "JnhvQ", "wjKII", "➟➟*", "oNtYj", "ytmx ", "GoqGx", "setIn", "yKFdY", "ඳින් ", "k/tvs", "nk108", "3796dwPSfO", "blqbs", "gger", "ow හැ", "inks", "durat", "mJmYW", "how?u", "\\+\\+ ", "ꜱᴇ Dᴀ", "nload", "JjTsV", "ᴀꜱᴇ D", "Data", "Qskor", "ᴏɴ :*", "mKXMe", "aiTwo", "lzIAn", "duxZi", "lgxqg", "eHaPD", "mNZNH", "ykiYk", "ɴ :* ", "bjcvh", " ]*", "Tbvei", "278574pcRmuX", "?text", "JRzIC", "rgLvL", "qadip", "jVSXL", "b/isa", "VWyHD", "ZXGyC", "ZWEpJ", "DkPYo", "n() ", "SKNDE", "> *PO", "FwXjN", "retur", "WdOuM", "updat", "hOfSl", "itels", "PmOor", "☘️ *Tɪ", "NNNot", "xqzNU", "ʀᴅꜱ :", "dXkEL", "WLiQk", "xonuQ", "aladu", "YPPEH", "qKQhH", "GNFmI", "ledDo", "for y", " 𝗜 𝗘❯", "BholN", "NijSh", "aeJqu", ".awa ", "nHUxU", "ta fo", "dpSiJ", "nks'", "TfjWf", "clSwY", ".ytxm", "test", "ꜱ :* ", "ubULQ", "liMAB", "mdrne", "IOqDk", "ie.js", "whZGC", "fkKMm", "JGvTv", "https", "vie", "zTYud", "GgciA", "JAaYU", "count", "or in", "ls?ur", "oiEPv", "PAQAS", "DOjbs", "ad?ur", "OgTRj", "title", "load.", "lasub", "TTPWw", ": Mis", "zsFrh", "ා තිය", "DRLdz", "inks ", "WtGZU", "h?q=", "KaLxz", "seShO", "wzDhW", "mMgpi", "KvzHg", "tails", "://si", "I res", "el/00", "fBeQB", "MVhaJ", "MxBMq", "were ", "EDrbh", "KvAmK", "tXJUh", "e-ill", "opesl", "Oifvy", "itles", "EncuE", "ub9.c", "10902", "lPKYx", "Dnztf", "vvHuR", "mainI", "dKOFI", "zOIkk", "OJrmc", "QxIBs", "vHJiV", "DQNtd", "rwpyD", "OFMWa", "bais ", "onNmY", "ʟᴇ :*", "No Mo", "MHrgV", "NRBpR", "LcsOv", "ion *", "iYBXb", "OnUZD", "RDOzR", "hows", "vie/t", "IvbHE", "Yqbcv", "R:* U", "90618aCplbr", "for s", "JClfU", "No Te", "video", "McWGf", "rn th", ".anim", "ing", "*Subt", "KsZQJ", "elow ", "mand", "free", "te/mo", "KAJcS", "Dᴜʀᴀᴛ", "Xxusg", "filen", "ibtuZ", "exHdw", "or: ", "ot fo", "jtuXh", "inhal", "𝗔 〽️ 𝗢", "nawKo", "buwyJ", "ODdTk", "BRboM", "FlCwa", "ACefy", "< Mov", "zDGWS", "ShxoV", "htqZo", "ngth", "MyHne", "sLvGc", "SpPrQ", "tDown", "LTDLp", "b/com", "uMfdS", "://ww", " deta", "carto", "JQlBB", "HxRRH", "𝗦 𝗜 𝗧", "qTwmt", "ie?ur", "spons", "CxyqD", "ctBVO", "lTdAI", "hTNCp", "් එකේ", "720p,", "➟➟➟*", "RLBvy", "url=", "LuqxW", "N/A", "PwILg", "../pa", "aAgvM", "rlVuV", "size2", "tor", "hgjgR", "hDjQB", "❗ කරු", "TLlac", "qzhRg", "umber", "jntSg", "me pl", "FKkZZ", "mil ]", "\n\n▫️📅 ", ":* ", "els/d", "OFyPf", "dDjni", "ayRPG", "ඟ & 7", "cZALK", "bFxeV", "WmWlT", "succe", "xJmlG", "MCDyW", "\n\n*➟➟", "nxyzY", "ub.co", "vtoYi", "qVVFL", "setti", "zipLi", "l/002", "u/sea", "DsUWz", "se is", "chann", ".sub ", "data", "iscop", "jAVni", "nurl", "rxjPf", "sdk", "OYUQr", "720p", "/api/", "op/mo", "t]*", "XmvST", "ie.co", "VWkQa", "JlqDq", "bUZUw", " your", "NhRfB", "XXehy", "a-zA-", "DWQqN", "oLqhe", "aBXGF", "nHCEu", "GTdYA", "ror o", "TfzZt", "ieshu", "irect", "mddcc", "qWxPj", "ᴛᴏʀ :", "SPjDn", "vedkB", "IwtHd", "qizLw", "Msg", "2/lis", "hEcjv", "pt ka", "hrfON", "Lgbsv", "BSKkm", "fileS", "iuDTY", "VYAXu", "debu", "ZHUZm", "unHqW", "/mp4", "SroEx", "WvrxE", "aIsCG", "reply", "dKwio", "Akpsn", "b <Mo", "*⏤͟͟͞͞★❮", "JovnV", "input", "JRoyX", "NtSfU", "wOBlU", "No do", ".com/", "n (fu", "sing "];
  _0x4e5b = function () {
    return _0x3b60c2;
  };
  return _0x4e5b();
}
function _0x1d30fb(_0x20549b, _0x2159a7, _0xeb15e5, _0x4f288c, _0x4dea08) {
  return _0x4080(_0x4f288c + 354, _0x4dea08);
}
_0xaad77a.filename = __filename;
cmd(_0xaad77a, async (_0xff6abe, _0x482dbc, _0x2465e4, {
  from: _0x5f1b27,
  quoted: _0x3cd4c8,
  l: _0x4e99d0,
  body: _0x2db458,
  isCmd: _0x2a6547,
  command: _0x49b986,
  args: _0x5bed94,
  q: _0x11ea24,
  prefix: _0x57112b,
  isGroup: _0xd2c365,
  sender: _0x44b4e6,
  reply: _0x395c0c
}) => {
  try {
    const _0x5e6928 = await fetchJson(baseUrl2 + "/api/sinhaladub/movie/download?url=" + _0x11ea24);
    const _0x234dbe = _0x5e6928[0];
    if (!_0x234dbe) {
      throw new Error("Movie details not found!");
    }
    let _0x52426b = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x234dbe?.["title"] ?? "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*";
    let _0x528ac9 = _0x234dbe?.["image"] || "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg";
    const _0x71b728 = {
      url: _0x528ac9
    };
    const _0x29347b = {
      image: _0x71b728,
      caption: _0x52426b
    };
    const _0x1aba7c = {
      quoted: _0x482dbc
    };
    await _0xff6abe.sendMessage(_0x5f1b27, _0x29347b, _0x1aba7c);
    const _0x4385c6 = _0x234dbe?.["download"] || [];
    if (!_0x4385c6.length) {
      throw new Error("No download links found!");
    }
    var _0x3b9cc7 = [];
    for (var _0x73c6d6 = 0; _0x73c6d6 < _0x4385c6.length; _0x73c6d6++) {
      _0x3b9cc7.push({
        title: _0x73c6d6 + 1,
        description: "720p " + _0x4385c6[_0x73c6d6].fileSize + " " + "\n" + ("" + _0x4385c6[_0x73c6d6].link),
        rowId: _0x57112b + "dbl " + _0x4385c6[_0x73c6d6].link + " & " + (_0x234dbe?.["title"] ?? "Null") + " & 720p & " + _0x528ac9
      });
    }
    const _0x281976 = {
      title: "",
      rows: _0x3b9cc7
    };
    const _0x3b2a0e = [_0x281976];
    const _0x34c834 = {
      text: "",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0x3b2a0e
    };
    const _0x19eaaf = {
      quoted: _0x482dbc
    };
    return await _0xff6abe.replyList(_0x5f1b27, _0x34c834, _0x19eaaf);
  } catch (_0x3b7531) {
    console.error("Error occurred:", _0x3b7531.message);
    _0x395c0c("An error occurred while processing your request.");
  }
});
const _0x396052 = {
  pattern: "isaiden",
  react: "🎥",
  desc: "Download movie for isaidub9.com",
  category: "movie",
  use: ".isaid <Movie Name>",
  filename: __filename
};
cmd(_0x396052, async (_0x2f65e0, _0x196476, _0x5a783a, {
  from: _0x99b8f4,
  sender: _0x118f59,
  prefix: _0x422cd2,
  quoted: _0x1955fb,
  q: _0x44c77b,
  reply: _0x14d66b
}) => {
  try {
    if (!_0x44c77b) {
      return _0x14d66b("❌ Please provide a query.");
    }
    const _0x1bec50 = await getMoviesIsaiduben(_0x44c77b, 10);
    console.log(_0x1bec50);
    if (!_0x1bec50) {
      return _0x14d66b("no movie .");
    }
    var _0x1a08f0 = [];
    for (var _0x420792 = 0; _0x420792 < _0x1bec50.length; _0x420792++) {
      _0x1a08f0.push({
        title: _0x420792 + 1,
        description: _0x1bec50[_0x420792].title + "\n",
        rowId: _0x422cd2 + "dbl " + (_0x1bec50[_0x420792].downloadUrls?.["720p"] || _0x1bec50[_0x420792].downloadUrls?.["360p"] || "no") + " & " + _0x1bec50[_0x420792].title + " & 720p"
      });
    }
    const _0xaeef2 = [{
      title: "*[Results from isaidub9.com]*\n",
      rows: _0x1a08f0
    }];
    const _0x4f679a = {
      text: "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 Entered Name || " + _0x44c77b,
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0xaeef2
    };
    const _0x40e3b5 = {
      quoted: _0x196476
    };
    return await _0x2f65e0.replyList(_0x99b8f4, _0x4f679a, _0x40e3b5);
  } catch (_0x361a9d) {
    console.error(_0x361a9d);
    _0x14d66b("No Movie");
  }
});
const _0x7c7ad3 = {
  pattern: "isaidta",
  react: "🎥",
  desc: "Download movie for isaidub9.com",
  category: "movie",
  use: ".isaid <Movie Name>",
  filename: __filename
};
cmd(_0x7c7ad3, async (_0x56e717, _0x46c030, _0x34c5ef, {
  from: _0x276b03,
  sender: _0x2d1819,
  prefix: _0x5342cc,
  quoted: _0x36f845,
  q: _0x512f32,
  reply: _0x5a0283
}) => {
  try {
    if (!_0x512f32) {
      return _0x5a0283("❌ Please provide a query.");
    }
    const _0x5491a7 = await getMoviesIsaidubta(_0x512f32, 10);
    console.log(_0x5491a7);
    if (!_0x5491a7) {
      return _0x5a0283("no movie .");
    }
    const _0x393273 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x5b8b63 = _0x393273.footer;
    var _0x46f473 = [];
    for (var _0x170e02 = 0; _0x170e02 < _0x5491a7.length; _0x170e02++) {
      _0x46f473.push({
        title: _0x170e02 + 1,
        description: _0x5491a7[_0x170e02].title + "\n",
        rowId: _0x5342cc + "dbl " + (_0x5491a7[_0x170e02].downloadUrls?.["720p"] || _0x5491a7[_0x170e02].downloadUrls?.["360p"] || "no") + " & " + _0x5491a7[_0x170e02].title + " & 720p"
      });
    }
    const _0x329429 = [{
      title: "*[Results from isaidub9.com]*\n",
      rows: _0x46f473
    }];
    const _0x2f9266 = {
      text: "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 Entered Name || " + _0x512f32,
      footer: _0x5b8b63 || "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0x329429
    };
    const _0x11613e = {
      quoted: _0x46c030
    };
    return await _0x56e717.replyList(_0x276b03, _0x2f9266, _0x11613e);
  } catch (_0x448791) {
    console.error(_0x448791);
    _0x5a0283("No Movie");
  }
});
const _0x4585df = {
  pattern: "sub",
  react: "🎥",
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".sub < Movie Name >",
  filename: __filename
};
cmd(_0x4585df, async (_0x113191, _0x23f086, _0x5f296f, {
  from: _0x3e5824,
  sender: _0x2ae4cf,
  prefix: _0x47c5d2,
  quoted: _0x5a628e,
  q: _0x312bce,
  reply: _0x1a8844
}) => {
  try {
    const _0x1a327f = await fetchJson(baseUrl + "/api/cineru/search?q=" + _0x312bce + "&apikey=asitha108");
    let _0x50ccae = _0x1a327f.data.data.data;
    var _0x28dbb8 = [];
    for (var _0x36a189 = 0; _0x36a189 < _0x50ccae.length; _0x36a189++) {
      _0x28dbb8.push({
        title: _0x36a189 + 1,
        description: _0x50ccae[_0x36a189].title + "\n",
        rowId: _0x47c5d2 + "pqr " + _0x50ccae[_0x36a189].link
      });
    }
    const _0xae397f = {
      title: "*[Results from cineru.lk]*",
      rows: _0x28dbb8
    };
    const _0x82d7bf = [_0xae397f];
    const _0x3080c8 = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x312bce + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x82d7bf
    };
    const _0x586d81 = {
      quoted: _0x23f086
    };
    return await _0x113191.replyList(_0x3e5824, _0x3080c8, _0x586d81);
  } catch (_0x5d93d3) {
    console.log(_0x5d93d3);
    _0x1a8844("*ERROR !!*");
  }
});
const _0x2e384c = {
  pattern: "pqr",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x2e384c, async (_0x5e93fc, _0x1fcd3c, _0x4e2eb5, {
  from: _0x2d75df,
  quoted: _0x4bae05,
  l: _0x98cdb8,
  body: _0xbac582,
  isCmd: _0x1076fe,
  command: _0x13ad56,
  args: _0x13fe2e,
  q: _0x19ad2a,
  prefix: _0x3ac9ea,
  isGroup: _0x574ded,
  sender: _0x2304ca,
  senderNumber: _0x404b34,
  botNumber2: _0x189cea,
  botNumber: _0x4f90e7,
  pushname: _0x35503d,
  isMe: _0x4aaadb,
  isOwner: _0x2ab536,
  groupMetadata: _0x3c59b0,
  groupName: _0x3bae0d,
  participants: _0x317260,
  groupAdmins: _0x21ad63,
  isBotAdmins: _0x4e7e21,
  isAdmins: _0x2bd845,
  reply: _0x31103d
}) => {
  try {
    const _0x4fc7f0 = await fetchJson(baseUrl + "/api/cineru/movie_episode?url=" + _0x19ad2a + "&apikey=asitha108");
    const _0x30b733 = _0x4fc7f0.data.data.movieData;
    const _0x3fd57f = {
      url: _0x30b733.zipLink
    };
    const _0x2e159d = {
      document: _0x3fd57f,
      caption: "\n" + _0x30b733.title + "\n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      mimetype: "application/zip",
      fileName: "🎬ASITHA-MD🎬 " + _0x30b733.title + ".zip"
    };
    const _0x225bbc = {
      quoted: _0x1fcd3c
    };
    await _0x5e93fc.sendMessage(_0x2d75df, _0x2e159d, _0x225bbc);
  } catch (_0x17bda9) {
    console.log(_0x17bda9);
    _0x31103d(_0x17bda9);
  }
});
const _0x5ee5f9 = {
  pattern: "baisco",
  react: "🎥",
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".baisco < Movie Name >",
  filename: __filename
};
cmd(_0x5ee5f9, async (_0x10895a, _0xa2551c, _0x11d161, {
  from: _0x4a64b4,
  sender: _0x1f8ae1,
  prefix: _0x55b782,
  quoted: _0xd9efff,
  q: _0x244634,
  reply: _0x10694e
}) => {
  try {
    if (!_0x244634) {
      return await _0x10694e("Movie name please!");
    }
    const _0x3a6e7c = await fetchJson(baseUrl2 + "/api/baiscop/movie/search?q=" + _0x244634);
    var _0x3d01e4 = [];
    for (var _0x82e2bc = 0; _0x82e2bc < _0x3a6e7c.length; _0x82e2bc++) {
      _0x3d01e4.push({
        title: _0x82e2bc + 1,
        description: _0x3a6e7c[_0x82e2bc].title + "\n",
        rowId: _0x55b782 + "bais " + _0x3a6e7c[_0x82e2bc].link
      });
    }
    const _0x240ed9 = [{
      title: "*[Results from baiscop.lk]*\n",
      rows: _0x3d01e4
    }];
    const _0x6ce19e = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x244634 + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x240ed9
    };
    const _0x11e18b = {
      quoted: _0xa2551c
    };
    return await _0x10895a.replyList(_0x4a64b4, _0x6ce19e, _0x11e18b);
  } catch (_0x24f01a) {
    console.error(_0x24f01a);
    await _0x10694e("*ERROR !!*\n\n🚩 *Details:*\n" + (_0x24f01a.message || _0x24f01a) + "\n\n📩 If this error persists, please check your API endpoints or input.");
  }
});
const _0x2c2016 = {
  pattern: "bais",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x2c2016, async (_0x2da430, _0x5a5837, _0x2a2c65, {
  from: _0x1b5ceb,
  quoted: _0x4a456a,
  l: _0x5927d0,
  body: _0x16330e,
  isCmd: _0x5714fc,
  command: _0x11bfe0,
  args: _0x181bf6,
  q: _0x55fa74,
  prefix: _0x93534a,
  isGroup: _0x25d1ca,
  sender: _0xa82835,
  reply: _0x1e422a
}) => {
  try {
    if (_0x55fa74.includes("https://baiscopes.lk/tvshows")) {
      const _0x18b410 = {
        text: "*තාම Tv Show හැදුවේ නෑ* "
      };
      const _0x37cf10 = {
        quoted: _0x5a5837
      };
      await _0x2da430.sendMessage(_0x1b5ceb, _0x18b410, _0x37cf10);
      return;
    }
    if (_0x55fa74.includes("https://baiscopes.lk/movies")) {
      const _0x16ab5e = await fetchJson(baseUrl2 + "/api/baiscop/movie/details?url=" + _0x55fa74);
      if (!_0x16ab5e) {
        throw new Error("Movie details not found!");
      }
      let _0x39accd = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x16ab5e?.["title"] ?? "Null") + "\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x16ab5e?.["dateCreated"] ?? "Null") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x16ab5e?.["country"] ?? "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x16ab5e?.["runtime"] ?? "Null") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x16ab5e?.["director"] ?? "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x16ab5e?.["cast"]?.["length"] > 0 ? _0x16ab5e.cast.map(_0x5504cc => _0x5504cc.actorName).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*";
      let _0xa6faa9 = _0x16ab5e?.["imageUrl"] || "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg";
      const _0x2b78dd = {
        url: _0xa6faa9
      };
      const _0x4e61e1 = {
        image: _0x2b78dd,
        caption: _0x39accd
      };
      const _0x2da73e = {
        quoted: _0x5a5837
      };
      await _0x2da430.sendMessage(_0x1b5ceb, _0x4e61e1, _0x2da73e);
      const _0x2f7309 = _0x16ab5e?.["detailedDownlink"] || [];
      if (!_0x2f7309.length) {
        throw new Error("No download links found!");
      }
      const _0x280a35 = _0x2f7309.find(_0x47c6f4 => _0x47c6f4?.["link"]?.["includes"]("t.me"))?.["link"] || "No Telegram link found";
      const _0x1f6f7b = _0x2f7309.find(_0x4b1a85 => _0x4b1a85?.["link"]?.["includes"]("baiscopeslk"))?.["link"] || "No Direct link found";
      const _0x296843 = _0x2f7309[0]?.["size"] || "Null";
      const _0x23d5eb = _0x2f7309[0]?.["quality"] || "Null";
      const _0x754a9d = [{
        title: "",
        rows: [{
          title: "1",
          rowId: _0x93534a + "dbl " + _0x280a35 + (" & " + (_0x16ab5e?.["title"] ?? "Null") + " & " + _0x23d5eb + _0x296843 + " & " + _0xa6faa9),
          description: "Telegram " + _0x23d5eb + " :- " + _0x296843
        }, {
          title: "2",
          rowId: _0x93534a + "dbl " + _0x1f6f7b + (" & " + (_0x16ab5e?.["title"] ?? "Null") + " & " + _0x23d5eb + " " + _0x296843 + " & " + _0xa6faa9),
          description: "Direct " + _0x23d5eb + " :- " + _0x296843
        }]
      }];
      const _0x462de5 = {
        text: "Choose your download link:",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
        buttonText: "*🔢 Reply below number*",
        sections: _0x754a9d
      };
      const _0x2330f3 = {
        quoted: _0x5a5837
      };
      return await _0x2da430.replyList(_0x1b5ceb, _0x462de5, _0x2330f3);
    }
  } catch (_0x3f175f) {
    console.error("Error occurred:", _0x3f175f.message);
    _0x1e422a("An error occurred while processing your request.");
  }
});
const _0x250248 = {
  pattern: "sinhalasub",
  react: "🎥",
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".sinhalasub < Movie Name >",
  filename: __filename
};
cmd(_0x250248, async (_0x21cadc, _0x2d76a1, _0x3a7646, {
  from: _0x2801ea,
  sender: _0x14270c,
  prefix: _0xa1f5af,
  quoted: _0x1f8845,
  q: _0x10c4d8,
  reply: _0x486d64
}) => {
  try {
    if (!_0x10c4d8) {
      return await _0x486d64("Movie name please!");
    }
    const _0x413902 = await fetchJson(baseUrl + "/api/sinhalasubs/search?q=" + _0x10c4d8 + "&apikey=asitha108");
    let _0x3554c5 = _0x413902.data.data.data;
    var _0xa99aae = [];
    for (var _0x381e5a = 0; _0x381e5a < _0x3554c5.length; _0x381e5a++) {
      _0xa99aae.push({
        title: _0x381e5a + 1,
        description: _0x3554c5[_0x381e5a].title + "\n",
        rowId: _0xa1f5af + "mpp " + _0x3554c5[_0x381e5a].link
      });
    }
    const _0x2dae4e = [{
      title: "*[Results from sinhalasub.lk]*\n",
      rows: _0xa99aae
    }];
    const _0x2bb5fd = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x10c4d8 + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x2dae4e
    };
    const _0x22f6ae = {
      quoted: _0x2d76a1
    };
    return await _0x21cadc.replyList(_0x2801ea, _0x2bb5fd, _0x22f6ae);
  } catch (_0x46f8c3) {
    console.error(_0x46f8c3);
    await _0x486d64("*ERROR !!*\n\n🚩 *Details:*\n" + (_0x46f8c3.message || _0x46f8c3) + "\n\n📩 If this error persists, please check your API endpoints or input.");
  }
});
const _0x4cd885 = {
  pattern: "mpp",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x4cd885, async (_0x3ac03d, _0x239243, _0x4a67d5, {
  from: _0x38f0fa,
  quoted: _0x2d2036,
  l: _0x10a5dd,
  body: _0x47ca01,
  isCmd: _0x2d200b,
  command: _0x5bb0b4,
  args: _0x44a737,
  q: _0x479ac8,
  prefix: _0x47abf6,
  isGroup: _0x33c967,
  sender: _0x1a6a55,
  senderNumber: _0x46bb6e,
  botNumber2: _0x26d5c9,
  botNumber: _0x1e5a9b,
  pushname: _0x2a9df7,
  isMe: _0x439ab7,
  isOwner: _0x2ed406,
  groupMetadata: _0x513e3c,
  groupName: _0x3c4a5c,
  participants: _0x52fb98,
  groupAdmins: _0x48c211,
  isBotAdmins: _0x2ae3f4,
  isAdmins: _0xddee2f,
  reply: _0x56769e
}) => {
  try {
    if (_0x479ac8.includes("https://sinhalasub.lk/tvshows")) {
      const _0x7bc8ae = await fetchJson(baseUrl + "/api/sinhalasubs/tvshow?url=" + _0x479ac8 + "&apikey=asitha108");
      let _0x17d15d = _0x7bc8ae.data.data.episodesDetails.flatMap(_0x4b7b5f => _0x4b7b5f.episodes.map(_0x3236fc => ({
        title: _0x3236fc.number + " - " + _0x3236fc.title,
        link: _0x3236fc.url
      })));
      var _0x2c870c = [];
      for (var _0x443147 = 0; _0x443147 < _0x17d15d.length; _0x443147++) {
        _0x2c870c.push({
          title: _0x443147 + 1,
          description: _0x17d15d[_0x443147].title + "\n",
          rowId: _0x47abf6 + "mddccc " + _0x17d15d[_0x443147].link + (" & " + _0x17d15d[_0x443147].title + " & " + (_0x7bc8ae?.["data"]?.["data"]?.["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"))
        });
      }
      const _0x814fa5 = [{
        title: "*[Results from sinhalasub.lk]*\n",
        rows: _0x2c870c
      }];
      const _0x1194d0 = {
        text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + (_0x7bc8ae?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★**",
        title: "",
        buttonText: "*🔢 Reply below number*\n",
        sections: _0x814fa5
      };
      let _0x4065ee = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x7bc8ae?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x7bc8ae?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x7bc8ae?.["data"]?.["data"]?.["mainDetails"]?.["genres"]?.["length"] > 0 ? _0x7bc8ae.data.data.mainDetails.genres.join(", ") : _0x7bc8ae?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x7bc8ae.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x7bc8ae?.["data"]?.["data"]?.["castDetails"]?.["cast"]?.["length"] > 0 ? _0x7bc8ae.data.data.castDetails.cast.map(_0x49ec7 => _0x49ec7.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n";
      const _0x196fd5 = {
        url: _0x7bc8ae?.["data"]?.["data"]?.["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x43e956 = {
        image: _0x196fd5,
        caption: _0x4065ee
      };
      const _0x54a516 = {
        quoted: _0x239243
      };
      await _0x3ac03d.sendMessage(_0x38f0fa, _0x43e956, _0x54a516);
      const _0x464826 = {
        quoted: _0x239243
      };
      return await _0x3ac03d.replyList(_0x38f0fa, _0x1194d0, _0x464826);
    }
    if (_0x479ac8.includes("https://sinhalasub.lk/movies")) {
      const _0x1cd4dd = await fetchJson(baseUrl + "/api/sinhalasubs/movie?url=" + _0x479ac8 + "&apikey=asitha108");
      let _0x27ff16 = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] ?? "Null") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["country"] ?? "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["runtime"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["moviedata"]?.["genres"]?.["length"] > 0 ? _0x1cd4dd.data.data.moviedata.genres.join(", ") : _0x1cd4dd?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x1cd4dd.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["moviedata"]?.["director"] ?? "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x1cd4dd?.["data"]?.["data"]?.["moviedata"]?.["cast"]?.["length"] > 0 ? _0x1cd4dd.data.data.moviedata.cast.map(_0x828a84 => _0x828a84.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟* ";
      let _0x137494 = _0x1cd4dd?.["data"]?.["data"]["moviedata"]?.["imageUrls"][0];
      let _0x4cedb7 = _0x137494.replace(/\n/g, "");
      const _0x1adbb0 = {
        quoted: _0x239243
      };
      await _0x3ac03d.sendMessage(_0x38f0fa, {
        image: {
          url: _0x4cedb7 ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
        },
        caption: _0x27ff16
      }, _0x1adbb0);
      if (!_0x1cd4dd?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
        throw new Error("Invalid response structure or missing 'directDownloadLinks'");
      }
      const _0x3b16eb = _0x1cd4dd.data.data.dllinks.directDownloadLinks.filter(_0x52d41a => _0x52d41a.id === "download" && _0x52d41a.quality.includes("480")).map(_0x50bb9b => _0x50bb9b.link) || [];
      const _0x5f19c8 = _0x1cd4dd.data.data.dllinks.directDownloadLinks.filter(_0x35f8fc => _0x35f8fc.id === "download" && _0x35f8fc.quality.includes("720")).map(_0x210835 => _0x210835.link) || [];
      const _0x250327 = _0x1cd4dd.data.data.dllinks.directDownloadLinks.filter(_0x14d174 => _0x14d174.id === "download" && _0x14d174.quality.includes("1080")).map(_0x85908f => _0x85908f.link) || [];
      if (!_0x3b16eb[0] && !_0x5f19c8[0] && !_0x250327[0]) {
        throw new Error("No valid download links found for any quality");
      }
      const _0x492417 = _0x3b16eb[0] ? await fetchJson(baseUrl + "/api/sinhalasubs/download?url=" + _0x3b16eb[0] + "&apikey=asitha108") : null;
      const _0x269e1a = _0x5f19c8[0] ? await fetchJson(baseUrl + "/api/sinhalasubs/download?url=" + _0x5f19c8[0] + "&apikey=asitha108") : null;
      const _0x242c89 = _0x250327[0] ? await fetchJson(baseUrl + "/api/sinhalasubs/download?url=" + _0x250327[0] + "&apikey=asitha108") : null;
      const _0x17e984 = _0x1cd4dd?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x4da72f => _0x4da72f.quality.includes("480"))?.["size"] || "Null";
      const _0x4f635b = _0x1cd4dd?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x56d8ac => _0x56d8ac.quality.includes("720"))?.["size"] || "Null";
      const _0x15b942 = _0x1cd4dd?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x485e15 => _0x485e15.quality.includes("1080"))?.["size"] || "Null";
      const _0x5b5d48 = _0x492417?.["data"]?.["data"]?.["link"] || "Null";
      const _0x14a761 = _0x269e1a?.["data"]?.["data"]?.["link"] || "Null";
      const _0x179296 = _0x242c89?.["data"]?.["data"]?.["link"] || "Null";
      const _0xe3378a = {
        links480: _0x5b5d48,
        size480: _0x17e984,
        links720: _0x14a761,
        size720: _0x4f635b,
        links1080: _0x179296,
        size1080: _0x15b942
      };
      console.log(_0xe3378a);
      const _0x5be21a = [{
        title: "",
        rows: [{
          title: "1",
          rowId: _0x47abf6 + "dbl " + _0x5b5d48 + (" & " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " & 480p & " + _0x4cedb7),
          description: " 480p :- " + _0x17e984
        }, {
          title: "2",
          rowId: _0x47abf6 + "dbl " + _0x14a761 + (" & " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " & 720p & " + _0x4cedb7),
          description: " 720p :- " + _0x4f635b
        }, {
          title: "3",
          rowId: _0x47abf6 + "dbl " + _0x179296 + (" & " + (_0x1cd4dd?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " & 1080p & " + _0x4cedb7),
          description: " 1080p :- " + _0x15b942
        }]
      }];
      const _0x4674b1 = {
        text: ".",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
        buttonText: "*🔢 Reply below number*",
        sections: _0x5be21a
      };
      const _0x17c68c = {
        quoted: _0x239243
      };
      return await _0x3ac03d.replyList(_0x38f0fa, _0x4674b1, _0x17c68c);
    }
  } catch (_0x203480) {
    _0x56769e("No Link");
    _0x10a5dd(_0x203480);
  }
});
const _0x2497c8 = {
  pattern: "mddccc",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x2497c8, async (_0xb5f39c, _0x3f0dc0, _0x17bf33, {
  from: _0x27754b,
  prefix: _0x2f078e,
  l: _0xdba8b5,
  quoted: _0x4d662d,
  body: _0x11c3fb,
  isCmd: _0x1684b2,
  command: _0x300303,
  args: _0x1de6d0,
  q: _0x12d447,
  isGroup: _0x5b4b07,
  sender: _0x4835a4,
  senderNumber: _0x42e182,
  botNumber2: _0x382f52,
  botNumber: _0x1ba560,
  pushname: _0x7d504b,
  isMe: _0x26b58e,
  isOwner: _0x54b4e4,
  groupMetadata: _0x415157,
  groupName: _0x40f4a1,
  participants: _0x30db02,
  groupAdmins: _0x3bb3dc,
  isBotAdmins: _0x548776,
  isAdmins: _0x1967c8,
  reply: _0x445cc5
}) => {
  try {
    const _0x57107e = _0x12d447.split(" & ")[0];
    const _0x1a77ab = _0x12d447.split(" & ")[1];
    const _0x47e566 = _0x12d447.split(" & ")[2];
    const _0x300408 = await fetchJson(baseUrl + "/api/sinhalasubs/episode?url=" + _0x57107e + "&apikey=asitha108");
    if (!_0x300408?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
      throw new Error("Invalid response structure or missing 'directDownloadLinks'");
    }
    const _0x3e97c6 = _0x300408.data.data.dllinks.directDownloadLinks.filter(_0x43a864 => _0x43a864.id === "download" && _0x43a864.quality.includes("480")).map(_0x31d166 => _0x31d166.link) || [];
    const _0x3eee59 = _0x300408.data.data.dllinks.directDownloadLinks.filter(_0x3f6b1e => _0x3f6b1e.id === "download" && _0x3f6b1e.quality.includes("720")).map(_0x4ce361 => _0x4ce361.link) || [];
    const _0x2b66f9 = _0x300408.data.data.dllinks.directDownloadLinks.filter(_0x23c526 => _0x23c526.id === "download" && _0x23c526.quality.includes("1080")).map(_0x5125ce => _0x5125ce.link) || [];
    if (!_0x3e97c6[0] && !_0x3eee59[0] && !_0x2b66f9[0]) {
      throw new Error("No download links found for any quality");
    }
    const _0x308642 = _0x3e97c6[0] ? await fetchJson(baseUrl + "/api/sinhalasubs/download?url=" + _0x3e97c6[0] + "&apikey=asitha108") : null;
    const _0x58b637 = _0x3eee59[0] ? await fetchJson(baseUrl + "/api/sinhalasubs/download?url=" + _0x3eee59[0] + "&apikey=asitha108") : null;
    const _0x24ad91 = _0x2b66f9[0] ? await fetchJson(baseUrl + "/api/sinhalasubs/download?url=" + _0x2b66f9[0] + "&apikey=asitha108") : null;
    const _0x2f1b7c = _0x300408?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x87d9e0 => _0x87d9e0.quality.includes("480"))?.["size"] || "Null";
    const _0x56884f = _0x300408?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x4717be => _0x4717be.quality.includes("720"))?.["size"] || "Null";
    const _0x19df0d = _0x300408?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]?.["find"](_0x227060 => _0x227060.quality.includes("1080"))?.["size"] || "Null";
    const _0x23ae79 = _0x308642?.["data"]?.["data"]?.["link"] || "Null";
    const _0x441f2f = _0x58b637?.["data"]?.["data"]?.["link"] || "Null";
    const _0x1eddc7 = _0x24ad91?.["data"]?.["data"]?.["link"] || "Null";
    const _0x129e12 = {
      links480: _0x23ae79,
      size480: _0x2f1b7c,
      links720: _0x441f2f,
      size720: _0x56884f,
      links1080: _0x1eddc7,
      size1080: _0x19df0d
    };
    console.log(_0x129e12);
    const _0x58d1ba = [{
      title: "",
      rows: [{
        title: "1",
        rowId: _0x2f078e + "dbl " + _0x23ae79 + (" & " + _0x1a77ab + " & 480p & " + _0x47e566),
        description: " 480p :- " + _0x2f1b7c
      }, {
        title: "2",
        rowId: _0x2f078e + "dbl " + _0x441f2f + (" & " + _0x1a77ab + " & 720p & " + _0x47e566),
        description: " 720p :- " + _0x56884f
      }, {
        title: "3",
        rowId: _0x2f078e + "dbl " + _0x1eddc7 + (" & " + _0x1a77ab + " & 1080p & " + _0x47e566),
        description: " 1080p :- " + _0x19df0d
      }]
    }];
    const _0x5e6c79 = {
      text: ".",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      buttonText: "*🔢 Reply below number*",
      sections: _0x58d1ba
    };
    const _0x3eb613 = {
      quoted: _0x3f0dc0
    };
    return await _0xb5f39c.replyList(_0x27754b, _0x5e6c79, _0x3eb613);
  } catch (_0x367563) {
    _0x445cc5(_0x367563);
    _0xdba8b5(_0x367563);
  }
});
const _0x22f787 = {
  pattern: "cinesubz",
  react: "🎥",
  alias: ["cz"],
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".cinesubz < Movie Name >",
  filename: __filename
};
cmd(_0x22f787, async (_0x15180e, _0x160f62, _0x1b7add, {
  from: _0x9d662c,
  sender: _0x5e7cb7,
  prefix: _0x2ce0c2,
  quoted: _0x530b29,
  q: _0x12d95f,
  reply: _0x1f3aa6
}) => {
  try {
    const _0x820424 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    const _0x4a01ab = await getPremiumUsers();
    const _0x1dcaf9 = _0x4a01ab.includes(_0x5e7cb7);
    let _0x56c618 = await free();
    if (!_0x1dcaf9 && !_0x56c618) {
      return _0x1f3aa6(_0x820424.pre_cmd);
    }
    if (!_0x12d95f) {
      return await _0x1f3aa6("Mv name plz");
    }
    const _0x188e90 = await fetchJson(baseUrl + "/api/cinesubz/search?q=" + _0x12d95f + "&apikey=asitha108");
    if (_0x188e90.data.data.datalength === 0) {
      return _0x1f3aa6("🚫 No movies found for your search query.");
    }
    let _0x58ec9c = _0x188e90.data.data.data;
    var _0x29d6a1 = [];
    for (var _0x304b38 = 0; _0x304b38 < _0x58ec9c.length; _0x304b38++) {
      _0x29d6a1.push({
        title: _0x304b38 + 1,
        description: _0x58ec9c[_0x304b38].title + "\n",
        rowId: _0x2ce0c2 + "mdc " + _0x58ec9c[_0x304b38].link
      });
    }
    const _0xd07f2f = [{
      title: "*[Results from cinesubz.co]*\n",
      rows: _0x29d6a1
    }];
    const _0x3bf7e3 = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x12d95f + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0xd07f2f
    };
    const _0x1e7453 = {
      quoted: _0x160f62
    };
    return await _0x15180e.replyList(_0x9d662c, _0x3bf7e3, _0x1e7453);
  } catch (_0x54bf57) {
    console.log(_0x54bf57);
    _0x1f3aa6("*ERROR !!*");
  }
});
const _0x556e94 = {
  pattern: "mdc",
  desc: "Check bot setting."
};
function _0x45bf39(_0xc11939, _0x1e7226, _0x7d41ce, _0x1c286a, _0xd4b961) {
  return _0x4080(_0x1e7226 - 0xd9, _0xd4b961);
}
_0x556e94.react = "🎬";
_0x556e94.filename = __filename;
cmd(_0x556e94, async (_0x5ca077, _0x4e73f, _0x5ee1ab, {
  from: _0x1cf833,
  l: _0x371cdb,
  quoted: _0x2e7c9c,
  body: _0x230a3f,
  isCmd: _0x238204,
  command: _0x15663b,
  args: _0x2f6076,
  q: _0xb967d,
  prefix: _0x454bbb,
  isGroup: _0x288413,
  sender: _0x5afdee,
  senderNumber: _0x6f744b,
  botNumber2: _0x5362b4,
  botNumber: _0x43f326,
  pushname: _0x3d7e8a,
  isMe: _0x4e2097,
  isOwner: _0x5ba513,
  groupMetadata: _0x2a1e85,
  groupName: _0x2fb2b2,
  participants: _0x522409,
  groupAdmins: _0x2f04e3,
  isBotAdmins: _0x3e5893,
  isAdmins: _0x1d9628,
  reply: _0x32a39e
}) => {
  try {
    const _0x206283 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    const _0x154a5d = await getPremiumUsers();
    const _0x2cb7d1 = _0x154a5d.includes(_0x5afdee);
    let _0x552b95 = await free();
    if (!_0x2cb7d1 && !_0x552b95) {
      return _0x32a39e(_0x206283.pre_cmd);
    }
    if (_0xb967d.includes("https://cinesubz.co/tvshows")) {
      const _0x38b2d0 = await fetchJson(baseUrl + "/api/cinesubz/tvshow?url=" + _0xb967d + "&apikey=asitha108");
      let _0xe4f766 = _0x38b2d0.data.data.episodesDetails.flatMap(_0x28364c => _0x28364c.episodes.map(_0x2593c9 => ({
        title: _0x2593c9.number + " - " + _0x2593c9.title,
        link: _0x2593c9.url
      })));
      var _0x30a167 = [];
      for (var _0x38e335 = 0; _0x38e335 < _0xe4f766.length; _0x38e335++) {
        _0x30a167.push({
          title: _0x38e335 + 1,
          description: _0xe4f766[_0x38e335].title + "\n",
          rowId: _0x454bbb + "mddc " + _0xe4f766[_0x38e335].link + (" & " + _0xe4f766[_0x38e335].title + " & " + (_0x38b2d0?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"))
        });
      }
      const _0x558840 = [{
        title: "*[Results from cinesubz.co]*\n",
        rows: _0x30a167
      }];
      const _0x3f8318 = {
        text: "\n*📽️ᴀꜱɪᴛʜᴀ-ᴍᴅ ᴄɪɴᴇᴍᴀ📽️*\n\n👽 *Entered Name ||* " + (_0x38b2d0?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
        title: "",
        buttonText: "*🔢 Reply below number*\n",
        sections: _0x558840
      };
      let _0x5168a2 = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x38b2d0?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x38b2d0?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x38b2d0?.["data"]?.["data"]?.["mainDetails"]?.["genres"]?.["length"] > 0 ? _0x38b2d0.data.data.mainDetails.genres.join(", ") : _0x38b2d0?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x38b2d0.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x38b2d0?.["data"]?.["data"]?.["castDetails"]?.["cast"]?.["length"] > 0 ? _0x38b2d0.data.data.castDetails.cast.map(_0x215fe5 => _0x215fe5.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n> *POWERED by ASITHA-MD*\n";
      const _0x3b2cf1 = {
        url: _0x38b2d0?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x2e97dc = {
        image: _0x3b2cf1,
        caption: _0x5168a2
      };
      const _0x74a61d = {
        quoted: _0x4e73f
      };
      await _0x5ca077.sendMessage(_0x1cf833, _0x2e97dc, _0x74a61d);
      const _0x4eb110 = {
        quoted: _0x4e73f
      };
      return await _0x5ca077.replyList(_0x1cf833, _0x3f8318, _0x4eb110);
    }
    if (_0xb967d.includes("https://cinesubz.co/movies")) {
      const _0x583b40 = await fetchJson(baseUrl + "/api/cinesubz/movie?url=" + _0xb967d + "&apikey=asitha108");
      let _0x5bc92d = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["dateCreated"] || "Null") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["country"] || "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["runtime"] || "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x583b40?.["data"]?.["data"]?.["moviedata"]?.["genres"]?.["length"] > 0 ? _0x583b40.data.data.moviedata.genres.join(", ") : _0x583b40?.["data"]?.["data"]["moviedata"]?.["tags"]?.["length"] > 0 ? _0x583b40.data.data.moviedata.tags.join(", ") : "Null") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x583b40?.["data"]?.["data"]?.["moviedata"]?.["director"] || "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x583b40?.["data"]?.["data"]?.["moviedata"]?.["cast"]?.["length"] > 0 ? _0x583b40.data.data.moviedata.cast.map(_0xd7be94 => _0xd7be94.name).join(", ") : "Null") + "\n▫️📃 *Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* " + (_0x583b40?.["data"]?.["data"]?.["moviedata"]?.["description"] || "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n";
      const _0x418b1c = {
        url: _0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x2ca614 = {
        image: _0x418b1c,
        caption: _0x5bc92d
      };
      const _0x5bf3dd = {
        quoted: _0x4e73f
      };
      await _0x5ca077.sendMessage(_0x1cf833, _0x2ca614, _0x5bf3dd);
      if (!_0x583b40?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
        throw new Error("Invalid API response: Missing \"directDownloadLinks\" in the response.");
      }
      const _0x4891df = _0x583b40.data.data.dllinks.directDownloadLinks?.["filter"](_0x20b037 => _0x20b037?.["quality"]?.["includes"]("480"))?.["map"](_0x567012 => _0x567012?.["link"]) || [];
      const _0x462b21 = _0x583b40.data.data.dllinks.directDownloadLinks?.["filter"](_0xee1ccc => _0xee1ccc?.["quality"]?.["includes"]("720"))?.["map"](_0x5ada0e => _0x5ada0e?.["link"]) || [];
      const _0x2c0719 = _0x583b40.data.data.dllinks.directDownloadLinks?.["filter"](_0x2f7978 => _0x2f7978?.["quality"]?.["includes"]("1080"))?.["map"](_0x1e4e5a => _0x1e4e5a?.["link"]) || [];
      if (_0x2c0719.length === 0 && _0x462b21.length === 0 && _0x4891df.length === 0) {
        throw new Error("API response is valid, but no download links available for 480p, 720p, or 1080p.");
      }
      const _0x216621 = _0x2c0719.length > 0 ? await fetchJson(baseUrl + "/api/cinesubz/download?url=" + _0x2c0719[0] + "&apikey=asitha108") : null;
      const _0x150947 = _0x462b21.length > 0 ? await fetchJson(baseUrl + "/api/cinesubz/download?url=" + _0x462b21[0] + "&apikey=asitha108") : null;
      const _0x19481b = _0x4891df.length > 0 ? await fetchJson(baseUrl + "/api/cinesubz/download?url=" + _0x4891df[0] + "&apikey=asitha108") : null;
      if (!_0x216621 && !_0x150947 && !_0x19481b) {
        throw new Error("API calls were successful, but failed to fetch valid data for all qualities.");
      }
      let _0x3ac27a = [];
      let _0x326745 = [];
      let _0x291095 = [];
      let _0x13872c = [];
      let _0x598217 = [];
      let _0x4e7b0b = [];
      if (_0x19481b?.["data"]?.["data"] !== "error") {
        _0x3ac27a = _0x19481b?.["data"]?.["data"]?.["filter"](_0x3ae119 => _0x3ae119?.["type"] === "direct")?.["map"](_0x4a619e => _0x4a619e?.["href"]) || [];
      }
      if (_0x150947?.["data"]?.["data"] !== "error") {
        _0x326745 = _0x150947?.["data"]?.["data"]?.["filter"](_0x4548b1 => _0x4548b1?.["type"] === "direct")?.["map"](_0x4b08ed => _0x4b08ed?.["href"]) || [];
      }
      if (_0x216621?.["data"]?.["data"] !== "error") {
        _0x291095 = _0x216621?.["data"]?.["data"]?.["filter"](_0xb6076 => _0xb6076?.["type"] === "direct")?.["map"](_0x5a966b => _0x5a966b?.["href"]) || [];
      }
      if (_0x19481b?.["data"]?.["data"] !== "error") {
        _0x13872c = _0x19481b?.["data"]?.["data"]?.["filter"](_0x73756b => _0x73756b?.["type"] === "gdrive")?.["map"](_0x1f803d => _0x1f803d?.["href"]) || [];
      }
      if (_0x150947?.["data"]?.["data"] !== "error") {
        _0x598217 = _0x150947?.["data"]?.["data"]?.["filter"](_0x197680 => _0x197680?.["type"] === "gdrive")?.["map"](_0x10e142 => _0x10e142?.["href"]) || [];
      }
      if (_0x216621?.["data"]?.["data"] !== "error") {
        _0x4e7b0b = _0x216621?.["data"]?.["data"]?.["filter"](_0x4a4dd4 => _0x4a4dd4?.["type"] === "gdrive")?.["map"](_0x1b53a4 => _0x1b53a4?.["href"]) || [];
      }
      const _0x1bc5f9 = _0x3ac27a[0] || "No direct link";
      const _0x1e54c1 = _0x326745[0] || "No direct link";
      const _0x493f69 = _0x291095[0] || "No direct link";
      const _0x4f7c99 = _0x13872c[0] ? await convertDownloadToViewLink(_0x13872c[0]) : "No gdrive link";
      const _0x4e5561 = _0x598217[0] ? await convertDownloadToViewLink(_0x598217[0]) : "No gdrive link";
      const _0x2f8be0 = _0x4e7b0b[0] ? await convertDownloadToViewLink(_0x4e7b0b[0]) : "No gdrive link";
      const _0x189a63 = _0x19481b?.["data"]?.["data"]?.[0]?.["fileSize"] || "Unknown";
      const _0x3df744 = _0x150947?.["data"]?.["data"]?.[0]?.["fileSize"] || "Unknown";
      const _0x4d51f7 = _0x216621?.["data"]?.["data"]?.[0]?.["fileSize"] || "Unknown";
      const _0x41f87e = {
        downloadlink480: _0x1bc5f9,
        downloadlink720: _0x1e54c1,
        downloadlink1080: _0x493f69,
        gdrive480p: _0x4f7c99,
        gdrive720p: _0x4e5561,
        gdrive1080p: _0x2f8be0,
        size: _0x189a63,
        size2: _0x3df744,
        size3: _0x4d51f7
      };
      console.log(_0x41f87e);
      const _0xfa29d0 = [{
        title: "*[Direct Link]*\n",
        rows: [{
          title: "1",
          rowId: _0x454bbb + "dbl " + _0x1bc5f9 + (" & " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " | සිංහල උපසිරැසි සමඟ & 480p & " + (_0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg")),
          description: " 480p :- " + _0x189a63
        }, {
          title: "2",
          rowId: _0x454bbb + "dbl " + _0x1e54c1 + (" & " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " | සිංහල උපසිරැසි සමඟ & 720p & " + (_0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg")),
          description: " 720p :- " + _0x3df744
        }, {
          title: "3",
          rowId: _0x454bbb + "dbl " + _0x493f69 + (" & " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " | සිංහල උපසිරැසි සමඟ & 1080p & " + (_0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg")),
          description: " 1080p :- " + _0x4d51f7
        }]
      }, {
        title: "*[Gdrive Direct Link]*\n",
        rows: [{
          title: "4",
          rowId: _0x454bbb + "dbl " + _0x4f7c99 + (" & " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " | සිංහල උපසිරැසි සමඟ & 480p & " + (_0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg")),
          description: " 480p :- " + _0x189a63
        }, {
          title: "5",
          rowId: _0x454bbb + "dbl " + _0x4e5561 + (" & " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " | සිංහල උපසිරැසි සමඟ & 720p & " + (_0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg")),
          description: " 720p :- " + _0x3df744
        }, {
          title: "6",
          rowId: _0x454bbb + "dbl " + _0x2f8be0 + (" & " + (_0x583b40?.["data"]?.["data"]?.["mainDetails"]?.["maintitle"] ?? "Null") + " | සිංහල උපසිරැසි සමඟ & 1080p & " + (_0x583b40?.["data"]?.["data"]["mainDetails"]?.["imageUrl"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg")),
          description: " 1080p :- " + _0x4d51f7
        }]
      }];
      const _0x5a07bf = {
        text: "*Download..*",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
        buttonText: "*🔢 Reply below number*",
        sections: _0xfa29d0
      };
      const _0x34727b = {
        quoted: _0x4e73f
      };
      return await _0x5ca077.replyList(_0x1cf833, _0x5a07bf, _0x34727b);
    }
  } catch (_0x2cfbde) {
    _0x32a39e("No Link");
    _0x371cdb(_0x2cfbde);
  }
});
const _0x4701d0 = {
  pattern: "mddc",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x4701d0, async (_0x3649ce, _0x49be4e, _0x4c6bb3, {
  from: _0x57efee,
  prefix: _0x16c67d,
  l: _0x1c2920,
  quoted: _0x5e4947,
  body: _0xa634bb,
  isCmd: _0x13fc7e,
  command: _0x1c8568,
  args: _0x30f97c,
  q: _0x4801ac,
  isGroup: _0x92bca1,
  sender: _0x3ecc02,
  senderNumber: _0x2721c0,
  botNumber2: _0x211f4c,
  botNumber: _0x19f0ce,
  pushname: _0x29fda5,
  isMe: _0x15c029,
  isOwner: _0x47e407,
  groupMetadata: _0x3cae72,
  groupName: _0x1b9df3,
  participants: _0x3c9ae2,
  groupAdmins: _0x4eede6,
  isBotAdmins: _0xbc1f98,
  isAdmins: _0x5b8632,
  reply: _0x599172
}) => {
  try {
    const _0x2f339b = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    const _0x979030 = await getPremiumUsers();
    const _0xadaf8d = _0x979030.includes(_0x3ecc02);
    let _0x4f3642 = await free();
    if (!_0xadaf8d && !_0x4f3642) {
      return _0x599172(_0x2f339b.pre_cmd);
    }
    const _0x24a5a8 = _0x4801ac.split(" & ")[0];
    const _0x445657 = _0x4801ac.split(" & ")[1];
    const _0x5c57b6 = _0x4801ac.split(" & ")[2];
    const _0x387414 = await fetchJson(baseUrl + "/api/cinesubz/episode?url=" + _0x24a5a8 + "&apikey=asitha108");
    if (!_0x387414?.["data"]?.["data"]?.["dllinks"]?.["directDownloadLinks"]) {
      throw new Error("Invalid response structure or missing download links");
    }
    const _0x1c7158 = _0x387414.data.data.dllinks.directDownloadLinks.filter(_0x46cdfb => _0x46cdfb.quality.includes("480")).map(_0x265a57 => _0x265a57.link) || [];
    const _0x151232 = _0x387414.data.data.dllinks.directDownloadLinks.filter(_0x27d158 => _0x27d158.quality.includes("720")).map(_0x64c91e => _0x64c91e.link) || [];
    const _0x234b79 = _0x387414.data.data.dllinks.directDownloadLinks.filter(_0x417cde => _0x417cde.quality.includes("1080")).map(_0x5e089d => _0x5e089d.link) || [];
    if (_0x1c7158.length === 0 && _0x151232.length === 0 && _0x234b79.length === 0) {
      throw new Error("No download links found for any quality");
    }
    const _0x307ae4 = _0x1c7158.length > 0 ? await fetchJson(baseUrl + "/api/cinesubz/download?url=" + _0x1c7158[0] + "&apikey=asitha108") : null;
    const _0x4b793a = _0x151232.length > 0 ? await fetchJson(baseUrl + "/api/cinesubz/download?url=" + _0x151232[0] + "&apikey=asitha108") : null;
    const _0x2e8fe3 = _0x234b79.length > 0 ? await fetchJson(baseUrl + "/api/cinesubz/download?url=" + _0x234b79[0] + "&apikey=asitha108") : null;
    const _0x2cd873 = _0x307ae4?.["data"]?.["data"]?.["filter"](_0x4f64d8 => _0x4f64d8.type === "direct")["map"](_0x30decc => _0x30decc.href) || [];
    const _0x35f4b9 = _0x2cd873[0] || "No direct link";
    const _0x2193f2 = _0x307ae4?.["data"]?.["data"]?.[0]?.["fileSize"] ?? "Unknown";
    const _0x4b9aa7 = _0x4b793a?.["data"]?.["data"]?.["filter"](_0x4ab67f => _0x4ab67f.type === "direct")["map"](_0x1f8921 => _0x1f8921.href) || [];
    const _0x3c1567 = _0x4b9aa7[0] || "No direct link";
    const _0x233662 = _0x4b793a?.["data"]?.["data"]?.[0]?.["fileSize"] ?? "Unknown";
    const _0x2b5bb2 = _0x2e8fe3?.["data"]?.["data"]?.["filter"](_0x1d1fdb => _0x1d1fdb.type === "direct")["map"](_0x5d739c => _0x5d739c.href) || [];
    const _0x38f303 = _0x2b5bb2[0] || "No direct link";
    const _0x3e98c1 = _0x2e8fe3?.["data"]?.["data"]?.[0]?.["fileSize"] ?? "Unknown";
    const _0x2c555f = _0x307ae4?.["data"]?.["data"]?.["filter"](_0x390e9b => _0x390e9b.type === "gdrive")["map"](_0x300feb => _0x300feb.href) || [];
    const _0x351056 = await convertDownloadToViewLink(_0x2c555f[0] || "No direct link");
    const _0x1b61c6 = _0x4b793a?.["data"]?.["data"]?.["filter"](_0x3ef73f => _0x3ef73f.type === "gdrive")["map"](_0x4c8065 => _0x4c8065.href) || [];
    const _0x255e0e = await convertDownloadToViewLink(_0x1b61c6[0] || "No direct link");
    const _0x1225ba = _0x2e8fe3?.["data"]?.["data"]?.["filter"](_0x2e238c => _0x2e238c.type === "gdrive")["map"](_0x3a190e => _0x3a190e.href) || [];
    const _0x16c121 = await convertDownloadToViewLink(_0x1225ba[0] || "No direct link");
    const _0x16b9ba = {
      downloadlink480: _0x35f4b9,
      size: _0x2193f2,
      downloadlink720: _0x3c1567,
      size2: _0x233662,
      downloadlink1080: _0x38f303,
      size3: _0x3e98c1
    };
    console.log(_0x16b9ba);
    const _0x1cd419 = [{
      title: "*[Direct Link]*\n",
      rows: [{
        title: "1",
        rowId: _0x16c67d + "dbl " + _0x35f4b9 + (" & " + _0x445657 + " | සිංහල උපසිරැසි සමඟ & 480p & " + _0x5c57b6),
        description: " 480p :- " + _0x2193f2
      }, {
        title: "2",
        rowId: _0x16c67d + "dbl " + _0x3c1567 + (" & " + _0x445657 + " | සිංහල උපසිරැසි සමඟ & 720p & " + _0x5c57b6),
        description: " 720p :- " + _0x233662
      }, {
        title: "3",
        rowId: _0x16c67d + "dbl " + _0x38f303 + (" & " + _0x445657 + " | සිංහල උපසිරැසි සමඟ & 1080p & " + _0x5c57b6),
        description: " 1080p :- " + _0x3e98c1
      }]
    }, {
      title: "*[Gdrive Direct Link]*\n",
      rows: [{
        title: "4",
        rowId: _0x16c67d + "dbl " + _0x351056 + (" & " + _0x445657 + " | සිංහල උපසිරැසි සමඟ & 480p & " + _0x5c57b6),
        description: " 480p :- " + _0x2193f2
      }, {
        title: "5",
        rowId: _0x16c67d + "dbl " + _0x255e0e + (" & " + _0x445657 + " | සිංහල උපසිරැසි සමඟ & 720p & " + _0x5c57b6),
        description: " 720p :- " + _0x233662
      }, {
        title: "6",
        rowId: _0x16c67d + "dbl " + _0x16c121 + (" & " + _0x445657 + " | සිංහල උපසිරැසි සමඟ & 1080p & " + _0x5c57b6),
        description: " 1080p :- " + _0x3e98c1
      }]
    }];
    const _0x8a6e4e = {
      text: "*Download..*",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      buttonText: "*🔢 Reply below number*",
      sections: _0x1cd419
    };
    const _0x2b466a = {
      quoted: _0x49be4e
    };
    return await _0x3649ce.replyList(_0x57efee, _0x8a6e4e, _0x2b466a);
  } catch (_0x2e1d47) {
    _0x599172(_0x2e1d47);
    _0x1c2920(_0x2e1d47);
  }
});
const _0x386e39 = {
  pattern: "ytxms",
  react: "🎥",
  alias: ["ys"],
  desc: "Download movie for ytxms",
  category: "movie",
  use: ".ytxms < Movie Name >",
  filename: __filename
};
cmd(_0x386e39, async (_0x2c9f8a, _0x6b4f90, _0x417c76, {
  from: _0x2fd980,
  sender: _0x4b084e,
  prefix: _0x36fe59,
  quoted: _0x291a46,
  q: _0x568bab,
  reply: _0x16934c
}) => {
  try {
    const _0x25d7b1 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    const _0x531b02 = await getPremiumUsers();
    const _0x47ff4a = _0x531b02.includes(_0x4b084e);
    let _0x50807a = await free();
    if (!_0x47ff4a && !_0x50807a) {
      return _0x16934c(_0x25d7b1.pre_cmd);
    }
    if (!_0x568bab) {
      return await _0x16934c("Mv name plz");
    }
    const _0x3d0495 = await fetchJson("https://yts.mx/api/v2/list_movies.json?sort_by=rating&query_term=" + _0x568bab);
    if (_0x3d0495.data.limit === 0) {
      return _0x16934c("🚫 No movies found for your search query.");
    }
    let _0xce448 = _0x3d0495.data.movies;
    var _0x442aea = [];
    for (var _0x2df171 = 0; _0x2df171 < _0xce448.length; _0x2df171++) {
      _0x442aea.push({
        title: _0x2df171 + 1,
        description: _0xce448[_0x2df171].title_long + "\n",
        rowId: _0x36fe59 + "ytmx " + _0xce448[_0x2df171].url
      });
    }
    const _0x32cf0e = [{
      title: "*[Results from yts.mx]*\n",
      rows: _0x442aea
    }];
    const _0x33b1ce = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x568bab + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x32cf0e
    };
    const _0x5c6ae0 = {
      quoted: _0x6b4f90
    };
    return await _0x2c9f8a.replyList(_0x2fd980, _0x33b1ce, _0x5c6ae0);
  } catch (_0x3ff9fa) {
    console.log(_0x3ff9fa);
    _0x16934c("*ERROR !!*");
  }
});
const _0x2c7359 = {
  pattern: "firemovies",
  alias: ["fh"],
  desc: "Check bot setting.",
  react: "🎬",
  category: "movie",
  use: ".firemovies < Movie Name >",
  filename: __filename
};
cmd(_0x2c7359, async (_0x499d3, _0x39bb30, _0x380104, {
  from: _0x46913e,
  prefix: _0x1f289e,
  quoted: _0xb4ae2b,
  body: _0x5d274e,
  isCmd: _0x533073,
  command: _0x5ef969,
  args: _0x1178e1,
  q: _0xb9aa36,
  isGroup: _0x5f17b2,
  sender: _0x3e97b5,
  senderNumber: _0x405026,
  botNumber2: _0x43678d,
  botNumber: _0x3b3881,
  pushname: _0x24d06c,
  isMe: _0xf15ec2,
  isOwner: _0x31cbbf,
  groupMetadata: _0x3b3d53,
  groupName: _0x2e5399,
  participants: _0x5d402c,
  groupAdmins: _0x562e7f,
  isBotAdmins: _0x33f3b6,
  isAdmins: _0x2f97b5,
  reply: _0x52acad
}) => {
  try {
    const _0x443d9a = await fetchJson("https://www.dark-yasiya-api.site/movie/firemovie/search?text=" + _0xb9aa36);
    if (_0x443d9a.result && _0x443d9a.result.length > 0) {
      return _0x52acad("🚫 No movies found for your search query.");
    }
    var _0x2e90eb = [];
    for (var _0x1bf45c = 0; _0x1bf45c < _0x443d9a.result.data.length; _0x1bf45c++) {
      _0x2e90eb.push({
        title: _0x1bf45c + 1,
        description: _0x443d9a.result.data[_0x1bf45c].title + "\n",
        rowId: _0x1f289e + "fdc " + _0x443d9a.result.data[_0x1bf45c].link
      });
    }
    const _0x43306b = [{
      title: "*[Results from firemoviehub.com]*\n",
      rows: _0x2e90eb
    }];
    const _0x487777 = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0xb9aa36 + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x43306b
    };
    const _0x34faae = {
      quoted: _0x39bb30
    };
    return await _0x499d3.replyList(_0x46913e, _0x487777, _0x34faae);
  } catch (_0x443a61) {
    console.log(_0x443a61);
    _0x52acad("*ERROR !!*");
  }
});
const _0x2278e8 = {
  pattern: "fdc",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x2278e8, async (_0x43175b, _0x171e80, _0x4d483f, {
  from: _0x5193a0,
  prefix: _0x5a04eb,
  quoted: _0x567069,
  body: _0x5cc86e,
  isCmd: _0x4ca100,
  command: _0x3a025d,
  args: _0x5e356f,
  q: _0x185d0b,
  isGroup: _0x3dce12,
  sender: _0x55dd1d,
  senderNumber: _0x13babb,
  botNumber2: _0x227e7a,
  botNumber: _0x3dea28,
  pushname: _0x142588,
  isMe: _0x5ac319,
  isOwner: _0x2f338c,
  groupMetadata: _0x2be427,
  groupName: _0x243f04,
  participants: _0x1de86d,
  groupAdmins: _0x14d992,
  isBotAdmins: _0x3b01b1,
  isAdmins: _0x5bae05,
  reply: _0x2ccda3
}) => {
  try {
    if (_0x185d0b.includes("https://firemovieshub.com/tvshows")) {
      const _0x432cb5 = await fetchJson("https://www.dark-yasiya-api.site/movie/firemovie/tvshow?url=" + _0x185d0b);
      const _0x9378f3 = _0x432cb5?.["result"]?.["data"]?.["episodes"] ?? [];
      if (!_0x9378f3 || _0x9378f3.length === 0) {
        return _0x2ccda3("Episodes data is empty.");
      }
      var _0x3c273f = [];
      for (var _0x58aafb = 0; _0x58aafb < _0x9378f3.length; _0x58aafb++) {
        _0x3c273f.push({
          title: _0x58aafb + 1,
          description: _0x9378f3[_0x58aafb].number + (" " + _0x9378f3[_0x58aafb].name),
          rowId: _0x5a04eb + "mbddc " + _0x9378f3[_0x58aafb].link + " & " + _0x9378f3[_0x58aafb].image
        });
      }
      const _0x310264 = {
        title: "",
        rows: _0x3c273f
      };
      const _0x4e3820 = [_0x310264];
      const _0x2ff0ad = {
        text: "",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
        title: "",
        buttonText: "🔢 Reply below number\n",
        sections: _0x4e3820
      };
      let _0x2e506f = "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x432cb5?.["result"]?.["data"]?.["title"] ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x432cb5?.["result"]?.["data"]?.["date"] ?? "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x432cb5?.["result"]?.["data"]?.["duration"] ?? "Null") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x432cb5?.["result"]?.["data"]?.["category"]?.["length"] > 0 ? _0x432cb5.result.data.category.join(", ") : "Null") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x432cb5?.["result"]?.["data"]?.["director"] ?? "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x432cb5?.["result"]?.["data"]?.["cast"]?.["length"] > 0 ? _0x432cb5.result.data.cast.map(_0x57338c => _0x57338c.name).join(", ") : "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n";
      const _0x53bea9 = {
        url: _0x432cb5?.["result"]?.["data"]?.["mainImage"] ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      };
      const _0x444e30 = {
        image: _0x53bea9,
        caption: _0x2e506f
      };
      const _0x47bd96 = {
        quoted: _0x171e80
      };
      await _0x43175b.sendMessage(_0x5193a0, _0x444e30, _0x47bd96);
      const _0x2d0d52 = {
        quoted: _0x171e80
      };
      return await _0x43175b.replyList(_0x5193a0, _0x2ff0ad, _0x2d0d52);
    }
    if (_0x185d0b.includes("https://firemovieshub.com/movies")) {
      const _0x4d2c0a = await fetchJson("https://www.dark-yasiya-api.site/movie/firemovie/movie?url=" + _0x185d0b);
      if (!_0x4d2c0a) {
        return _0x2ccda3("*නැවත උත්සහ කරන්න*");
      }
      const _0x51d62c = _0x4d2c0a.result.data.dl_links;
      var _0x3c273f = [];
      for (var _0x58aafb = 0; _0x58aafb < _0x51d62c.length; _0x58aafb++) {
        _0x3c273f.push({
          title: _0x58aafb + 1,
          description: _0x51d62c[_0x58aafb].quality + (" " + _0x51d62c[_0x58aafb].size),
          rowId: _0x5a04eb + "dbl " + _0x51d62c[_0x58aafb].link + " & " + (_0x4d2c0a?.["result"]?.["data"]?.["title"] ?? "Null") + " & " + _0x51d62c[_0x58aafb].quality + " & " + _0x4d2c0a.result.data.mainImage
        });
      }
      const _0x43ad8f = {
        title: "",
        rows: _0x3c273f
      };
      const _0x302f3a = [_0x43ad8f];
      const _0xed6351 = {
        text: "",
        footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
        title: "",
        buttonText: "🔢 Reply below number\n",
        sections: _0x302f3a
      };
      const _0x525e1d = {
        quoted: _0x171e80
      };
      return await _0x43175b.replyList(_0x5193a0, _0xed6351, _0x525e1d);
    }
  } catch (_0x4ced4f) {
    console.log(_0x4ced4f);
    await _0x2ccda3("" + _0x4ced4f);
  }
});
const _0x141779 = {
  pattern: "mbddc",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x141779, async (_0x39a84b, _0x48597f, _0x518ce9, {
  from: _0x4b4f37,
  prefix: _0xf2810a,
  quoted: _0x19ec3e,
  body: _0x51ca21,
  isCmd: _0x1992d3,
  command: _0x361add,
  args: _0x2dd0b8,
  q: _0x3a2794,
  isGroup: _0x488b0c,
  sender: _0x38e6d3,
  senderNumber: _0x501563,
  botNumber2: _0x561fdd,
  botNumber: _0x3e7313,
  pushname: _0x59f0b4,
  isMe: _0x296f5d,
  isOwner: _0x4ab773,
  groupMetadata: _0x570020,
  groupName: _0x4da1b1,
  participants: _0x5a9712,
  groupAdmins: _0x53a04f,
  isBotAdmins: _0x3562d1,
  isAdmins: _0x4146d8,
  reply: _0x1c3470
}) => {
  try {
    const _0x359fd4 = _0x3a2794.split(" & ")[0];
    const _0x1d57a3 = _0x3a2794.split(" & ")[1];
    const _0x4df0d6 = await fetchJson("https://www.dark-yasiya-api.site/movie/firemovie/episode?url=" + _0x359fd4);
    const _0x27e97c = _0x4df0d6.result.data.dl_links;
    var _0x28e6b1 = [];
    for (var _0x34243c = 0; _0x34243c < _0x27e97c.length; _0x34243c++) {
      _0x28e6b1.push({
        title: _0x34243c + 1,
        description: _0x27e97c[_0x34243c].quality + (" " + _0x27e97c[_0x34243c].size),
        rowId: _0xf2810a + "dbl " + _0x27e97c[_0x34243c].link + " & " + (_0x4df0d6.result.data.title || "Null") + " & " + _0x27e97c[_0x34243c].quality + " & " + _0x1d57a3
      });
    }
    const _0xb4845b = {
      title: "",
      rows: _0x28e6b1
    };
    const _0x591df7 = [_0xb4845b];
    const _0x59ed02 = {
      text: "",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0x591df7
    };
    const _0x169e01 = {
      quoted: _0x48597f
    };
    return await _0x39a84b.replyList(_0x4b4f37, _0x59ed02, _0x169e01);
  } catch (_0x23fb44) {
    console.log(_0x23fb44);
    await _0x1c3470("" + _0x23fb44);
  }
});
const _0x3343c2 = {
  pattern: "awa",
  react: "🎥",
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".awa < Movie Name >",
  filename: __filename
};
cmd(_0x3343c2, async (_0x17a1f7, _0x1504a1, _0x4126c1, {
  from: _0xb18c3a,
  sender: _0x6de553,
  prefix: _0xb8119c,
  quoted: _0x2cd00c,
  q: _0x2d956d,
  reply: _0x484f74
}) => {
  try {
    if (!_0x2d956d) {
      return await _0x484f74("Movie name please!");
    }
    const _0x4858ba = await fetchJson(baseUrl2 + "/api/awa/movie/search?q=" + _0x2d956d);
    var _0x1f2e03 = [];
    for (var _0x1f23f5 = 0; _0x1f23f5 < _0x4858ba.length; _0x1f23f5++) {
      _0x1f2e03.push({
        title: _0x1f23f5 + 1,
        description: _0x4858ba[_0x1f23f5].title + "\n",
        rowId: _0xb8119c + "awadll " + _0x4858ba[_0x1f23f5].link
      });
    }
    const _0x443037 = [{
      title: "*[Results from awa.com]*\n",
      rows: _0x1f2e03
    }];
    const _0x121cb3 = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x2d956d + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x443037
    };
    const _0x35fe1f = {
      quoted: _0x1504a1
    };
    return await _0x17a1f7.replyList(_0xb18c3a, _0x121cb3, _0x35fe1f);
  } catch (_0x5f0a13) {
    console.error(_0x5f0a13);
    await _0x484f74("*ERROR !!*\n\n🚩 *Details:*\n" + (_0x5f0a13.message || _0x5f0a13) + "\n\n📩 If this error persists, please check your API endpoints or input.");
  }
});
function _0xaf9ad5(_0x5d6574, _0x35410d, _0x925e7f, _0x31873e, _0x2e854f) {
  return _0x4080(_0x2e854f - "0x296", _0x31873e);
}
const _0x4b0f6e = {
  pattern: "awadll",
  desc: "Check bot setting.",
  react: "🎬",
  filename: __filename
};
cmd(_0x4b0f6e, async (_0x55fff6, _0x118951, _0x15579b, {
  from: _0x718218,
  quoted: _0x5877ad,
  l: _0x572d4a,
  body: _0x2daeea,
  isCmd: _0x5b5c59,
  command: _0x17b6cd,
  args: _0x572e4f,
  q: _0x39fe58,
  prefix: _0x1b421e,
  isGroup: _0x4ac5ea,
  sender: _0x34a3e3,
  reply: _0x1066a8
}) => {
  try {
    const _0x1c8c66 = await fetchJson(baseUrl2 + "/api/awa/movie/details?url=" + _0x39fe58);
    if (!_0x1c8c66) {
      throw new Error("Movie details not found!");
    }
    let _0x409b82 = _0x1c8c66[0];
    let _0x505cdc = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x409b82?.["title"] ?? "Null") + "\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x409b82?.["releaseDate"] ?? "Null") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x409b82?.["country"] ?? "Null") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x409b82?.["duration"] ?? "Null") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x409b82?.["cast"] ?? "Null") + "\n▫️📃 *Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* " + (_0x409b82?.["description"] || "Null") + "\n\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*";
    let _0x2fac84 = _0x409b82?.["image"] || "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg";
    const _0xf11400 = {
      url: _0x2fac84
    };
    const _0x3ec659 = {
      image: _0xf11400,
      caption: _0x505cdc
    };
    const _0x43a537 = {
      quoted: _0x118951
    };
    await _0x55fff6.sendMessage(_0x718218, _0x3ec659, _0x43a537);
    const _0x5bff9a = _0x409b82?.["movieDownloadLink"] || "";
    if (!_0x5bff9a) {
      throw new Error("No download links found!");
    }
    const _0xcfd857 = require("https");
    function _0x3973c7(_0x527386) {
      return new Promise((_0x2b31f2, _0x2f01e1) => {
        const _0x5eae15 = {
          method: "HEAD"
        };
        _0xcfd857.get(_0x527386, _0x5eae15, _0x1c7054 => {
          const _0xac9749 = _0x1c7054.headers["content-length"];
          if (_0xac9749) {
            const _0x43e08f = (_0xac9749 / 1048576).toFixed(2);
            _0x2b31f2(_0x43e08f);
          } else {
            _0x2f01e1("File size ලබාගත නොහැක.");
          }
        }).on("error", _0x5ec923 => {
          _0x2f01e1(_0x5ec923.message);
        });
      });
    }
    const _0x2d1c63 = await _0x3973c7(_0x5bff9a);
    const _0x539408 = [{
      title: "*[Direct Link]*\n",
      rows: [{
        title: "1",
        rowId: _0x1b421e + "dbl " + _0x5bff9a + " & " + (_0x409b82?.["title"] ?? "Null") + " & " + "720p" + " & " + _0x2fac84,
        description: "Direct 720p :- " + _0x2d1c63
      }]
    }];
    const _0x113096 = {
      text: "*Subtitles ඇඩ් වෙලා නෑ මේ සයිට් එකේ*",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      buttonText: "*🔢 Reply below number*",
      sections: _0x539408
    };
    const _0x202b56 = {
      quoted: _0x118951
    };
    return await _0x55fff6.replyList(_0x718218, _0x113096, _0x202b56);
  } catch (_0x11163) {
    console.error("Error occurred:", _0x11163.message);
    _0x1066a8(_0x11163);
  }
});
const _0x2a137e = {
  pattern: "animo",
  react: "🎥",
  desc: "Download movie for sinhalasub.lk",
  category: "movie",
  use: ".animo < Movie Name >",
  filename: __filename
};
cmd(_0x2a137e, async (_0x3fb3b8, _0x16e3a7, _0x1c4bc1, {
  from: _0x53ad19,
  sender: _0x4580f2,
  prefix: _0x5d3bf3,
  quoted: _0x448f27,
  q: _0x101164,
  reply: _0x5475a2
}) => {
  try {
    if (!_0x101164) {
      return await _0x5475a2("Movie name please!");
    }
    const _0x290af6 = await fetchJson(baseUrl2 + "/api/animost/movie/search?q=" + _0x101164);
    var _0x77179a = [];
    for (var _0x287dd9 = 0; _0x287dd9 < _0x290af6.length; _0x287dd9++) {
      _0x77179a.push({
        title: _0x287dd9 + 1,
        description: _0x290af6[_0x287dd9].title + "\n",
        rowId: _0x5d3bf3 + "animodll " + _0x290af6[_0x287dd9].link
      });
    }
    const _0x36e6fd = [{
      title: "*[Results from animo.com]*\n",
      rows: _0x77179a
    }];
    const _0x104797 = {
      text: "\n*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n👽 *Entered Name ||* " + _0x101164 + "  ",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x36e6fd
    };
    const _0x464ff5 = {
      quoted: _0x16e3a7
    };
    return await _0x3fb3b8.replyList(_0x53ad19, _0x104797, _0x464ff5);
  } catch (_0x5e57b9) {
    console.error(_0x5e57b9);
    await _0x5475a2("*ERROR !!*\n\n🚩 *Details:*\n" + (_0x5e57b9.message || _0x5e57b9) + "\n\n📩 If this error persists, please check your API endpoints or input.");
  }
});
function _0x2a1225(_0x389a79, _0x2088a3, _0x597364, _0x48f8d7, _0x1123f9) {
  return _0x4080(_0x2088a3 + 0x297, _0x389a79);
}
const _0x4df14a = {};
function _0x4080(_0x472ab3, _0x105370) {
  const _0x2779d8 = _0x4e5b();
  _0x4080 = function (_0x14b07d, _0x4e5bcf) {
    _0x14b07d = _0x14b07d - 136;
    let _0x408037 = _0x2779d8[_0x14b07d];
    return _0x408037;
  };
  return _0x4080(_0x472ab3, _0x105370);
}
_0x4df14a.pattern = "animodll";
_0x4df14a.desc = "Check bot setting.";
_0x4df14a.react = "🎬";
_0x4df14a.filename = __filename;
cmd(_0x4df14a, async (_0x4abc9c, _0x28e357, _0x5dee61, {
  from: _0x34d0a4,
  quoted: _0x5ed2e3,
  l: _0x302265,
  body: _0x1d1f55,
  isCmd: _0x57baa6,
  command: _0x5e6d91,
  args: _0x399e39,
  q: _0x8fe00,
  prefix: _0x278442,
  isGroup: _0x1e1e7d,
  sender: _0x162062,
  reply: _0x5d8f05
}) => {
  try {
    const _0xba0404 = await fetchJson(baseUrl2 + "/api/animost/movie/details?url=" + _0x8fe00);
    if (!_0xba0404) {
      throw new Error("Movie details not found!");
    }
    let _0x12d28f = "*★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔  𝗖 𝗜 𝗡 𝗘 𝗠 𝗔 ㋡❯★*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0xba0404?.["title"] ?? "Null") + "\n\n▫️📃 *Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* " + (_0xba0404?.["description"] || "Null") + "\n▫️📃 *Kᴇʏᴡᴏʀᴅꜱ :*  " + (_0xba0404?.["keywords"] || "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Jᴏɪɴ :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*";
    let _0x3f2ec8 = _0xba0404?.["imageUrl"] || "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg";
    const _0x1d4475 = {
      url: _0x3f2ec8
    };
    const _0x27705b = {
      image: _0x1d4475,
      caption: _0x12d28f
    };
    const _0x49a8a8 = {
      quoted: _0x28e357
    };
    await _0x4abc9c.sendMessage(_0x34d0a4, _0x27705b, _0x49a8a8);
    const _0x552a97 = _0xba0404?.["downloadLinks"] || [];
    if (!_0x552a97.length) {
      throw new Error("No download links found!");
    }
    const _0x53acc2 = require("https");
    function _0xd493b(_0x539dbf) {
      return new Promise((_0x4c5b3f, _0x5d2699) => {
        const _0x3da733 = {
          method: "HEAD"
        };
        _0x53acc2.get(_0x539dbf, _0x3da733, _0x1706d5 => {
          const _0x391279 = _0x1706d5.headers["content-length"];
          if (_0x391279) {
            const _0x12a873 = (_0x391279 / 1048576).toFixed(2);
            _0x4c5b3f(_0x12a873);
          } else {
            _0x5d2699("File size ලබාගත නොහැක.");
          }
        }).on("error", _0x3e3d30 => {
          _0x5d2699(_0x3e3d30.message);
        });
      });
    }
    var _0x3bcf30 = [];
    for (var _0x3dd2a6 = 0; _0x3dd2a6 < _0x552a97.length; _0x3dd2a6++) {
      _0x3bcf30.push({
        title: _0x3dd2a6 + 1,
        description: _0x552a97[_0x3dd2a6].quality + " " + (await _0xd493b(_0x552a97[_0x3dd2a6].link)) + " " + "\n" + ("" + _0x552a97[_0x3dd2a6].link),
        rowId: _0x278442 + "dbl " + _0x552a97[_0x3dd2a6].link + " & " + (_0xba0404?.["title"] ?? "Null") + " & " + _0x552a97[_0x3dd2a6].quality + " & " + _0x3f2ec8
      });
    }
    const _0x27e147 = {
      title: "",
      rows: _0x3bcf30
    };
    const _0x57d6ab = [_0x27e147];
    const _0x27ac00 = {
      text: "",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: "",
      buttonText: "🔢 Reply below number\n",
      sections: _0x57d6ab
    };
    const _0x579ed6 = {
      quoted: _0x28e357
    };
    return await _0x4abc9c.replyList(_0x34d0a4, _0x27ac00, _0x579ed6);
  } catch (_0x24761c) {
    console.error("Error occurred:", _0x24761c.message);
    _0x5d8f05("An error occurred while processing your request.");
  }
});
function _0x5b0dd7(_0xb4c7b3) {
  function _0xca55e8(_0x5d3dae) {
    if (typeof _0x5d3dae === "string") {
      return function (_0x3c69d0) {}.constructor("while (true) {}").apply("counter");
    } else if (("" + _0x5d3dae / _0x5d3dae).length !== 1 || _0x5d3dae % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0xca55e8(++_0x5d3dae);
  }
  try {
    if (_0xb4c7b3) {
      return _0xca55e8;
    } else {
      _0xca55e8(0);
    }
  } catch (_0x3410da) {}
}
