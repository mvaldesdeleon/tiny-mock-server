# Tiny Mock Server

Hello, I am a tiny mock server. Feed me files, and I will serve them. I only eat JSON, sorry.

## Installation

```shell
$ npm install tiny-mock-server
```

## Example

```shell
~/tiny $ node index.js &
[1] [31337]
~/tiny $ curl http://localhost:8000/itty/bitty/api
{
    "hello": "tiny"
}
```

## Configuration

Really?
