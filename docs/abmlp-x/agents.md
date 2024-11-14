---
sidebar_position: 1
---

# ABMLP-X Agents

Agent-Based Model Liquidity Preference-X is an interpretation - an open ended development - of the third sectoral system described by Wynne Godley and Marc Lavoie (G&L) in their book *Monetary Economics*. View the model [accounting](https://docs.google.com/spreadsheets/d/1NcpXHy4gTfRFKzN3JeQgiL39_UO8THEleTs_sAEWOxs/edit#gid=1894302012).

ABMLP-X has agent class types that are represented as a Government, Central Bank, plus multiple Producers and Households. *Theia* is a special agent class that aggregates macro level system outputs.

## Test Output

:::tip Steady State

The Hugging Face space, [abmlp-test](https://danodrisc-abmlp-test.hf.space), shows agent-based model liquidity preference-X (ABMLP-X) test output.

:::

## Agents

Agent class types: A summary of the properties, actions and methods that construct ABMLP-X.

### Government

View snippets of the Government agent [properties](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/government.html?properties).

#### Summary Methods

##### Endogenous Expenditures

Context (G&L pp 160-165): As per G&L, the model may apply a *Deficit to GDP* rule.

"A key feature of all the models presented up to now is that pure government expenditures are assumed to be exogenous. Still, there is no reason to believe that pure government expenditures are impervious to what is going on in the rest of the economy. ... What we want to underline in the present context is the sensitivity of pure government expenditures to the budget position of government. The advocates of the Treasury view argue that governments ought to reduce their expenditures and the fiscal deficit in a slowdown because by doing so, the government would provide room for the private sector to collect the funds and the savings necessary for its investment expenditures - so that it does not crowd-out the private sector. ... The Exogenous variable 'pure_expenditure' becomes an endogenous variable. The system is now path-dependent; time-dependent between what happens in the transitional states."

View a summary of the Government agent [actions](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/government.html?actions) and [methods](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/government.html?methods) used to make fiscal choices and distribute expenditures.

##### Model Run Parameters

A model run free from interest payments on Government money.

- Model: ABMLP-X
- Model Run: Test
- Government Expenditure: **See Charts**
- Number of Producers: 1
- Number of Households: 1
- Taxation rate: 20% (Flat rate; all household agents)
- Coupon Rate: 0%
- Interest Rate: 0%

##### Charts

1. Government Expenditure: 20 units every step. View a [steady state system](https://www.data-reports.net/modern-money-studio/abmlp-x-test-endogenous-expenditure-false.html) test run.
2. Government Expenditure: *Treasury View Logic*: Starting with 20 Units. The Exogenous variable `self.pure_expenditure` becomes an endogenous variable. The system is now path-dependent; time-dependent between what happens in the transitional states. View a [steady state system](https://www.data-reports.net/modern-money-studio/abmlp-x-test-endogenous-expenditure-true.html) test run.

### Producer

#### Employment by Household Agent Type

Every Producer will seek to employ one unemployed Household. Household agents have attributes which, among others, include *equity* and *type*. In every step, a Household will record its accumulated equity (wealth). Households belong to one of three *type* divisions; alpha, beta and gamma. To which division an Household belongs (at every step) will depend on its wealth that is some percentage greater or less than the average wealth of all Households in the current step.

View snippets of the Producer agent [properties](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/producer.html?properties), [actions](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/producer.html?actions) and [methods](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/producer.html?methods).

Producer agents receive an equal share of Government expenditure at the beginning of every step. Household agents are available for employment. Each Producer will choose to employ (by random choice) an unemployed alpha Household the majority of the time. Failing to find an unemployed alpha, a beta Household is sought, again, on most occasions. Producers still looking to employ will ultimately choose from the remaining population of unemployed gamma Households.


### Households

Every Household will make a decision on the amount of income taxation it will pay, that is, a percentage of total tax owed on income received in the current step. Households then update their current wealth before deciding how much of that wealth to keep as cash money. Any remaining wealth is invested in a portfolio of interest-bearing money assets.

View Household agent [properties](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/household.html?properties).

#### Taxation Arrangements

Two arrangements exist for the taxation of Household wage and interest income: A single flat rate or marginal rate arrangement that returns an array of percentages based on the level of income received.
Flat & Marginal Rate Taxation

#### Flat & Marginal Arrangement Comparison

Using an example model test run to compare the tax to be returned under either the flat rate or marginal rate arrangement. The average wage for all Households at model step 6 was: **3625.31**

*Three example Households:*
| Household Unique ID | Wage Supplied | Flat Rate (37%) Tax Return | Marginal Rate Tax Return |
| :------------------ | :------------ | :------------------------- | :----------------------- |
| 5                   | 4023.58       | 1488.72                    | 1366.38                  |
| 10                  | 2438.05       | 902.08                     | 375.24                   |
| 8                   | 6203.24       | 2295.20                    | 2892.14                  |

#### Household Agent ID 8: Marginal Rate Tax Return Breakdown

50% of historical average wage amount at step 6: (**3625.31** / 2) = **1812.65**

1. No tax on wage amount up to the first 50% of the historical average wage amount.
2. Tax on wage amount that is between 50% and 100% of the historical average wage amount (**1812.65** * 60%) = **1087.59**
3. Tax on wage amount that exceeds 100% of the historical average wage amount ((**6203.24** - **3625.31**) * 70%) = **1804.55**

#### Taxation Strategy

The effect of any taxation strategy that results in a payment percentage of less than 1 `payment_percentage_by_type < 1` can be similar to what Godley & Lavoie (G&L) remind us about the interest rate on page 160 of their book, Monetary Economics:

> A key feature of the models (see ABMSIM and ABMPC tests) presented so far is that pure government expenditures are assumed to be exogenous. Still there is no reason to believe that pure government expenditures are impervious to what is going on in the rest of the economy. G&L describe in detail the initial negative effects of higher interest rates on the Government budget deficit; effects that are eventually reversed in the early models where Government expenditures were impervious to the apparition of larger budget deficits. ..But this may not necessarily be so. Atul Sood (1999) has shown that high real interest rates lead to higher Government deficits in the short run, as must obviously be the case, but he has also shown that these higher interest rates often lead to reduced primary deficits, that is to higher primary surpluses.

> In other words, at some point, when the deficit gets too large, the Government will aim at controlling the public deficit, and to do so will reduce its pure government expenditures.

#### The Investment Portfolio Decision

The interest rate offered will affect the composition of a Household agent's money asset portfolio. Households now have a third financial asset in which to invest. The choice of which money asset to invest is based on each Household's bond price expectations and liquidity preferences. An allocation is made between money, bills (similar to Treasury bills) and long-term bonds (model Gilts, so to speak).

##### Long-Term Bonds

View the long-term [bond framework](https://docs.google.com/spreadsheets/d/1_3DX1j2vghMV8354_DmjBqt3wyg2AwMdvVSd2qtlaC4/edit#gid=1976813024).

*Mirroring Godley & Lavoie (G&L) pp 133 - 135.*

When Households make their long-term bond decisions, three features matter. First, they are concerned with the price that the long-term bond fetches in the current period, for this defines the yield of the asset which will arise in the next period (model step). Second, what also matters is the expected price of the bond in the next period, when it will be possible to sell the bond. These two prices help define what we shall call the pure expected rate of return on bonds (ERrbL). The third factor is the confidence with which households hold their expectations about future bond prices. In a model where there may be a multiplicity of household agent opinions, it is a measure of the weight that households investors attribute to the validity of their expectations.

#### Agent Expectations & Information Privilege

In every step, Households speculate as to whether they expect to see a higher, lower or no change in the price of a bond in the next period. Depending on a Household's *information privilege* - informed as a probability based on Household *type* - logic will be a random choice function (50% percent of the time higher / 50% percent of the time lower); or will based on a moving average calculation of system velocity or acceleration, that is, the rate at which the Government has been issuing new bills.

#### Agents and the Expectations of Others

To assist speculation, Households communicate their bond *price expectation* to other Households. Though it may only communicate with another of the same type (alpha, beta or gamma), a Household has no preference for which other agent it will contact. A feature of Household discussions about its bond *price expectation* for the next period: When contacted, there is a ten percent chance the Household spoken to will inform that its *price expectation* is between 1 percent and 5 percent greater than the actuality. A five percent chance it will say its *price expectation* is between 1 percent and 5 percent lower than the actuality. Households will accurately state their *price expectation* for the next period, on average, eighty-five percent of the time.

*Mutually exclusive possibilities a Household will change its price expectation to match that of another Household agent.*
| Price Expectation (PE) in Current Step | Alpha Household | Beta Household | Gamma Household |
| :------------------------------------- | :-------------- | :------------- | :-------------- |
| Other Agent PE > Agent PE              | 10% of time     | 15% of time    | 20% of time     |
| Other Agent PE < = Agent PE            | 15% of time     | 20% of time    | 25% of time     |
| Other Agent PE < Agent PE              | 20% of time     | 25% of time    | 30% of time     |

View a summary of the code, the [actions](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/household.html?actions) and [methods](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/household.html?methods), driving the behaviours of each and every Household agent.

### Theia

Created to collect macro data, Theia will run after Producer and Household agents. Significantly, Theia collects the consumption demands of both Government and Households when adding up the national income. View the Theia [agent code](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/theia.html).

### Central Bank

Last, but not least, the Central Bank responds in every model step. With access to latest information from Theia, actions include setting the base rate and taking a view on Government pure expenditures, that is, looking at the (positive or negative) acceleration of new bills issued, and the (increasing or decreasing) consumption of Households over the previous six periods. View Central Bank agent [properties](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/central-bank.html?properties).

Finally, profits on money assets (bills) previously purchased, if any, are returned to the Government. New cash money supplied to Households by the Central Bank is simply equal to the amount of bills purchased by the Central Bank. See Central Bank agent [actions](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/central-bank.html?actions) and [methods](https://www.data-reports.net/modern-money-studio/code-snippets/abmlp-x/central-bank.html?methods).
