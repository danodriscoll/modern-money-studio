---
sidebar_position: 2
title: Resource
hide_table_of_contents: false
---

## Government Expenditures

- UK General Government: Final consumption expenditure: CP SA | [ONS](https://www.ons.gov.uk/economy/grossdomesticproductgdp/timeseries/nmrp/).

### From Quarterly to Monthly Expenditure Time-Series

To match the monthly (base) rates offered by the Central Bank, [ONS](https://www.ons.gov.uk/economy/grossdomesticproductgdp/timeseries/nmrp/) provided quarterly Government expenditure time-series are exploded into a monthly data series. View a [monthly data series](https://www.data-reports.net/modern-money-studio/explode_quarterly_values.html).

### Clarity on Expenditure Time-Series

Fragments of an email exchange between myself (Dan) and a member of the ONS GDP team about which UK Government expenditure time-series would be most appropriate to use in my model.

#### Email Fragment: Sent to ONS

:::note Email Fragment: Sent to ONS

... I have two questions regarding the following UK government expenditure time-series:

1. UK General Government Final Consumption Expenditure (GGFCE) (Current Prices Seasonally Adjusted)
2. Total Gross Fixed Capital Formation (Current Prices Seasonally Adjusted)

First, should I combine these two series to get total government spending? (I was concerned that I might be missing another significant series.) 

Second, I understand that the components of UK GGFCE (CPSA) are as follows: Health, Education, Social Protection, Justice & Fire, Military Defence and Other. Does ‘Other’ here include central government interest payments on public sector debt?

:::

:::note Email Fragment: Received from ONS

... It's taken me a little time to compile answers to your questions from other members of ONS with more knowledge on the subject you are querying.  

In terms of the question on GGFCE/Fixed capital Formation, for comparability, we recommend using only the 'General Government Final Consumption Expenditure (Current Prices Seasonally Adjusted)' series for government spending. Although you are correct that there is government investment in 'Total Gross Fixed Capital Formation (Current Prices Seasonally Adjusted)' it would not be correct to simply sum the two series.

For your second query, "Other" would not include interest payments. The public sector debt elements would be covered by financial account transactions which can be found in sector financial accounts (https://www.ons.gov.uk/economy/nationalaccounts/uksectoraccounts/bulletins/quarterlysectoraccounts/apriltojune2023) or in the public sector finances (https://www.ons.gov.uk/economy/governmentpublicsectorandtaxes/publicsectorfinance/bulletins/publicsectorfinances/september2023).

:::

## Interest Rates

- UK Interest rates and Bank Rate | [BoE](https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate)

## Taxation Rates

- UK Taxation rates: Institute for Fiscal Studies (IFS) | [IFS Tax Lab](https://ifs.org.uk/taxlab/taxlab-key-questions/how-have-government-revenues-changed-over-time)

## Gilt Yields

- UK Long-Term Government Bond Yields: 10-year: Main | [FRED](https://fred.stlouisfed.org/series/IRLTLT01GBM156N)

## Institutions

- HM Treasury | [HM-Treasury](https://www.gov.uk/government/organisations/hm-treasury)
- Bank of England | [BoE](https://www.bankofengland.co.uk)
- Debt Management Office [DMO](https://www.dmo.gov.uk/)
