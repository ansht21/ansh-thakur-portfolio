"""Build a 1200x630 Open Graph cover from the revenue cockpit.

Social previews (LinkedIn, X/Twitter, Facebook) render best at 1200x630 and
do NOT support WebP, so a PNG-compatible raster is produced. JPEG is used
because it is universally supported for og:image and far lighter than PNG.
The cockpit is 2560x1440, so it is letterboxed onto the OG canvas under a
title bar.

Run:  python scripts/make_og_cover.py
"""
import os

from PIL import Image, ImageDraw, ImageFont

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO, "images", "revenue-cockpit.png")
OUT = os.path.join(REPO, "images", "og-cover.jpg")
