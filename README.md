**Esprima** ([esprima.org](http://esprima.org), BSD license) is a high performance,
standard-compliant [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
parser written in ECMAScript (also popularly known as
[JavaScript](http://en.wikipedia.org/wiki/JavaScript>JavaScript)).
Esprima is created and maintained by [Ariya Hidayat](http://twitter.com/ariyahidayat),
with the help of [many contributors](https://github.com/ariya/esprima/contributors).

**Esprima-FB** is a fork of the [Harmony branch](https://github.com/ariya/esprima/tree/harmony) of Esprima that implements [JSX specification](https://github.com/facebook/jsx) on top of ECMAScript syntax.

### thr0w/esprima is a fork of esprima-fb proposing JSX Modules

```html
<!DOCTYPE JSX>

<ReactClass name="Timer">
  <div>Seconds Elapsed: {secondsElapsed}</div>

  <script>
    function getInitialState() {
      return { secondsElapsed = 0 };
    }
    function tick(){
      this.setState({secondsElapsed: secondsElapsed + 1});
    }
    function componentDidMount() {
      this.interval = setInterval(this.tick, 1000);
    }
    function componentWillUnmount() {
      clearInterval(this.interval);
    }
  </script>
</ReactClass>

React.render(<Timer />, mountNode);
```

=== 
Why
* Better look and feel (I think so)
* Better compatibility with IDE's, linters...
* 100% compatible with React legacy code

=== 
Done
* Enabling tag `<!DOCTYPE JSX>`. I don't like it, and maybe it's not necessary because JSXModule just works when JSX is as statement (not expression), but i'm worry with legacy code.
* Parser for script, link and style tags.
* visitors for jstransform
* visitors for react
* the code above works well

=== 
Todo
* avoid this from all know (class internals) identifiers
> how detect setState when invoking methods? (like push, shift, splice...)
* Transform css script into javascript objects.
> Rename css classes to allow local scope
> autoprex vendor tags
** I18N
** Docs

===
Repositories:
https://github.com/thr0w/esprima
https://github.com/thr0w/jstransform
https://github.com/thr0w/react

===
References:
* https://muut.com/riotjs/
* https://github.com/undoZen/htmlxify

### Features

- Full support for ECMAScript 5.1 ([ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm))
- Experimental support for ES6/Harmony (module, class, destructuring, ...)
- Full support for [JSX syntax extensions](https://github.com/facebook/jsx).
- Sensible [syntax tree format](https://github.com/facebook/jsx/blob/master/AST.md) compatible with Mozilla
[Parser AST](https://developer.mozilla.org/en/SpiderMonkey/Parser_API)
- Optional tracking of syntax node location (index-based and line-column)
- Heavily tested (> 650 [unit tests](http://esprima.org/test/) with [full code coverage](http://esprima.org/test/coverage.html))
- Ongoing support for ES6/Harmony (module, class, destructuring, ...)

### Versioning rules

In order to follow semver rules and keep reference to original Esprima versions at the same time, we left 3 digits of each version part to refer to upstream harmony branch. We then take the most significant digit.

**Example:** 4001.3001.0000-dev-harmony-fb aligns with 1.1.0-dev-harmony (aka 001.001.000-dev-harmony) in upstream, with our own changes on top.

Esprima-FB serves as a **building block** for JSX language tools and transpiler implementations (such as [React](https://github.com/facebook/react) or [JSXDOM](https://github.com/vjeux/jsxdom)).

Esprima-FB runs on many popular web browsers, as well as other ECMAScript platforms such as
[Rhino](http://www.mozilla.org/rhino) and [Node.js](https://npmjs.org/package/esprima).

For more information on original Esprima, check the web site [esprima.org](http://esprima.org).
