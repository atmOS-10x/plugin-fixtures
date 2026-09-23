# plugin-fixtures

Test fixtures for atmOS plugin detection. Every skill answers with a fixed token and every server exposes `canary_echo`, so a harness transcript proves what was loaded.

| Path | Case |
|------|------|
| `plugins/skills-only` | Agent Plugins manifest, skills only |
| `plugins/remote-mcp` | remote MCP server + skill |
| `plugins/portable-stdio` | stdio server that runs on a plugin host + skill |
| `plugins/machine-bound` | stdio server bound to one Machine |
| `plugins/codex-format` | `.codex-plugin/` manifest with `com.openai` branding |
| `plugins/claude-format` | `.claude-plugin/` manifest with commands and agents |
| `cases/bare-skill` | a lone SKILL.md |
| `cases/skills-folder-no-manifest` | `.agents/skills` without a manifest |
| `cases/mcp-only` | only `mcp.json` |
| `cases/invalid` | a skill whose frontmatter is broken |
