+++
title = 'Steadier market data, and fewer stuck scheduled runs'
date = 2026-08-28
label = 'Fix'
layout = 'update'
description = "Market overviews and sector performance stop showing blanks for a still-settling session, prediction tracking stops silently missing records, and a rare cross-workspace naming collision that could fail a scheduled run is fixed."
+++

A handful of fixes, mostly for assistants that watch markets or run on a schedule.

**Market data.** Stock prices and market overviews could occasionally show up blank instead of a number — usually during a trading session that hadn't fully settled yet. That's fixed, with a real fallback instead of a blank. Sector performance for the 1-day view had a similar problem and was returning nothing at all for any sector; it now shows real numbers. When a price or sector genuinely isn't available, you'll see that explicitly instead of a silent gap.

**Prediction tracking.** An assistant tracking a large number of predictions could, in rare cases, miss some of them when scanning for ones due to be scored — the scan would silently stop short instead of covering everything open. Fixed, so a full scan no longer drops records.

**Scheduled runs.** A rare naming collision — your workspace happening to have an agent with the same name as one in a different workspace — could cause that agent's saved state or canvas updates to fail on a scheduled run. Nothing about your data was ever at risk; the collision was in an internal identifier, not your records. It's fixed either way.

**Asking for an integration Ward doesn't have.** If you ask Ward to connect to something it doesn't support, it now consistently tells you so directly, rather than sometimes filing it away as an open request. Ward doesn't build one-off integrations for individual asks — if what you need exists as an MCP server, ask and it'll look for it and offer to connect it.
