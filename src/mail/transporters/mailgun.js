'use strict'

class mailgun {
    constructor(config) {
        this.config = config.mailgun
        this.name = 'mailgun'
        this.transport = this._createTransport(config.mailgun)
    }

    _createTransport(config) {
        return require('mailgun-js')(config)
    }

    send(message, callback) {
        return this.transport.messages().send(message.data, callback)
    }
}

module.exports = mailgun
