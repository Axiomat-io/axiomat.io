+++
title = 'More accurate market data, and honest failures instead of empty answers'
date = 2026-07-31
label = 'Fix'
layout = 'update'
description = "Stock predictions now compare prices on the same basis even after a split, market tools say so when their data source is down, and assistants following major news feeds read them more reliably."
+++

## Predictions stay accurate through a stock split

If an assistant tracked a stock prediction against a company that later did a stock split, the comparison could come out wrong — the original price it recorded didn't reflect the split, but the current price always does, so the two weren't measuring the same thing anymore.

Assistants that score predictions now re-check the price on a consistent basis at scoring time, so a split no longer throws off the result.

## A market data outage now says so

When Ward's stock and market data source had an outage, tools could return an empty result that looked the same as "nothing to report" — no error, no way to tell the difference from your assistant's output.

Market tools now say when the data source itself is unavailable, instead of quietly returning nothing.

## More reliable reading of major news feeds

Assistants that follow the news — headline briefings, market watchers — now read BBC and Financial Times feeds directly and more reliably. Reuters and AP don't offer a public feed for automated readers to follow, so assistants fall back to searching those instead of retrying a feed that was never going to work.
