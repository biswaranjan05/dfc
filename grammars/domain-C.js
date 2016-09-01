/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var domainC = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,7],$V2=[1,7,9],$V3=[1,12],$V4=[16,19],$V5=[2,21],$V6=[1,7,9,10,19,20,23,28],$V7=[12,16],$V8=[7,20],$V9=[1,25],$Va=[7,9,10,19,20,23,28],$Vb=[9,10,19,20,23,28],$Vc=[1,41],$Vd=[1,43],$Ve=[1,42],$Vf=[1,47],$Vg=[12,16,19],$Vh=[1,48],$Vi=[1,49],$Vj=[1,50],$Vk=[1,51],$Vl=[1,52],$Vm=[1,53],$Vn=[1,54],$Vo=[1,55],$Vp=[1,56],$Vq=[1,57],$Vr=[1,58],$Vs=[1,59],$Vt=[1,60],$Vu=[1,61],$Vv=[12,16,19,30,31,32,33,34,35,36,37,38,39,40,41,42,43],$Vw=[12,16,19,30,31,35,36,37,38,39,40,41,42,43],$Vx=[12,16,19,35,36,37,38,39,40,41,42,43],$Vy=[12,16,19,39,40,41,42,43];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"definitions":4,"definition":5,"function_definition":6,"INT_TYPE":7,"declaration":8,"Identifier":9,"(":10,"optional_parameter_list":11,")":12,"parameter_declarations":13,"compound_statement":14,"parameter_list":15,",":16,"parameter_declaration":17,"parameter_declarator_list":18,";":19,"{":20,"declarations":21,"statements":22,"}":23,"declarator_list":24,"statement":25,"expression":26,"binary":27,"Constant":28,"optional_argument_list":29,"+":30,"-":31,"*":32,"/":33,"%":34,">":35,"<":36,"GE":37,"LE":38,"EQ":39,"NE":40,"&":41,"|":42,"^":43,"=":44,"argument_list":45,"$accept":0,"$end":1},
terminals_: {2:"error",7:"INT_TYPE",9:"Identifier",10:"(",12:")",16:",",19:";",20:"{",23:"}",28:"Constant",30:"+",31:"-",32:"*",33:"/",34:"%",35:">",36:"<",37:"GE",38:"LE",39:"EQ",40:"NE",41:"&",42:"|",43:"^",44:"="},
productions_: [0,[3,1],[4,1],[4,2],[5,1],[5,2],[5,1],[6,6],[11,0],[11,1],[15,1],[15,3],[13,0],[13,2],[17,3],[18,1],[18,3],[14,4],[21,0],[21,2],[8,3],[24,1],[24,3],[22,0],[22,2],[25,2],[25,1],[25,1],[26,1],[26,3],[27,1],[27,1],[27,3],[27,4],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[27,3],[29,0],[29,1],[45,1],[45,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,5:3,6:4,7:$V0,8:6,9:$V1},{1:[3]},{1:[2,1],5:8,6:4,7:$V0,8:6,9:$V1},o($V2,[2,2]),o($V2,[2,4]),{6:9,9:[1,11],24:10},o($V2,[2,6]),{10:$V3},o($V2,[2,3]),o($V2,[2,5]),{16:[1,14],19:[1,13]},o($V4,$V5,{10:$V3}),{9:[1,17],11:15,12:[2,8],15:16},o($V6,[2,20]),{9:[1,18]},{12:[1,19]},{12:[2,9],16:[1,20]},o($V7,[2,10]),o($V4,[2,22]),o($V8,[2,12],{13:21}),{9:[1,22]},{7:[1,26],14:23,17:24,20:$V9},o($V7,[2,11]),o($V2,[2,7]),o($V8,[2,13]),o($Va,[2,18],{21:27}),{9:[1,29],18:28},o($Vb,[2,23],{22:30,8:31,7:[1,32]}),{16:[1,34],19:[1,33]},o($V4,[2,15]),{9:$Vc,10:$Vd,14:39,19:[1,38],20:$V9,23:[1,35],25:36,26:37,27:40,28:$Ve},o($Va,[2,19]),{9:[1,44],24:10},o($V8,[2,14]),{9:[1,45]},o($V6,[2,17]),o($Vb,[2,24]),{16:$Vf,19:[1,46]},o($Vb,[2,26]),o($Vb,[2,27]),o($Vg,[2,28],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu}),o($Vv,[2,30],{10:[1,62],44:[1,63]}),o($Vv,[2,31]),{9:$Vc,10:$Vd,26:64,27:40,28:$Ve},o($V4,$V5),o($V4,[2,16]),o($Vb,[2,25]),{9:$Vc,10:$Vd,27:65,28:$Ve},{9:$Vc,10:$Vd,27:66,28:$Ve},{9:$Vc,10:$Vd,27:67,28:$Ve},{9:$Vc,10:$Vd,27:68,28:$Ve},{9:$Vc,10:$Vd,27:69,28:$Ve},{9:$Vc,10:$Vd,27:70,28:$Ve},{9:$Vc,10:$Vd,27:71,28:$Ve},{9:$Vc,10:$Vd,27:72,28:$Ve},{9:$Vc,10:$Vd,27:73,28:$Ve},{9:$Vc,10:$Vd,27:74,28:$Ve},{9:$Vc,10:$Vd,27:75,28:$Ve},{9:$Vc,10:$Vd,27:76,28:$Ve},{9:$Vc,10:$Vd,27:77,28:$Ve},{9:$Vc,10:$Vd,27:78,28:$Ve},{9:$Vc,10:$Vd,27:79,28:$Ve},{9:$Vc,10:$Vd,12:[2,49],27:82,28:$Ve,29:80,45:81},{9:$Vc,10:$Vd,27:83,28:$Ve},{12:[1,84],16:$Vf},o($Vg,[2,29],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu}),o($Vw,[2,34],{32:$Vj,33:$Vk,34:$Vl}),o($Vw,[2,35],{32:$Vj,33:$Vk,34:$Vl}),o($Vv,[2,36]),o($Vv,[2,37]),o($Vv,[2,38]),o($Vx,[2,39],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vx,[2,40],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vx,[2,41],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vx,[2,42],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl}),o($Vy,[2,43],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp}),o($Vy,[2,44],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp}),o([12,16,19,41,42,43],[2,45],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr}),o([12,16,19,42],[2,46],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,43:$Vu}),o([12,16,19,42,43],[2,47],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs}),{12:[1,85]},{12:[2,50],16:[1,86]},o($V7,[2,51],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu}),o($Vg,[2,48],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu}),o($Vv,[2,32]),o($Vv,[2,33]),{9:$Vc,10:$Vd,27:87,28:$Ve},o($V7,[2,52],{30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu})],
defaultActions: {},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore single-line comment */
break;
case 1:/* ignore multi-line comment */
break;
case 2:return 'VAR';
break;
case 3:return 'NUL';
break;
case 4:return 'INPUT';       /* temporary keyword tokens */
break;
case 5:return 'COMPUTE';
break;
case 6:return 'OUTPUT';
break;
case 7:return 'INT_LITERAL';
break;
case 8:return 'IDENTIFIER';
break;
case 9:return 'ASSIGN';
break;
case 10:return 38;
break;
case 11:return 37;
break;
case 12:return 'EQUAL';
break;
case 13:return 'LT';
break;
case 14:return 'GT';
break;
case 15:return 'CONSTRAINT_EQ'
break;
case 16:return 'LCURLY';
break;
case 17:return 'RCURLY';
break;
case 18:return 'LPAREN';
break;
case 19:return 'RPAREN';
break;
case 20:return 'LBRACKET';
break;
case 21:return 'RBRACKET';
break;
case 22:return 'COMMA';
break;
case 23:return 'BAR';
break;
case 24:return 'PLUS';
break;
case 25:return 'MINUS';
break;
case 26:return 'STAR';
break;
case 27:return 'SLASH';
break;
case 28:return 'PERCENT';
break;
case 29:return 'SEMICOLON';
break;
case 30:/* skip whitespace */
break;
case 31:throw 'Illegal character';
break;
case 32:return 'ENDOFFILE';
break;
}
},
rules: [/^(?:\/\/.*)/,/^(?:\/\*\/*([^*\/]|[^*]\/|\*[^\/])*\**\*\/)/,/^(?:var\b)/,/^(?:null\b)/,/^(?:input\b)/,/^(?:compute\b)/,/^(?:output\b)/,/^(?:([0-9])+)/,/^(?:([a-zA-Z_][a-zA-Z0-9_]*))/,/^(?::=)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:<)/,/^(?:>)/,/^(?:=)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?:\|)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:;)/,/^(?:\s+)/,/^(?:\.)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = domainC;
exports.Parser = domainC.Parser;
exports.parse = function () { return domainC.parse.apply(domainC, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}