#!/usr/bin/env python3
"""
Authority & Link-Earning Ledger CLI (seo-aeo-geo-authority-engine)

Manages persistent tracking across the Ranked 69-Point Authority & Citation System:
- S-Tier: Editorial link exchanges (Tactics 1-5), Buyer & AI-cited roundups (6-12),
  Citable statistics inventory (13-19), Journalist / Qwoted pitches (20-27)
- A-Tier: Competitor link-gap pitches (28-32), Link recovery (33-37), Free calculator tools (38-43)
- B-Tier: Broken resource replacements (44-49), Missing visuals (50-55), Article-to-video demos (56-60)
- C-Tier: Vendor stack case studies (61-64)
- D-Tier: Canonical directory & government listings (65-69)
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _load_ledger(path: str) -> dict:
    if not os.path.exists(path):
        return {
            "meta": {
                "created_at": _now_iso(),
                "updated_at": _now_iso(),
                "domain": "https://techfusion-alchemy.xyz",
                "legal_entity": "Techfusion Automata (Pty) Ltd (Reg: 2026/399837/07)",
                "framework": "SEO/AEO/GEO + 69-Tactic Ranked Authority Engine",
            },
            "editorial_links": [],
            "roundups": [],
            "citable_statistics": [],
            "journalist_pitches": [],
            "competitor_gaps": [],
            "link_recovery": [],
            "free_tools": [],
            "broken_replacements": [],
            "visual_and_video_assets": [],
            "vendor_case_studies": [],
            "business_listings": [],
        }
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def _save_ledger(path: str, data: dict) -> None:
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    data.setdefault("meta", {})["updated_at"] = _now_iso()
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def _write_output(output_path: str, payload: dict) -> None:
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    print(f"Success! Data written to: {output_path}")


def cmd_summary(args: argparse.Namespace) -> None:
    ledger = _load_ledger(args.ledger)
    counts = {
        "s_tier_editorial_links": len(ledger.get("editorial_links", [])),
        "s_tier_roundups": len(ledger.get("roundups", [])),
        "s_tier_citable_statistics": len(ledger.get("citable_statistics", [])),
        "s_tier_journalist_pitches": len(ledger.get("journalist_pitches", [])),
        "a_tier_competitor_gaps": len(ledger.get("competitor_gaps", [])),
        "a_tier_link_recovery": len(ledger.get("link_recovery", [])),
        "a_tier_free_tools": len(ledger.get("free_tools", [])),
        "b_tier_broken_replacements": len(ledger.get("broken_replacements", [])),
        "b_tier_visual_and_video_assets": len(ledger.get("visual_and_video_assets", [])),
        "c_tier_vendor_case_studies": len(ledger.get("vendor_case_studies", [])),
        "d_tier_business_listings": len(ledger.get("business_listings", [])),
    }
    counts["total_tracked_items"] = sum(counts.values())
    _write_output(args.output, {"meta": ledger.get("meta", {}), "counts": counts})


def cmd_add_link(args: argparse.Namespace) -> None:
    ledger = _load_ledger(args.ledger)
    entry = {
        "partner": args.partner,
        "source_url": args.source_url,
        "target_url": args.target_url,
        "anchor": args.anchor,
        "topic": args.topic,
        "status": args.status,
        "logged_at": _now_iso(),
    }
    ledger.setdefault("editorial_links", []).append(entry)
    _save_ledger(args.ledger, ledger)
    _write_output(args.output, {"status": "added_editorial_link", "entry": entry})


def cmd_add_roundup(args: argparse.Namespace) -> None:
    ledger = _load_ledger(args.ledger)
    entry = {
        "publisher": args.publisher,
        "url": args.url,
        "cited_by_ai": [s.strip() for s in args.cited_by.split(",") if s.strip()],
        "missing_buyer_need": args.missing_need,
        "exact_addition_blurb": args.blurb,
        "status": args.status,
        "logged_at": _now_iso(),
    }
    ledger.setdefault("roundups", []).append(entry)
    _save_ledger(args.ledger, ledger)
    _write_output(args.output, {"status": "added_roundup", "entry": entry})


def cmd_add_pitch(args: argparse.Namespace) -> None:
    ledger = _load_ledger(args.ledger)
    existing_ids = {p.get("query_id") for p in ledger.get("journalist_pitches", [])}
    if args.query_id in existing_ids:
        print(f"Error: Duplicate query_id '{args.query_id}' already pitched (Tactic 27).", file=sys.stderr)
        sys.exit(1)
    entry = {
        "platform": args.platform,
        "query_id": args.query_id,
        "outlet": args.outlet,
        "topic": args.topic,
        "research_url": args.research_url,
        "status": args.status,
        "logged_at": _now_iso(),
    }
    ledger.setdefault("journalist_pitches", []).append(entry)
    _save_ledger(args.ledger, ledger)
    _write_output(args.output, {"status": "added_journalist_pitch", "entry": entry})


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Manage Ranked 69-Tactic Authority & Link Ledger")
    sub = parser.add_subparsers(dest="command", required=True)

    p_sum = sub.add_parser("summary", help="Write ledger summary counts to output file")
    p_sum.add_argument("--ledger", required=True, help="Path to authority_ledger.json")
    p_sum.add_argument("--output", required=True, help="Path to summary JSON output")
    p_sum.set_defaults(func=cmd_summary)

    p_link = sub.add_parser("add-link", help="Log an editorial link placement (Tactics 1-5)")
    p_link.add_argument("--ledger", required=True)
    p_link.add_argument("--partner", required=True)
    p_link.add_argument("--source-url", required=True)
    p_link.add_argument("--target-url", required=True)
    p_link.add_argument("--anchor", required=True)
    p_link.add_argument("--topic", required=True)
    p_link.add_argument("--status", required=True)
    p_link.add_argument("--output", required=True)
    p_link.set_defaults(func=cmd_add_link)

    p_round = sub.add_parser("add-roundup", help="Log a buyer or AI-cited roundup target (Tactics 6-12)")
    p_round.add_argument("--ledger", required=True)
    p_round.add_argument("--publisher", required=True)
    p_round.add_argument("--url", required=True)
    p_round.add_argument("--cited-by", required=True)
    p_round.add_argument("--missing-need", required=True)
    p_round.add_argument("--blurb", required=True)
    p_round.add_argument("--status", required=True)
    p_round.add_argument("--output", required=True)
    p_round.set_defaults(func=cmd_add_roundup)

    p_pitch = sub.add_parser("add-pitch", help="Log a journalist / Qwoted pitch (Tactics 20-27)")
    p_pitch.add_argument("--ledger", required=True)
    p_pitch.add_argument("--platform", required=True)
    p_pitch.add_argument("--query-id", required=True)
    p_pitch.add_argument("--outlet", required=True)
    p_pitch.add_argument("--topic", required=True)
    p_pitch.add_argument("--research-url", required=True)
    p_pitch.add_argument("--status", required=True)
    p_pitch.add_argument("--output", required=True)
    p_pitch.set_defaults(func=cmd_add_pitch)

    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
