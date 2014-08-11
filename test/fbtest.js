var testFixture;

var fbTestFixture = {
    'XJS': {
        '<a />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                openingElement: {
                  type: "XJSOpeningElement",
                  name: {
                      type: "XJSIdentifier",
                      name: "a",
                      range: [1, 2],
                      loc: {
                          start: { line: 1, column: 1 },
                          end: { line: 1, column: 2 }
                      }
                  },
                  selfClosing: true,
                  attributes: [],
                  range: [0, 5],
                  loc: {
                      start: { line: 1, column: 0 },
                      end: { line: 1, column: 5 }
                  }
                },
                closingElement: null,
                children: [],
                range: [0, 5],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 5 }
                }
            },
            range: [0, 5],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 5 }
            }
        },
        '<n:a n:v />': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSNamespacedName',
                        namespace: {
                            type: 'XJSIdentifier',
                            name: 'n',
                            range: [1, 2],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 2 }
                            }
                        },
                        name: {
                            type: 'XJSIdentifier',
                            name: 'a',
                            range: [3, 4],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 4 }
                            }
                        },
                        range: [1, 4],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    selfClosing: true,
                    attributes: [{
                        type: 'XJSAttribute',
                        name: {
                            type: 'XJSNamespacedName',
                            namespace: {
                                type: 'XJSIdentifier',
                                name: 'n',
                                range: [5, 6],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 6 }
                                }
                            },
                            name: {
                                type: 'XJSIdentifier',
                                name: 'v',
                                range: [7, 8],
                                loc: {
                                    start: { line: 1, column: 7 },
                                    end: { line: 1, column: 8 }
                                }
                            },
                            range: [5, 8],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        value: null,
                        range: [5, 8],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 8 }
                        }
                    }],
                    range: [0, 11],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 11 }
                    }
                },
                closingElement: null,
                children: [],
                range: [0, 11],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 11 }
                }
            },
            range: [0, 11],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 11 }
            }
        },
        '<a n:foo="bar"> {value} <b><c /></b></a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [{
                        type: 'XJSAttribute',
                        name: {
                            type: 'XJSNamespacedName',
                            namespace: {
                                type: 'XJSIdentifier',
                                name: 'n',
                                range: [3, 4],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 4 }
                                }
                            },
                            name: {
                                type: 'XJSIdentifier',
                                name: 'foo',
                                range: [5, 8],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 8 }
                                }
                            },
                            range: [3, 8],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        value: {
                            type: 'Literal',
                            value: 'bar',
                            raw: '"bar"',
                            range: [9, 14],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        range: [3, 14],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 14 }
                        }
                    }],
                    range: [0, 15],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 15 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [38, 39],
                        loc: {
                            start: { line: 1, column: 38 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [36, 40],
                    loc: {
                        start: { line: 1, column: 36 },
                        end: { line: 1, column: 40 }
                    }
                },
                children: [{
                    type: 'Literal',
                    value: ' ',
                    raw: ' ',
                    range: [15, 16],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 16 }
                    }
                }, {
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'Identifier',
                        name: 'value',
                        range: [17, 22],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    range: [16, 23],
                    loc: {
                        start: { line: 1, column: 16 },
                        end: { line: 1, column: 23 }
                    }
                }, {
                    type: 'Literal',
                    value: ' ',
                    raw: ' ',
                    range: [23, 24],
                    loc: {
                        start: { line: 1, column: 23 },
                        end: { line: 1, column: 24 }
                    }
                }, {
                    type: 'XJSElement',
                    openingElement: {
                        type: 'XJSOpeningElement',
                        name: {
                            type: 'XJSIdentifier',
                            name: 'b',
                            range: [25, 26],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        selfClosing: false,
                        attributes: [],
                        range: [24, 27],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    closingElement: {
                        type: 'XJSClosingElement',
                        name: {
                            type: 'XJSIdentifier',
                            name: 'b',
                            range: [34, 35],
                            loc: {
                                start: { line: 1, column: 34 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        range: [32, 36],
                        loc: {
                            start: { line: 1, column: 32 },
                            end: { line: 1, column: 36 }
                        }
                    },
                    children: [{
                        type: 'XJSElement',
                        openingElement: {
                            type: 'XJSOpeningElement',
                            name: {
                                type: 'XJSIdentifier',
                                name: 'c',
                                range: [28, 29],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 29 }
                                }
                            },
                            selfClosing: true,
                            attributes: [],
                            range: [27, 32],
                            loc: {
                                start: { line: 1, column: 27 },
                                end: { line: 1, column: 32 }
                            }
                        },
                        closingElement: null,
                        children: [],
                        range: [27, 32],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 32 }
                        }
                    }],
                    range: [24, 36],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 36 }
                    }
                }],
                range: [0, 40],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 40 }
                }
            },
            range: [0, 40],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 40 }
            }
        },
        '<a b={" "} c=" " d="&amp;" />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: true,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [3, 4],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 4 }
                                }
                            },
                            value: {
                                type: "XJSExpressionContainer",
                                expression: {
                                    type: "Literal",
                                    value: " ",
                                    raw: "\" \"",
                                    range: [6, 9],
                                    loc: {
                                        start: { line: 1, column: 6 },
                                        end: { line: 1, column: 9 }
                                    }
                                },
                                range: [5, 10],
                                loc: {
                                    start: { line: 1, column: 5 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            range: [3, 10],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 10 }
                            }
                        },
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "c",
                                range: [11, 12],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 12 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: " ",
                                raw: "\" \"",
                                range: [13, 16],
                                loc: {
                                    start: { line: 1, column: 13 },
                                    end: { line: 1, column: 16 }
                                }
                            },
                            range: [11, 16],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 16 }
                            }
                        },
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "d",
                                range: [17, 18],
                                loc: {
                                    start: { line: 1, column: 17 },
                                    end: { line: 1, column: 18 }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "&",
                                raw: "\"&amp;\"",
                                range: [19, 26],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 26 }
                                }
                            },
                            range: [17, 26],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 26 }
                            }
                        }
                    ],
                    range: [0, 29],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 29 }
                    }
                },
                closingElement: null,
                children: [],
                range: [0, 29],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 29 }
                }
            },
            range: [0, 29],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 29 }
            }
        },
        '<a\n/>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [
                            1,
                            2
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 2
                            }
                        }
                    },
                    selfClosing: true,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 2,
                            column: 2
                        }
                    }
                },
                closingElement: null,
                children: [],
                range: [
                    0,
                    5
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 2,
                        column: 2
                    }
                }
            },
            range: [
                0,
                5
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 2,
                    column: 2
                }
            }
        },
        '<日本語></日本語>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "日本語",
                        range: [
                            1,
                            4
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 4
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 5
                        }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "日本語",
                        range: [
                            7,
                            10
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 7
                            },
                            end: {
                                line: 1,
                                column: 10
                            }
                        }
                    },
                    range: [
                        5,
                        11
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 5
                        },
                        end: {
                            line: 1,
                            column: 11
                        }
                    }
                },
                children: [],
                range: [
                    0,
                    11
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 11
                    }
                }
            },
            range: [
                0,
                11
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 11
                }
            }
        },

        '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\r\n</AbC-def>': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "AbC-def",
                        range: [
                            1,
                            8
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 8
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "test",
                                range: [
                                    11,
                                    15
                                ],
                                loc: {
                                    start: {
                                        line: 2,
                                        column: 2
                                    },
                                    end: {
                                        line: 2,
                                        column: 6
                                    }
                                }
                            },
                            value: {
                                type: "Literal",
                                value: "&&",
                                raw: "\"&#x0026;&#38;\"",
                                range: [
                                    16,
                                    31
                                ],
                                loc: {
                                    start: {
                                        line: 2,
                                        column: 7
                                    },
                                    end: {
                                        line: 2,
                                        column: 22
                                    }
                                }
                            },
                            range: [
                                11,
                                31
                            ],
                            loc: {
                                start: {
                                    line: 2,
                                    column: 2
                                },
                                end: {
                                    line: 2,
                                    column: 22
                                }
                            }
                        }
                    ],
                    range: [
                        0,
                        32
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 2,
                            column: 23
                        }
                    }
                },
                closingElement: {
                    type: "XJSClosingElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "AbC-def",
                        range: [
                            44,
                            51
                        ],
                        loc: {
                            start: {
                                line: 5,
                                column: 2
                            },
                            end: {
                                line: 5,
                                column: 9
                            }
                        }
                    },
                    range: [
                        42,
                        52
                    ],
                    loc: {
                        start: {
                            line: 5,
                            column: 0
                        },
                        end: {
                            line: 5,
                            column: 10
                        }
                    }
                },
                children: [
                    {
                        type: "Literal",
                        value: "\nbar\nbaz\r\n",
                        raw: "\nbar\nbaz\r\n",
                        range: [
                            32,
                            42
                        ],
                        loc: {
                            start: {
                                line: 2,
                                column: 23
                            },
                            end: {
                                line: 5,
                                column: 0
                            }
                        }
                    }
                ],
                range: [
                    0,
                    52
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 5,
                        column: 10
                    }
                }
            },
            range: [
                0,
                52
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 10
                }
            }
        },

        '<a b={x ? <c /> : <d />} />': {
            type: "ExpressionStatement",
            expression: {
                type: "XJSElement",
                openingElement: {
                    type: "XJSOpeningElement",
                    name: {
                        type: "XJSIdentifier",
                        name: "a",
                        range: [
                            1,
                            2
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 2
                            }
                        }
                    },
                    selfClosing: true,
                    attributes: [
                        {
                            type: "XJSAttribute",
                            name: {
                                type: "XJSIdentifier",
                                name: "b",
                                range: [
                                    3,
                                    4
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 3
                                    },
                                    end: {
                                        line: 1,
                                        column: 4
                                    }
                                }
                            },
                            value: {
                                type: "XJSExpressionContainer",
                                expression: {
                                    type: "ConditionalExpression",
                                    test: {
                                        type: "Identifier",
                                        name: "x",
                                        range: [
                                            6,
                                            7
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 6
                                            },
                                            end: {
                                                line: 1,
                                                column: 7
                                            }
                                        }
                                    },
                                    consequent: {
                                        type: "XJSElement",
                                        openingElement: {
                                            type: "XJSOpeningElement",
                                            name: {
                                                type: "XJSIdentifier",
                                                name: "c",
                                                range: [
                                                    11,
                                                    12
                                                ],
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 11
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 12
                                                    }
                                                }
                                            },
                                            selfClosing: true,
                                            attributes: [],
                                            range: [
                                                10,
                                                15
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 10
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 15
                                                }
                                            }
                                        },
                                        closingElement: null,
                                        children: [],
                                        range: [
                                            10,
                                            15
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 15
                                            }
                                        }
                                    },
                                    alternate: {
                                        type: "XJSElement",
                                        openingElement: {
                                            type: "XJSOpeningElement",
                                            name: {
                                                type: "XJSIdentifier",
                                                name: "d",
                                                range: [
                                                    19,
                                                    20
                                                ],
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 19
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 20
                                                    }
                                                }
                                            },
                                            selfClosing: true,
                                            attributes: [],
                                            range: [
                                                18,
                                                23
                                            ],
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 18
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 23
                                                }
                                            }
                                        },
                                        closingElement: null,
                                        children: [],
                                        range: [
                                            18,
                                            23
                                        ],
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 18
                                            },
                                            end: {
                                                line: 1,
                                                column: 23
                                            }
                                        }
                                    },
                                    range: [
                                        6,
                                        23
                                    ],
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 6
                                        },
                                        end: {
                                            line: 1,
                                            column: 23
                                        }
                                    }
                                },
                                range: [
                                    5,
                                    24
                                ],
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 5
                                    },
                                    end: {
                                        line: 1,
                                        column: 24
                                    }
                                }
                            },
                            range: [
                                3,
                                24
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 3
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        }
                    ],
                    range: [
                        0,
                        27
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 27
                        }
                    }
                },
                closingElement: null,
                children: [],
                range: [
                    0,
                    27
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 27
                    }
                }
            },
            range: [
                0,
                27
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 27
                }
            }
        },

        '<a>{}</a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 3],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 3 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [7, 8],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 8 }
                        }
                    },
                    range: [5, 9],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 9 }
                    }
                },
                children: [{
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'XJSEmptyExpression',
                        range: [4, 4],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    range: [3, 5],
                    loc: {
                        start: { line: 1, column: 3 },
                        end: { line: 1, column: 5 }
                    }
                }],
                range: [0, 9],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 9 }
                }
            },
            range: [0, 9],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 9 }
            }
        },

        '<a>{/* this is a comment */}</a>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [1, 2],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 2 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 3],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 3 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'a',
                        range: [30, 31],
                        loc: {
                            start: { line: 1, column: 30 },
                            end: { line: 1, column: 31 }
                        }
                    },
                    range: [28, 32],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 32 }
                    }
                },
                children: [{
                    type: 'XJSExpressionContainer',
                    expression: {
                        type: 'XJSEmptyExpression',
                        range: [4, 27],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    range: [3, 28],
                    loc: {
                        start: { line: 1, column: 3 },
                        end: { line: 1, column: 28 }
                    }
                }],
                range: [0, 32],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 32 }
                }
            },
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        },

        '<div>@test content</div>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [1, 4],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 5],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 5 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [20, 23],
                        loc: {
                            start: { line: 1, column: 20 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [18, 24],
                    loc: {
                        start: { line: 1, column: 18 },
                        end: { line: 1, column: 24 }
                    }
                },
                children: [{
                    type: 'Literal',
                    value: '@test content',
                    raw: '@test content',
                    range: [5, 18],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 18 }
                    }
                }],
                range: [0, 24],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 24 }
                }
            },
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        },

        '<div><br />7x invalid-js-identifier</div>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [
                            1,
                            4
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 1
                            },
                            end: {
                                line: 1,
                                column: 4
                            }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [
                        0,
                        5
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 5
                        }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSIdentifier',
                        name: 'div',
                        range: [
                            37,
                            40
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 37
                            },
                            end: {
                                line: 1,
                                column: 40
                            }
                        }
                    },
                    range: [
                        35,
                        41
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 35
                        },
                        end: {
                            line: 1,
                            column: 41
                        }
                    }
                },
                children: [{
                    type: 'XJSElement',
                    openingElement: {
                        type: 'XJSOpeningElement',
                        name: {
                            type: 'XJSIdentifier',
                            name: 'br',
                            range: [
                                6,
                                8
                            ],
                            loc: {
                                start: {
                                    line: 1,
                                    column: 6
                                },
                                end: {
                                    line: 1,
                                    column: 8
                                }
                            }
                        },
                        selfClosing: true,
                        attributes: [],
                        range: [
                            5,
                            11
                        ],
                        loc: {
                            start: {
                                line: 1,
                                column: 5
                            },
                            end: {
                                line: 1,
                                column: 11
                            }
                        }
                    },
                    closingElement: null,
                    children: [],
                    range: [
                        5,
                        11
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 5
                        },
                        end: {
                            line: 1,
                            column: 11
                        }
                    }
                }, {
                    type: 'Literal',
                    value: '7x invalid-js-identifier',
                    raw: '7x invalid-js-identifier',
                    range: [
                        11,
                        35
                    ],
                    loc: {
                        start: {
                            line: 1,
                            column: 11
                        },
                        end: {
                            line: 1,
                            column: 35
                        }
                    }
                }],
                range: [
                    0,
                    41
                ],
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 41
                    }
                }
            },
            range: [
                0,
                41
            ],
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 41
                }
            }
        },

        '<LeftRight left=<a /> right=<b>monkeys /> gorillas</b> />': {
            "type": "ExpressionStatement",
            "expression": {
                "type": "XJSElement",
                "openingElement": {
                    "type": "XJSOpeningElement",
                    "name": {
                        "type": "XJSIdentifier",
                        "name": "LeftRight",
                        "range": [
                            1,
                            10
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 1
                            },
                            "end": {
                                "line": 1,
                                "column": 10
                            }
                        }
                    },
                    "selfClosing": true,
                    "attributes": [
                        {
                            "type": "XJSAttribute",
                            "name": {
                                "type": "XJSIdentifier",
                                "name": "left",
                                "range": [
                                    11,
                                    15
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 11
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 15
                                    }
                                }
                            },
                            "value": {
                                "type": "XJSElement",
                                "openingElement": {
                                    "type": "XJSOpeningElement",
                                    "name": {
                                        "type": "XJSIdentifier",
                                        "name": "a",
                                        "range": [
                                            17,
                                            18
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 17
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 18
                                            }
                                        }
                                    },
                                    "selfClosing": true,
                                    "attributes": [],
                                    "range": [
                                        16,
                                        21
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 16
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 21
                                        }
                                    }
                                },
                                closingElement: null,
                                "children": [],
                                "range": [
                                    16,
                                    21
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 16
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 21
                                    }
                                }
                            },
                            "range": [
                                11,
                                21
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 11
                                },
                                "end": {
                                    "line": 1,
                                    "column": 21
                                }
                            }
                        },
                        {
                            "type": "XJSAttribute",
                            "name": {
                                "type": "XJSIdentifier",
                                "name": "right",
                                "range": [
                                    22,
                                    27
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 22
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 27
                                    }
                                }
                            },
                            "value": {
                                "type": "XJSElement",
                                "openingElement": {
                                    "type": "XJSOpeningElement",
                                    "name": {
                                        "type": "XJSIdentifier",
                                        "name": "b",
                                        "range": [
                                            29,
                                            30
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "selfClosing": false,
                                    "attributes": [],
                                    "range": [
                                        28,
                                        31
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 28
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 31
                                        }
                                    }
                                },
                                "closingElement": {
                                    "type": "XJSClosingElement",
                                    "name": {
                                        "type": "XJSIdentifier",
                                        "name": "b",
                                        "range": [
                                            52,
                                            53
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 52
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 53
                                            }
                                        }
                                    },
                                    "range": [
                                        50,
                                        54
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 50
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 54
                                        }
                                    }
                                },
                                "children": [
                                    {
                                        "type": "Literal",
                                        "value": "monkeys /> gorillas",
                                        "raw": "monkeys /> gorillas",
                                        "range": [
                                            31,
                                            50
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 31
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 50
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    28,
                                    54
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 28
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 54
                                    }
                                }
                            },
                            "range": [
                                22,
                                54
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 22
                                },
                                "end": {
                                    "line": 1,
                                    "column": 54
                                }
                            }
                        }
                    ],
                    "range": [
                        0,
                        57
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 57
                        }
                    }
                },
                closingElement: null,
                "children": [],
                "range": [
                    0,
                    57
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 57
                    }
                }
            },
            "range": [
                0,
                57
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 57
                }
            }
        },

        '<a.b></a.b>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSMemberExpression',
                        object: {
                            type: 'XJSIdentifier',
                            name: 'a',
                            range: [1, 2],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 2 }
                            }
                        },
                        property: {
                            type: 'XJSIdentifier',
                            name: 'b',
                            range: [3, 4],
                            loc: {
                                start: { line: 1, column: 3 },
                                end: { line: 1, column: 4 }
                            }
                        },
                        range: [1, 4],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 4 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 5],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 5 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSMemberExpression',
                        object: {
                            type: 'XJSIdentifier',
                            name: 'a',
                            range: [7, 8],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 8 }
                            }
                        },
                        property: {
                            type: 'XJSIdentifier',
                            name: 'b',
                            range: [9, 10],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 10 }
                            }
                        },
                        range: [7, 10],
                        loc: {
                            start: { line: 1, column: 7 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    range: [5, 11],
                    loc: {
                        start: { line: 1, column: 5 },
                        end: { line: 1, column: 11 }
                    }
                },
                children: [],
                range: [0, 11],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 11 }
                }
            },
            range: [0, 11],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 11 }
            }
        },

        '<a.b.c></a.b.c>': {
            type: 'ExpressionStatement',
            expression: {
                type: 'XJSElement',
                openingElement: {
                    type: 'XJSOpeningElement',
                    name: {
                        type: 'XJSMemberExpression',
                        object: {
                            type: 'XJSMemberExpression',
                            object: {
                                type: 'XJSIdentifier',
                                name: 'a',
                                range: [1, 2],
                                loc: {
                                    start: { line: 1, column: 1 },
                                    end: { line: 1, column: 2 }
                                }
                            },
                            property: {
                                type: 'XJSIdentifier',
                                name: 'b',
                                range: [3, 4],
                                loc: {
                                    start: { line: 1, column: 3 },
                                    end: { line: 1, column: 4 }
                                }
                            },
                            range: [1, 4],
                            loc: {
                                start: { line: 1, column: 1 },
                                end: { line: 1, column: 4 }
                            }
                        },
                        property: {
                            type: 'XJSIdentifier',
                            name: 'c',
                            range: [5, 6],
                            loc: {
                                start: { line: 1, column: 5 },
                                end: { line: 1, column: 6 }
                            }
                        },
                        range: [1, 6],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 6 }
                        }
                    },
                    selfClosing: false,
                    attributes: [],
                    range: [0, 7],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 7 }
                    }
                },
                closingElement: {
                    type: 'XJSClosingElement',
                    name: {
                        type: 'XJSMemberExpression',
                        object: {
                            type: 'XJSMemberExpression',
                            object: {
                                type: 'XJSIdentifier',
                                name: 'a',
                                range: [9, 10],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 10 }
                                }
                            },
                            property: {
                                type: 'XJSIdentifier',
                                name: 'b',
                                range: [11, 12],
                                loc: {
                                    start: { line: 1, column: 11 },
                                    end: { line: 1, column: 12 }
                                }
                            },
                            range: [9, 12],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 12 }
                            }
                        },
                        property: {
                            type: 'XJSIdentifier',
                            name: 'c',
                            range: [13, 14],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        range: [9, 14],
                        loc: {
                            start: { line: 1, column: 9 },
                            end: { line: 1, column: 14 }
                        }
                    },
                    range: [7, 15],
                    loc: {
                        start: { line: 1, column: 7 },
                        end: { line: 1, column: 15 }
                    }
                },
                children: [],
                range: [0, 15],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 15 }
                }
            },
            range: [0, 15],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 15 }
            }
        },

        // In order to more useful parse errors, we disallow following an
        // XJSElement by a less-than symbol. In the rare case that the binary
        // operator was intended, the tag can be wrapped in parentheses:
        '(<div />) < x;': {
            type: 'ExpressionStatement',
            expression: {
                type: 'BinaryExpression',
                operator: '<',
                left: {
                    type: 'XJSElement',
                    openingElement: {
                        type: 'XJSOpeningElement',
                        name: {
                            type: 'XJSIdentifier',
                            name: 'div',
                            range: [2, 5],
                            loc: {
                                start: { line: 1, column: 2 },
                                end: { line: 1, column: 5 }
                            }
                        },
                        selfClosing: true,
                        attributes: [],
                        range: [1, 8],
                        loc: {
                            start: { line: 1, column: 1 },
                            end: { line: 1, column: 8 }
                        }
                    },
                    closingElement: null,
                    children: [],
                    range: [1, 8],
                    loc: {
                        start: { line: 1, column: 1 },
                        end: { line: 1, column: 8 }
                    }
                },
                right: {
                    type: 'Identifier',
                    name: 'x',
                    range: [12, 13],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 13 }
                    }
                },
                range: [0, 13],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 13 }
                }
            },
            range: [0, 14],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 14 }
            }
        },

        '<div {...props} />': {
            "type": "ExpressionStatement",
            "expression": {
                "type": "XJSElement",
                "openingElement": {
                    "type": "XJSOpeningElement",
                    "name": {
                        "type": "XJSIdentifier",
                        "name": "div",
                        "range": [
                            1,
                            4
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 1
                            },
                            "end": {
                                "line": 1,
                                "column": 4
                            }
                        }
                    },
                    "selfClosing": true,
                    "attributes": [
                        {
                            "type": "XJSSpreadAttribute",
                            "argument": {
                                "type": "Identifier",
                                "name": "props",
                                "range": [
                                    9,
                                    14
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 14
                                    }
                                }
                            },
                            "range": [
                                5,
                                15
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 5
                                },
                                "end": {
                                    "line": 1,
                                    "column": 15
                                }
                            }
                        }
                    ],
                    "range": [
                        0,
                        18
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 18
                        }
                    }
                },
                closingElement: null,
                "children": [],
                "range": [
                    0,
                    18
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 18
                    }
                }
            },
            "range": [
                0,
                18
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        },

        '<div {...props} post="attribute" />': {
            "type": "ExpressionStatement",
            "expression": {
                "type": "XJSElement",
                "openingElement": {
                    "type": "XJSOpeningElement",
                    "name": {
                        "type": "XJSIdentifier",
                        "name": "div",
                        "range": [
                            1,
                            4
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 1
                            },
                            "end": {
                                "line": 1,
                                "column": 4
                            }
                        }
                    },
                    "selfClosing": true,
                    "attributes": [
                        {
                            "type": "XJSSpreadAttribute",
                            "argument": {
                                "type": "Identifier",
                                "name": "props",
                                "range": [
                                    9,
                                    14
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 14
                                    }
                                }
                            },
                            "range": [
                                5,
                                15
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 5
                                },
                                "end": {
                                    "line": 1,
                                    "column": 15
                                }
                            }
                        },
                        {
                            "type": "XJSAttribute",
                            "name": {
                                "type": "XJSIdentifier",
                                "name": "post",
                                "range": [
                                    16,
                                    20
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 16
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 20
                                    }
                                }
                            },
                            "value": {
                                "type": "Literal",
                                "value": "attribute",
                                "raw": "\"attribute\"",
                                "range": [
                                    21,
                                    32
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 21
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 32
                                    }
                                }
                            },
                            "range": [
                                16,
                                32
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 16
                                },
                                "end": {
                                    "line": 1,
                                    "column": 32
                                }
                            }
                        }
                    ],
                    "range": [
                        0,
                        35
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 35
                        }
                    }
                },
                closingElement: null,
                "children": [],
                "range": [
                    0,
                    35
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 35
                    }
                }
            },
            "range": [
                0,
                35
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            }
        },

        '<div pre="leading" pre2="attribute" {...props}></div>': {
            "type": "ExpressionStatement",
            "expression": {
                "type": "XJSElement",
                "openingElement": {
                    "type": "XJSOpeningElement",
                    "name": {
                        "type": "XJSIdentifier",
                        "name": "div",
                        "range": [
                            1,
                            4
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 1
                            },
                            "end": {
                                "line": 1,
                                "column": 4
                            }
                        }
                    },
                    "selfClosing": false,
                    "attributes": [
                        {
                            "type": "XJSAttribute",
                            "name": {
                                "type": "XJSIdentifier",
                                "name": "pre",
                                "range": [
                                    5,
                                    8
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 8
                                    }
                                }
                            },
                            "value": {
                                "type": "Literal",
                                "value": "leading",
                                "raw": "\"leading\"",
                                "range": [
                                    9,
                                    18
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 18
                                    }
                                }
                            },
                            "range": [
                                5,
                                18
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 5
                                },
                                "end": {
                                    "line": 1,
                                    "column": 18
                                }
                            }
                        },
                        {
                            "type": "XJSAttribute",
                            "name": {
                                "type": "XJSIdentifier",
                                "name": "pre2",
                                "range": [
                                    19,
                                    23
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 23
                                    }
                                }
                            },
                            "value": {
                                "type": "Literal",
                                "value": "attribute",
                                "raw": "\"attribute\"",
                                "range": [
                                    24,
                                    35
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 24
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 35
                                    }
                                }
                            },
                            "range": [
                                19,
                                35
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 19
                                },
                                "end": {
                                    "line": 1,
                                    "column": 35
                                }
                            }
                        },
                        {
                            "type": "XJSSpreadAttribute",
                            "argument": {
                                "type": "Identifier",
                                "name": "props",
                                "range": [
                                    40,
                                    45
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 40
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 45
                                    }
                                }
                            },
                            "range": [
                                36,
                                46
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 36
                                },
                                "end": {
                                    "line": 1,
                                    "column": 46
                                }
                            }
                        }
                    ],
                    "range": [
                        0,
                        47
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 47
                        }
                    }
                },
                "closingElement": {
                    "type": "XJSClosingElement",
                    "name": {
                        "type": "XJSIdentifier",
                        "name": "div",
                        "range": [
                            49,
                            52
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 49
                            },
                            "end": {
                                "line": 1,
                                "column": 52
                            }
                        }
                    },
                    "range": [
                        47,
                        53
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 47
                        },
                        "end": {
                            "line": 1,
                            "column": 53
                        }
                    }
                },
                "children": [],
                "range": [
                    0,
                    53
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 53
                    }
                }
            },
            "range": [
                0,
                53
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 53
                }
            }
        },

        '<a>    </a>': {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'XJSElement',
                    openingElement: {
                        type: 'XJSOpeningElement',
                        name: {
                            type: 'XJSIdentifier',
                            name: 'a',
                            range: [1, 2],
                            loc: {
                                start: {line: 1, column: 1},
                                end: {line: 1, column: 2}
                            }
                        },
                        selfClosing: false,
                        attributes: [],
                        range: [0, 3],
                        loc: {
                            start: {line: 1, column: 0},
                            end: {line: 1, column: 3}
                        }
                    },
                    closingElement: {
                        type: 'XJSClosingElement',
                        name: {
                            type: 'XJSIdentifier',
                            name: 'a',
                            range: [9, 10],
                            loc: {
                                start: {line: 1, column: 9},
                                end: {line: 1, column: 10}
                            }
                        },
                        range: [7, 11],
                        loc: {
                            start: {line: 1, column: 7},
                            end: {line: 1, column: 11}
                        }
                    },
                    children: [
                        {
                            type: 'Literal',
                            value: '    ',
                            raw: '    ',
                            range: [3, 7],
                            loc: {
                                start: {line: 1, column: 3},
                                end: {line: 1, column: 7}
                            }
                        }
                    ],
                    range: [0, 11],
                    loc: {
                        start: {line: 1, column: 0},
                        end: {line: 1, column: 11}
                    }
                },
                range: [0, 11],
                loc: {
                    start: {line: 1, column: 0},
                    end: {line: 1, column: 11}
                }
            }],
            range: [0, 11],
            loc: {
                start: {line: 1, column: 0},
                end: {line: 1, column: 11}
            },
            tokens: [
                {
                    type: 'Punctuator',
                    value: '<',
                    range: [0, 1],
                    loc: {
                        start: {line: 1, column: 0},
                        end: {line: 1, column: 1}
                    }
                },
                {
                    type: 'XJSIdentifier',
                    value: 'a',
                    range: [1, 2],
                    loc: {
                        start: {line: 1, column: 1},
                        end: {line: 1, column: 2}
                    }
                },
                {
                    type: 'Punctuator',
                    value: '>',
                    range: [2, 3],
                    loc: {
                        start: {line: 1, column: 2},
                        end: {line: 1, column: 3}
                    }
                },
                {
                    type: 'XJSText',
                    value: '    ',
                    range: [3, 7],
                    loc: {
                        start: {line: 1, column: 3},
                        end: {line: 1, column: 7}
                    }
                },
                {
                    type: 'Punctuator',
                    value: '<',
                    range: [7, 8],
                    loc: {
                        start: {line: 1, column: 7},
                        end: {line: 1, column: 8}
                    }
                },
                {
                    type: 'Punctuator',
                    value: '/',
                    range: [8, 9],
                    loc: {
                        start: {line: 1, column: 8},
                        end: {line: 1, column: 9}
                    }
                },
                {
                    type: 'XJSIdentifier',
                    value: 'a',
                    range: [9, 10],
                    loc: {
                        start: {line: 1, column: 9},
                        end: {line: 1, column: 10}
                    }
                },
                {
                    type: 'Punctuator',
                    value: '>',
                    range: [10, 11],
                    loc: {
                        start: {line: 1, column: 10},
                        end: {line: 1, column: 11}
                    }
                }
            ]
        }
    },

    'Invalid XJS Syntax': {
        '</>': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: 'Error: Line 1: Unexpected token /',
            description: 'Unexpected token /'
        },

        '<a: />': {
            index: 4,
            lineNumber: 1,
            column: 5,
            message: 'Error: Line 1: Unexpected token /'
        },

        '<:a />': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: 'Error: Line 1: Unexpected token :'
        },

        '<a b=d />': {
            index: 5,
            lineNumber: 1,
            column: 6,
            message: 'Error: Line 1: XJS value should be either an expression or a quoted XJS text'
        },

        '<a>': {
            index: 3,
            lineNumber: 1,
            column: 4,
            message: 'Error: Line 1: Unexpected end of input'
        },

        '<a></b>': {
            index: 7,
            lineNumber: 1,
            column: 8,
            message: 'Error: Line 1: Expected corresponding XJS closing tag for a'
        },

        '<a foo="bar': {
            index: 11,
            lineNumber: 1,
            column: 12,
            message: "Error: Line 1: Unexpected token ILLEGAL"
        },

        '<a:b></b>': {
            index: 9,
            lineNumber: 1,
            column: 10,
            message: "Error: Line 1: Expected corresponding XJS closing tag for a:b",
        },

        '<a:b.c></a:b.c>': {
            index: 4,
            lineNumber: 1,
            column: 5,
            message: 'Error: Line 1: Unexpected token .'
        },

        '<a.b:c></a.b:c>': {
            index: 4,
            lineNumber: 1,
            column: 5,
            message: 'Error: Line 1: Unexpected token :'
        },

        '<a.b.c></a>': {
            index: 11,
            lineNumber: 1,
            column: 12,
            message: "Error: Line 1: Expected corresponding XJS closing tag for a.b.c"
        },

        '<.a></.a>': {
            index: 1,
            lineNumber: 1,
            column: 2,
            message: "Error: Line 1: Unexpected token ."
        },

        '<a.></a.>': {
            index: 3,
            lineNumber: 1,
            column: 4,
            message: "Error: Line 1: Unexpected token >"
        },

        '<a[foo]></a[foo]>': {
            index: 2,
            lineNumber: 1,
            column: 3,
            message: "Error: Line 1: Unexpected token ["
        },

        '<a[\'foo\']></a[\'foo\']>': {
            index: 2,
            lineNumber: 1,
            column: 3,
            message: "Error: Line 1: Unexpected token ["
        },

        '<a><a />': {
            index: 8,
            lineNumber: 1,
            column: 9,
            message: 'Error: Line 1: Unexpected end of input'
        },

        '<a b={}>': {
            index: 7,
            lineNumber: 1,
            column: 8,
            message: 'Error: Line 1: XJS attributes must only be assigned a non-empty expression'
        },

        'var x = <div>one</div><div>two</div>;': {
            index: 22,
            lineNumber: 1,
            column: 23,
            message: 'Error: Line 1: Adjacent XJS elements must be wrapped in an enclosing tag'
        },

        'var x = <div>one</div> /* intervening comment */ <div>two</div>;': {
            index: 49,
            lineNumber: 1,
            column: 50,
            message: 'Error: Line 1: Adjacent XJS elements must be wrapped in an enclosing tag'
        },

        '<a>{"str";}</a>': {
            index: 9,
            lineNumber: 1,
            column: 10,
            message: 'Error: Line 1: Unexpected token ;',
            description: 'Unexpected token ;'
        },

        '<span className="a", id="b" />': {
            index: 19,
            lineNumber: 1,
            column: 20,
            message: 'Error: Line 1: Unexpected token ,',
            description: 'Unexpected token ,'
        },

        '<div className"app">': {
            index: 14,
            lineNumber: 1,
            column: 15,
            message: 'Error: Line 1: Unexpected string',
            description: 'Unexpected string'
        },

        '<div {props} />': {
            index: 6,
            lineNumber: 1,
            column: 7,
            message: 'Error: Line 1: Unexpected identifier',
            description: 'Unexpected string'
        },

        '<div>stuff</div {...props}>': {
            index: 16,
            lineNumber: 1,
            column: 17,
            message: 'Error: Line 1: Unexpected token {',
            description: 'Unexpected token {'
        },

        '<div {...props}>stuff</div {...props}>': {
            index: 27,
            lineNumber: 1,
            column: 28,
            message: 'Error: Line 1: Unexpected token {',
            description: 'Unexpected token {'
        }
    },

    'Type Annotations': {
        'function foo(numVal: number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [13, 19],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 19 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [21, 27],
                        loc: {
                            start: { line: 1, column: 21 },
                            end: { line: 1, column: 27 }
                        }
                    },
                    params: null,
                    returnType: null,
                    nullable: false,
                    range: [19, 27],
                    loc: {
                        start: { line: 1, column: 19 },
                        end: { line: 1, column: 27 }
                    }
                },
                range: [13, 27],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 27 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [28, 30],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 30 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 30],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 30 }
            }
        },

        'function foo(numVal: number, strVal: string){}': {
              type: 'FunctionDeclaration',
              id: {
                  type: 'Identifier',
                  name: 'foo',
                  range: [9, 12],
                  loc: {
                      start: { line: 1, column: 9 },
                      end: { line: 1, column: 12 }
                  }
              },
              params: [{
                  type: 'TypeAnnotatedIdentifier',
                  id: {
                      type: 'Identifier',
                      name: 'numVal',
                      range: [13, 19],
                      loc: {
                          start: { line: 1, column: 13 },
                          end: { line: 1, column: 19 }
                      }
                  },
                  annotation: {
                      type: 'TypeAnnotation',
                      id: {
                          type: 'Identifier',
                          name: 'number',
                          range: [21, 27],
                          loc: {
                              start: { line: 1, column: 21 },
                              end: { line: 1, column: 27 }
                          }
                      },
                      params: null,
                      returnType: null,
                      nullable: false,
                      range: [19, 27],
                      loc: {
                          start: { line: 1, column: 19 },
                          end: { line: 1, column: 27 }
                      }
                  },
                  range: [13, 27],
                  loc: {
                      start: { line: 1, column: 13 },
                      end: { line: 1, column: 27 }
                  }
              }, {
                  type: 'TypeAnnotatedIdentifier',
                  id: {
                      type: 'Identifier',
                      name: 'strVal',
                      range: [29, 35],
                      loc: {
                          start: { line: 1, column: 29 },
                          end: { line: 1, column: 35 }
                      }
                  },
                  annotation: {
                      type: 'TypeAnnotation',
                      id: {
                          type: 'Identifier',
                          name: 'string',
                          range: [37, 43],
                          loc: {
                              start: { line: 1, column: 37 },
                              end: { line: 1, column: 43 }
                          }
                      },
                      params: null,
                      returnType: null,
                      nullable: false,
                      range: [35, 43],
                      loc: {
                          start: { line: 1, column: 35 },
                          end: { line: 1, column: 43 }
                      }
                  },
                  range: [29, 43],
                  loc: {
                      start: { line: 1, column: 29 },
                      end: { line: 1, column: 43 }
                  }
              }],
              defaults: [],
              body: {
                  type: 'BlockStatement',
                  body: [],
                  range: [44, 46],
                  loc: {
                      start: { line: 1, column: 44 },
                      end: { line: 1, column: 46 }
                  }
              },
              rest: null,
              generator: false,
              expression: false,
              range: [0, 46],
              loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 1, column: 46 }
              }
        },

        'function foo(numVal: number, untypedVal){}': {
              type: 'FunctionDeclaration',
              id: {
                  type: 'Identifier',
                  name: 'foo',
                  range: [9, 12],
                  loc: {
                      start: { line: 1, column: 9 },
                      end: { line: 1, column: 12 }
                  }
              },
              params: [{
                  type: 'TypeAnnotatedIdentifier',
                  id: {
                      type: 'Identifier',
                      name: 'numVal',
                      range: [13, 19],
                      loc: {
                          start: { line: 1, column: 13 },
                          end: { line: 1, column: 19 }
                      }
                  },
                  annotation: {
                      type: 'TypeAnnotation',
                      id: {
                          type: 'Identifier',
                          name: 'number',
                          range: [21, 27],
                          loc: {
                              start: { line: 1, column: 21 },
                              end: { line: 1, column: 27 }
                          }
                      },
                      params: null,
                      returnType: null,
                      nullable: false,
                      range: [19, 27],
                      loc: {
                          start: { line: 1, column: 19 },
                          end: { line: 1, column: 27 }
                      }
                  },
                  range: [13, 27],
                  loc: {
                      start: { line: 1, column: 13 },
                      end: { line: 1, column: 27 }
                  }
              }, {
                  type: 'Identifier',
                  name: 'untypedVal',
                  range: [29, 39],
                  loc: {
                      start: { line: 1, column: 29 },
                      end: { line: 1, column: 39 }
                  }
              }],
              defaults: [],
              body: {
                  type: 'BlockStatement',
                  body: [],
                  range: [40, 42],
                  loc: {
                      start: { line: 1, column: 40 },
                      end: { line: 1, column: 42 }
                  }
              },
              rest: null,
              generator: false,
              expression: false,
              range: [0, 42],
              loc: {
                  start: { line: 1, column: 0 },
                  end: { line: 1, column: 42 }
              }
        },

        'function foo(untypedVal, numVal: number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'untypedVal',
                range: [13, 23],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 23 }
                }
            }, {
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'numVal',
                    range: [25, 31],
                    loc: {
                        start: { line: 1, column: 25 },
                        end: { line: 1, column: 31 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [33, 39],
                        loc: {
                            start: { line: 1, column: 33 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    params: null,
                    returnType: null,
                    nullable: false,
                    range: [31, 39],
                    loc: {
                        start: { line: 1, column: 31 },
                        end: { line: 1, column: 39 }
                    }
                },
                range: [25, 39],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 39 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [40, 42],
                loc: {
                    start: { line: 1, column: 40 },
                    end: { line: 1, column: 42 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 42],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 42 }
            }
        },

        'function foo(nullableNum: ?number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'nullableNum',
                    range: [13, 24],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 24 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [27, 33],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    params: null,
                    returnType: null,
                    nullable: true,
                    range: [24, 33],
                    loc: {
                        start: { line: 1, column: 24 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 33],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 33 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },

        'function foo(callback: () => void){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    params: [],
                    returnType: {
                        type: 'VoidTypeAnnotation',
                        range: [29, 33],
                        loc: {
                            start: { line: 1, column: 29 },
                            end: { line: 1, column : 33}
                        }
                    },
                    nullable: false,
                    range: [21, 33],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 33 }
                    }
                },
                range: [13, 33],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 33 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [34, 36],
                loc: {
                    start: { line: 1, column: 34 },
                    end: { line: 1, column: 36 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 36],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 36 }
            }
        },

        'function foo(callback: () => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    params: [],
                    returnType: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [29, 35],
                            loc: {
                                start: { line: 1, column: 29 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [29, 35],
                        loc: {
                            start: { line: 1, column: 29 },
                            end: { line: 1, column: 35 }
                        }
                    },
                    nullable: false,
                    range: [21, 35],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 35 }
                    }
                },
                range: [13, 35],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 35 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [36, 38],
                loc: {
                    start: { line: 1, column: 36 },
                    end: { line: 1, column: 38 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 38],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 38 }
            }
        },

        'function foo(callback: (_:bool) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    params: [{
                        type: 'TypeAnnotatedIdentifier',
                        id: {
                            type: 'Identifier',
                            name: '_',
                            range: [24, 25],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 25}
                            }
                        },
                        annotation: {
                            type: 'TypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'bool',
                                range: [26, 30],
                                loc: {
                                    start: { line: 1, column: 26 },
                                    end: { line: 1, column: 30 },
                                }
                            },
                            params: null,
                            returnType: null,
                            nullable: false,
                            range: [ 25, 30 ],
                            loc: {
                                start: { line: 1, column: 25 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        range: [24, 30],
                        loc: {
                            start: { line: 1, column: 24 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [35, 41],
                            loc: {
                                start: { line: 1, column: 35 },
                                end: { line: 1, column: 41 }
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [35, 41],
                        loc: {
                            start: { line: 1, column: 35 },
                            end: { line: 1, column: 41 }
                        }
                    },
                    nullable: false,
                    range: [21, 41],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 41 }
                    }
                },
                range: [13, 41],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 41 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [42, 44],
                loc: {
                    start: { line: 1, column: 42 },
                    end: { line: 1, column: 44 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 44],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 44 }
            }
        },

        'function foo(callback: (_1:bool, _2:string) => number){}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'TypeAnnotatedIdentifier',
                id: {
                    type: 'Identifier',
                    name: 'callback',
                    range: [13, 21],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 21 }
                    }
                },
                annotation: {
                    type: 'TypeAnnotation',
                    id: null,
                    params: [{
                        type: 'TypeAnnotatedIdentifier',
                        id: {
                            type: 'Identifier',
                            name: '_1',
                            range: [24, 26],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        annotation: {
                            type: 'TypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'bool',
                                range: [27, 31],
                                loc: {
                                    start: { line: 1, column: 27 },
                                    end: { line: 1, column: 31 }
                                }
                            },
                            params: null,
                            returnType: null,
                            nullable: false,
                            range: [26, 31],
                            loc: {
                                start: { line: 1, column: 26 },
                                end: { line: 1, column: 31 }
                            }
                        },
                        range: [24, 31],
                        loc: {
                           start: { line: 1, column: 24 },
                           end: { line: 1, column: 31 }
                        }
                    }, {
                        type: 'TypeAnnotatedIdentifier',
                        id: {
                            type: 'Identifier',
                            name: '_2',
                            range: [33, 35],
                            loc: {
                                start: { line: 1, column: 33 },
                                end: { line: 1, column: 35 }
                            }
                        },
                        annotation: {
                            type: 'TypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'string',
                                range: [36, 42],
                                loc: {
                                    start: { line: 1, column: 36 },
                                    end: { line: 1, column: 42 }
                                }
                            },
                            params: null,
                            returnType: null,
                            nullable: false,
                            range: [35, 42],
                            loc: {
                                start: { line: 1, column: 35 },
                                end: { line: 1, column: 42 }
                            }
                        },
                        range: [33, 42],
                        loc: {
                           start: { line: 1, column: 33 },
                           end: { line: 1, column: 42 }
                        }
                    }],
                    returnType: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [47, 53],
                            loc: {
                                start: { line: 1, column: 47 },
                                end: { line: 1, column: 53 }
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [47, 53],
                        loc: {
                            start: { line: 1, column: 47 },
                            end: { line: 1, column: 53 }
                        }
                    },
                    nullable: false,
                    range: [21, 53],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 53 }
                    }
                },
                range: [13, 53],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 53 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [54, 56],
                loc: {
                    start: { line: 1, column: 54 },
                    end: { line: 1, column: 56 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 56],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 56 }
            }
        },

        'function foo():number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [21, 23],
                loc: {
                    start: { line: 1, column: 21 },
                    end: { line: 1, column: 23 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                id: {
                    type: 'Identifier',
                    name: 'number',
                    range: [15, 21],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 21 }
                    }
                },
                params: null,
                returnType: null,
                nullable: false,
                range: [14, 21],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 21 }
                }
            },
            range: [0, 23],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 23 }
            }
        },

        'function foo():() => void{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [25, 27],
                loc: {
                    start: { line: 1, column: 25 },
                    end: { line: 1, column: 27 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                id: null,
                params: [],
                returnType: {
                    type: 'VoidTypeAnnotation',
                    range: [21, 25],
                    loc: {
                        start: { line: 1, column: 21 },
                        end: { line: 1, column: 25 }
                    }
                },
                nullable: false,
                range: [14, 25],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 25 }
                }
            },
            range: [0, 27],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 27 }
            }
        },

        'function foo():(_:bool) => number{}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [33, 35],
                loc: {
                    start: { line: 1, column: 33 },
                    end: { line: 1, column: 35 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'TypeAnnotation',
                id: null,
                params: [{
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: '_',
                        range: [16, 17],
                        loc: {
                            start: { line: 1, column: 16 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    annotation: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'bool',
                            range: [18, 22],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 22}
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [17, 22],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    range: [16, 22],
                    loc: {
                        start: { line: 1, column: 16 },
                        end: { line: 1, column: 22 }
                    }
                }],
                returnType: {
                    type: 'TypeAnnotation',
                    id: {
                        type: 'Identifier',
                        name: 'number',
                        range: [27, 33],
                        loc: {
                            start: { line: 1, column: 27 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    params: null,
                    returnType: null,
                    nullable: false,
                    range: [27, 33],
                    loc: {
                        start: { line: 1, column: 27 },
                        end: { line: 1, column: 33 }
                    }
                },
                nullable: false,
                range: [14, 33],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 33 }
                }
            },
            range: [0, 35],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 35 }
            }
        },

        'function foo(): {} {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [19, 21],
                loc: {
                    start: { line: 1, column: 19 },
                    end: { line: 1, column: 21 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            returnType: {
                type: 'ObjectTypeAnnotation',
                properties: [],
                nullable: false,
                range: [14, 18],
                loc: {
                    start: { line: 1, column: 14 },
                    end: { line: 1, column: 18 }
                }
            },
            range: [0, 21],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 21 }
            }
        },

        'function foo<T>() {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [18, 20],
                loc: {
                    start: { line: 1, column: 18 },
                    end: { line: 1, column: 20 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            parametricType: {
                type: 'ParametricTypeAnnotation',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [13, 14],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 14 }
                    }
                }],
                range: [12, 15],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 15 }
                }
            },
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },

        'function foo<T,S>() {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [20, 22],
                loc: {
                    start: { line: 1, column: 20 },
                    end: { line: 1, column: 22 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            parametricType: {
                type: 'ParametricTypeAnnotation',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [13, 14],
                    loc: {
                        start: { line: 1, column: 13 },
                        end: { line: 1, column: 14 }
                    }
                }, {
                    type: 'Identifier',
                    name: 'S',
                    range: [15, 16],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 16 }
                    }
                }],
                range: [12, 17],
                loc: {
                    start: { line: 1, column: 12 },
                    end: { line: 1, column: 17 }
                }
            },
            range: [0, 22],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 22 }
            }
        },

        'a=function<T,S>() {}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'FunctionExpression',
                    id: null,
                    params: [],
                    defaults: [],
                    body: {
                        type: 'BlockStatement',
                        body: [],
                        range: [18, 20],
                        loc: {
                            start: { line: 1, column: 18 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    rest: null,
                    generator: false,
                    expression: false,
                    parametricType: {
                        type: 'ParametricTypeAnnotation',
                        params: [{
                            type: 'Identifier',
                            name: 'T',
                            range: [11, 12],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 12 }
                            }
                        }, {
                            type: 'Identifier',
                            name: 'S',
                            range: [13, 14],
                            loc: {
                                start: { line: 1, column: 13 },
                                end: { line: 1, column: 14 }
                            }
                        }],
                        range: [10, 15],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 15 }
                        }
                    },
                    range: [2, 20],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 20 }
                    }
                },
                range: [0, 20],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 20 }
                }
            },
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },

        'a={set fooProp(value:number){}}': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'fooProp',
                            range: [7, 14],
                            loc: {
                                start: { line: 1, column: 7 },
                                end: { line: 1, column: 14 }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            id: null,
                            params: [{
                                type: 'TypeAnnotatedIdentifier',
                                id: {
                                    type: 'Identifier',
                                    name: 'value',
                                    range: [15, 20],
                                    loc: {
                                        start: { line: 1, column: 15 },
                                        end: { line: 1, column: 20 }
                                    }
                                },
                                annotation: {
                                    type: 'TypeAnnotation',
                                    id: {
                                        type: 'Identifier',
                                        name: 'number',
                                        range: [21, 27],
                                        loc: {
                                            start: { line: 1, column: 21 },
                                            end: { line: 1, column: 27 }
                                        }
                                    },
                                    params: null,
                                    returnType: null,
                                    nullable: false,
                                    range: [20, 27],
                                    loc: {
                                        start: { line: 1, column: 20 },
                                        end: { line: 1, column: 27 }
                                    }
                                },
                                range: [15, 27],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 27 }
                                }
                            }],
                            defaults: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                range: [28, 30],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            rest: null,
                            generator: false,
                            expression: false,
                            range: [28, 30],
                            loc: {
                                start: { line: 1, column: 28 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        kind: 'set',
                        method: false,
                        shorthand: false,
                        computed: false,
                        range: [3, 30],
                        loc: {
                            start: { line: 1, column: 3 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    range: [2, 31],
                    loc: {
                        start: { line: 1, column: 2 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [0, 31],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 31 }
                }
            },
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },

        'class Foo {set fooProp(value:number){}}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'fooProp',
                        range: [15, 22],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 22 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [{
                            type: 'TypeAnnotatedIdentifier',
                            id: {
                                type: 'Identifier',
                                name: 'value',
                                range: [23, 28],
                                loc: {
                                    start: { line: 1, column: 23 },
                                    end: { line: 1, column: 28 }
                                }
                            },
                            annotation: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [29, 35],
                                    loc: {
                                        start: { line: 1, column: 29 },
                                        end: { line: 1, column: 35 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [28, 35],
                                loc: {
                                    start: { line: 1, column: 28 },
                                    end: { line: 1, column: 35 }
                                }
                            },
                            range: [23, 35],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 35 }
                            }
                        }],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [36, 38],
                            loc: {
                                start: { line: 1, column: 36 },
                                end: { line: 1, column: 38 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        range: [36, 38],
                        loc: {
                            start: { line: 1, column: 36 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    kind: 'set',
                    'static': false,
                    range: [11, 38],
                    loc: {
                        start: { line: 1, column: 11 },
                        end: { line: 1, column: 38 }
                    }
                }],
                range: [10, 39],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 39 }
                }
            },
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },

        'var numVal:number;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'numVal',
                        range: [4, 10],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    annotation: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [11, 17],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [10, 17],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [4, 17],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 17 }
                    }
                },
                init: null,
                range: [4, 17],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 17 }
                }
            }],
            kind: 'var',
            range: [0, 18],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 18 }
            }
        },

        'var numVal:number = otherNumVal;': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'numVal',
                        range: [4, 10],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 10 }
                        }
                    },
                    annotation: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'number',
                            range: [11, 17],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [10, 17],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    range: [4, 17],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 17 }
                    }
                },
                init: {
                    type: 'Identifier',
                    name: 'otherNumVal',
                    range: [20, 31],
                    loc: {
                        start: { line: 1, column: 20 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [4, 31],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 31 }
                }
            }],
            kind: 'var',
            range: [0, 32],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 32 }
            }
        },

        'var a: {numVal: number};': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'numVal',
                                range: [8, 14],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            value: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [14, 22],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [8, 22],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 22 }
                            }
                        }],
                        nullable: false,
                        range: [5, 23],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 23 }
                        }
                    },
                    range: [4, 23],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 23 }
                    }
                },
                init: null,
                range: [4, 23],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 23 }
                }
            }],
            kind: 'var',
            range: [0, 24],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 24 }
            }
        },

        'var a: ?{numVal: number};': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'numVal',
                                range: [9, 15],
                                loc: {
                                    start: { line: 1, column: 9 },
                                    end: { line: 1, column: 15 }
                                }
                            },
                            value: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [17, 23],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 23 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [15, 23],
                                loc: {
                                    start: { line: 1, column: 15 },
                                    end: { line: 1, column: 23 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [9, 23],
                            loc: {
                                start: { line: 1, column: 9 },
                                end: { line: 1, column: 23 }
                            }
                        }],
                        nullable: true,
                        range: [5, 24],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [4, 24],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 24 }
                    }
                },
                init: null,
                range: [4, 24],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 24 }
                }
            }],
            kind: 'var',
            range: [0, 25],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 25 }
            }
        },

        'var a: {numVal: number, strVal: string}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'numVal',
                                range: [8, 14],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            value: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [14, 22],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [8, 22],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 22 }
                            }
                        }, {
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'strVal',
                                range: [24, 30],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            value: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'string',
                                    range: [32, 38],
                                    loc: {
                                        start: { line: 1, column: 32 },
                                        end: { line: 1, column: 38 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [30, 38],
                                loc: {
                                    start: { line: 1, column: 30 },
                                    end: { line: 1, column: 38 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [24, 38],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 38 }
                            }
                        }],
                        nullable: false,
                        range: [5, 39],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [4, 39],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 39 }
                    }
                },
                init: null,
                range: [4, 39],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 39 }
                }
            }],
            kind: 'var',
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },

        'var a: {subObj: {strVal: string}}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'subObj',
                                range: [8, 14],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            value: {
                                type: 'ObjectTypeAnnotation',
                                properties: [{
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'strVal',
                                        range: [17, 23],
                                        loc: {
                                            start: { line: 1, column: 17 },
                                            end: { line: 1, column: 23 }
                                        }
                                    },
                                    value: {
                                        type: 'TypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'string',
                                            range: [25, 31],
                                            loc: {
                                                start: { line: 1, column: 25 },
                                                end: { line: 1, column: 31 }
                                            }
                                        },
                                        params: null,
                                        returnType: null,
                                        nullable: false,
                                        range: [23, 31],
                                        loc: {
                                            start: { line: 1, column: 23 },
                                            end: { line: 1, column: 31 }
                                        }
                                    },
                                    kind: 'init',
                                    method: false,
                                    shorthand: false,
                                    range: [17, 31],
                                    loc: {
                                        start: { line: 1, column: 17 },
                                        end: { line: 1, column: 31 }
                                    }
                                }],
                                nullable: false,
                                range: [14, 32],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 32 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [8, 32],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 32 }
                            }
                        }],
                        nullable: false,
                        range: [5, 33],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 33 }
                        }
                    },
                    range: [4, 33],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 33 }
                    }
                },
                init: null,
                range: [4, 33],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 33 }
                }
            }],
            kind: 'var',
            range: [0, 33],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 33 }
            }
        },

        'var a: {subObj: ?{strVal: string}}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'subObj',
                                range: [8, 14],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            value: {
                                type: 'ObjectTypeAnnotation',
                                properties: [{
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: 'strVal',
                                        range: [18, 24],
                                        loc: {
                                            start: { line: 1, column: 18 },
                                            end: { line: 1, column: 24 }
                                        }
                                    },
                                    value: {
                                        type: 'TypeAnnotation',
                                        id: {
                                            type: 'Identifier',
                                            name: 'string',
                                            range: [26, 32],
                                            loc: {
                                                start: { line: 1, column: 26 },
                                                end: { line: 1, column: 32 }
                                            }
                                        },
                                        params: null,
                                        returnType: null,
                                        nullable: false,
                                        range: [24, 32],
                                        loc: {
                                            start: { line: 1, column: 24 },
                                            end: { line: 1, column: 32 }
                                        }
                                    },
                                    kind: 'init',
                                    method: false,
                                    shorthand: false,
                                    range: [18, 32],
                                    loc: {
                                        start: { line: 1, column: 18 },
                                        end: { line: 1, column: 32 }
                                    }
                                }],
                                nullable: true,
                                range: [14, 33],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 33 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [8, 33],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 33 }
                            }
                        }],
                        nullable: false,
                        range: [5, 34],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 34 }
                        }
                    },
                    range: [4, 34],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 34 }
                    }
                },
                init: null,
                range: [4, 34],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 34 }
                }
            }],
            kind: 'var',
            range: [0, 34],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 34 }
            }
        },

        'var a: {param1: number; param2: string}': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'ObjectTypeAnnotation',
                        properties: [{
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'param1',
                                range: [8, 14],
                                loc: {
                                    start: { line: 1, column: 8 },
                                    end: { line: 1, column: 14 }
                                }
                            },
                            value: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'number',
                                    range: [16, 22],
                                    loc: {
                                        start: { line: 1, column: 16 },
                                        end: { line: 1, column: 22 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [14, 22],
                                loc: {
                                    start: { line: 1, column: 14 },
                                    end: { line: 1, column: 22 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [8, 22],
                            loc: {
                                start: { line: 1, column: 8 },
                                end: { line: 1, column: 22 }
                            }
                        }, {
                            type: 'Property',
                            key: {
                                type: 'Identifier',
                                name: 'param2',
                                range: [24, 30],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            value: {
                                type: 'TypeAnnotation',
                                id: {
                                    type: 'Identifier',
                                    name: 'string',
                                    range: [32, 38],
                                    loc: {
                                        start: { line: 1, column: 32 },
                                        end: { line: 1, column: 38 }
                                    }
                                },
                                params: null,
                                returnType: null,
                                nullable: false,
                                range: [30, 38],
                                loc: {
                                    start: { line: 1, column: 30 },
                                    end: { line: 1, column: 38 }
                                }
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            range: [24, 38],
                            loc: {
                                start: { line: 1, column: 24 },
                                end: { line: 1, column: 38 }
                            }
                        }],
                        nullable: false,
                        range: [5, 39],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 39 }
                        }
                    },
                    range: [4, 39],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 39 }
                    }
                },
                init: null,
                range: [4, 39],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 39 }
                }
            }],
            kind: 'var',
            range: [0, 39],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 39 }
            }
        },

        'var a:Array<number> = [1, 2, 3]': {
            type: 'VariableDeclaration',
            declarations: [{
                type: 'VariableDeclarator',
                id: {
                    type: 'TypeAnnotatedIdentifier',
                    id: {
                        type: 'Identifier',
                        name: 'a',
                        range: [4, 5],
                        loc: {
                            start: { line: 1, column: 4 },
                            end: { line: 1, column: 5 }
                        }
                    },
                    annotation: {
                        type: 'TypeAnnotation',
                        id: {
                            type: 'Identifier',
                            name: 'Array',
                            range: [6, 11],
                            loc: {
                                start: { line: 1, column: 6 },
                                end: { line: 1, column: 11 }
                            }
                        },
                        parametricType: {
                            type: 'ParametricTypeAnnotation',
                            params: [{
                                type: 'Identifier',
                                name: 'number',
                                range: [12, 18],
                                loc: {
                                    start: { line: 1, column: 12 },
                                    end: { line: 1, column: 18 }
                                }
                            }],
                            range: [11, 19],
                            loc: {
                                start: { line: 1, column: 11 },
                                end: { line: 1, column: 19 }
                            }
                        },
                        params: null,
                        returnType: null,
                        nullable: false,
                        range: [5, 19],
                        loc: {
                            start: { line: 1, column: 5 },
                            end: { line: 1, column: 19 }
                        }
                    },
                    range: [4, 19],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 19 }
                    }
                },
                init: {
                    type: 'ArrayExpression',
                    elements: [{
                        type: 'Literal',
                        value: 1,
                        raw: '1',
                        range: [23, 24],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 24 }
                        }
                    }, {
                        type: 'Literal',
                        value: 2,
                        raw: '2',
                        range: [26, 27],
                        loc: {
                            start: { line: 1, column: 26 },
                            end: { line: 1, column: 27 }
                        }
                    }, {
                        type: 'Literal',
                        value: 3,
                        raw: '3',
                        range: [29, 30],
                        loc: {
                            start: { line: 1, column: 29 },
                            end: { line: 1, column: 30 }
                        }
                    }],
                    range: [22, 31],
                    loc: {
                        start: { line: 1, column: 22 },
                        end: { line: 1, column: 31 }
                    }
                },
                range: [4, 31],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 31 }
                }
            }],
            kind: 'var',
            range: [0, 31],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 31 }
            }
        },

        'a = class Foo<T> { }': {
            type: 'ExpressionStatement',
            expression: {
                type: 'AssignmentExpression',
                operator: '=',
                left: {
                    type: 'Identifier',
                    name: 'a',
                    range: [0, 1],
                    loc: {
                        start: { line: 1, column: 0 },
                        end: { line: 1, column: 1 }
                    }
                },
                right: {
                    type: 'ClassExpression',
                    id: {
                        type: 'Identifier',
                        name: 'Foo',
                        range: [10, 13],
                        loc: {
                            start: { line: 1, column: 10 },
                            end: { line: 1, column: 13 }
                        }
                    },
                    superClass: null,
                    body: {
                        type: 'ClassBody',
                        body: [],
                        range: [17, 20],
                        loc: {
                            start: { line: 1, column: 17 },
                            end: { line: 1, column: 20 }
                        }
                    },
                    parametricType: {
                        type: 'ParametricTypeAnnotation',
                        params: [{
                            type: 'Identifier',
                            name: 'T',
                            range: [14, 15],
                            loc: {
                                start: { line: 1, column: 14 },
                                end: { line: 1, column: 15 }
                            }
                        }],
                        range: [13, 16],
                        loc: {
                            start: { line: 1, column: 13 },
                            end: { line: 1, column: 16 }
                        }
                    },
                    range: [4, 20],
                    loc: {
                        start: { line: 1, column: 4 },
                        end: { line: 1, column: 20 }
                    }
                },
                range: [0, 20],
                loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 20 }
                }
            },
            range: [0, 20],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 20 }
            }
        },

        'class Foo<T> {}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [],
                range: [13, 15],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 15 }
                }
            },
            parametricType: {
                type: 'ParametricTypeAnnotation',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                }],
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            range: [0, 15],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 15 }
            }
        },

        'class Foo<T> { bar<U>():number { return 42; }}': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Identifier',
                        name: 'bar',
                        range: [15, 18],
                        loc: {
                            start: { line: 1, column: 15 },
                            end: { line: 1, column: 18 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [{
                                type: 'ReturnStatement',
                                argument: {
                                    type: 'Literal',
                                    value: 42,
                                    raw: '42',
                                    range: [40, 42],
                                    loc: {
                                        start: { line: 1, column: 40 },
                                        end: { line: 1, column: 42 }
                                    }
                                },
                                range: [33, 43],
                                loc: {
                                    start: { line: 1, column: 33 },
                                    end: { line: 1, column: 43 }
                                }
                            }],
                            range: [31, 45],
                            loc: {
                                start: { line: 1, column: 31 },
                                end: { line: 1, column: 45 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        returnType: {
                            type: 'TypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'number',
                                range: [24, 30],
                                loc: {
                                    start: { line: 1, column: 24 },
                                    end: { line: 1, column: 30 }
                                }
                            },
                            params: null,
                            returnType: null,
                            nullable: false,
                            range: [23, 30],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 30 }
                            }
                        },
                        parametricType: {
                            type: 'ParametricTypeAnnotation',
                            params: [{
                                type: 'Identifier',
                                name: 'U',
                                range: [19, 20],
                                loc: {
                                    start: { line: 1, column: 19 },
                                    end: { line: 1, column: 20 }
                                }
                            }],
                            range: [18, 21],
                            loc: {
                                start: { line: 1, column: 18 },
                                end: { line: 1, column: 21 }
                            }
                        },
                        range: [31, 45],
                        loc: {
                            start: { line: 1, column: 31 },
                            end: { line: 1, column: 45 }
                        }
                    },
                    kind: '',
                    'static': false,
                    range: [15, 45],
                    loc: {
                        start: { line: 1, column: 15 },
                        end: { line: 1, column: 45 }
                    }
                }],
                range: [13, 46],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 46 }
                }
            },
            parametricType: {
                type: 'ParametricTypeAnnotation',
                params: [{
                    type: 'Identifier',
                    name: 'T',
                    range: [10, 11],
                    loc: {
                        start: { line: 1, column: 10 },
                        end: { line: 1, column: 11 }
                    }
                }],
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            range: [0, 46],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 46 }
            }
        },

        'class Foo { "bar"<T>() { } }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'MethodDefinition',
                    key: {
                        type: 'Literal',
                        value: 'bar',
                        raw: '"bar"',
                        range: [12, 17],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 17 }
                        }
                    },
                    value: {
                        type: 'FunctionExpression',
                        id: null,
                        params: [],
                        defaults: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            range: [23, 26],
                            loc: {
                                start: { line: 1, column: 23 },
                                end: { line: 1, column: 26 }
                            }
                        },
                        rest: null,
                        generator: false,
                        expression: false,
                        parametricType: {
                            type: 'ParametricTypeAnnotation',
                            params: [{
                                type: 'Identifier',
                                name: 'T',
                                range: [18, 19],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 19 }
                                }
                            }],
                            range: [17, 20],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 20 }
                            }
                        },
                        range: [23, 26],
                        loc: {
                            start: { line: 1, column: 23 },
                            end: { line: 1, column: 26 }
                        }
                    },
                    kind: '',
                    'static': false,
                    range: [12, 26],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 26 }
                    }
                }],
                range: [10, 28],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 28 }
                }
            },
            range: [0, 28],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 28 }
            }
        },

        'function foo(requiredParam, optParam?) {}': {
            type: 'FunctionDeclaration',
            id: {
                type: 'Identifier',
                name: 'foo',
                range: [9, 12],
                loc: {
                    start: { line: 1, column: 9 },
                    end: { line: 1, column: 12 }
                }
            },
            params: [{
                type: 'Identifier',
                name: 'requiredParam',
                range: [13, 26],
                loc: {
                    start: { line: 1, column: 13 },
                    end: { line: 1, column: 26 }
                }
            }, {
                type: 'OptionalParameter',
                id: {
                    type: 'Identifier',
                    name: 'optParam',
                    range: [28, 36],
                    loc: {
                        start: { line: 1, column: 28 },
                        end: { line: 1, column: 36 }
                    }
                },
                range: [28, 37],
                loc: {
                    start: { line: 1, column: 28 },
                    end: { line: 1, column: 37 }
                }
            }],
            defaults: [],
            body: {
                type: 'BlockStatement',
                body: [],
                range: [39, 41],
                loc: {
                    start: { line: 1, column: 39 },
                    end: { line: 1, column: 41 }
                }
            },
            rest: null,
            generator: false,
            expression: false,
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        },

        'class Foo { prop1:string; prop2:number; }': {
            type: 'ClassDeclaration',
            id: {
                type: 'Identifier',
                name: 'Foo',
                range: [6, 9],
                loc: {
                    start: { line: 1, column: 6 },
                    end: { line: 1, column: 9 }
                }
            },
            superClass: null,
            body: {
                type: 'ClassBody',
                body: [{
                    type: 'ClassProperty',
                    id: {
                        type: 'TypeAnnotatedIdentifier',
                        id: {
                            type: 'Identifier',
                            name: 'prop1',
                            range: [12, 17],
                            loc: {
                                start: { line: 1, column: 12 },
                                end: { line: 1, column: 17 }
                            }
                        },
                        annotation: {
                            type: 'TypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'string',
                                range: [18, 24],
                                loc: {
                                    start: { line: 1, column: 18 },
                                    end: { line: 1, column: 24 }
                                }
                            },
                            params: null,
                            returnType: null,
                            nullable: false,
                            range: [17, 24],
                            loc: {
                                start: { line: 1, column: 17 },
                                end: { line: 1, column: 24 }
                            }
                        },
                        range: [12, 24],
                        loc: {
                            start: { line: 1, column: 12 },
                            end: { line: 1, column: 24 }
                        }
                    },
                    range: [12, 25],
                    loc: {
                        start: { line: 1, column: 12 },
                        end: { line: 1, column: 25 }
                    }
                }, {
                    type: 'ClassProperty',
                    id: {
                        type: 'TypeAnnotatedIdentifier',
                        id: {
                            type: 'Identifier',
                            name: 'prop2',
                            range: [26, 31],
                            loc: {
                                start: { line: 1, column: 26 },
                                end: { line: 1, column: 31 }
                            }
                        },
                        annotation: {
                            type: 'TypeAnnotation',
                            id: {
                                type: 'Identifier',
                                name: 'number',
                                range: [32, 38],
                                loc: {
                                    start: { line: 1, column: 32 },
                                    end: { line: 1, column: 38 }
                                }
                            },
                            params: null,
                            returnType: null,
                            nullable: false,
                            range: [31, 38],
                            loc: {
                                start: { line: 1, column: 31 },
                                end: { line: 1, column: 38 }
                            }
                        },
                        range: [26, 38],
                        loc: {
                            start: { line: 1, column: 26 },
                            end: { line: 1, column: 38 }
                        }
                    },
                    range: [26, 39],
                    loc: {
                        start: { line: 1, column: 26 },
                        end: { line: 1, column: 39 }
                    }
                }],
                range: [10, 41],
                loc: {
                    start: { line: 1, column: 10 },
                    end: { line: 1, column: 41 }
                }
            },
            range: [0, 41],
            loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 41 }
            }
        }
    },

    'Invalid Type Annotations': {
        'function foo(callback:) {}': {
            index: 22,
            lineNumber: 1,
            column: 23,
            message: 'Error: Line 1: Unexpected token )',
            description: 'Unexpected token )'
        },

        'function foo(): {}': {
            index: 18,
            lineNumber: 1,
            column: 19,
            message: 'Error: Line 1: Unexpected end of input',
            description: 'Unexpected end of input'
        },

        'function foo(): { foo() }': {
            index: 21,
            lineNumber: 1,
            column: 22,
            message: 'Error: Line 1: Unexpected token (',
            description: 'Unexpected token ('
        },

        'function foo(callback:(string) => number) {}': {
            index: 29,
            lineNumber: 1,
            column: 30,
            message: 'Error: Line 1: Unexpected token )',
            description: 'Unexpected token )'
        },

        'a = {foo(): { return 42; }}': {
            index: 21,
            lineNumber: 1,
            column: 22,
            message: 'Error: Line 1: Unexpected number',
            description: 'Unexpected number'
        },

        'class Foo { get bar<T>() { } }': {
            index: 19,
            lineNumber: 1,
            column: 20,
            message: 'Error: Line 1: Unexpected token <',
            description: 'Unexpected token <'
        },

        'var a:{a:number b:string}': {
            index: 16,
            lineNumber: 1,
            column: 17,
            message: 'Error: Line 1: Unexpected identifier',
            description: 'Unexpected identifier'
        }
    }
};

// Merge fbTestFixture in to testFixture

(function () {

    'use strict';

    var i, fixtures;

    for (i in fbTestFixture) {
        if (fbTestFixture.hasOwnProperty(i)) {
            fixtures = fbTestFixture[i];
            if (i !== 'Syntax' && testFixture.hasOwnProperty(i)) {
                throw new Error('FB test should not replace existing test for ' + i);
            }
            testFixture[i] = fixtures;
        }
    }

}());
