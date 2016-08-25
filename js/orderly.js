var orderly = function () {
  var a = function () {
    var a = {}, b = {}, c = function (d) {
      a[d] || (console.log (d), a[d] = {}, b[d] (c, a[d], {id: d}));
      return a[d]
    };
    c.def = function (a, c) {
      console.log ("def", a), b[a] = c.factory
    };
    return c
  } ();
  a.def ("orderly", {
    factory: function (a, b, c) {
      var d = a ("parser").parser;
      d.yy = a ("scope");
      var e = b.parse = function (a) {
        return d.parse (a)
      }, f = b.compile = function (a, b) {
        return JSON.stringify (e (a), null, b || "    ")
      };
      b.main = function (b) {
        var c = a ("file"), d = c.path (c.cwd ());
        if (!b[1])throw new Error ("Usage: " + b[0] + " FILE [OUTFILE]");
        var e = d.join (b[1]).read ({charset: "utf-8"}), g = f (e), h = d.join (b[2] || c.basename (b[1], ".orderly") + ".jsonschema").open ("w");
        h.print (g).close ()
      }
    }, requires: ["parser", "scope", "file"]
  }), a.def ("parser", {
    factory: function (a, b, c) {
      var d = function () {
        var a = {
          trace: function () {
          },
          yy: {},
          symbols_: {
            error: 2,
            file: 3,
            orderly_schema: 4,
            EOF: 5,
            unnamed_entry: 6,
            ";": 7,
            named_entries: 8,
            named_entry: 9,
            unnamed_entries: 10,
            definition_prefix: 11,
            property_name: 12,
            definition_suffix: 13,
            string_prefix: 14,
            string_suffix: 15,
            INTEGER: 16,
            optional_range: 17,
            NUMBER: 18,
            BOOLEAN: 19,
            NULL: 20,
            ANY: 21,
            ARRAY: 22,
            "{": 23,
            "}": 24,
            optional_additional_marker: 25,
            "[": 26,
            "]": 27,
            OBJECT: 28,
            UNION: 29,
            STRING: 30,
            optional_perl_regex: 31,
            optional_enum_values: 32,
            optional_default_value: 33,
            optional_requires: 34,
            optional_optional_marker: 35,
            optional_extra_properties: 36,
            csv_property_names: 37,
            ",": 38,
            "`": 39,
            JSONObject: 40,
            "<": 41,
            ">": 42,
            "?": 43,
            "*": 44,
            JSONArray: 45,
            "=": 46,
            JSONValue: 47,
            JSONNumber: 48,
            JSONString: 49,
            PROPERTY: 50,
            REGEX: 51,
            STRING_LIT: 52,
            NUMBER_LIT: 53,
            JSONNullLiteral: 54,
            JSONBooleanLiteral: 55,
            TRUE: 56,
            FALSE: 57,
            JSONText: 58,
            JSONMemberList: 59,
            JSONMember: 60,
            ":": 61,
            JSONElementList: 62,
            $accept: 0,
            $end: 1
          },
          terminals_: {
            2: "error",
            5: "EOF",
            7: ";",
            16: "INTEGER",
            18: "NUMBER",
            19: "BOOLEAN",
            20: "NULL",
            21: "ANY",
            22: "ARRAY",
            23: "{",
            24: "}",
            26: "[",
            27: "]",
            28: "OBJECT",
            29: "UNION",
            30: "STRING",
            38: ",",
            39: "`",
            41: "<",
            42: ">",
            43: "?",
            44: "*",
            46: "=",
            50: "PROPERTY",
            51: "REGEX",
            52: "STRING_LIT",
            53: "NUMBER_LIT",
            56: "TRUE",
            57: "FALSE",
            61: ":"
          },
          productions_: [0, [3, 2], [4, 2], [4, 1], [8, 3], [8, 1], [8, 0], [10, 3], [10, 1], [10, 0], [9, 3], [9, 3], [6, 2], [6, 2], [11, 2], [11, 2], [11, 1], [11, 1], [11, 1], [11, 6], [11, 6], [11, 5], [11, 4], [14, 2], [15, 2], [13, 5], [37, 3], [37, 1], [36, 3], [36, 0], [34, 3], [34, 0], [35, 1], [35, 0], [25, 1], [25, 0], [32, 1], [32, 0], [33, 2], [33, 0], [17, 5], [17, 4], [17, 4], [17, 3], [17, 0], [12, 1], [12, 1], [31, 1], [31, 0], [49, 1], [48, 1], [54, 1], [55, 1], [55, 1], [58, 1], [47, 1], [47, 1], [47, 1], [47, 1], [47, 1], [47, 1], [40, 2], [40, 3], [60, 3], [59, 1], [59, 3], [45, 2], [45, 3], [62, 1], [62, 3]],
          performAction: function (a, b, c, d, e, f, g) {
            var h = f.length - 1;
            switch (e) {
              case 1:
                return f[h - 1];
              case 4:
                this.$ = f[h], this.$.unshift (f[h - 2]);
                break;
              case 5:
                this.$ = [f[h]];
                break;
              case 6:
                this.$ = [];
                break;
              case 7:
                this.$ = f[h], f[h].unshift (f[h - 2]);
                break;
              case 8:
                this.$ = [f[h]];
                break;
              case 9:
                this.$ = [];
                break;
              case 10:
                this.$ = [f[h - 1], f[h - 2]], d.Type.addOptionals (f[h - 2], f[h]);
                break;
              case 11:
                this.$ = [f[h - 1], f[h - 2]], d.Type.addOptionals (f[h - 2], f[h]);
                break;
              case 12:
                this.$ = f[h - 1], d.Type.addOptionals (this.$, f[h]);
                break;
              case 13:
                this.$ = f[h - 1], d.Type.addOptionals (this.$, f[h]);
                break;
              case 14:
                this.$ = new d.Type ("integer", f[h]);
                break;
              case 15:
                this.$ = new d.Type ("number", f[h]);
                break;
              case 16:
                this.$ = new d.Type ("boolean");
                break;
              case 17:
                this.$ = new d.Type ("null");
                break;
              case 18:
                this.$ = new d.Type ("any");
                break;
              case 19:
                this.$ = new d.Type ("array", f[h], f[h - 3], f[h - 1]);
                break;
              case 20:
                this.$ = new d.Type ("array", f[h], f[h - 3], f[h - 1]);
                break;
              case 21:
                this.$ = new d.Type ("object", null, f[h - 2], f[h]);
                break;
              case 22:
                this.$ = new d.Type (f[h - 1]);
                break;
              case 23:
                this.$ = new d.Type ("string", f[h]);
                break;
              case 24:
                this.$ = f[h], this.$.pattern = f[h - 1];
                break;
              case 25:
                this.$ = {enums: f[h - 4], defaultv: f[h - 3], requires: f[h - 2], optional: f[h - 1], extras: f[h]};
                break;
              case 26:
                this.$ = f[h - 2], this.$.push (f[h]);
                break;
              case 27:
                this.$ = [f[h]];
                break;
              case 28:
                this.$ = f[h - 1];
                break;
              case 29:
                this.$ = null;
                break;
              case 30:
                this.$ = f[h - 1];
                break;
              case 31:
                this.$ = null;
                break;
              case 32:
                this.$ = !0;
                break;
              case 33:
                this.$ = null;
                break;
              case 34:
                this.$ = !0;
                break;
              case 35:
                this.$ = null;
                break;
              case 37:
                this.$ = null;
                break;
              case 38:
                this.$ = f[h];
                break;
              case 39:
                this.$ = d.NOVALUE;
                break;
              case 40:
                this.$ = [f[h - 3], f[h - 1]];
                break;
              case 41:
                this.$ = [f[h - 2], null];
                break;
              case 42:
                this.$ = [null, f[h - 1]];
                break;
              case 43:
                this.$ = null;
                break;
              case 44:
                this.$ = null;
                break;
              case 46:
                this.$ = a;
                break;
              case 47:
                this.$ = a.substr (1, a.length - 2);
                break;
              case 48:
                this.$ = null;
                break;
              case 49:
                this.$ = a;
                break;
              case 50:
                this.$ = Number (a);
                break;
              case 51:
                this.$ = null;
                break;
              case 52:
                this.$ = !0;
                break;
              case 53:
                this.$ = !1;
                break;
              case 61:
                this.$ = {};
                break;
              case 62:
                this.$ = f[h - 1];
                break;
              case 63:
                this.$ = [f[h - 2], f[h]];
                break;
              case 64:
                this.$ = {}, this.$[f[h][0]] = f[h][1];
                break;
              case 65:
                this.$ = f[h - 2], f[h - 2][f[h][0]] = f[h][1];
                break;
              case 66:
                this.$ = [];
                break;
              case 67:
                this.$ = f[h - 1];
                break;
              case 68:
                this.$ = [f[h]];
                break;
              case 69:
                this.$ = f[h - 2], f[h - 2].push (f[h])
            }
          },
          table: [{
            3: 1,
            4: 2,
            6: 3,
            11: 4,
            14: 5,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {1: [3]}, {5: [1, 15]}, {5: [2, 3], 7: [1, 16]}, {
            5: [2, 37],
            7: [2, 37],
            13: 17,
            24: [2, 37],
            26: [1, 20],
            27: [2, 37],
            32: 18,
            39: [2, 37],
            41: [2, 37],
            43: [2, 37],
            45: 19,
            46: [2, 37]
          }, {
            5: [2, 48],
            7: [2, 48],
            15: 21,
            24: [2, 48],
            26: [2, 48],
            27: [2, 48],
            31: 22,
            39: [2, 48],
            41: [2, 48],
            43: [2, 48],
            46: [2, 48],
            51: [1, 23]
          }, {
            5: [2, 44],
            7: [2, 44],
            17: 24,
            23: [1, 25],
            24: [2, 44],
            26: [2, 44],
            27: [2, 44],
            39: [2, 44],
            41: [2, 44],
            43: [2, 44],
            46: [2, 44],
            50: [2, 44],
            52: [2, 44]
          }, {
            5: [2, 44],
            7: [2, 44],
            17: 26,
            23: [1, 25],
            24: [2, 44],
            26: [2, 44],
            27: [2, 44],
            39: [2, 44],
            41: [2, 44],
            43: [2, 44],
            46: [2, 44],
            50: [2, 44],
            52: [2, 44]
          }, {
            5: [2, 16],
            7: [2, 16],
            24: [2, 16],
            26: [2, 16],
            27: [2, 16],
            39: [2, 16],
            41: [2, 16],
            43: [2, 16],
            46: [2, 16],
            50: [2, 16],
            52: [2, 16]
          }, {
            5: [2, 17],
            7: [2, 17],
            24: [2, 17],
            26: [2, 17],
            27: [2, 17],
            39: [2, 17],
            41: [2, 17],
            43: [2, 17],
            46: [2, 17],
            50: [2, 17],
            52: [2, 17]
          }, {
            5: [2, 18],
            7: [2, 18],
            24: [2, 18],
            26: [2, 18],
            27: [2, 18],
            39: [2, 18],
            41: [2, 18],
            43: [2, 18],
            46: [2, 18],
            50: [2, 18],
            52: [2, 18]
          }, {23: [1, 27], 26: [1, 28]}, {23: [1, 29]}, {23: [1, 30]}, {
            5: [2, 44],
            7: [2, 44],
            17: 31,
            23: [1, 25],
            24: [2, 44],
            26: [2, 44],
            27: [2, 44],
            39: [2, 44],
            41: [2, 44],
            43: [2, 44],
            46: [2, 44],
            50: [2, 44],
            51: [2, 44],
            52: [2, 44]
          }, {1: [2, 1]}, {5: [2, 2]}, {5: [2, 12], 7: [2, 12], 24: [2, 12], 27: [2, 12]}, {
            5: [2, 39],
            7: [2, 39],
            24: [2, 39],
            27: [2, 39],
            33: 32,
            39: [2, 39],
            41: [2, 39],
            43: [2, 39],
            46: [1, 33]
          }, {
            5: [2, 36],
            7: [2, 36],
            24: [2, 36],
            27: [2, 36],
            39: [2, 36],
            41: [2, 36],
            43: [2, 36],
            46: [2, 36]
          }, {
            20: [1, 43],
            23: [1, 48],
            26: [1, 20],
            27: [1, 34],
            40: 41,
            45: 42,
            47: 36,
            48: 40,
            49: 39,
            52: [1, 46],
            53: [1, 47],
            54: 37,
            55: 38,
            56: [1, 44],
            57: [1, 45],
            62: 35
          }, {5: [2, 13], 7: [2, 13], 24: [2, 13], 27: [2, 13]}, {
            5: [2, 37],
            7: [2, 37],
            13: 49,
            24: [2, 37],
            26: [1, 20],
            27: [2, 37],
            32: 18,
            39: [2, 37],
            41: [2, 37],
            43: [2, 37],
            45: 19,
            46: [2, 37]
          }, {
            5: [2, 47],
            7: [2, 47],
            24: [2, 47],
            26: [2, 47],
            27: [2, 47],
            39: [2, 47],
            41: [2, 47],
            43: [2, 47],
            46: [2, 47]
          }, {
            5: [2, 14],
            7: [2, 14],
            24: [2, 14],
            26: [2, 14],
            27: [2, 14],
            39: [2, 14],
            41: [2, 14],
            43: [2, 14],
            46: [2, 14],
            50: [2, 14],
            52: [2, 14]
          }, {38: [1, 51], 48: 50, 53: [1, 47]}, {
            5: [2, 15],
            7: [2, 15],
            24: [2, 15],
            26: [2, 15],
            27: [2, 15],
            39: [2, 15],
            41: [2, 15],
            43: [2, 15],
            46: [2, 15],
            50: [2, 15],
            52: [2, 15]
          }, {
            6: 53,
            10: 52,
            11: 4,
            14: 5,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            24: [2, 9],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {
            6: 54,
            11: 4,
            14: 5,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {
            8: 55,
            9: 56,
            11: 57,
            14: 58,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            24: [2, 6],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {
            6: 53,
            10: 59,
            11: 4,
            14: 5,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            24: [2, 9],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {
            5: [2, 23],
            7: [2, 23],
            24: [2, 23],
            26: [2, 23],
            27: [2, 23],
            39: [2, 23],
            41: [2, 23],
            43: [2, 23],
            46: [2, 23],
            50: [2, 23],
            51: [2, 23],
            52: [2, 23]
          }, {
            5: [2, 31],
            7: [2, 31],
            24: [2, 31],
            27: [2, 31],
            34: 60,
            39: [2, 31],
            41: [1, 61],
            43: [2, 31]
          }, {
            20: [1, 43],
            23: [1, 48],
            26: [1, 20],
            40: 41,
            45: 42,
            47: 62,
            48: 40,
            49: 39,
            52: [1, 46],
            53: [1, 47],
            54: 37,
            55: 38,
            56: [1, 44],
            57: [1, 45]
          }, {
            5: [2, 66],
            7: [2, 66],
            24: [2, 66],
            27: [2, 66],
            38: [2, 66],
            39: [2, 66],
            41: [2, 66],
            43: [2, 66],
            46: [2, 66]
          }, {27: [1, 63], 38: [1, 64]}, {27: [2, 68], 38: [2, 68]}, {
            5: [2, 55],
            7: [2, 55],
            24: [2, 55],
            27: [2, 55],
            38: [2, 55],
            39: [2, 55],
            41: [2, 55],
            43: [2, 55]
          }, {
            5: [2, 56],
            7: [2, 56],
            24: [2, 56],
            27: [2, 56],
            38: [2, 56],
            39: [2, 56],
            41: [2, 56],
            43: [2, 56]
          }, {
            5: [2, 57],
            7: [2, 57],
            24: [2, 57],
            27: [2, 57],
            38: [2, 57],
            39: [2, 57],
            41: [2, 57],
            43: [2, 57]
          }, {
            5: [2, 58],
            7: [2, 58],
            24: [2, 58],
            27: [2, 58],
            38: [2, 58],
            39: [2, 58],
            41: [2, 58],
            43: [2, 58]
          }, {
            5: [2, 59],
            7: [2, 59],
            24: [2, 59],
            27: [2, 59],
            38: [2, 59],
            39: [2, 59],
            41: [2, 59],
            43: [2, 59]
          }, {
            5: [2, 60],
            7: [2, 60],
            24: [2, 60],
            27: [2, 60],
            38: [2, 60],
            39: [2, 60],
            41: [2, 60],
            43: [2, 60]
          }, {
            5: [2, 51],
            7: [2, 51],
            24: [2, 51],
            27: [2, 51],
            38: [2, 51],
            39: [2, 51],
            41: [2, 51],
            43: [2, 51]
          }, {
            5: [2, 52],
            7: [2, 52],
            24: [2, 52],
            27: [2, 52],
            38: [2, 52],
            39: [2, 52],
            41: [2, 52],
            43: [2, 52]
          }, {
            5: [2, 53],
            7: [2, 53],
            24: [2, 53],
            27: [2, 53],
            38: [2, 53],
            39: [2, 53],
            41: [2, 53],
            43: [2, 53]
          }, {
            5: [2, 49],
            7: [2, 49],
            24: [2, 49],
            26: [2, 49],
            27: [2, 49],
            38: [2, 49],
            39: [2, 49],
            41: [2, 49],
            42: [2, 49],
            43: [2, 49],
            46: [2, 49],
            51: [2, 49],
            61: [2, 49]
          }, {
            5: [2, 50],
            7: [2, 50],
            24: [2, 50],
            27: [2, 50],
            38: [2, 50],
            39: [2, 50],
            41: [2, 50],
            43: [2, 50]
          }, {24: [1, 65], 49: 68, 52: [1, 46], 59: 66, 60: 67}, {
            5: [2, 24],
            7: [2, 24],
            24: [2, 24],
            27: [2, 24]
          }, {38: [1, 69]}, {24: [1, 71], 48: 70, 53: [1, 47]}, {24: [1, 72]}, {
            7: [1, 73],
            24: [2, 8]
          }, {27: [1, 74]}, {24: [1, 75]}, {7: [1, 76], 24: [2, 5]}, {12: 77, 49: 78, 50: [1, 79], 52: [1, 46]}, {
            12: 80,
            49: 78,
            50: [1, 79],
            52: [1, 46]
          }, {24: [1, 81]}, {5: [2, 33], 7: [2, 33], 24: [2, 33], 27: [2, 33], 35: 82, 39: [2, 33], 43: [1, 83]}, {
            12: 85,
            37: 84,
            49: 78,
            50: [1, 79],
            52: [1, 46]
          }, {5: [2, 38], 7: [2, 38], 24: [2, 38], 27: [2, 38], 39: [2, 38], 41: [2, 38], 43: [2, 38]}, {
            5: [2, 67],
            7: [2, 67],
            24: [2, 67],
            27: [2, 67],
            38: [2, 67],
            39: [2, 67],
            41: [2, 67],
            43: [2, 67],
            46: [2, 67]
          }, {
            20: [1, 43],
            23: [1, 48],
            26: [1, 20],
            40: 41,
            45: 42,
            47: 86,
            48: 40,
            49: 39,
            52: [1, 46],
            53: [1, 47],
            54: 37,
            55: 38,
            56: [1, 44],
            57: [1, 45]
          }, {
            5: [2, 61],
            7: [2, 61],
            24: [2, 61],
            27: [2, 61],
            38: [2, 61],
            39: [2, 61],
            41: [2, 61],
            43: [2, 61]
          }, {24: [1, 87], 38: [1, 88]}, {24: [2, 64], 38: [2, 64]}, {61: [1, 89]}, {
            24: [1, 91],
            48: 90,
            53: [1, 47]
          }, {24: [1, 92]}, {
            5: [2, 43],
            7: [2, 43],
            24: [2, 43],
            26: [2, 43],
            27: [2, 43],
            39: [2, 43],
            41: [2, 43],
            43: [2, 43],
            46: [2, 43],
            50: [2, 43],
            51: [2, 43],
            52: [2, 43]
          }, {
            5: [2, 35],
            7: [2, 35],
            23: [2, 35],
            24: [2, 35],
            25: 93,
            26: [2, 35],
            27: [2, 35],
            39: [2, 35],
            41: [2, 35],
            43: [2, 35],
            44: [1, 94],
            46: [2, 35],
            50: [2, 35],
            52: [2, 35]
          }, {
            6: 53,
            10: 95,
            11: 4,
            14: 5,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            24: [2, 9],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {
            5: [2, 35],
            7: [2, 35],
            23: [2, 35],
            24: [2, 35],
            25: 96,
            26: [2, 35],
            27: [2, 35],
            39: [2, 35],
            41: [2, 35],
            43: [2, 35],
            44: [1, 94],
            46: [2, 35],
            50: [2, 35],
            52: [2, 35]
          }, {
            5: [2, 35],
            7: [2, 35],
            24: [2, 35],
            25: 97,
            26: [2, 35],
            27: [2, 35],
            39: [2, 35],
            41: [2, 35],
            43: [2, 35],
            44: [1, 94],
            46: [2, 35],
            50: [2, 35],
            52: [2, 35]
          }, {
            8: 98,
            9: 56,
            11: 57,
            14: 58,
            16: [1, 6],
            18: [1, 7],
            19: [1, 8],
            20: [1, 9],
            21: [1, 10],
            22: [1, 11],
            24: [2, 6],
            28: [1, 12],
            29: [1, 13],
            30: [1, 14]
          }, {
            7: [2, 37],
            13: 99,
            24: [2, 37],
            26: [1, 20],
            32: 18,
            39: [2, 37],
            41: [2, 37],
            43: [2, 37],
            45: 19,
            46: [2, 37]
          }, {
            7: [2, 45],
            24: [2, 45],
            26: [2, 45],
            38: [2, 45],
            39: [2, 45],
            41: [2, 45],
            42: [2, 45],
            43: [2, 45],
            46: [2, 45],
            51: [2, 45]
          }, {
            7: [2, 46],
            24: [2, 46],
            26: [2, 46],
            38: [2, 46],
            39: [2, 46],
            41: [2, 46],
            42: [2, 46],
            43: [2, 46],
            46: [2, 46],
            51: [2, 46]
          }, {
            7: [2, 48],
            15: 100,
            24: [2, 48],
            26: [2, 48],
            31: 22,
            39: [2, 48],
            41: [2, 48],
            43: [2, 48],
            46: [2, 48],
            51: [1, 23]
          }, {
            5: [2, 22],
            7: [2, 22],
            24: [2, 22],
            26: [2, 22],
            27: [2, 22],
            39: [2, 22],
            41: [2, 22],
            43: [2, 22],
            46: [2, 22],
            50: [2, 22],
            52: [2, 22]
          }, {5: [2, 29], 7: [2, 29], 24: [2, 29], 27: [2, 29], 36: 101, 39: [1, 102]}, {
            5: [2, 32],
            7: [2, 32],
            24: [2, 32],
            27: [2, 32],
            39: [2, 32]
          }, {38: [1, 104], 42: [1, 103]}, {38: [2, 27], 42: [2, 27]}, {27: [2, 69], 38: [2, 69]}, {
            5: [2, 62],
            7: [2, 62],
            24: [2, 62],
            27: [2, 62],
            38: [2, 62],
            39: [2, 62],
            41: [2, 62],
            43: [2, 62]
          }, {49: 68, 52: [1, 46], 60: 105}, {
            20: [1, 43],
            23: [1, 48],
            26: [1, 20],
            40: 41,
            45: 42,
            47: 106,
            48: 40,
            49: 39,
            52: [1, 46],
            53: [1, 47],
            54: 37,
            55: 38,
            56: [1, 44],
            57: [1, 45]
          }, {24: [1, 107]}, {
            5: [2, 41],
            7: [2, 41],
            24: [2, 41],
            26: [2, 41],
            27: [2, 41],
            39: [2, 41],
            41: [2, 41],
            43: [2, 41],
            46: [2, 41],
            50: [2, 41],
            51: [2, 41],
            52: [2, 41]
          }, {
            5: [2, 42],
            7: [2, 42],
            24: [2, 42],
            26: [2, 42],
            27: [2, 42],
            39: [2, 42],
            41: [2, 42],
            43: [2, 42],
            46: [2, 42],
            50: [2, 42],
            51: [2, 42],
            52: [2, 42]
          }, {
            5: [2, 44],
            7: [2, 44],
            17: 108,
            23: [1, 25],
            24: [2, 44],
            26: [2, 44],
            27: [2, 44],
            39: [2, 44],
            41: [2, 44],
            43: [2, 44],
            46: [2, 44],
            50: [2, 44],
            52: [2, 44]
          }, {
            5: [2, 34],
            7: [2, 34],
            23: [2, 34],
            24: [2, 34],
            26: [2, 34],
            27: [2, 34],
            39: [2, 34],
            41: [2, 34],
            43: [2, 34],
            46: [2, 34],
            50: [2, 34],
            52: [2, 34]
          }, {24: [2, 7]}, {
            5: [2, 44],
            7: [2, 44],
            17: 109,
            23: [1, 25],
            24: [2, 44],
            26: [2, 44],
            27: [2, 44],
            39: [2, 44],
            41: [2, 44],
            43: [2, 44],
            46: [2, 44],
            50: [2, 44],
            52: [2, 44]
          }, {
            5: [2, 21],
            7: [2, 21],
            24: [2, 21],
            26: [2, 21],
            27: [2, 21],
            39: [2, 21],
            41: [2, 21],
            43: [2, 21],
            46: [2, 21],
            50: [2, 21],
            52: [2, 21]
          }, {24: [2, 4]}, {7: [2, 10], 24: [2, 10]}, {7: [2, 11], 24: [2, 11]}, {
            5: [2, 25],
            7: [2, 25],
            24: [2, 25],
            27: [2, 25]
          }, {23: [1, 48], 40: 110}, {
            5: [2, 30],
            7: [2, 30],
            24: [2, 30],
            27: [2, 30],
            39: [2, 30],
            43: [2, 30]
          }, {12: 111, 49: 78, 50: [1, 79], 52: [1, 46]}, {24: [2, 65], 38: [2, 65]}, {
            24: [2, 63],
            38: [2, 63]
          }, {
            5: [2, 40],
            7: [2, 40],
            24: [2, 40],
            26: [2, 40],
            27: [2, 40],
            39: [2, 40],
            41: [2, 40],
            43: [2, 40],
            46: [2, 40],
            50: [2, 40],
            51: [2, 40],
            52: [2, 40]
          }, {
            5: [2, 19],
            7: [2, 19],
            24: [2, 19],
            26: [2, 19],
            27: [2, 19],
            39: [2, 19],
            41: [2, 19],
            43: [2, 19],
            46: [2, 19],
            50: [2, 19],
            52: [2, 19]
          }, {
            5: [2, 20],
            7: [2, 20],
            24: [2, 20],
            26: [2, 20],
            27: [2, 20],
            39: [2, 20],
            41: [2, 20],
            43: [2, 20],
            46: [2, 20],
            50: [2, 20],
            52: [2, 20]
          }, {39: [1, 112]}, {38: [2, 26], 42: [2, 26]}, {5: [2, 28], 7: [2, 28], 24: [2, 28], 27: [2, 28]}],
          defaultActions: {15: [2, 1], 16: [2, 2], 95: [2, 7], 98: [2, 4]},
          parseError: function (a, b) {
            throw new Error (a)
          },
          parse: function (a) {
            function o () {
              var a;
              a = b.lexer.lex () || 1, typeof a != "number" && (a = b.symbols_[a] || a);
              return a
            }

            function n (a) {
              c.length = c.length - 2 * a, d.length = d.length - a, e.length = e.length - a
            }

            var b = this, c = [0], d = [null], e = [], f = this.table, g = "", h = 0, i = 0, j = 0, k = 2, l = 1;
            this.lexer.setInput (a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
            var m = this.lexer.yylloc;
            e.push (m), typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
            var p, q, r, s, t, u, v = {}, w, x, y, z;
            for (; ;) {
              r = c[c.length - 1], this.defaultActions[r] ? s = this.defaultActions[r] : (p == null && (p = o ()), s = f[r] && f[r][p]);
              if (typeof s == "undefined" || !s.length || !s[0]) {
                if (!j) {
                  z = [];
                  for (w in f[r])this.terminals_[w] && w > 2 && z.push ("'" + this.terminals_[w] + "'");
                  var A = "";
                  this.lexer.showPosition ? A = "Parse error on line " + (h + 1) + ":\n" + this.lexer.showPosition () + "\nExpecting " + z.join (", ") : A = "Parse error on line " + (h + 1) + ": Unexpected " + (p == 1 ? "end of input" : "'" + (this.terminals_[p] || p) + "'"), this.parseError (A, {
                    text: this.lexer.match,
                    token: this.terminals_[p] || p,
                    line: this.lexer.yylineno,
                    loc: m,
                    expected: z
                  })
                }
                if (j == 3) {
                  if (p == l)throw new Error (A || "Parsing halted.");
                  i = this.lexer.yyleng, g = this.lexer.yytext, h = this.lexer.yylineno, m = this.lexer.yylloc, p = o ()
                }
                for (; ;) {
                  if (k.toString () in f[r])break;
                  if (r == 0)throw new Error (A || "Parsing halted.");
                  n (1), r = c[c.length - 1]
                }
                q = p, p = k, r = c[c.length - 1], s = f[r] && f[r][k], j = 3
              }
              if (s[0] instanceof Array && s.length > 1)throw new Error ("Parse Error: multiple actions possible at state: " + r + ", token: " + p);
              switch (s[0]) {
                case 1:
                  c.push (p), d.push (this.lexer.yytext), e.push (this.lexer.yylloc), c.push (s[1]), p = null, q ? (p = q, q = null) : (i = this.lexer.yyleng, g = this.lexer.yytext, h = this.lexer.yylineno, m = this.lexer.yylloc, j > 0 && j--);
                  break;
                case 2:
                  x = this.productions_[s[1]][1], v.$ = d[d.length - x], v._$ = {
                    first_line: e[e.length - (x || 1)].first_line,
                    last_line: e[e.length - 1].last_line,
                    first_column: e[e.length - (x || 1)].first_column,
                    last_column: e[e.length - 1].last_column
                  }, u = this.performAction.call (v, g, i, h, this.yy, s[1], d, e);
                  if (typeof u != "undefined")return u;
                  x && (c = c.slice (0, -1 * x * 2), d = d.slice (0, -1 * x), e = e.slice (0, -1 * x)), c.push (this.productions_[s[1]][0]), d.push (v.$), e.push (v._$), y = f[c[c.length - 2]][c[c.length - 1]], c.push (y);
                  break;
                case 3:
                  return !0
              }
            }
            return !0
          }
        }, f = function () {
          var a = {
            EOF: 1, parseError: function (a, b) {
              if (this.yy.parseError)this.yy.parseError (a, b); else throw new Error (a)
            }, setInput: function (a) {
              this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0
              };
              return this
            }, input: function () {
              var a = this._input[0];
              this.yytext += a, this.yyleng++, this.match += a, this.matched += a;
              var b = a.match (/\n/);
              b && this.yylineno++, this._input = this._input.slice (1);
              return a
            }, unput: function (a) {
              this._input = a + this._input;
              return this
            }, more: function () {
              this._more = !0;
              return this
            }, pastInput: function () {
              var a = this.matched.substr (0, this.matched.length - this.match.length);
              return (a.length > 20 ? "..." : "") + a.substr (-20).replace (/\n/g, "")
            }, upcomingInput: function () {
              var a = this.match;
              a.length < 20 && (a += this._input.substr (0, 20 - a.length));
              return (a.substr (0, 20) + (a.length > 20 ? "..." : "")).replace (/\n/g, "")
            }, showPosition: function () {
              var a = this.pastInput (), b = Array (a.length + 1).join ("-");
              return a + this.upcomingInput () + "\n" + b + "^"
            }, next: function () {
              if (this.done)return this.EOF;
              this._input || (this.done = !0);
              var a, b, c, d;
              this._more || (this.yytext = "", this.match = "");
              var e = this._currentRules ();
              for (var f = 0; f < e.length; f++) {
                b = this._input.match (this.rules[e[f]]);
                if (b) {
                  d = b[0].match (/\n.*/g), d && (this.yylineno += d.length), this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: d ? d[d.length - 1].length - 1 : this.yylloc.last_column + b[0].length
                  }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice (b[0].length), this.matched += b[0], a = this.performAction.call (this, this.yy, this, e[f], this.conditionStack[this.conditionStack.length - 1]);
                  if (a)return a;
                  return
                }
              }
              if (this._input === "")return this.EOF;
              this.parseError ("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition (), {
                text: "",
                token: null,
                line: this.yylineno
              })
            }, lex: function () {
              var a = this.next ();
              return typeof a != "undefined" ? a : this.lex ()
            }, begin: function (a) {
              this.conditionStack.push (a)
            }, popState: function () {
              return this.conditionStack.pop ()
            }, _currentRules: function () {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
            }
          };
          a.performAction = function (a, b, c, d) {
            var e = d;
            switch (c) {
              case 0:
                break;
              case 1:
                break;
              case 2:
                break;
              case 3:
                return 7;
              case 4:
                return 38;
              case 5:
                return 23;
              case 6:
                return 24;
              case 7:
                return 26;
              case 8:
                return 27;
              case 9:
                return 39;
              case 10:
                return 41;
              case 11:
                return 42;
              case 12:
                return 61;
              case 13:
                return 28;
              case 14:
                return 16;
              case 15:
                return 18;
              case 16:
                return 20;
              case 17:
                return 19;
              case 18:
                return 21;
              case 19:
                return 22;
              case 20:
                return 29;
              case 21:
                return 30;
              case 22:
                return 56;
              case 23:
                return 57;
              case 24:
                b.yytext = b.yytext.substr (1, b.yyleng - 2);
                return 52;
              case 25:
                return 53;
              case 26:
                return 50;
              case 27:
                return 43;
              case 28:
                return 44;
              case 29:
                return 46;
              case 30:
                return 51;
              case 31:
                return 5
            }
          }, a.rules = [/^\s+/, /^\/\/[^\n]*/, /^#[^\n]*/, /^;/, /^,/, /^\{/, /^\}/, /^\[/, /^\]/, /^`/, /^</, /^>/, /^:/, /^object\b/, /^integer\b/, /^number\b/, /^null\b/, /^boolean\b/, /^any\b/, /^array\b/, /^union\b/, /^string\b/, /^true\b/, /^false\b/, /^"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/, /^-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/, /^[A-Za-z_0-9-]+/, /^\?/, /^\*/, /^=/, /^\/(?:[^\/]|\\\/)*\//, /^$/], a.conditions = {
            INITIAL: {
              rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
              inclusive: !0
            }
          };
          return a
        } ();
        a.lexer = f;
        return a
      } ();
      typeof a != "undefined" && typeof b != "undefined" && (b.parser = d, b.parse = function () {
        return d.parse.apply (d, arguments)
      }, b.main = function (c) {
        if (!c[1])throw new Error ("Usage: " + c[0] + " FILE");
        if (typeof process != "undefined")var d = a ("fs").readFileSync (a ("path").join (process.cwd (), c[1]), "utf8"); else var e = a ("file").path (a ("file").cwd ()), d = e.join (c[1]).read ({charset: "utf-8"});
        return b.parser.parse (d)
      }, typeof c != "undefined" && a.main === c && b.main (typeof process != "undefined" ? process.argv.slice (1) : a ("system").args))
    }, requires: ["fs", "path", "file", "file", "system"]
  }), a.def ("scope", {
    factory: function (a, b, c) {
      if (typeof a != "undefined")var d = b; else var d = parser.yy;
      d.NOVALUE = {}, d.Type = function () {
        return this.init.apply (this, arguments)
      }, d.Type.prototype = {
        init: function (a, b, c, d) {
          this.json = {}, this.json.type = a;
          if (a instanceof Array && a.length < 2)throw new Error ("must have at least two members in a union");
          b && this.addRange (b), c && (this.addEntries (c), !d && (c.length || c.type) && (this.json.additionalProperties = !1));
          return this.json
        }, addEntries: function (a) {
          if (this.json.type !== "array" || a instanceof Array && !(a.length > 0)) {
            if (a.length) {
              this.json.properties = {};
              for (var b = 0; b < a.length; b++)this.json.properties[a[b][0]] = a[b][1]
            }
          } else this.json.items = a
        }, addRange: function (a) {
          var b = this.json.type === "array" ? "Items" : this.json.type === "string" ? "Length" : "imum";
          a[0] !== null && (this.json["min" + b] = a[0]), a[1] !== null && (this.json["max" + b] = a[1])
        }
      }, d.Type.addOptionals = function (a, b) {
        if (b.extras) {
          var c;
          for (c in b.extras)b.extras.hasOwnProperty (c) && (a[c] = b.extras[c])
        }
        b.optional && (a.optional = !0), b.enums && (a["enum"] = b.enums), b.requires && (a.requires = b.requires.length > 1 ? b.requires : b.requires[0]), b.defaultv !== d.NOVALUE && (a["default"] = b.defaultv), b.pattern && (a.pattern = b.pattern)
      }
    }, requires: []
  });
  return a ("orderly")
} ()