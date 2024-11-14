---
hide_table_of_contents: true
---

# Gilt Edged Mini (GEM)

GEM is the use of [ABMLP-X](/abmlp-x/agents) in order to run and consume - pro rata - real-world UK expenditure and interest rate time-series. A model run will typically consume time-series data that starts in either the year 1970 or, less typically, starting in the year 1695. A model run may end with either the latest values from the available time-series, or, if originating governing parameter settings, with values that represent some future date.

GEM represents the monetary system connections between the Government, a Central Bank and many, possibly thousands, of Producer and Household agents.

## Development

### Supposition

> *The generally accepted perception*: Movements, especially large ones, in the price of a UK Gilt index are always the consequence of bond traders reacting to recent policy proposals. And to an extent, at the margins, near-term decisions show effects. I suspect, however,  that the major price movements we see in Gilts result from longer-term system dynamics. The time lagged behaviours - *velocity* and *acceleration* effects - caused by an adjustment to one or more system governing parameters - adjustment(s) made months previously.

### Analysis

I use local [Jupyter](https://code.visualstudio.com/docs/datascience/jupyter-notebooks) notebooks to wrangle and analyse both model (macro and agent-level) output as well as real-world UK economic data. I connect the output to a large language model (LLM) in order to further analyse and appreciate the datasets from a political-historical context.

Analysis includes, but is not limited to:
- When and why the UK spends:
    - Wars, pandemics and historical patterns.
- The evolving development of Household agent portfolio strategies:
    - In every model step, Household agents pursue wealth management strategies. These include, but are not limited to, the management of a Government money portfolio.

View a summary technical [architecture](https://www.data-reports.net/modern-money-studio/studio-sketch/architecture.html).

:::warning Disclaimer

The website and the information contained herein is not intended to be a source of advice or credit analysis with respect to the material presented, and the information and/or documents contained in this website do not constitute investment advice.

:::
