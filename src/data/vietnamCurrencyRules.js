export const dumbWayDiagram = `flowchart TD
    A["INR in India"]
    B["Buy VND from Indian Forex Dealer"]
    C["❌ Lose 15%–20% on exotic currency spreads"]

    A --> B
    B --> C`;

export const smartWayDiagram = `flowchart TD
    A["INR in India"]
    B["Buy USD Cash Notes (~0.5% markup)"]
    C["Carry physical USD to Vietnam"]
    D["Exchange to VND at Airport or Gold Shops"]

    A --> B
    B --> C
    C --> D`;

export const smartestWayDiagram = `flowchart TD
    A["INR in Indian Bank Account"]
    B["Zero-Forex Debit Card (Visa / Mastercard)"]
    C["Withdraw at MB Bank or Ocean Bank ATM"]
    D["🎉 VND Cash at 0% ATM Fee & Interbank Rate"]

    A --> B
    B --> C
    C --> D`;

export const indiaPrepDiagram = `flowchart TD
    Start["Trip Prep in India"]
    Card["1. Primary Cash Tool:\nZero-Forex Debit Card"]
    App["Enable Int'l Transactions & ATM\nin mobile banking app"]
    Cash["2. Emergency Cash Cushion:\nBuy $200–$500 in USD notes"]
    Avoid["❌ Never buy VND in India"]

    Start --> Card
    Card --> App
    Start --> Cash
    Cash --> Avoid`;

export const atmDecisionDiagram = `flowchart TD
    NeedCash["Need Cash in Vietnam"]
    FindATM{"Choose an ATM"}
    BestATM["MB Bank / Ocean Bank\n(0% ATM Fee)"]
    OtherATM["Other Vietnam ATMs\n(₫30k–66k Surcharge)"]
    Prompt{"ATM Screen Prompt:\n'Accept Conversion to INR?'"}
    Decline["✅ Select 'Decline Conversion'\n(Charge in VND)"]
    Win["🏆 Indian bank converts at\nlive Visa/MC rate (No markup)"]

    NeedCash --> FindATM
    FindATM -->|"Recommended"| BestATM
    FindATM -->|"If unavailable"| OtherATM
    BestATM --> Prompt
    OtherATM --> Prompt
    Prompt --> Decline
    Decline --> Win`;

export const customsRulesDiagram = `flowchart TD
    Return["Leftover Currency After Trip"]
    Split{"Select Currency"}
    VND["₫ Vietnamese Dong"]
    VNDLimit["Max ₫15,000,000 (~₹50k)\nwithout customs declaration"]
    VNDDone["Spend or sell at BookMyForex"]
    USD["$ US Dollar Cash Notes"]
    USDLimit["Max $2,000 USD legally\nheld under RBI rules"]
    USDDone["Keep at home for next trip"]

    Return --> Split
    Split -->|"VND"| VND
    VND --> VNDLimit
    VNDLimit --> VNDDone
    Split -->|"USD"| USD
    USD --> USDLimit
    USDLimit --> USDDone`;
