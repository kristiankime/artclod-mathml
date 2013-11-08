if(!ARTC){
    var ARTC = {};
}

ARTC.txt2Num = (function(){
    /*
     * Generated by PEG.js 0.7.0.
     *
     * http://pegjs.majda.cz/
     */
    
    function quote(s) {
      /*
       * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
       * string literal except for the closing quote character, backslash,
       * carriage return, line separator, paragraph separator, and line feed.
       * Any character may appear in the form of an escape sequence.
       *
       * For portability, we also escape escape all control and non-ASCII
       * characters. Note that "\0" and "\v" escape sequences are not used
       * because JSHint does not like the first and IE the second.
       */
       return '"' + s
        .replace(/\\/g, '\\\\')  // backslash
        .replace(/"/g, '\\"')    // closing quote character
        .replace(/\x08/g, '\\b') // backspace
        .replace(/\t/g, '\\t')   // horizontal tab
        .replace(/\n/g, '\\n')   // line feed
        .replace(/\f/g, '\\f')   // form feed
        .replace(/\r/g, '\\r')   // carriage return
        .replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g, escape)
        + '"';
    }
    
    var result = {
      /*
       * Parses the input with a generated parser. If the parsing is successfull,
       * returns a value explicitly or implicitly specified by the grammar from
       * which the parser was generated (see |PEG.buildParser|). If the parsing is
       * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
       */
      parse: function(input, startRule) {
        var parseFunctions = {
          "Term_AddSub": parse_Term_AddSub,
          "Add": parse_Add,
          "Sub": parse_Sub,
          "Term_MulDiv": parse_Term_MulDiv,
          "Mul": parse_Mul,
          "Div": parse_Div,
          "Term_Exp": parse_Term_Exp,
          "Exp": parse_Exp,
          "Term_Parens": parse_Term_Parens,
          "Parens": parse_Parens,
          "Term_Functions": parse_Term_Functions,
          "Functions": parse_Functions,
          "exp": parse_exp,
          "log": parse_log,
          "Primary": parse_Primary,
          "Neg": parse_Neg,
          "Number": parse_Number,
          "Scientific": parse_Scientific,
          "Floating": parse_Floating,
          "Integer": parse_Integer,
          "Unsigned": parse_Unsigned,
          "Sign": parse_Sign,
          "ws": parse_ws
        };
        
        if (startRule !== undefined) {
          if (parseFunctions[startRule] === undefined) {
            throw new Error("Invalid rule name: " + quote(startRule) + ".");
          }
        } else {
          startRule = "Term_AddSub";
        }
        
        var pos = 0;
        var reportFailures = 0;
        var rightmostFailuresPos = 0;
        var rightmostFailuresExpected = [];
        
        function padLeft(input, padding, length) {
          var result = input;
          
          var padLength = length - input.length;
          for (var i = 0; i < padLength; i++) {
            result = padding + result;
          }
          
          return result;
        }
        
        function escape(ch) {
          var charCode = ch.charCodeAt(0);
          var escapeChar;
          var length;
          
          if (charCode <= 0xFF) {
            escapeChar = 'x';
            length = 2;
          } else {
            escapeChar = 'u';
            length = 4;
          }
          
          return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
        }
        
        function matchFailed(failure) {
          if (pos < rightmostFailuresPos) {
            return;
          }
          
          if (pos > rightmostFailuresPos) {
            rightmostFailuresPos = pos;
            rightmostFailuresExpected = [];
          }
          
          rightmostFailuresExpected.push(failure);
        }
        
        function parse_Term_AddSub() {
          var result0, result1, result2, result3;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Term_MulDiv();
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = [];
              result3 = parse_Add();
              if (result3 === null) {
                result3 = parse_Sub();
              }
              while (result3 !== null) {
                result2.push(result3);
                result3 = parse_Add();
                if (result3 === null) {
                  result3 = parse_Sub();
                }
              }
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, s, v) { for(var r = s, i=0; i<v.length; i++){ r += v[i]; }; return r; })(pos0, result0[0], result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Add() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 43) {
            result0 = "+";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"+\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Term_MulDiv();
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return v; })(pos0, result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Sub() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 45) {
            result0 = "-";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"-\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Term_MulDiv();
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return -1 * v; })(pos0, result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Term_MulDiv() {
          var result0, result1, result2, result3;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Term_Exp();
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = [];
              result3 = parse_Mul();
              if (result3 === null) {
                result3 = parse_Div();
              }
              while (result3 !== null) {
                result2.push(result3);
                result3 = parse_Mul();
                if (result3 === null) {
                  result3 = parse_Div();
                }
              }
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, s, v) { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; } return r; })(pos0, result0[0], result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Mul() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 42) {
            result0 = "*";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"*\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Term_Exp();
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return v; })(pos0, result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Div() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 47) {
            result0 = "/";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"/\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Term_Exp();
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return 1 / v; })(pos0, result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Term_Exp() {
          var result0, result1, result2, result3;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Term_Parens();
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = [];
              result3 = parse_Exp();
              while (result3 !== null) {
                result2.push(result3);
                result3 = parse_Exp();
              }
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, s, v) { for(var r = s, i=0; i<v.length; i++){ r = Math.pow(r, v[i]); }; return r; })(pos0, result0[0], result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Exp() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 94) {
            result0 = "^";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"^\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Primary();
              if (result2 !== null) {
                result0 = [result0, result1, result2];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return v; })(pos0, result0[2]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Term_Parens() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Term_Functions();
          if (result0 !== null) {
            result1 = [];
            result2 = parse_Parens();
            while (result2 !== null) {
              result1.push(result2);
              result2 = parse_Parens();
            }
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, s, v) { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; }; return r; })(pos0, result0[0], result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Parens() {
          var result0, result1, result2, result3, result4, result5;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_ws();
          if (result0 !== null) {
            if (input.charCodeAt(pos) === 40) {
              result1 = "(";
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\"(\"");
              }
            }
            if (result1 !== null) {
              result2 = parse_ws();
              if (result2 !== null) {
                result3 = parse_Term_AddSub();
                if (result3 !== null) {
                  result4 = parse_ws();
                  if (result4 !== null) {
                    if (input.charCodeAt(pos) === 41) {
                      result5 = ")";
                      pos++;
                    } else {
                      result5 = null;
                      if (reportFailures === 0) {
                        matchFailed("\")\"");
                      }
                    }
                    if (result5 !== null) {
                      result0 = [result0, result1, result2, result3, result4, result5];
                    } else {
                      result0 = null;
                      pos = pos1;
                    }
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return v; })(pos0, result0[3]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Term_Functions() {
          var result0, result1, result2;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Primary();
          if (result0 !== null) {
            result1 = [];
            result2 = parse_Functions();
            while (result2 !== null) {
              result1.push(result2);
              result2 = parse_Functions();
            }
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, s, v) { for(var r = s, i=0; i<v.length; i++){ r *= v[i]; }; return r; })(pos0, result0[0], result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Functions() {
          var result0;
          
          result0 = parse_exp();
          if (result0 === null) {
            result0 = parse_log();
          }
          return result0;
        }
        
        function parse_exp() {
          var result0, result1, result2, result3, result4, result5, result6;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.substr(pos, 4) === "exp(") {
            result0 = "exp(";
            pos += 4;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"exp(\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Term_AddSub();
              if (result2 !== null) {
                result3 = parse_ws();
                if (result3 !== null) {
                  if (input.charCodeAt(pos) === 44) {
                    result4 = ",";
                    pos++;
                  } else {
                    result4 = null;
                    if (reportFailures === 0) {
                      matchFailed("\",\"");
                    }
                  }
                  if (result4 !== null) {
                    result5 = parse_Term_AddSub();
                    if (result5 !== null) {
                      if (input.charCodeAt(pos) === 41) {
                        result6 = ")";
                        pos++;
                      } else {
                        result6 = null;
                        if (reportFailures === 0) {
                          matchFailed("\")\"");
                        }
                      }
                      if (result6 !== null) {
                        result0 = [result0, result1, result2, result3, result4, result5, result6];
                      } else {
                        result0 = null;
                        pos = pos1;
                      }
                    } else {
                      result0 = null;
                      pos = pos1;
                    }
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, b, e) { return Math.pow(b, e); })(pos0, result0[2], result0[5]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_log() {
          var result0, result1, result2, result3, result4, result5, result6;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.substr(pos, 4) === "log(") {
            result0 = "log(";
            pos += 4;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"log(\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_ws();
            if (result1 !== null) {
              result2 = parse_Number();
              if (result2 !== null) {
                result3 = parse_ws();
                if (result3 !== null) {
                  if (input.charCodeAt(pos) === 44) {
                    result4 = ",";
                    pos++;
                  } else {
                    result4 = null;
                    if (reportFailures === 0) {
                      matchFailed("\",\"");
                    }
                  }
                  if (result4 !== null) {
                    result5 = parse_Term_AddSub();
                    if (result5 !== null) {
                      if (input.charCodeAt(pos) === 41) {
                        result6 = ")";
                        pos++;
                      } else {
                        result6 = null;
                        if (reportFailures === 0) {
                          matchFailed("\")\"");
                        }
                      }
                      if (result6 !== null) {
                        result0 = [result0, result1, result2, result3, result4, result5, result6];
                      } else {
                        result0 = null;
                        pos = pos1;
                      }
                    } else {
                      result0 = null;
                      pos = pos1;
                    }
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, b, v) { return Math.log(v) / Math.log(b); })(pos0, result0[2], result0[5]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Primary() {
          var result0, result1;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_ws();
          if (result0 !== null) {
            result1 = parse_Functions();
            if (result1 === null) {
              result1 = parse_Parens();
              if (result1 === null) {
                result1 = parse_Number();
                if (result1 === null) {
                  result1 = parse_Neg();
                }
              }
            }
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return v; })(pos0, result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Neg() {
          var result0, result1;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 45) {
            result0 = "-";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"-\"");
            }
          }
          if (result0 !== null) {
            result1 = parse_Primary();
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, v) { return -1 * v; })(pos0, result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Number() {
          var result0;
          var pos0;
          
          pos0 = pos;
          result0 = parse_Scientific();
          if (result0 !== null) {
            result0 = (function(offset, s) { return parseFloat(s); })(pos0, result0);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Scientific() {
          var result0, result1, result2;
          var pos0, pos1, pos2;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Floating();
          if (result0 !== null) {
            pos2 = pos;
            if (input.charCodeAt(pos) === 101) {
              result1 = "e";
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\"e\"");
              }
            }
            if (result1 === null) {
              if (input.charCodeAt(pos) === 69) {
                result1 = "E";
                pos++;
              } else {
                result1 = null;
                if (reportFailures === 0) {
                  matchFailed("\"E\"");
                }
              }
            }
            if (result1 !== null) {
              result2 = parse_Integer();
              if (result2 !== null) {
                result1 = [result1, result2];
              } else {
                result1 = null;
                pos = pos2;
              }
            } else {
              result1 = null;
              pos = pos2;
            }
            result1 = result1 !== null ? result1 : "";
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, f, s) { return f + (s ? s[0] + s[1]: ""); })(pos0, result0[0], result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Floating() {
          var result0, result1, result2;
          var pos0, pos1, pos2;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Integer();
          if (result0 !== null) {
            pos2 = pos;
            if (input.charCodeAt(pos) === 46) {
              result1 = ".";
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\".\"");
              }
            }
            if (result1 !== null) {
              result2 = parse_Unsigned();
              if (result2 !== null) {
                result1 = [result1, result2];
              } else {
                result1 = null;
                pos = pos2;
              }
            } else {
              result1 = null;
              pos = pos2;
            }
            result1 = result1 !== null ? result1 : "";
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, i, u) { return i + (u ? u[0] + u[1].join("") : ""); })(pos0, result0[0], result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Integer() {
          var result0, result1;
          var pos0, pos1;
          
          pos0 = pos;
          pos1 = pos;
          result0 = parse_Sign();
          result0 = result0 !== null ? result0 : "";
          if (result0 !== null) {
            result1 = parse_Unsigned();
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, s, u) { return (s ? s : "") + u.join(""); })(pos0, result0[0], result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
          return result0;
        }
        
        function parse_Unsigned() {
          var result0, result1;
          
          if (/^[0-9]/.test(input.charAt(pos))) {
            result1 = input.charAt(pos);
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("[0-9]");
            }
          }
          if (result1 !== null) {
            result0 = [];
            while (result1 !== null) {
              result0.push(result1);
              if (/^[0-9]/.test(input.charAt(pos))) {
                result1 = input.charAt(pos);
                pos++;
              } else {
                result1 = null;
                if (reportFailures === 0) {
                  matchFailed("[0-9]");
                }
              }
            }
          } else {
            result0 = null;
          }
          return result0;
        }
        
        function parse_Sign() {
          var result0;
          
          if (input.charCodeAt(pos) === 45) {
            result0 = "-";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"-\"");
            }
          }
          if (result0 === null) {
            if (input.charCodeAt(pos) === 43) {
              result0 = "+";
              pos++;
            } else {
              result0 = null;
              if (reportFailures === 0) {
                matchFailed("\"+\"");
              }
            }
          }
          return result0;
        }
        
        function parse_ws() {
          var result0, result1;
          
          reportFailures++;
          result0 = [];
          if (/^[ \t\n\r]/.test(input.charAt(pos))) {
            result1 = input.charAt(pos);
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("[ \\t\\n\\r]");
            }
          }
          while (result1 !== null) {
            result0.push(result1);
            if (/^[ \t\n\r]/.test(input.charAt(pos))) {
              result1 = input.charAt(pos);
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("[ \\t\\n\\r]");
              }
            }
          }
          reportFailures--;
          if (reportFailures === 0 && result0 === null) {
            matchFailed("whitespace");
          }
          return result0;
        }
        
        
        function cleanupExpected(expected) {
          expected.sort();
          
          var lastExpected = null;
          var cleanExpected = [];
          for (var i = 0; i < expected.length; i++) {
            if (expected[i] !== lastExpected) {
              cleanExpected.push(expected[i]);
              lastExpected = expected[i];
            }
          }
          return cleanExpected;
        }
        
        function computeErrorPosition() {
          /*
           * The first idea was to use |String.split| to break the input up to the
           * error position along newlines and derive the line and column from
           * there. However IE's |split| implementation is so broken that it was
           * enough to prevent it.
           */
          
          var line = 1;
          var column = 1;
          var seenCR = false;
          
          for (var i = 0; i < Math.max(pos, rightmostFailuresPos); i++) {
            var ch = input.charAt(i);
            if (ch === "\n") {
              if (!seenCR) { line++; }
              column = 1;
              seenCR = false;
            } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
              line++;
              column = 1;
              seenCR = true;
            } else {
              column++;
              seenCR = false;
            }
          }
          
          return { line: line, column: column };
        }
        
        
        var result = parseFunctions[startRule]();
        
        /*
         * The parser is now in one of the following three states:
         *
         * 1. The parser successfully parsed the whole input.
         *
         *    - |result !== null|
         *    - |pos === input.length|
         *    - |rightmostFailuresExpected| may or may not contain something
         *
         * 2. The parser successfully parsed only a part of the input.
         *
         *    - |result !== null|
         *    - |pos < input.length|
         *    - |rightmostFailuresExpected| may or may not contain something
         *
         * 3. The parser did not successfully parse any part of the input.
         *
         *   - |result === null|
         *   - |pos === 0|
         *   - |rightmostFailuresExpected| contains at least one failure
         *
         * All code following this comment (including called functions) must
         * handle these states.
         */
        if (result === null || pos !== input.length) {
          var offset = Math.max(pos, rightmostFailuresPos);
          var found = offset < input.length ? input.charAt(offset) : null;
          var errorPosition = computeErrorPosition();
          
          throw new this.SyntaxError(
            cleanupExpected(rightmostFailuresExpected),
            found,
            offset,
            errorPosition.line,
            errorPosition.column
          );
        }
        
        return result;
      },
      
      /* Returns the parser source code. */
      toSource: function() { return this._source; }
    };
    
    /* Thrown when a parser encounters a syntax error. */
    
    result.SyntaxError = function(expected, found, offset, line, column) {
      function buildMessage(expected, found) {
        var expectedHumanized, foundHumanized;
        
        switch (expected.length) {
          case 0:
            expectedHumanized = "end of input";
            break;
          case 1:
            expectedHumanized = expected[0];
            break;
          default:
            expectedHumanized = expected.slice(0, expected.length - 1).join(", ")
              + " or "
              + expected[expected.length - 1];
        }
        
        foundHumanized = found ? quote(found) : "end of input";
        
        return "Expected " + expectedHumanized + " but " + foundHumanized + " found.";
      }
      
      this.name = "SyntaxError";
      this.expected = expected;
      this.found = found;
      this.message = buildMessage(expected, found);
      this.offset = offset;
      this.line = line;
      this.column = column;
    };
    
    result.SyntaxError.prototype = Error.prototype;
    
    return result;
  })();