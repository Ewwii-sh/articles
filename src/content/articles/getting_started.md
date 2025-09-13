---
title: "Getting Started"
description: "Getting started with ewwii and its ecosystem"
pubDate: "2025-09-08T19:00:00"
heroImage: "../../assets/undraw_runner-start.png"
---

To get started with ewwii, we recommend installing both `ewwii` and `eiipm`.

What is eiipm, you may ask. Simply put, it's a package manager which will allow you to install tools from the ewwii ecosystem.

### Installing ewwii

There are two ways through which you can install ewwii.

- Building yourself (recommended).
- Installing binary from [releases](https://github.com/Ewwii-sh/ewwii/releases/latest) (recommended for Linux only).
- Installing via [Cargo](https://doc.rust-lang.org/cargo/).

Installing binary through the releases is the easiest and fastest approach but is only limited to Linux. If you are on Linux and want to install ewwii quickly, then use this method.

Since building ourselves is the hard but recommended cross-patform approch, we will only talk about that method here. However, if you want to install through cargo, then you can checkout [Installing via package managers](https://ewwii-sh.github.io/ewwii/installation.html#installing-via-package-managers) in the ewwii docs. And if you installed using the releases, then skip to the end of installing ewwii section.

That said, let's quickly get into building ewwii from source code. In this method, we expect that you have `git` and `rust` installed.

Firstly, get a fresh clone of ewwii:

```sh
$ git clone https://github.com/Ewwii-sh/ewwii.git
```

After running this command, you will have a directory called `ewwii/` in the current working directory. Enter into that directory with this command:

```sh
$ cd ./ewwii/
```

Now that you are in the source code directory, simply run the following command to build ewwii:

```sh
$ cargo build --release
```

Once it finishes, you will get a binary named `ewwii` in `./target/release/`. You should run the following command to move it to a global destination so that you and all other program can access it with just an `ewwii` command:

```sh
$ sudo cp ./target/release/ewwii /usr/local/bin/
```

> Note: if you installed the binary through the releases, make sure that you do something similar.

Voila! Run `ewwii -V` in the terminal to see if it works!

### Installing eiipm (optional)

Now that you have ewwii installed, the next step is installing eiipm--it's package manager.

If you are on Linux, then you can run the following command:

```sh
curl -sSL https://raw.githubusercontent.com/Ewwii-sh/eiipm/main/install.sh | sh install.sh
```

And if you are not, clone `https://github.com/Ewwii-sh/eiipm.git` and repeate the steps mentioned above in the [installing ewwii](#installing-ewwii) section.

If you want to install through Cargo, then checkout [installing using cargo](https://ewwii-sh.github.io/eiipm/#4-using-cargo) in the eiipm docs.

### Next steps

Now that you have ewwii and potentially eiipm as well, we can move on to the next step--reading the documentation.

You can use the following links to reach the documentation of both ewwii and eiipm.

- [Ewwii documentation](/ewwii)
- [Eiipm documentation](/eiipm)
