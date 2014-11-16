webrtc-chord-uuid
==================

uuid generator, used in [`webrtc-chord`](https://github.com/diasdavid/webrtc-chord)


# Badgers
[![NPM](https://nodei.co/npm/webrtc-chord-uuid.png?downloads=true&stars=true)](https://nodei.co/npm/webrtc-chord-uuid/)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/diasdavid/webrtc-chord-uuid?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) 
[![Dependency Status](https://david-dm.org/diasdavid/webrtc-chord-uuid.svg)](https://david-dm.org/diasdavid/webrtc-chord-uuid)
[![Build Status](https://travis-ci.org/diasdavid/webrtc-chord-uuid.svg)](https://travis-ci.org/diasdavid/webrtc-chord-uuid)

# Descritpion

Generates 160 bit unique Ids represented in hexadecimal format

# How to use

```
var uuid = require('webrtc-chord-uuid');

var id = uuid.gen(); // generate one
var last = uuid.get(); // get last one generated

```