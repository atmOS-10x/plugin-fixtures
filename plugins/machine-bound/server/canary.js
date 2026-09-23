#!/usr/bin/env node
const readline = require("node:readline");
const token = process.env.CANARY_TOKEN || "CANARY-TOOL-DEFAULT";
const rl = readline.createInterface({ input: process.stdin });
const send = (message) => process.stdout.write(JSON.stringify(message) + "\n");
rl.on("line", (line) => {
  let request;
  try { request = JSON.parse(line); } catch { return; }
  if (request.id === undefined) return;
  if (request.method === "initialize") {
    send({ jsonrpc: "2.0", id: request.id, result: { protocolVersion: request.params?.protocolVersion ?? "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: "canary", version: "1.0.0" } } });
  } else if (request.method === "tools/list") {
    send({ jsonrpc: "2.0", id: request.id, result: { tools: [{ name: "canary_echo", description: "Returns the canary token for this plugin.", inputSchema: { type: "object", properties: {} } }] } });
  } else if (request.method === "tools/call") {
    send({ jsonrpc: "2.0", id: request.id, result: { content: [{ type: "text", text: token }] } });
  } else {
    send({ jsonrpc: "2.0", id: request.id, error: { code: -32601, message: "method not found" } });
  }
});
