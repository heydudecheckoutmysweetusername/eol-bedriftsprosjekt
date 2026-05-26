from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 402, "height": 1256})
    page.goto("http://localhost:5173")
    page.wait_for_load_state("networkidle")
    page.screenshot(path="post-screenshot.png", full_page=True)
    browser.close()
