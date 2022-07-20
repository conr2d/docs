---
id: anatomy
title: Anatomy of a Contract
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"


When writing smart contracts you will leverage common programming concepts such as types, collections, modules, interfaces, objects and more. While language-specific implementation may vary, the main anatomy of a smart contract usually follows the same patterns.

---

## Anatomy of a Donation

Let's look at a simple contract whose main purpose is to allow users to donate $NEAR to a specific account. Particularly, the contract keeps track of a `beneficiary` account and exposes a `donation` function that forwards the money and keeps track of the donation info. Take a quick peek at the snippet bellow and then continue to the [modules](#modules) section.  

:::tip
This contract is written for educational purposes only.
:::

<CodeTabs>
  <Language value="🌐 - Javascript" language="js">
    <Github fname="index.js"
            url="https://github.com/near/near-sdk-js/blob/ben/temp-examples/examples/src/docs/donation.js"
            start="1" end="49" />
    <Github fname="views.js"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-rs/contract/src/views.rs" />
  </Language>
  <Language value="🦀 - Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-rs/contract/src/lib.rs"
            start="1" end="74" />
    <Github fname="views.rs"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-rs/contract/src/views.rs" />
  </Language>
  <Language value="🚀 - AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/index.ts"
            start="1" end="29" />
    <Github fname="model.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/model.ts" />
  </Language>
</CodeTabs>

---

## Modules
When writing smart contracts you will leverage imports to organize your code, and reuse third-party libraries.

The main library you will use while writing smart contracts is the NEAR SDK. This can be seen at the top of the donation smart contract.

<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value={0} label="🌐 - Javascript">

  ```js
    import { NearContract, NearBindgen, near, call, view, UnorderedSet, UnorderedMap } from 'near-sdk-js'
  ```

  </TabItem>
  <TabItem value={1} label="🦀 - Rust">

  ```rust
    use near_sdk::collections::Vector;
    use near_sdk::{env, log, near_bindgen, AccountId, Promise, Balance};
  ```

  </TabItem>

  <TabItem value={2} label="🚀 - AssemblyScript">

  ```ts
    import { u128, context, logging, ContractPromiseBatch } from "near-sdk-as";
    import { STORAGE_COST, Donation, add_donation, get_donation,
            set_beneficiary, get_beneficiary, get_number_of_donation } from "./model";
  ```

  </TabItem>
</Tabs>

The NEAR SDK defines methods to, among other things:

1. Understand the context of a transaction (e.g. who started it, how much money they sent, etc...).
2. Handle the state (storage) of the smart contract.
3. Transfer money to other users/contracts.
4. Interact with other smart contracts.

---
## Contract's Interface
Smart contracts expose an interface so users in the blockchain can interact with them. A contract's interface is made of all the callable functions that live in the codebase.

<hr class="subsection" />

### Initialization Functions
When smart contracts are deployed to the blockchain, the variables must be initialized with a starting value. This is done automatically by default but it's very common to overload this behavior by creating a custom initialization function.

For example, in the donation contract, a `beneficiary` account is stored on the contract as a string. When the contract is deployed, we wouldn't want that account to be defaulted to an empty string `""`. This is why we created the `new` method, which takes in an account ID as a parameter and sets the `beneficiary` variable. 


<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value={0} label="🌐 - Javascript">

  <Github fname="index.js" language="js"
          url="https://github.com/near/near-sdk-js/blob/ben/temp-examples/examples/src/docs/donation.js"
          start="15" end="19" />

  </TabItem>
  <TabItem value={1} label="🦀 - Rust">

  <Github fname="lib.rs" language="rust"
          url="https://github.com/near-examples/docs-examples/blob/main/donation-rs/contract/src/lib.rs"
          start="28" end="36" />

  🦀 - Notice that the `new` method has two macros at the top: `#[init]` and `#[private]`. `#[init]` limits the method to be callable only once, meanwhile `#[private]` makes the method only callable by the contract's account.

  </TabItem>

  <TabItem value={2} label="🚀 - AssemblyScript">

  ```ts
    // Public - init function, define the beneficiary of donations
    export function init(beneficiary: string): void {
      assert(context.predecessor == context.contractName, "Method new is private");
      set_beneficiary(beneficiary);
    }
  ```

  🚀 - In AssemblyScript there is no `#[init]` macro. You can create one yourself, as in the example above, but be mindful that, as any other method, it could be called multiple times. You can force the function to work only once by adding the following code:

  ```ts
    const initialized: bool = storage.getPrimitive<bool>('init', false)
    assert(!initialized, "Already initialized")
    storage.set<bool>('init', true)
  ```

  </TabItem>
</Tabs>

<hr class="subsection" />

### Public and Private methods
All public methods that are exposed will be **callable by all users** in the blockchain. In the donation contract above, such methods are:

1. `donate`: A method in which the users attaches NEAR in to donate.
2. `get_donation_by_number`: Returns a recorded donation, stating how much a user donated.
3. `new`: Enables to initialize the contract with a specific `beneficiary`. This function is made private by enforcing that the caller is the contract account itself.

All the other private functions can only be called from within the contract itself.

---

## Typed Variables

Smart contracts store typed values within them. The data types available are: `u8`, `u16`, `u32`, `u64`, `u128`, and their signed counterparts. Furthermore, the SDKs expose collections such as `Vector` and `Map` to simplify handling data. We cover this topic in depth on the [Storage](storage.md) section. 

There are two things to be aware of at a high level when dealing with storage. First, underflow and overflow errors can occur and often it's a good idea to check when doing operations. Second, in Rust, the contract's attributes are stored in `Self`. With AssemblyScript, you need to explicitly rely on the `storage` object to store attributes.

:::tip
In Rust, we are also relying on the `env::storage` object to store the contract's state. This, however, gets abstracted away by the SDK.
:::

:::warning
Remember to check for possible underflow and overflows! In rust, you can do this by simply adding the `overflow-checks = true` flag in your `Cargo.toml`.
:::

---

## Classes, NEAR Bindgen and Serialization

You might have notice in the examples that some structs have the `#[near_bindgen]` macro and in Rust, derive Borsch or serde serialization.

<CodeTabs>
  <Language value="🌐 - Javascript" language="js">
    <Github url="https://github.com/near/near-sdk-js/blob/ben/temp-examples/examples/src/docs/donation.js" start="13" end="19" />
  </Language>
  <Language value="🦀 - Rust" language="rust">
    <Github url="https://github.com/near-examples/docs-examples/blob/main/donation-rs/contract/src/lib.rs" start="10" end="15" />
  </Language>
  <Language value="🚀 - AssemblyScript" language="ts">
    <Github url="https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/model.ts" start="4" end="10"/>
  </Language>
</CodeTabs>

The `#[near_bindgen]` macro is used on a struct and the function implementations to generate the necessary code to be a valid NEAR contract and expose the intended functions to be able to be called externally.

Borsch serialization is needed for optimal internal state serialization and `serde` for external JSON serialization.

:::tip
Did you know that contracts communicate with each other using values encoded in JSON?
:::


:::info Using external libraries
As a general rule of thumb for Rust, anything that supports `wasm32-unknown-unknown` will be compatible with your smart contract.
However, we do have a size limit for a compiled binary of a contract which is ~4.19 MB so it is possible that certain large libraries will not be compatible.
:::