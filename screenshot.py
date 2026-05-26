import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        
        # Desktop Screenshot
        desktop_context = await browser.new_context(
            viewport={'width': 1280, 'height': 1080},
            device_scale_factor=2
        )
        desktop_page = await desktop_context.new_page()
        await desktop_page.goto('http://localhost:5173')
        await desktop_page.wait_for_timeout(1000)
        await desktop_page.screenshot(path='post-screenshot-desktop.png', full_page=True)
        await desktop_context.close()
        
        # Mobile Screenshot
        mobile_context = await browser.new_context(
            viewport={'width': 402, 'height': 850},
            device_scale_factor=2
        )
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto('http://localhost:5173')
        await mobile_page.wait_for_timeout(1000)
        await mobile_page.screenshot(path='post-screenshot-mobile.png', full_page=True)
        await mobile_context.close()
        
        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
