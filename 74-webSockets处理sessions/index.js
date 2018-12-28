var express = require('express');
var WebsocketServer = require('ws').Server;
var parseCookie = express.cookieParser('some secret');

var MemoryStore = express.session.MemoryStore;

var store = new MemoryStore();
var app = express();
var webSocketServer;
var server = app.listen(process.env.PORT || 3000);

app.use(parseCookie);
app.use(express.session({ store: store, secret: 'some secret' }));
app.use(express.static(__dirname + '/public'));

app.get('/random', (req, res) => {
    req.session.random = Math.random().toString();
    res.send(200);
})

webSocketServer = new WebsocketServer({server: server});
webSocketServer.on('connection', function (ws) {
    var session;
    ws.on('message', function (data, flag) {
        var message = JSON.parse(data);
        if (message.type === 'getSession') {
            parseCookie(ws.upgradeReq, null, function (err) {
                var sid = ws.upgradeReq.signedCookies['connect.sid'];
                store.get(sid, function (err, loadedSession) {
                    if (err) console.error(err);
                    session = loadedSession;
                    session.random = Math.random().toString();
                    console.log(session)
                    ws.send('session.random:' + session.random, { mask: false });
                });
            });
        } else {
            ws.send('Unknown command');
        }
    })
})