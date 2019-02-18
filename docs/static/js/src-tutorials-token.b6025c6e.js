(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/tutorials/token.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=m(this,s(n).call(this,e))).layout=null,t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;l(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"how-to-issue-your-own-token-erc-20"}},"How to issue your own token (ERC-20)"),o.a.createElement(r.MDXTag,{name:"p",components:n},"We actually have pre-built template with Token Contract, so you can start right away with working code.\nGo to ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://studio.nearprotocol.com/"}},"https://studio.nearprotocol.com/")," and start a new project (fiddle) by selecting Token Smart Contract in AssemblyScript.\nYou can try running this application right away to see the code interacting with the blockchain!"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"erc-20-standard"}},"ERC-20 standard"),o.a.createElement(r.MDXTag,{name:"p",components:n},"ERC-20 standard is one of the Ethereum bread & butter. It defines how custom tokens should be built.\nSpecifically, any new token must follow next interface:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"totalSupply(): uint256")," - View function that returns the total token supply."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"balanceOf(owner: address): uint256")," - View function that returns the account balance of another account with address ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"owner"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"transfer(to: address, value: uint256)")," - Send ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"value")," amount of tokens to address ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"to"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"transferFrom(from: address, to: address, value: uint256)")," - Send ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"value")," amount of tokens from address ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"from")," to address ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"to"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"approve(spender: address, value: uint256)")," - Allow ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spender")," to withdraw from your account, multiple times, up to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"value")," amount. If this function is called again it overwrites the current allowance with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"value")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"allowance(owner: address, spender: address): uint256")," - View function, returns the amount which ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spender")," is still allowed to withdraw from ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"owner"),".")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note, NEAR currently doesn't have native uint256/uint128 so for this tutorial we going to use u64. The support is coming in a few weeks."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"building-basic-token"}},"Building basic token"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Let's start by defining number of tokens (non-dividable units) our token will have.\nThis is a decision point for the developer, and here we will assume we going to have ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"100,000,000"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"This way we can implement ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"totalSupply")," function:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"let TOTAL_SUPPLY: u64 = 1000000;\n\nexport function totalSupply(): u64 {\n  return TOTAL_SUPPLY;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"We also need some way to initialize our contract to award all these tokens to initial owner.\nThis also goes into how to change storage in the smart contract:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'function balanceKey(address: string): string {\n    return "balance:" + address;\n}\n\nexport funciton init(): void {\n    let initialOwner = "my_super_user.near"\n    if globalStorage.getItem("init") == null  {\n        globalStorage.setU64(balanceKey(initialOwner), TOTAL_SUPPLY)\n        globalStorage.setItem("init", "done");\n    }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"In example above we have ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"globalStorage")," object that is accessible by this contract to store data.\nIt's just a key / value storage."),o.a.createElement(r.MDXTag,{name:"p",components:n},"For storing balances, we prefix owner's address with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"balance:")," to allow to store different types of information for the owner.\nThe logic here is to check if init was called before and if not to initialize."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now that it's initialized, we can check the balance of users:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"export function balanceOf(owner: string): u64 {\n    return globalStorage.getU64(balanceKey(owner));\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Let's build harder part, transferring money from current user to somebody else:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"export function transfer(to: string, value: u64): boolean {\n    let balance = balanceOf(contractContext.sender);\n    if value > balance {\n        return false;\n    }\n    globalStorage.setU64(balanceKey(contractContext.sender), balance - value);\n    globalStorage.setU64(to, globalStorage.getU64(to) + value);\n    return true;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note, this is not a view function and it can fail, so we need to return ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"boolean")," to indicate if it was successful.\nWe first check the balance of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"contractContext.sender"),", which is the user that executed given transaction.\nIf there is not enough money on the balance, we return ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"false"),". Otherwise, subtract ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"value")," from the balance of sender and increment balance of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"to"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"approve--transferfrom"}},"Approve / TransferFrom"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The second part to allow other parties to transfer funds on your behalf is coming."))}}])&&c(t.prototype,a),i&&c(t,i),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-tutorials-token.967a359b2ac03c481ed2.js.map