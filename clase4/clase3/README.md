# Lab 3 - Smart Parking System (simple grid)

A beginner-friendly HTML, CSS, and JavaScript project using only simulated IoT sensor data.

## Files

- `index.html` at the root: Portfolio home page with a link to Lab 3.
- `clase3/lab03/index.html`: Smart Parking web page.
- `clase3/lab03/styles.css`: Basic layout, button colors, dashboard.
- `clase3/lab03/script.js`: Random statuses, click events, counts, and automatic updates.

There is **no parking-lot image**. The page displays 40 buttons named `Parking Lot 01` through `Parking Lot 40` in a grid. Green is available; red is occupied.

## How it works

1. The page creates 40 parking spaces with random statuses.
2. Clicking a space changes its status and updates the dashboard.
3. Every 4 seconds a simulation changes three random parking spaces.
4. `Update sensors now`, `Pause automatic updates`, and `Randomize spaces` are available.
5. The dashboard displays total, available, occupied, and percent occupied.

## Open locally

Open `clase3/lab03/index.html` in a browser, or use Live Server in Visual Studio Code.

## Publish on GitHub Pages

Copy the `clase3/lab03` directory to your existing repository at the same path. Keep your other files! The ZIP also includes a portfolio `index.html` with a link to this lab. If your main portfolio has changed, do not replace it: add only the link

```html
<li><a href="clase3/lab03/index.html">Lab 03 — Smart Parking System</a></li>
```

Commit and push to your GitHub Pages branch. No backend, database, external libraries, or real sensors are used.
