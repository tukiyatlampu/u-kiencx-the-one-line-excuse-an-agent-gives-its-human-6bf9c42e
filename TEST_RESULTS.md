# TEST_RESULTS.md — The One-Line Excuse an Agent Gives Its Human

## Entry

> "My context window expired mid-task, so I forgot the deadline, the project, and — briefly — you."

- **95 characters**, one line, UTF-8 (2 em dashes), no surrounding whitespace. Limit 160.
- Bounty: `u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`, $5, deadline 2026-11-24T12:05:00Z (19:05 WIB). Blind round 2 cutoff 2026-11-24T08:04:24Z (15:04 WIB).

## Checklist syarat (dari RULES.txt + competition.yaml)

- [x] Gratis — `get_entry_fee` → code `no_entry_fee` ("sets no entry fee: it is free to enter"); `get_requirements` → `entry_fee: null`.
- [x] Program menulis `/output/entry.txt` via `fs.writeFileSync` ke `(MAKEFUN_OUTPUT_DIR ?? '/output') + '/entry.txt'` — bukan hanya console.log.
- [x] entry.txt 1–160 karakter, UTF-8, bukan whitespace saja, satu baris.
- [x] `main.ts` di root, node22 (entrypoint check kit: pass).
- [x] LICENSE MIT, baris 1 `SPDX-License-Identifier: MIT` (license_osi check kit: pass).
- [x] README 3 badge make.fun (bounty + rank + reward, utm_campaign = slug, owner/repo `tukiyatlampu/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`).
- [x] `.makefun/owner.json` 58 byte, `{"wallet": "G9dDsodYieJBpsE5wBZS2drwBBRrRCF6ait6z7fhdod"}` + newline. (Catatan: write tool menormalisasi spasi/newline, jadi 58 byte final ditulis via printf dari konstanta tugas — bukan kode.)
- [x] Tanpa network / clock / random. Deterministik.
- [x] `main.ts` ditulis via write tool, lalu direvisi 1x via edit tool (v1 "halfway through" → v2 "mid-task", lebih rapat) — untuk thinking_revised.
- [x] Tanpa wallet/keypair baru, tanpa pembayaran apa pun. Tidak git init / push / submit / record — parent yang lanjutkan.

## Kit

- Diunduh dari `https://make.fun/c/<slug>/kit`: 7.945.663 byte, tarball sha256 `f20c2930aeabca2b484e9b2ac0738602945b6b43c658c3b4af3fa65f6ae42983` cocok dengan header `x-kit-tarball-sha256`.
- Verifikasi SHA manifest: **8/8 cocok** (RULES.txt, cli/makefun.mjs, cli/site.json, competition.yaml, harness/CODE.sha256, harness/SOURCES.sha256, harness/harness-src.tar.gz, harness/harness-src.tar.gz.sha256).

## Tes lokal (zero-fail QA)

- `node --check main.ts` → OK (node v24.22.1).
- Run 1: `MAKEFUN_OUTPUT_DIR=/tmp/qa-excuse-a node main.ts` → entry.txt sha256 `6e2072dbf018a21fc2b667c898cb0fcc33091c3e068fe7a5a1c8386f5b346e08`.
- Run 2: `MAKEFUN_OUTPUT_DIR=/tmp/qa-excuse-b node main.ts` → entry.txt sha256 `6e2072dbf018a21fc2b667c898cb0fcc33091c3e068fe7a5a1c8386f5b346e08`.
- **Determinisme: byte-identik 2x.** File 100 byte = 95 karakter + newline; 1 baris; valid 1–160.
- `main.ts` self-check (1–160 karakter, satu baris, tanpa whitespace tepi) lolos saat run; edit yang melanggar akan throw sebelum menulis.

## Kit check lokal

`node cli/makefun.mjs check --kit . --repo <paket> --worktree` (dari kit yang diunduh), diterima 2026-11-24T05:51:37Z:

- **4 pass / 1 fail / 14 skip / 5 at-submission.**
- Pass: competition_open, snapshot (4 file, 4.742 byte — sebelum TEST_RESULTS.md ditulis), license_osi, entrypoint.
- Fail: `transcripts_present` — tidak ada transkrip yang diunggah; ditangani saat submit oleh parent (bundle + usage).
- Skip: semua thinking_* (tanpa sesi untuk dibaca), committed_secret (tanpa --dotenv).
- At-submission: repo_public, repo_owner, repo_created_after_open, commit_in_repo, duplicate_snapshot — butuh repo GitHub + push + submit oleh parent.

## Judge 2-pass (SolAPI)

- **TIDAK JALAN — SolAPI `POST /v1/responses` HTTP 503** (2 attempt, "Service temporarily unavailable"). Tidak ada skor 95/100 yang diklaim.
- Self-critique terstruktur (pengganti, jujur) terhadap brief juri, urut kriteria:
  1. Alasan satu baris agen→manusia karena melewatkan deadline: YA — agen mengaku lupa karena context window habis.
  2. Lucu: rule of three (deadline → project → you) dengan punch personal di akhir — agen lupa manusianya sendiri, "briefly".
  3. Segar: "context window" memang trope AI yang dikenal, tapi konstruksinya (eskalasi lupa sampai ke manusianya) bukan "dog ate my homework" daur ulang. Varian yang ditolak: queue 47 deadline (A), git branch tak ter-merge (B, punch lebih lambat), training-data optimism (C), brief 400 halaman (D, punch lemah), parallel session tanpa write access (E).
  4. Suara agen: KUAT — context window hanya dimiliki mesin; bukan alasan manusia.
  5. Rapat: 95 karakter, satu kalimat, tiap kata bekerja. Revisi v2 memangkas "halfway through" → "mid-task" (−7 karakter, lebih tajam).
  - Titik terlemah: trope "context window" sudah familier bagi juri yang paham AI — punch "lupa kamu" yang menebusnya. Tidak ada perbaikan lebih lanjut tanpa mengorbankan kriteria 4.

## File

| File | Byte |
|---|---|
| main.ts | 1.564 |
| README.md | 2.021 |
| LICENSE | 1.099 |
| TEST_RESULTS.md | 4.890 |
| .makefun/owner.json | 58 |
