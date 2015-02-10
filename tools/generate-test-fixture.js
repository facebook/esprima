// #!/usr/bin/env node
/*
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*jslint node:true */
/*global str:true */
(function () {
    'use strict';
    var fs = require('fs'),
        path = require('path'),
        stringify = require('./stringify.js'),
        root = path.join(path.dirname(fs.realpathSync(__filename)), '..'),
        esprima = require(path.join(root, 'esprima')),
        code,
        content,
        options;

    var cliArgs = require('commander')
      .option('-m, --module', 'Parse source as a module (rather than as a script)')
      .parse(process.argv);

    code = cliArgs.args[0];

    if (code.length === 0) {
        console.log('Usage:');
        console.log('   generate-test-fixture.js code');
        process.exit(1);
    }


    content = code;

    options = {
        comment: false,
        range: true,
        loc: true,
        tokens: false,
        raw: true,
        tolerant: false,
        sourceType: cliArgs.module ? 'module' : 'script'
    };

    console.log(stringify(esprima.parse(content, options)));
})();
/* vim: set sw=4 ts=4 et tw=80 : */
